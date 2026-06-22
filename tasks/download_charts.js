/**
 * SCRIPT DE AUTOMAÇÃO PARA CONSOLE DO NAVEGADOR
 * 
 * Este script deve ser colado no console do desenvolvedor (F12) 
 * logado no site https://charts.spotify.com/
 * 
 * Ele baixa todos os CSVs semanais do Brasil de 2018 até 2025,
 * consolida-os em memória e faz o download de um único arquivo ZIP.
 */

(async () => {
    console.log("🚀 Inicializando automação de extração de charts...");

    // 1. Carregar JSZip dinamicamente do CDN
    if (typeof JSZip === "undefined") {
        console.log("📦 Carregando biblioteca JSZip para compactação...");
        await new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
        console.log("✅ JSZip carregado com sucesso!");
    }

    // 2. Gerar as datas de todas as quintas-feiras de 2018 até o final de 2025
    function getWeeklyDates(startStr, endStr) {
        const dates = [];
        let current = new Date(startStr);
        const end = new Date(endStr);
        
        while (current <= end) {
            dates.push(current.toISOString().split("T")[0]);
            current.setDate(current.getDate() + 7);
        }
        return dates;
    }

    // A primeira quinta-feira de 2018 é 2018-01-11
    const dates = getWeeklyDates("2018-01-11", "2025-12-25");
    console.log(`📅 Total de semanas a processar: ${dates.length}`);

    const zip = new JSZip();
    const csvFolder = zip.folder("charts");
    const concurrencyLimit = 3; // Limite de iframes simultâneos para evitar sobrecarga ou bloqueio
    let completedCount = 0;

    // 3. Função para processar uma data individual usando um iframe
    async function processDate(date) {
        return new Promise((resolve) => {
            const iframe = document.createElement("iframe");
            iframe.style.display = "none";
            iframe.src = `https://charts.spotify.com/charts/view/regional-br-weekly/${date}`;
            document.body.appendChild(iframe);

            let isResolved = false;

            const cleanupAndResolve = () => {
                if (isResolved) return;
                isResolved = true;
                document.body.removeChild(iframe);
                completedCount++;
                console.log(`⏳ Progresso: ${completedCount}/${dates.length} (${((completedCount/dates.length)*100).toFixed(1)}%)`);
                resolve();
            };

            iframe.onload = () => {
                const iframeWindow = iframe.contentWindow;
                const iframeDoc = iframe.contentDocument || iframeWindow.document;

                // Interceptar a criação de blobs de download no iframe
                const originalCreateObjectURL = iframeWindow.URL.createObjectURL;
                iframeWindow.URL.createObjectURL = function (blob) {
                    const reader = new FileReader();
                    reader.onload = function () {
                        const csvContent = reader.result;
                        csvFolder.file(`regional-br-weekly-${date}.csv`, csvContent);
                        console.log(`✅ CSV capturado via Blob para a data: ${date}`);
                        cleanupAndResolve();
                    };
                    reader.readAsText(blob);
                    return originalCreateObjectURL.call(iframeWindow.URL, blob);
                };

                // Polling para achar o botão e clicar
                let attempts = 0;
                const interval = setInterval(() => {
                    attempts++;
                    
                    // Procurar o botão de download
                    const btn = iframeDoc.querySelector('button[aria-labelledby="csv_download"]') || 
                                iframeDoc.querySelector('button[data-encore-id="buttonTertiary"]');
                    
                    if (btn) {
                        clearInterval(interval);
                        
                        // Clicar no botão
                        btn.click();
                        
                        // Timeout de segurança caso a captura por Blob falhe (tentar ler o DOM diretamente)
                        setTimeout(() => {
                            if (!isResolved) {
                                console.log(`⚠️ Blob não capturado para ${date}, tentando ler o DOM da tabela...`);
                                try {
                                    const rows = iframeDoc.querySelectorAll('tr, [role="row"]');
                                    if (rows.length > 5) {
                                        let tableCsv = "position,track_name,artist_name,streams,id\n";
                                        rows.forEach((row, index) => {
                                            if (index === 0) return; // pular cabeçalho
                                            const cells = row.querySelectorAll('td, [role="gridcell"]');
                                            if (cells.length >= 3) {
                                                const rank = cells[0].textContent.trim();
                                                const trackName = cells[1].querySelector('a')?.textContent.trim() || "";
                                                const artistName = cells[1].querySelector('span')?.textContent.trim() || "";
                                                const streams = cells[2].textContent.replace(/[^0-9]/g, "").trim();
                                                const trackLink = cells[1].querySelector('a')?.href || "";
                                                const trackId = trackLink.split("/track/")[1]?.split("?")[0] || "";
                                                if (rank && trackName) {
                                                    tableCsv += `"${rank}","${trackName.replace(/"/g, '""')}","${artistName.replace(/"/g, '""')}","${streams}","${trackId}"\n`;
                                                }
                                            }
                                        });
                                        csvFolder.file(`regional-br-weekly-${date}.csv`, tableCsv);
                                        console.log(`✅ CSV gerado via DOM para a data: ${date}`);
                                    }
                                } catch (e) {
                                    console.error(`❌ Erro ao ler DOM para ${date}:`, e);
                                }
                                cleanupAndResolve();
                            }
                        }, 5000);
                    }

                    if (attempts > 30) { // 15 segundos esperando o botão
                        clearInterval(interval);
                        console.log(`❌ Timeout esperando botão de download na data: ${date}`);
                        cleanupAndResolve();
                    }
                }, 500);
            };
        });
    }

    // 4. Executar a fila com limite de concorrência
    const queue = [...dates];
    const workers = Array(concurrencyLimit).fill(null).map(async () => {
        while (queue.length > 0) {
            const date = queue.shift();
            await processDate(date);
        }
    });

    await Promise.all(workers);

    // 5. Gerar o ZIP e fazer download
    console.log("🗜️ Compactando todos os CSVs em um único arquivo ZIP...");
    const content = await zip.generateAsync({ type: "blob" });
    
    const link = document.createElement("a");
    link.href = URL.createObjectURL(content);
    link.download = "spotify_charts_br_weekly_2018_2025.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log("🎉 Download do ZIP concluído! Coloque este arquivo na pasta 'data-raw/charts/' e descompacte os arquivos lá dentro.");
})();

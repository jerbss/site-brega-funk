/**
 * SCRIPT DE AUTOMAÇÃO DE HITS AUSENTES - CONSOLE NAVEGADOR
 * 
 * Copie este código e cole no console de charts.spotify.com para baixar apenas
 * as semanas que falharam no download inicial.
 */

(async () => {
    console.log("🚀 Inicializando extrator de semanas ausentes...");

    // 1. Carregar JSZip se não estiver no escopo
    if (typeof JSZip === "undefined") {
        console.log("📦 Carregando biblioteca JSZip...");
        await new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
        console.log("✅ JSZip carregado com sucesso!");
    }

    // 2. Lista exata de semanas ausentes reportadas
    const missingDates = [
        // 2018
        "2018-11-01", "2018-11-08", "2018-11-15", "2018-11-22", "2018-11-29", "2018-12-06",
        // 2020
        "2020-11-26", "2020-12-03",
        // 2022
        "2022-01-13", "2022-01-20",
        // 2023
        "2023-04-13", "2023-04-20",
        // 2024
        "2024-11-14", "2024-11-21", "2024-11-28", "2024-12-05",
        // 2025
        "2025-09-11", "2025-09-18"
    ];

    console.log(`📅 Total de semanas ausentes a tentar obter: ${missingDates.length}`);

    const zip = new JSZip();
    const csvFolder = zip.folder("charts");
    
    // Concorrência mais baixa (2) para diminuir chances de rate limit do Spotify
    const concurrencyLimit = 2; 
    let completedCount = 0;

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
                console.log(`⏳ Progresso Faltantes: ${completedCount}/${missingDates.length} (${((completedCount/missingDates.length)*100).toFixed(1)}%)`);
                // Pequena pausa (500ms) entre iframes para respirar
                setTimeout(resolve, 500);
            };

            iframe.onload = () => {
                const iframeWindow = iframe.contentWindow;
                const iframeDoc = iframe.contentDocument || iframeWindow.document;

                // Interceptar blob no iframe
                const originalCreateObjectURL = iframeWindow.URL.createObjectURL;
                iframeWindow.URL.createObjectURL = function (blob) {
                    const reader = new FileReader();
                    reader.onload = function () {
                        const csvContent = reader.result;
                        if (csvContent && csvContent.length > 50) {
                            csvFolder.file(`regional-br-weekly-${date}.csv`, csvContent);
                            console.log(`✅ [Blob] Capturado: ${date}`);
                            cleanupAndResolve();
                        }
                    };
                    reader.readAsText(blob);
                    return originalCreateObjectURL.call(iframeWindow.URL, blob);
                };

                // Polling um pouco maior (40 tentativas = 20 segundos) caso a página carregue devagar
                let attempts = 0;
                const interval = setInterval(() => {
                    attempts++;
                    
                    const btn = iframeDoc.querySelector('button[aria-labelledby="csv_download"]') || 
                                iframeDoc.querySelector('button[data-encore-id="buttonTertiary"]');
                    
                    if (btn) {
                        clearInterval(interval);
                        btn.click();
                        
                        // Fallback DOM se o Blob demorar mais que 6s para retornar
                        setTimeout(() => {
                            if (!isResolved) {
                                console.log(`⚠️ Tentando extração por DOM para ${date}...`);
                                try {
                                    const rows = iframeDoc.querySelectorAll('tr, [role="row"]');
                                    if (rows.length > 5) {
                                        let tableCsv = "position,track_name,artist_name,streams,id\n";
                                        rows.forEach((row, index) => {
                                            if (index === 0) return;
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
                                        console.log(`✅ [DOM] Capturado: ${date}`);
                                    }
                                } catch (e) {
                                    console.error(`❌ Erro no DOM para ${date}:`, e);
                                }
                                cleanupAndResolve();
                            }
                        }, 6000);
                    }

                    if (attempts > 40) { 
                        clearInterval(interval);
                        console.log(`❌ Timeout esperando botão de download na data: ${date}`);
                        cleanupAndResolve();
                    }
                }, 500);
            };
        });
    }

    // Processar concorrentemente com fila
    const queue = [...missingDates];
    const workers = Array(concurrencyLimit).fill(null).map(async () => {
        while (queue.length > 0) {
            const date = queue.shift();
            await processDate(date);
        }
    });

    await Promise.all(workers);

    // Gerar e baixar arquivo ZIP consolidando os faltantes
    console.log("🗜️ Compactando CSVs faltantes...");
    const content = await zip.generateAsync({ type: "blob" });
    
    const link = document.createElement("a");
    link.href = URL.createObjectURL(content);
    link.download = "spotify_charts_br_weekly_missing.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log("🎉 Concluído! Descompacte o conteúdo deste ZIP de faltantes dentro da pasta 'C:\\site-brega-funk\\data-raw\\charts'.");
})();

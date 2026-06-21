# Planejamento e Conclusões: Site Estilo "The Pudding" (Brega Funk)

Neste documento, registraremos os detalhes da nossa discussão, as especificações do site que iremos construir e as conclusões das análises de referências.

---

## 1. Visão Geral do Projeto
*   **Tema/Título:** *"Como o Brega Funk conquistou o Brasil em 15 segundos?"*
*   **Tese Principal:** O Brega Funk quebrou a hegemonia do eixo RJ-SP no Funk/Pop nacional conquistando o país "de baixo para cima". O fator crucial é a velocidade de entrega do refrão: entre 10s e 15s (ideal para a era TikTok/Reels e retenção de 30s no Spotify), comparado aos ~50s do Pop tradicional.
*   **Público-alvo:** Jovens universitários (18 a 29 anos).
*   **Tom da Redação:** Linguagem acessível, fluida, direta e livre de jargões acadêmicos.
*   **Identidade Visual (A estética "Neon Recife Vibes"):** Fundo escuro (cinza-grafite profundo/preto) com elementos de alto contraste em amarelo neon, rosa choque e ciano. Inspirado em paredões de som, iluminação de festas e no dinamismo das ruas do Recife.
*   **Stack Tecnológica:** Svelte + Vite (iniciado do zero em `/site`).

## 2. Estrutura Narrativa ("Estilo The Pudding")
Adotamos uma abordagem híbrida de **Gancho Visual + Pirâmide Invertida com Scrollytelling**:
1.  **O Gancho (The Hook) - "O Teste dos 30 Segundos":**
    *   O usuário vê um botão de "Play" para escutar faixas.
    *   Um cronômetro regressivo de 30 segundos inicia (referenciando a monetização do Spotify).
    *   Se o usuário der play em Pop/Funk tradicional, a música se arrasta na introdução sem refrão até o tempo limite.
    *   Se escolher Brega Funk, o refrão explode rápido (aos 10-15s), mostrando como ele ganha a atenção instantaneamente.
2.  **Contextualização (Para Leigos):** Introduzir brevemente o Brega Funk, suas origens (Recife) e sua quebra de barreiras geográficas contra o eixo RJ-SP.
3.  **A Revelação dos Dados (A Tese dos 15s):** Gráficos interativos mostrando a minutagem de entrada do refrão nas músicas e a relação com as regras de retenção das plataformas de streaming (Spotify/TikTok).
4.  **Exploração Ativa:** Área interativa onde o usuário pode interagir com os dados das músicas analisadas.
5.  **Metodologia/Conclusão:** Notas sobre como os dados foram coletados e o encerramento da história.

## 3. Estratégia de Dados
*   **Metodologia de Coleta:** Inicialmente usaremos dados fictícios (*mock data* e *lorem ipsum*) para consolidar a diagramação e o visual do site, migrando posteriormente para a curadoria manual de ~12 músicas marcantes.
*   **Músicas Candidatas:**
    *   *Brega Funk:* "Envolvimento" (MC Loma), "Tudo Ok" (Mila/JS), "Oh Juliana" (Niack), "Sentadão" (Pedro Sampaio).
    *   *Pop/Funk RJ-SP:* "Show das Poderosas" (Anitta), "Envolver" (Anitta), "Dona de Mim" (Iza), "Devagarinho" (Luísa Sonza).
*   **Metadados anotados por música:**
    *   Nome da faixa e artista.
    *   Segundo exato do início do refrão (revelação principal).
    *   Duração total da música.
    *   Link de áudio do Spotify / arquivo local curto para demonstração.

## 4. Referências e Componentes a Adaptar (`/pudding-referencias`)
*   **`heat-records-map`**: Usar a lógica do mapa para mostrar a expansão geográfica a partir do Nordeste.
*   **`genre`**: Componentes de áudio interativo (`Audio.svelte`, `Sample.svelte`).
*   **`pop-love-songs`**: Lógica de scrollytelling por etapas (`StoryStepNavigationAndText.svelte`).

---

> **Nota:** Este arquivo será atualizado continuamente à medida que definirmos o escopo e as decisões de design.

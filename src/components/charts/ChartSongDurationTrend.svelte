<script>
	import { scaleBand, scaleLinear } from "d3";
	import rawData from "$data/proporcao_musicas_curtas.json";

	let { title, subtitle, availableWidth } = $props();

	// Processar e classificar dados
	const data = rawData.map((d) => ({
		year: d.year,
		totalTracks: d.total_tracks,
		under2m30sCount: d.under_2m30s_count,
		under2m30sPct: d.under_2m30s_pct,
		under2m00sCount: d.under_2m00s_count,
		under2m00sPct: d.under_2m00s_pct
	}));

	let height = 350;
	let margin = { top: 40, right: 20, bottom: 40, left: 35 };

	let innerWidth = $derived(availableWidth - margin.left - margin.right);
	let innerHeight = height - margin.top - margin.bottom;

	// Escala X (Anos)
	let xScale = $derived(
		scaleBand()
			.domain(data.map((d) => d.year))
			.range([0, innerWidth])
			.padding(0.3)
	);

	// Escala Y (Percentual de 0 a 30% para acomodar o máximo de ~24%)
	let yScale = $derived(
		scaleLinear()
			.domain([0, 30])
			.range([innerHeight, 0])
	);

	let hoveredData = $state(null);
	let tooltipX = $state(0);
	let tooltipY = $state(0);

	function handleMousemove(event, d) {
		hoveredData = d;
		tooltipX = xScale(d.year) + xScale.bandwidth() / 2 + margin.left;
		tooltipY = yScale(d.under2m30sPct) + margin.top;
	}
</script>

<div class="chart-container" style="width: {availableWidth}px;">
	<h3 class="title">{title}</h3>
	{#if subtitle}
		<p class="subtitle">{@html subtitle}</p>
	{/if}

	<div
		class="svg-wrapper"
		role="img"
		aria-label="Gráfico de barras mostrando a proporção de músicas curtas por ano"
	>
		<svg
			width={availableWidth}
			{height}
			onmouseleave={() => (hoveredData = null)}
		>
			<g transform={`translate(${margin.left},${margin.top})`}>
				
				<!-- Linhas de Grade Verticais (Eixo Y) -->
				{#each [10, 20, 30] as tick}
					<line
						x1="0"
						x2={innerWidth}
						y1={yScale(tick)}
						y2={yScale(tick)}
						class="grid-line"
					/>
					<text
						x="-10"
						y={yScale(tick) + 4}
						class="grid-label"
						text-anchor="end"
					>
						{tick}%
					</text>
				{/each}
				
				<line
					x1="0"
					x2={innerWidth}
					y1={yScale(0)}
					y2={yScale(0)}
					class="baseline"
				/>
				<text
					x="-10"
					y={yScale(0) + 4}
					class="grid-label"
					text-anchor="end"
				>
					0%
				</text>

				<!-- Barras de Dados -->
				{#each data as d}
					{@const barWidth = xScale.bandwidth()}
					{@const barHeight30 = innerHeight - yScale(d.under2m30sPct)}
					{@const barHeight00 = innerHeight - yScale(d.under2m00sPct)}

					<g class="bar-group" class:dimmed={hoveredData && hoveredData.year !== d.year} class:active={hoveredData && hoveredData.year === d.year}>
						
						<!-- Barra Menos de 2m30s (Fundo - Verde Neon / Principal) -->
						<rect
							x={xScale(d.year)}
							y={yScale(d.under2m30sPct)}
							width={barWidth}
							height={barHeight30}
							class="bar-2m30s"
							rx="4"
						/>

						<!-- Barra Menos de 2m00s (Sobreposição - Magenta/Rosa Neon) -->
						{#if d.under2m00sPct > 0}
							<rect
								x={xScale(d.year)}
								y={yScale(d.under2m00sPct)}
								width={barWidth}
								height={barHeight00}
								class="bar-2m00s"
								rx="2"
							/>
						{/if}

						<!-- Área invisível maior para capturar o mouse facilmente -->
						<!-- svelte-ignore a11y_no_static_element_interactions -->
						<rect
							x={xScale(d.year) - 10}
							y="0"
							width={barWidth + 20}
							height={innerHeight}
							class="hit-area"
							onpointerenter={(e) => handleMousemove(e, d)}
						/>

						<!-- Rótulo de texto do Ano no topo de cada coluna -->
						<text
							x={xScale(d.year) + barWidth / 2}
							y={innerHeight + 20}
							class="axis-label"
							class:active={hoveredData && hoveredData.year === d.year}
							text-anchor="middle"
						>
							{d.year}
						</text>
					</g>
				{/each}
			</g>
		</svg>

		<!-- Tooltip premium interativo -->
		{#if hoveredData}
			<div class="tooltip" style="left: {tooltipX}px; top: {tooltipY}px;">
				<div class="tooltip-header">{hoveredData.year}</div>
				
				<div class="tooltip-row">
					<span class="dot color-2m30s"></span>
					<strong>&lt; 2m30s:</strong>
					<span>{hoveredData.under2m30sPct.toFixed(1)}%</span>
					<span class="count">({hoveredData.under2m30sCount} faixas)</span>
				</div>
				
				<div class="tooltip-row">
					<span class="dot color-2m00s"></span>
					<strong>&lt; 2m00s:</strong>
					<span>{hoveredData.under2m00sPct.toFixed(1)}%</span>
					<span class="count">({hoveredData.under2m00sCount} faixas)</span>
				</div>

				<div class="tooltip-footer">
					Base total: {hoveredData.totalTracks.toLocaleString("pt-BR")} hits avaliados
				</div>
			</div>
		{/if}
	</div>

	<!-- Legenda inferior estilizada -->
	<div class="legend">
		<div class="legend-item">
			<span class="legend-box color-2m30s"></span>
			<span>Músicas &lt; 2min 30s</span>
		</div>
		<div class="legend-item">
			<span class="legend-box color-2m00s"></span>
			<span>Músicas &lt; 2min (Ultra-curtas)</span>
		</div>
	</div>
</div>

<style>
	.chart-container {
		position: relative;
		font-family: "Syne", sans-serif;
		margin: 0 auto;
	}

	.title {
		font-size: 1.5rem;
		font-weight: 800;
		color: var(--color-link-hover, #ccff00);
		margin: 0 0 0.5rem 0;
		text-transform: uppercase;
		letter-spacing: -0.5px;
		text-align: center;
	}

	.subtitle {
		font-family: var(--sans, sans-serif);
		font-size: var(--14px, 14px);
		color: rgba(255, 255, 255, 0.7);
		text-align: center;
		margin-bottom: 1.5rem;
		line-height: 1.4;
	}

	.svg-wrapper {
		position: relative;
		margin: 0 auto;
	}

	svg {
		display: block;
		overflow: visible;
	}

	.grid-line {
		stroke: rgba(255, 255, 255, 0.08);
		stroke-width: 1;
	}

	.baseline {
		stroke: rgba(255, 255, 255, 0.3);
		stroke-width: 1.5;
	}

	.grid-label {
		fill: rgba(255, 255, 255, 0.4);
		font-family: var(--mono, monospace);
		font-size: 10px;
	}

	.axis-label {
		fill: rgba(255, 255, 255, 0.6);
		font-family: var(--mono, monospace);
		font-size: 12px;
		transition: fill 0.2s ease;
	}

	.axis-label.active {
		fill: var(--color-link-hover, #ccff00);
		font-weight: bold;
	}

	/* Estilos de Barras */
	.bar-2m30s {
		fill: var(--color-link-hover, #ccff00); /* Amarelo-limão neon padrão do site */
		transition: fill 0.2s ease, opacity 0.2s ease;
	}

	.bar-2m00s {
		fill: #ff007f; /* Rosa neon vibrante para destacar ultra-curtas */
		transition: fill 0.2s ease, opacity 0.2s ease;
	}

	.bar-group {
		transition: opacity 0.2s ease;
		opacity: 1;
	}

	.bar-group.dimmed {
		opacity: 0.3;
	}

	.bar-group.active {
		opacity: 1;
	}

	.hit-area {
		fill: transparent;
		cursor: pointer;
	}

	/* Tooltip */
	.tooltip {
		position: absolute;
		pointer-events: none;
		background: rgba(13, 13, 13, 0.96);
		border: 2px solid rgba(255, 255, 255, 0.15);
		padding: 10px 14px;
		border-radius: 8px;
		color: #fff;
		font-family: var(--sans, sans-serif);
		font-size: 13px;
		transform: translate(-50%, -115%);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
		z-index: 20;
		min-width: 220px;
		text-align: left;
		transition:
			top 0.1s ease,
			left 0.1s ease;
	}

	.tooltip-header {
		font-family: "Syne", sans-serif;
		font-size: 14px;
		font-weight: 800;
		color: var(--color-link-hover, #ccff00);
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		padding-bottom: 6px;
		margin-bottom: 8px;
		text-transform: uppercase;
	}

	.tooltip-row {
		display: flex;
		align-items: center;
		margin-bottom: 4px;
		gap: 6px;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		display: inline-block;
	}

	.color-2m30s {
		background-color: var(--color-link-hover, #ccff00);
	}

	.color-2m00s {
		background-color: #ff007f;
	}

	.count {
		color: rgba(255, 255, 255, 0.4);
		font-size: 11px;
		margin-left: auto;
		font-family: var(--mono, monospace);
	}

	.tooltip-footer {
		font-size: 10px;
		color: rgba(255, 255, 255, 0.4);
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		padding-top: 6px;
		margin-top: 8px;
		font-family: var(--mono, monospace);
	}

	/* Legenda */
	.legend {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-top: 1.5rem;
		font-family: var(--sans, sans-serif);
		font-size: 12px;
	}

	.legend-item {
		display: flex;
		align-items: center;
		gap: 6px;
		color: rgba(255, 255, 255, 0.7);
	}

	.legend-box {
		width: 12px;
		height: 12px;
		border-radius: 3px;
	}
</style>

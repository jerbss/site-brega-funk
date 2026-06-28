<script>
	import { scaleTime, scaleLinear, line, curveMonotoneX, extent } from "d3";
	import dataCsv from "$data/envolvimento_chart.csv";

	let { title, subtitle, availableWidth } = $props();

	// Parse CSV data
	const data = dataCsv
		.map((d) => {
			// Ajustando timezone off-by-one para data local
			const [year, month, day] = d.week.split("-");
			return {
				date: new Date(year, month - 1, day),
				rank: +d.rank,
				streams: +d.streams,
				weeks_on_chart: +d.weeks_on_chart,
				peak_rank: +d.peak_rank
			};
		})
		.sort((a, b) => a.date - b.date);

	let height = 350;
	let margin = { top: 40, right: 30, bottom: 40, left: 10 };

	let innerWidth = $derived(Math.max(0, availableWidth - margin.left - margin.right));
	let innerHeight = height - margin.top - margin.bottom;

	let xScale = $derived(
		scaleTime()
			.domain(extent(data, (d) => d.date))
			.range([0, innerWidth])
	);

	let yScale = $derived(
		scaleLinear()
			.domain([200, 1]) // Rank invertido
			.range([innerHeight, 0])
	);

	let pathGenerator = $derived(
		line()
			.x((d) => xScale(d.date))
			.y((d) => yScale(d.rank))
			.curve(curveMonotoneX)
	);

	let hoveredData = $state(null);
	let tooltipX = $state(0);
	let tooltipY = $state(0);

	function formatStreams(val) {
		if (val >= 1000000) return (val / 1000000).toFixed(1) + "M";
		if (val >= 1000) return (val / 1000).toFixed(0) + "k";
		return val;
	}

	function handleMousemove(event, d) {
		hoveredData = d;
		tooltipX = xScale(d.date) + margin.left;
		tooltipY = yScale(d.rank) + margin.top;
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
		aria-label="Gráfico de linha mostrando a trajetória da música"
		onmouseleave={() => (hoveredData = null)}
	>
		<svg
			width={availableWidth}
			{height}
		>
			<g transform={`translate(${margin.left},${margin.top})`}>
				<!-- Linhas de Base (Grid) -->
				<line
					x1="0"
					x2={innerWidth}
					y1={yScale(1)}
					y2={yScale(1)}
					class="grid-line peak-line"
				/>
				<text
					x={innerWidth}
					y={yScale(1) - 6}
					class="grid-label"
					text-anchor="end">#1</text
				>

				<line
					x1="0"
					x2={innerWidth}
					y1={yScale(100)}
					y2={yScale(100)}
					class="grid-line"
				/>
				<text
					x={innerWidth}
					y={yScale(100) - 6}
					class="grid-label"
					text-anchor="end">#100</text
				>

				<line
					x1="0"
					x2={innerWidth}
					y1={yScale(200)}
					y2={yScale(200)}
					class="grid-line"
				/>
				<text
					x={innerWidth}
					y={yScale(200) - 6}
					class="grid-label"
					text-anchor="end">#200</text
				>

				<!-- Linha Principal -->
				<path d={pathGenerator(data)} class="line-path" />

				<!-- Pontos Transparentes para interatividade fácil (Hitbox maior) -->
				{#each data as d}
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<circle
						cx={xScale(d.date)}
						cy={yScale(d.rank)}
						r="12"
						class="hit-area"
						onpointerenter={(e) => handleMousemove(e, d)}
					/>
				{/each}

				<!-- Pontos Visíveis -->
				{#each data as d}
					<circle
						cx={xScale(d.date)}
						cy={yScale(d.rank)}
						r={hoveredData === d ? 5 : 3}
						class="data-point"
						class:active={hoveredData === d}
					/>
				{/each}
			</g>
		</svg>

		<!-- Tooltip -->
		{#if hoveredData}
			<div class="tooltip" style="left: {tooltipX}px; top: {tooltipY}px;">
				<div class="tooltip-date">
					{hoveredData.date.toLocaleDateString("pt-BR")}
				</div>
				<div class="tooltip-metric">
					<strong>Rank:</strong> #{hoveredData.rank}
				</div>
				<div class="tooltip-metric">
					<strong>Streams:</strong>
					{formatStreams(hoveredData.streams)}
				</div>
				{#if hoveredData.rank === 2}
					<div class="tooltip-note">
						Atrás apenas de "Vai Malandra" (Anitta)
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	.chart-container {
		position: relative;
		font-family: "Syne", sans-serif;
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
	.line-path {
		fill: none;
		stroke: var(--color-link-hover, #ccff00);
		stroke-width: 3;
		stroke-linecap: round;
		stroke-linejoin: round;
		filter: drop-shadow(0 0 8px rgba(204, 255, 0, 0.4));
	}
	.grid-line {
		stroke: rgba(255, 255, 255, 0.15);
		stroke-dasharray: 4 4;
	}
	.peak-line {
		stroke: rgba(255, 255, 255, 0.4);
		stroke-dasharray: none;
	}
	.grid-label {
		fill: rgba(255, 255, 255, 0.6);
		font-family: var(--mono, monospace);
		font-size: 10px;
	}
	.data-point {
		fill: var(--text-bg, #0d0d0d);
		stroke: var(--color-link-hover, #ccff00);
		stroke-width: 2;
		pointer-events: none;
		transition:
			r 0.2s ease,
			fill 0.2s ease;
	}
	.data-point.active {
		fill: var(--color-link-hover, #ccff00);
	}
	.hit-area {
		fill: transparent;
		cursor: pointer;
	}
	.tooltip {
		position: absolute;
		pointer-events: none;
		background: rgba(13, 13, 13, 0.95);
		border: 1px solid var(--border, #333);
		padding: 8px 12px;
		border-radius: 6px;
		color: #fff;
		font-family: var(--sans, sans-serif);
		font-size: 13px;
		transform: translate(-50%, -120%);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
		z-index: 10;
		min-width: 120px;
		text-align: left;
		transition:
			top 0.1s ease,
			left 0.1s ease;
	}
	.tooltip-date {
		font-family: var(--mono, monospace);
		font-size: 11px;
		color: rgba(255, 255, 255, 0.5);
		margin-bottom: 6px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		padding-bottom: 4px;
	}
	.tooltip-metric {
		margin-bottom: 2px;
	}
	.tooltip-metric strong {
		color: var(--color-link-hover, #ccff00);
		font-weight: 600;
	}
	.tooltip-note {
		margin-top: 6px;
		font-size: 11px;
		color: rgba(255, 255, 255, 0.75);
		border-top: 1px solid rgba(255, 255, 255, 0.15);
		padding-top: 6px;
		font-style: italic;
	}
</style>

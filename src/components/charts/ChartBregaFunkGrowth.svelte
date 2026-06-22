<script>
	import {
		scaleTime,
		scaleLinear,
		area,
		line,
		curveMonotoneX,
		extent,
		max
	} from "d3";
	import dataJson from "$data/google_trends_timeline.json";

	let { title, subtitle, availableWidth } = $props();

	// Parse data
	const data = dataJson.map((d) => ({
		date: new Date(d.date + "-15"), // middle of the month
		interest: d.interest
	}));

	let height = 320;
	let margin = { top: 30, right: 20, bottom: 50, left: 40 };

	let innerWidth = $derived(availableWidth - margin.left - margin.right);
	let innerHeight = height - margin.top - margin.bottom;

	let xScale = $derived(
		scaleTime()
			.domain(extent(data, (d) => d.date))
			.range([0, innerWidth])
	);

	let yScale = $derived(
		scaleLinear()
			.domain([0, max(data, (d) => d.interest) * 1.1])
			.range([innerHeight, 0])
	);

	let areaGenerator = $derived(
		area()
			.x((d) => xScale(d.date))
			.y0(innerHeight)
			.y1((d) => yScale(d.interest))
			.curve(curveMonotoneX)
	);

	let lineGenerator = $derived(
		line()
			.x((d) => xScale(d.date))
			.y((d) => yScale(d.interest))
			.curve(curveMonotoneX)
	);

	// Key annotations
	const annotations = [
		{
			date: new Date("2018-02-15"),
			label: "Envolvimento",
			align: "center"
		},
		{
			date: new Date("2019-09-15"),
			label: "Surtada",
			align: "center"
		},
		{
			date: new Date("2019-12-15"),
			label: "Sentadão",
			align: "center"
		},
		{
			date: new Date("2020-02-15"),
			label: "Tudo OK",
			align: "center"
		},
		{
			date: new Date("2025-12-15"),
			label: "Passinho do Jamal",
			align: "right"
		}
	];

	// Year ticks
	let yearTicks = $derived(
		[2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026].map(
			(y) => new Date(`${y}-07-01`)
		)
	);

	// Y-axis ticks
	let yTicks = $derived(yScale.ticks ? yScale.ticks(4) : [0, 25, 50, 75, 100]);

	function getMonthContext(date) {
		const y = date.getFullYear();
		const m = date.getMonth() + 1;
		if (y === 2018 && m === 2) {
			return 'MC Loma lança "Envolvimento", mas o público busca pelo nome da música, não pelo termo genérico do ritmo.';
		}
		if (y === 2019 && m === 9) {
			return 'Dadá Boladão estoura com o remix de "Surtada", iniciando a ascensão nacional das buscas.';
		}
		if (y === 2019 && m === 12) {
			return 'Lançada no fim de novembro, "Sentadão" (Pedro Sampaio) escala os charts e puxa o pico histórico de buscas (100).';
		}
		if (y === 2020 && m === 2) {
			return 'Também lançada em novembro, "Tudo OK" (Thiaguinho MT) viraliza meses depois e atinge o #1 do Spotify no Carnaval.';
		}
		if (y === 2025 && m === 12) {
			return 'O ritmo volta a crescer no fim do ano puxado pela viralização global do "Passinho do Jamal" ao som de "Toma Botada".';
		}
		return null;
	}

	let hoveredData = $state(null);
	let tooltipX = $state(0);
	let tooltipY = $state(0);

	function handlePointerMove(event) {
		const svgEl = event.currentTarget;
		const rect = svgEl.getBoundingClientRect();
		const mx = event.clientX - rect.left - margin.left;

		// Find closest data point
		let closest = data[0];
		let minDist = Infinity;
		for (const d of data) {
			const dist = Math.abs(xScale(d.date) - mx);
			if (dist < minDist) {
				minDist = dist;
				closest = d;
			}
		}

		hoveredData = closest;
		tooltipX = xScale(closest.date) + margin.left;
		tooltipY = yScale(closest.interest) + margin.top;
	}

	const monthNames = [
		"Jan",
		"Fev",
		"Mar",
		"Abr",
		"Mai",
		"Jun",
		"Jul",
		"Ago",
		"Set",
		"Out",
		"Nov",
		"Dez"
	];
</script>

<div class="chart-container" style="width: {availableWidth}px;">
	<h3 class="title">{title}</h3>
	{#if subtitle}
		<p class="subtitle">{@html subtitle}</p>
	{/if}

	<div
		class="svg-wrapper"
		role="img"
		aria-label="Gráfico de interesse pelo Brega Funk ao longo do tempo"
	>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<svg
			width={availableWidth}
			{height}
			onpointermove={handlePointerMove}
			onpointerleave={() => (hoveredData = null)}
		>
			<defs>
				<linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
					<stop
						offset="0%"
						stop-color="var(--accent, #ff007f)"
						stop-opacity="0.4"
					/>
					<stop
						offset="100%"
						stop-color="var(--accent, #ff007f)"
						stop-opacity="0.02"
					/>
				</linearGradient>
			</defs>

			<g transform={`translate(${margin.left},${margin.top})`}>
				<!-- Y axis grid -->
				{#each yTicks as tick}
					<line
						x1="0"
						x2={innerWidth}
						y1={yScale(tick)}
						y2={yScale(tick)}
						class="grid-line"
					/>
					<text
						x="-6"
						y={yScale(tick)}
						class="y-label"
						dy="0.35em"
						text-anchor="end">{tick}</text
					>
				{/each}

				<!-- X axis labels -->
				{#each yearTicks as tick}
					<text
						x={xScale(tick)}
						y={innerHeight + 24}
						class="x-label"
						text-anchor="middle">{tick.getFullYear()}</text
					>
				{/each}

				<!-- Area fill -->
				<path d={areaGenerator(data)} fill="url(#area-gradient)" />

				<!-- Line -->
				<path d={lineGenerator(data)} class="trend-line" />

				<!-- Annotations -->
				{#each annotations as ann}
					{@const ax = xScale(ann.date)}
					{@const matchedPoint = data.find(
						(d) => Math.abs(d.date - ann.date) < 30 * 24 * 60 * 60 * 1000
					)}
					{@const ay = matchedPoint
						? yScale(matchedPoint.interest)
						: yScale(50)}
					<line
						x1={ax}
						x2={ax}
						y1={ay - 8}
						y2={innerHeight}
						class="annotation-line"
					/>
					<circle cx={ax} cy={ay} r="4" class="annotation-dot" />
					{#each ann.label.split("\n") as textLine, i}
						<text
							x={ax +
								(ann.align === "left" ? 6 : ann.align === "right" ? -6 : 0)}
							y={ay - 16 - (ann.label.split("\n").length - 1 - i) * 14}
							class="annotation-text"
							text-anchor={ann.align === "left"
								? "start"
								: ann.align === "right"
									? "end"
									: "middle"}>{textLine}</text
						>
					{/each}
				{/each}

				<!-- Hover indicator -->
				{#if hoveredData}
					<line
						x1={xScale(hoveredData.date)}
						x2={xScale(hoveredData.date)}
						y1={0}
						y2={innerHeight}
						class="hover-line"
					/>
					<circle
						cx={xScale(hoveredData.date)}
						cy={yScale(hoveredData.interest)}
						r="5"
						class="hover-dot"
					/>
				{/if}
			</g>
		</svg>

		<!-- Tooltip -->
		{#if hoveredData}
			{@const context = getMonthContext(hoveredData.date)}
			<div class="tooltip" style="left: {tooltipX}px; top: {tooltipY}px;">
				<div class="tooltip-date">
					{monthNames[hoveredData.date.getMonth()]}
					{hoveredData.date.getFullYear()}
				</div>
				<div class="tooltip-metric">
					<strong>Índice:</strong>
					{hoveredData.interest} / 100
				</div>
				{#if context}
					<div class="tooltip-context">{context}</div>
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
		color: var(--accent, #ff007f);
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
		cursor: crosshair;
	}
	.grid-line {
		stroke: rgba(255, 255, 255, 0.08);
		stroke-dasharray: 3 3;
	}
	.y-label {
		fill: rgba(255, 255, 255, 0.4);
		font-family: var(--mono, monospace);
		font-size: 10px;
	}
	.x-label {
		fill: rgba(255, 255, 255, 0.5);
		font-family: var(--mono, monospace);
		font-size: 11px;
	}
	.trend-line {
		fill: none;
		stroke: var(--border, #ff007f);
		stroke-width: 2.5;
		stroke-linecap: round;
		stroke-linejoin: round;
		filter: drop-shadow(0 0 6px rgba(255, 0, 127, 0.5));
	}
	.annotation-line {
		stroke: rgba(255, 255, 255, 0.2);
		stroke-dasharray: 3 2;
		stroke-width: 1;
	}
	.annotation-dot {
		fill: var(--border, #ff007f);
		filter: drop-shadow(0 0 4px rgba(255, 0, 127, 0.6));
	}
	.annotation-text {
		fill: rgba(255, 255, 255, 0.85);
		font-family: var(--mono, monospace);
		font-size: 10px;
		font-weight: 600;
	}
	.hover-line {
		stroke: rgba(255, 255, 255, 0.15);
		stroke-width: 1;
	}
	.hover-dot {
		fill: var(--border, #ff007f);
		stroke: #fff;
		stroke-width: 2;
		filter: drop-shadow(0 0 6px rgba(255, 0, 127, 0.6));
	}
	.tooltip {
		position: absolute;
		pointer-events: none;
		background: rgba(13, 13, 13, 0.95);
		border: 1px solid var(--border, #ff007f);
		padding: 10px 14px;
		border-radius: 6px;
		color: #fff;
		font-family: var(--sans, sans-serif);
		font-size: 13px;
		transform: translate(-50%, -130%);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
		z-index: 10;
		min-width: 220px;
		max-width: 300px;
		text-align: left;
		transition:
			top 0.1s ease,
			left 0.1s ease;
	}
	.tooltip-date {
		font-family: var(--mono, monospace);
		font-size: 11px;
		color: rgba(255, 255, 255, 0.5);
		margin-bottom: 4px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		padding-bottom: 4px;
	}
	.tooltip-metric strong {
		color: var(--border, #ff007f);
		font-weight: 600;
	}
	.tooltip-context {
		margin-top: 6px;
		font-size: 11px;
		color: rgba(255, 255, 255, 0.85);
		border-top: 1px solid rgba(255, 255, 255, 0.15);
		padding-top: 6px;
		line-height: 1.35;
		max-width: 280px;
	}
</style>

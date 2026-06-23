<script>
	import { scaleLinear } from "d3";
	import statesData from "$data/google_trends_states.json";
	import brazil from "@svg-maps/brazil";
	import { svgPathBbox } from "svg-path-bbox";

	let { title, subtitle, availableWidth } = $props();

	const brazilMap = brazil.default || brazil;
	const mapWidth = 613;
	const mapHeight = 639;

	const statePaths = {};
	const stateCentroids = {};

	brazilMap.locations.forEach((loc) => {
		const code = loc.id.toUpperCase();
		statePaths[code] = loc.path;
		const [x0, y0, x1, y1] = svgPathBbox(loc.path);
		stateCentroids[code] = { x: (x0 + x1) / 2, y: (y0 + y1) / 2 };
	});

	// Build lookup
	const interestByState = {};
	statesData.forEach((s) => {
		interestByState[s.state] = s;
	});

	// Color scale: pink tones matching section 2 theme
	const colorScale = scaleLinear()
		.domain([0, 30, 60, 100])
		.range([
			"rgba(255, 0, 127, 0.08)",
			"rgba(255, 0, 127, 0.25)",
			"rgba(255, 0, 127, 0.55)",
			"rgba(255, 0, 127, 0.95)"
		]);

	let hoveredState = $state(null);
	let tooltipX = $state(0);
	let tooltipY = $state(0);

	function handleHover(event, stateCode) {
		hoveredState = stateCode;
		const svgEl = event.currentTarget.closest("svg");
		const rect = svgEl.getBoundingClientRect();
		const cx = stateCentroids[stateCode];
		const scale = availableWidth / mapWidth;
		tooltipX = cx.x * scale;
		tooltipY = cx.y * scale;
	}

	// Legend stops
	const legendStops = [
		{ value: 0, label: "0" },
		{ value: 25, label: "25" },
		{ value: 50, label: "50" },
		{ value: 75, label: "75" },
		{ value: 100, label: "100" }
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
		aria-label="Mapa do Brasil com interesse por brega funk por estado"
	>
		<svg
			viewBox={brazilMap.viewBox || "0 0 613 639"}
			width={availableWidth}
			height={availableWidth * (mapHeight / mapWidth)}
			onpointerleave={() => (hoveredState = null)}
		>
			<!-- State shapes -->
			{#each Object.entries(statePaths) as [code, pathD]}
				{@const interest = interestByState[code]?.interest ?? 0}
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<path
					d={pathD}
					fill={colorScale(interest)}
					stroke="rgba(255, 255, 255, 0.2)"
					stroke-width="1"
					class="state-path"
					class:hovered={hoveredState === code}
					onpointerenter={(e) => handleHover(e, code)}
				/>
			{/each}




		</svg>

		<!-- Legend -->
		<div class="legend">
			<span class="legend-label">Menor interesse</span>
			<div class="legend-bar">
				{#each legendStops as stop}
					<div
						class="legend-stop"
						style="background: {colorScale(stop.value)}"
					></div>
				{/each}
			</div>
			<span class="legend-label">Maior interesse</span>
		</div>

		<!-- Tooltip -->
		{#if hoveredState && interestByState[hoveredState]}
			{@const stateInfo = interestByState[hoveredState]}
			<div class="tooltip" style="left: {tooltipX}px; top: {tooltipY}px;">
				<div class="tooltip-state">{stateInfo.name} ({stateInfo.state})</div>
				<div class="tooltip-metric">
					<strong>Interesse:</strong>
					{stateInfo.interest}
				</div>
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
		color: var(--color-link-hover, #ff007f);
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
		margin-bottom: 1rem;
		line-height: 1.4;
	}
	.svg-wrapper {
		position: relative;
		margin: 0 auto;
	}
	.state-path {
		cursor: pointer;
		transition:
			fill 0.2s ease,
			stroke 0.2s ease,
			filter 0.2s ease;
	}
	.state-path.hovered {
		stroke: #fff;
		stroke-width: 2;
		filter: drop-shadow(0 0 8px rgba(255, 0, 127, 0.6));
	}


	.legend {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		margin-top: 1rem;
	}
	.legend-label {
		font-family: var(--mono, monospace);
		font-size: 10px;
		color: rgba(255, 255, 255, 0.5);
	}
	.legend-bar {
		display: flex;
		border-radius: 3px;
		overflow: hidden;
	}
	.legend-stop {
		width: 28px;
		height: 12px;
	}
	.tooltip {
		position: absolute;
		pointer-events: none;
		background: rgba(13, 13, 13, 0.95);
		border: 1px solid var(--border, #ff007f);
		padding: 8px 12px;
		border-radius: 6px;
		color: #fff;
		font-family: var(--sans, sans-serif);
		font-size: 13px;
		transform: translate(-50%, -140%);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
		z-index: 10;
		min-width: 120px;
		text-align: left;
	}
	.tooltip-state {
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
</style>

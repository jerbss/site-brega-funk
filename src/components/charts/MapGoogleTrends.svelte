<script>
	import { scaleLinear } from "d3";
	import statesTimelineData from "$data/google_trends_states_timeline.json";
	import brazil from "@svg-maps/brazil";
	import { svgPathBbox } from "svg-path-bbox";
	import { onDestroy } from "svelte";

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

	// Reactive states
	let currentYear = $state(2018);
	let isPlaying = $state(false);
	let intervalId = null;

	const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

	function togglePlay() {
		isPlaying = !isPlaying;
		if (isPlaying) {
			if (currentYear === 2025) currentYear = 2018;
			intervalId = setInterval(() => {
				if (currentYear < 2025) {
					currentYear += 1;
				} else {
					isPlaying = false;
					if (intervalId) {
						clearInterval(intervalId);
						intervalId = null;
					}
				}
			}, 900);
		} else {
			if (intervalId) {
				clearInterval(intervalId);
				intervalId = null;
			}
		}
	}

	onDestroy(() => {
		if (intervalId) clearInterval(intervalId);
	});

	// Aggregate monthly timeline data into yearly averages (self-normalized)
	const interestByState = $derived.by(() => {
		const yearlyAverages = {};
		const yearCount = {};

		const stateNames = {
			AC: "Acre", AL: "Alagoas", AP: "Amapá", AM: "Amazonas", BA: "Bahia",
			CE: "Ceará", DF: "Distrito Federal", ES: "Espírito Santo", GO: "Goiás",
			MA: "Maranhão", MT: "Mato Grosso", MS: "Mato Grosso do Sul", MG: "Minas Gerais",
			PA: "Pará", PB: "Paraíba", PR: "Paraná", PE: "Pernambuco", PI: "Piauí",
			RJ: "Rio de Janeiro", RN: "Rio Grande do Norte", RS: "Rio Grande do Sul",
			RO: "Rondônia", RR: "Roraima", SC: "Santa Catarina", SP: "São Paulo",
			SE: "Sergipe", TO: "Tocantins"
		};

		statesTimelineData.forEach((item) => {
			const year = parseInt(item.date.split("-")[0], 10);
			if (year !== currentYear) return;

			Object.entries(item.states).forEach(([state, val]) => {
				if (!yearlyAverages[state]) {
					yearlyAverages[state] = 0;
					yearCount[state] = 0;
				}
				yearlyAverages[state] += val;
				yearCount[state] += 1;
			});
		});

		const lookup = {};
		Object.entries(yearlyAverages).forEach(([state, sum]) => {
			const count = yearCount[state] || 1;
			lookup[state] = {
				state,
				name: stateNames[state] || state,
				interest: Math.round(sum / count)
			};
		});

		return lookup;
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

	<!-- Year and Control Slider -->
	<div class="controls-container">
		<button
			class="play-btn"
			onclick={togglePlay}
			aria-label={isPlaying ? "Pausar" : "Reproduzir"}
		>
			{#if isPlaying}
				<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
					<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
				</svg>
			{:else}
				<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
					<path d="M8 5v14l11-7z" />
				</svg>
			{/if}
		</button>

		<div class="slider-wrapper">
			<input
				type="range"
				min="2018"
				max="2025"
				step="1"
				bind:value={currentYear}
				class="year-slider"
			/>
		</div>

		<div class="years-selector">
			{#each years as year}
				<button
					class="year-btn"
					class:active={currentYear === year}
					onclick={() => {
						currentYear = year;
						isPlaying = false;
						if (intervalId) {
							clearInterval(intervalId);
							intervalId = null;
						}
					}}
				>
					{year}
				</button>
			{/each}
		</div>
	</div>

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
			<span class="legend-label">Longe do pico local</span>
			<div class="legend-bar">
				{#each legendStops as stop}
					<div
						class="legend-stop"
						style="background: {colorScale(stop.value)}"
					></div>
				{/each}
			</div>
			<span class="legend-label">Pico de interesse local</span>
		</div>

		<!-- Tooltip -->
		{#if hoveredState && interestByState[hoveredState]}
			{@const stateInfo = interestByState[hoveredState]}
			<div class="tooltip" style="left: {tooltipX}px; top: {tooltipY}px;">
				<div class="tooltip-state">{stateInfo.name} ({stateInfo.state})</div>
				<div class="tooltip-metric">
					<strong>Interesse de busca:</strong>
					{stateInfo.interest}
				</div>
			</div>
		{/if}
	</div>

	<div class="map-context-footer">
		<p><strong>Queda após 2021:</strong> O termo "brega funk" saturou como novidade nas buscas. O ritmo se fundiu ao pop mainstream e os ouvintes passaram a procurar por artistas específicos e hits, em vez do gênero musical genérico.</p>
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
		color: var(--heading-color, #ff007f);
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
	.controls-container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 16px;
		margin: 0 auto 1.5rem auto;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 12px;
		padding: 12px 18px;
		max-width: 550px;
	}
	.play-btn {
		background: var(--heading-color, #ff007f);
		border: none;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		cursor: pointer;
		transition:
			transform 0.2s ease,
			background-color 0.2s ease,
			box-shadow 0.2s ease;
		box-shadow: 0 0 10px rgba(255, 0, 127, 0.4);
	}
	.play-btn:hover {
		transform: scale(1.05);
		background: #ff3399;
		box-shadow: 0 0 15px rgba(255, 0, 127, 0.6);
	}
	.play-btn:active {
		transform: scale(0.95);
	}
	.slider-wrapper {
		flex: 1;
		min-width: 200px;
		display: flex;
		align-items: center;
	}
	.year-slider {
		width: 100%;
		-webkit-appearance: none;
		background: rgba(255, 255, 255, 0.1);
		height: 6px;
		border-radius: 3px;
		outline: none;
	}
	.year-slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: var(--heading-color, #ff007f);
		cursor: pointer;
		box-shadow: 0 0 8px rgba(255, 0, 127, 0.6);
		transition: transform 0.1s ease;
	}
	.year-slider::-webkit-slider-thumb:hover {
		transform: scale(1.2);
	}
	.years-selector {
		display: flex;
		gap: 6px;
		justify-content: center;
		width: 100%;
	}
	.year-btn {
		background: transparent;
		border: 1px solid rgba(255, 255, 255, 0.1);
		color: rgba(255, 255, 255, 0.7);
		padding: 4px 10px;
		border-radius: 6px;
		font-family: var(--mono, monospace);
		font-size: 12px;
		cursor: pointer;
		transition: all 0.2s ease;
	}
	.year-btn:hover {
		background: rgba(255, 255, 255, 0.05);
		color: white;
		border-color: rgba(255, 255, 255, 0.3);
	}
	.year-btn.active {
		background: rgba(255, 0, 127, 0.15);
		color: var(--heading-color, #ff007f);
		border-color: var(--heading-color, #ff007f);
		font-weight: bold;
		box-shadow: 0 0 8px rgba(255, 0, 127, 0.2);
	}
	.svg-wrapper {
		position: relative;
		margin: 0 auto;
	}
	.state-path {
		cursor: pointer;
		transition:
			fill 0.3s ease,
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
	.map-context-footer {
		margin-top: 2rem;
		padding: 1.5rem;
		background: rgba(255, 0, 127, 0.05);
		border-left: 3px solid var(--border, #ff007f);
		border-radius: 0 8px 8px 0;
		font-family: var(--sans, sans-serif);
		font-size: 14px;
		color: rgba(255, 255, 255, 0.8);
		line-height: 1.6;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		text-align: left;
	}
	.map-context-footer p {
		margin: 0 0 1rem 0;
	}
	.map-context-footer p:last-child {
		margin-bottom: 0;
	}
	.map-context-footer strong {
		color: #fff;
		font-weight: 600;
	}
</style>

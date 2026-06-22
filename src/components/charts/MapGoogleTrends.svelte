<script>
	import { scaleLinear } from 'd3';
	import statesData from '$data/google_trends_states.json';

	let { title, subtitle, availableWidth } = $props();

	// Simplified SVG paths for Brazilian states (viewport: 0 0 600 560)
	// Derived from official IBGE cartographic base
	const statePaths = {
		AC: "M42,280 L70,275 75,290 55,300 40,295Z",
		AM: "M65,195 L160,180 180,210 175,260 130,270 70,275 50,250 55,210Z",
		RR: "M120,130 L155,120 165,150 155,175 130,170 115,155Z",
		AP: "M230,140 L260,125 275,145 265,170 240,165Z",
		PA: "M175,165 L280,150 310,180 305,220 270,240 220,245 180,230 165,200Z",
		MA: "M310,180 L355,170 370,195 355,225 320,230 305,220Z",
		TO: "M290,245 L325,235 335,275 320,310 295,305 280,275Z",
		PI: "M355,195 L390,185 400,215 390,250 365,255 355,225Z",
		CE: "M400,180 L430,175 435,200 420,215 400,215Z",
		RN: "M435,190 L460,185 458,205 440,208Z",
		PB: "M430,210 L460,208 458,222 430,225Z",
		PE: "M415,225 L460,222 458,240 420,243Z",
		AL: "M430,243 L458,240 456,258 435,255Z",
		SE: "M425,258 L445,255 443,270 428,268Z",
		BA: "M355,255 L425,248 440,270 430,330 390,355 350,340 340,300Z",
		MG: "M340,330 L400,325 420,355 410,400 370,410 340,395 330,360Z",
		ES: "M420,355 L445,350 445,380 425,385Z",
		RJ: "M400,395 L435,385 440,405 415,410Z",
		SP: "M330,385 L395,380 400,410 370,425 335,415Z",
		PR: "M315,415 L365,410 370,440 335,445 310,435Z",
		SC: "M330,445 L365,440 365,465 335,465Z",
		RS: "M310,460 L355,455 360,500 330,515 305,495Z",
		MS: "M270,365 L325,355 335,400 310,415 275,405Z",
		MT: "M210,270 L290,260 305,310 290,360 240,370 210,340Z",
		GO: "M295,310 L340,305 345,350 325,375 290,370Z",
		DF: "M325,330 L340,328 342,340 327,342Z",
		RO: "M130,290 L200,275 210,310 190,340 145,335Z"
	};

	// State centroids for labels (approximated)
	const stateCentroids = {
		AC: { x: 55, y: 288 }, AM: { x: 120, y: 230 }, RR: { x: 140, y: 148 },
		AP: { x: 252, y: 148 }, PA: { x: 235, y: 200 }, MA: { x: 338, y: 200 },
		TO: { x: 305, y: 275 }, PI: { x: 375, y: 222 }, CE: { x: 418, y: 195 },
		RN: { x: 448, y: 198 }, PB: { x: 445, y: 216 }, PE: { x: 440, y: 232 },
		AL: { x: 445, y: 249 }, SE: { x: 436, y: 264 }, BA: { x: 385, y: 300 },
		MG: { x: 370, y: 368 }, ES: { x: 435, y: 368 }, RJ: { x: 420, y: 400 },
		SP: { x: 360, y: 400 }, PR: { x: 340, y: 428 }, SC: { x: 348, y: 455 },
		RS: { x: 332, y: 482 }, MS: { x: 298, y: 385 }, MT: { x: 250, y: 310 },
		GO: { x: 318, y: 340 }, DF: { x: 334, y: 336 }, RO: { x: 168, y: 310 }
	};

	// Build lookup
	const interestByState = {};
	statesData.forEach(s => {
		interestByState[s.state] = s;
	});

	// Color scale: pink tones matching section 2 theme
	const colorScale = scaleLinear()
		.domain([0, 30, 60, 100])
		.range(['rgba(255, 0, 127, 0.08)', 'rgba(255, 0, 127, 0.25)', 'rgba(255, 0, 127, 0.55)', 'rgba(255, 0, 127, 0.95)']);

	let hoveredState = $state(null);
	let tooltipX = $state(0);
	let tooltipY = $state(0);

	function handleHover(event, stateCode) {
		hoveredState = stateCode;
		const svgEl = event.currentTarget.closest('svg');
		const rect = svgEl.getBoundingClientRect();
		const cx = stateCentroids[stateCode];
		const scaleX = availableWidth / 600;
		const scaleY = (availableWidth * 0.93) / 560;
		tooltipX = cx.x * scaleX;
		tooltipY = cx.y * scaleY;
	}

	// Legend stops
	const legendStops = [
		{ value: 0, label: '0' },
		{ value: 25, label: '25' },
		{ value: 50, label: '50' },
		{ value: 75, label: '75' },
		{ value: 100, label: '100' }
	];
</script>

<div class="chart-container" style="width: {availableWidth}px;">
	<h3 class="title">{title}</h3>
	{#if subtitle}
		<p class="subtitle">{@html subtitle}</p>
	{/if}

	<div class="svg-wrapper" role="img" aria-label="Mapa do Brasil com interesse por brega funk por estado">
		<svg
			viewBox="0 0 600 560"
			width={availableWidth}
			height={availableWidth * 0.93}
			onpointerleave={() => hoveredState = null}
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

			<!-- State labels (only for larger/important states) -->
			{#each Object.entries(stateCentroids) as [code, pos]}
				{@const interest = interestByState[code]?.interest ?? 0}
				{@const isLarge = ['AM', 'PA', 'MT', 'BA', 'MG', 'SP', 'PE', 'CE', 'MA', 'GO', 'MS', 'RS', 'PR', 'TO', 'PI', 'RO'].includes(code)}
				{#if isLarge}
					<text
						x={pos.x}
						y={pos.y}
						class="state-label"
						text-anchor="middle"
						dy="0.35em"
						fill={interest > 50 ? '#fff' : 'rgba(255,255,255,0.6)'}
					>{code}</text>
				{/if}
			{/each}

			<!-- PE highlight ring -->
			<circle cx={stateCentroids['PE'].x} cy={stateCentroids['PE'].y} r="18" class="pe-highlight" />
		</svg>

		<!-- Legend -->
		<div class="legend">
			<span class="legend-label">Menor interesse</span>
			<div class="legend-bar">
				{#each legendStops as stop}
					<div class="legend-stop" style="background: {colorScale(stop.value)}"></div>
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
					<strong>Interesse:</strong> {stateInfo.interest}
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
		transition: fill 0.2s ease, stroke 0.2s ease, filter 0.2s ease;
	}
	.state-path.hovered {
		stroke: #fff;
		stroke-width: 2;
		filter: drop-shadow(0 0 8px rgba(255, 0, 127, 0.6));
	}
	.state-label {
		font-family: var(--mono, monospace);
		font-size: 9px;
		pointer-events: none;
		font-weight: 600;
	}
	.pe-highlight {
		fill: none;
		stroke: #ff007f;
		stroke-width: 2;
		stroke-dasharray: 4 3;
		animation: pulse-ring 2s infinite ease-in-out;
	}
	@keyframes pulse-ring {
		0%, 100% { opacity: 0.4; r: 18; }
		50% { opacity: 1; r: 22; }
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

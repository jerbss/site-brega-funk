<script>
	import { onMount } from "svelte";

	export let stepIndex = 0; // Controlled by scrollytelling steps

	// Center positions on our 800x600 SVG canvas
	const cities = [
		{ id: "recife", name: "Recife", x: 640, y: 220, type: "origin", labelPos: "right" },
		{ id: "fortaleza", name: "Fortaleza", x: 580, y: 130, type: "northeast", labelPos: "top" },
		{ id: "salvador", name: "Salvador", x: 590, y: 310, type: "northeast", labelPos: "right" },
		{ id: "rio", name: "Rio de Janeiro", x: 500, y: 480, type: "southeast", labelPos: "right" },
		{ id: "sp", name: "São Paulo", x: 440, y: 500, type: "southeast", labelPos: "left" },
		{ id: "brasilia", name: "Brasília", x: 430, y: 350, type: "central", labelPos: "top" },
		{ id: "poa", name: "Porto Alegre", x: 330, y: 580, type: "south", labelPos: "bottom" }
	];

	// Generates dot grid mapping of Brazil
	let bgDots = [];
	function generateBrazilDots() {
		const dots = [];
		// Brazil bounding box: x (100 to 700), y (50 to 600)
		// We use a math function or mask to keep only dots inside Brazil shape
		for (let x = 100; x <= 700; x += 25) {
			for (let y = 50; y <= 600; y += 25) {
				if (isInsideBrazil(x, y)) {
					dots.push({ x, y });
				}
			}
		}
		bgDots = dots;
	}

	// Simple geometric approximation of Brazil shape for the grid mask
	function isInsideBrazil(x, y) {
		// Normalize coordinates to 0-1 scale
		const nx = x / 800;
		const ny = y / 600;

		// Approximate polygons of Brazil
		// North: top left to central
		if (ny < 0.25 && nx < 0.35) return false; // cut top left
		if (ny < 0.1) return false; // cut top
		if (nx < 0.15 && ny < 0.6) return false; // cut left
		if (nx > 0.8) return false; // cut right
		if (ny > 0.95) return false; // cut bottom
		
		// Southern narrowing
		if (ny > 0.6 && nx < (ny - 0.2)) return false; // cut bottom left diagonal
		if (ny > 0.6 && nx > (1.1 - ny)) return false; // cut bottom right diagonal
		
		// Northeast bulge
		if (nx > 0.65 && ny > 0.55) return false; // cut below salvador
		
		return true;
	}

	onMount(() => {
		generateBrazilDots();
	});

	// Flow activation depending on the stepIndex
	// stepIndex 0: Intro (Recife only)
	// stepIndex 1: Hook Test
	// stepIndex 2: Expansion Northeast
	// stepIndex 3: Expansion Southeast / National
	// stepIndex 4: Conclusion
	$: activeCities = cities.filter(city => {
		if (stepIndex <= 1) return city.type === "origin";
		if (stepIndex === 2) return city.type === "origin" || city.type === "northeast";
		return true; // All cities
	});

	$: flowLines = cities.filter(city => city.id !== "recife").map(city => {
		const recife = cities.find(c => c.id === "recife");
		let isVisible = false;

		if (stepIndex === 2 && city.type === "northeast") {
			isVisible = true;
		} else if (stepIndex >= 3) {
			isVisible = true;
		}

		return {
			id: `flow-${city.id}`,
			x1: recife.x,
			y1: recife.y,
			x2: city.x,
			y2: city.y,
			visible: isVisible,
			type: city.type
		};
	});
</script>

<div class="map-container">
	<div class="header">
		<h4 class="title">Mapa da Expansão do Brega Funk</h4>
		<p class="subtitle">A difusão do ritmo "de baixo para cima", partindo do Recife</p>
	</div>

	<div class="svg-wrapper">
		<svg viewBox="0 0 800 620" class="brazil-svg">
			<!-- Brazil Dot Matrix Background -->
			<g class="bg-grid">
				{#each bgDots as dot}
					<circle cx={dot.x} cy={dot.y} r="2.5" class="grid-dot" />
				{/each}
			</g>

			<!-- Flow Lines -->
			<g class="flow-lines">
				{#each flowLines as line}
					{#if line.visible}
						<path 
							d="M {line.x1} {line.y1} Q {(line.x1 + line.x2)/2 - 30} {(line.y1 + line.y2)/2 - 30} {line.x2} {line.y2}" 
							class="flow-path {line.type}"
						/>
					{/if}
				{/each}
			</g>

			<!-- City Nodes -->
			<g class="nodes">
				{#each activeCities as city}
					<!-- Concentric Glow Pulse (especially for Recife) -->
					{#if city.type === "origin"}
						<circle cx={city.x} cy={city.y} r="18" class="pulse-ring" />
						<circle cx={city.x} cy={city.y} r="10" class="node-glow origin-glow" />
					{:else if city.type === "northeast"}
						<circle cx={city.x} cy={city.y} r="8" class="node-glow ne-glow" />
					{:else}
						<circle cx={city.x} cy={city.y} r="8" class="node-glow nat-glow" />
					{/if}

					<!-- Core Dot -->
					<circle cx={city.x} cy={city.y} r="5" class="node-core" class:origin-core={city.type === "origin"} />

					<!-- Text Labels -->
					<text 
						x={city.x + (city.labelPos === 'right' ? 12 : city.labelPos === 'left' ? -12 : 0)} 
						y={city.y + (city.labelPos === 'bottom' ? 16 : city.labelPos === 'top' ? -12 : 4)} 
						text-anchor={city.labelPos === 'right' ? 'start' : city.labelPos === 'left' ? 'end' : 'middle'}
						class="node-label"
						class:origin-label={city.type === "origin"}
					>
						{city.name}
					</text>
				{/each}
			</g>
		</svg>
	</div>

	<!-- Interactive legend depending on current stepIndex -->
	<div class="legend-panel">
		<div class="legend-item">
			<span class="indicator origin"></span>
			<span><strong>Origem:</strong> Recife (Pernambuco)</span>
		</div>
		{#if stepIndex >= 2}
			<div class="legend-item fade-in">
				<span class="indicator northeast"></span>
				<span><strong>Fase 1:</strong> Bulbo do Nordeste</span>
			</div>
		{/if}
		{#if stepIndex >= 3}
			<div class="legend-item fade-in">
				<span class="indicator national"></span>
				<span><strong>Fase 2:</strong> Invasão RJ-SP e Alcance Nacional</span>
			</div>
		{/if}
	</div>
</div>

<style>
	.map-container {
		background: var(--color-dark-surface);
		border: 2px solid var(--color-border);
		border-radius: 12px;
		padding: 20px;
		width: 100%;
		max-width: 600px;
		margin: 20px auto;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
	}

	.header {
		margin-bottom: 16px;
	}

	.title {
		margin: 0;
		color: var(--color-primary);
		font-family: var(--sans);
		font-size: var(--18px);
	}

	.subtitle {
		margin: 4px 0 0 0;
		font-size: var(--12px);
		opacity: 0.6;
	}

	.svg-wrapper {
		width: 100%;
		background: rgba(0, 0, 0, 0.3);
		border-radius: 8px;
		padding: 10px;
	}

	.brazil-svg {
		width: 100%;
		height: auto;
		display: block;
	}

	.grid-dot {
		fill: rgba(255, 255, 255, 0.1);
		transition: fill 0.5s ease;
	}

	/* Glow/Pulse Animations */
	.pulse-ring {
		fill: none;
		stroke: var(--color-neon-yellow);
		stroke-width: 1.5px;
		opacity: 0.8;
		animation: pulseRing 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
		transform-origin: center;
	}

	@keyframes pulseRing {
		0% { transform: scale(0.3); opacity: 0.8; }
		100% { transform: scale(1.3); opacity: 0; }
	}

	.node-glow {
		fill: none;
		stroke-width: 3px;
		opacity: 0.5;
	}

	.origin-glow {
		stroke: var(--color-neon-yellow);
		filter: drop-shadow(0 0 5px var(--color-neon-yellow));
	}

	.ne-glow {
		stroke: var(--color-neon-pink);
		filter: drop-shadow(0 0 4px var(--color-neon-pink));
	}

	.nat-glow {
		stroke: var(--color-neon-cyan);
		filter: drop-shadow(0 0 4px var(--color-neon-cyan));
	}

	.node-core {
		fill: #ffffff;
	}

	.origin-core {
		fill: var(--color-neon-yellow);
	}

	.node-label {
		fill: #ffffff;
		font-family: var(--sans);
		font-size: 11px;
		font-weight: 500;
		opacity: 0.9;
		pointer-events: none;
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
	}

	.origin-label {
		fill: var(--color-neon-yellow);
		font-weight: bold;
	}

	/* Flow lines styling */
	.flow-path {
		fill: none;
		stroke-linecap: round;
		stroke-dasharray: 6, 4;
		stroke-width: 2px;
		animation: dash 1.5s linear infinite;
	}

	.flow-path.northeast {
		stroke: var(--color-neon-pink);
	}

	.flow-path.southeast,
	.flow-path.central,
	.flow-path.south {
		stroke: var(--color-neon-cyan);
	}

	@keyframes dash {
		to {
			stroke-dashoffset: -20;
		}
	}

	.legend-panel {
		margin-top: 16px;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding-top: 12px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.legend-item {
		display: flex;
		align-items: center;
		font-size: var(--12px);
		color: var(--color-fg);
	}

	.indicator {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		margin-right: 8px;
		display: inline-block;
	}

	.indicator.origin {
		background: var(--color-neon-yellow);
		box-shadow: 0 0 5px var(--color-neon-yellow);
	}

	.indicator.northeast {
		background: var(--color-neon-pink);
		box-shadow: 0 0 5px var(--color-neon-pink);
	}

	.indicator.national {
		background: var(--color-neon-cyan);
		box-shadow: 0 0 5px var(--color-neon-cyan);
	}

	.fade-in {
		animation: fadeIn 0.4s forwards;
	}

	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(4px); }
		to { opacity: 1; transform: translateY(0); }
	}
</style>

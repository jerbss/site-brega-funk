<script>
	import songsData from "../data/songs.json";

	// Scale settings
	const maxSeconds = 70; // 0 to 70 seconds scale
	let width = 600;
	const height = 400;
	const padding = { top: 40, right: 30, bottom: 50, left: 150 };

	let hoveredSong = null;
	let tooltipX = 0;
	let tooltipY = 0;

	// Responsive size handling
	$: innerWidth = width - padding.left - padding.right;
	$: innerHeight = height - padding.top - padding.bottom;

	// Scale function
	function getX(seconds) {
		return padding.left + (seconds / maxSeconds) * innerWidth;
	}

	function handleMouseEnter(song, event, index) {
		hoveredSong = song;
		const rect = event.currentTarget.getBoundingClientRect();
		// Position tooltip above the hovered node
		tooltipX = getX(song.chorus_start_seconds);
		tooltipY = padding.top + (index * (innerHeight / songsData.length)) - 10;
	}

	function handleMouseLeave() {
		hoveredSong = null;
	}
</script>

<div class="timeline-container" bind:clientWidth={width}>
	<div class="header">
		<h4 class="title">Quando o Refrão Começa?</h4>
		<p class="subtitle">Comparação do segundo exato de entrada do refrão por gênero musical</p>
	</div>

	<div class="chart-wrapper">
		<svg {width} {height} class="chart-svg">
			<!-- Grid Lines -->
			{#each [0, 15, 30, 45, 60] as gridValue}
				<line 
					x1={getX(gridValue)} 
					y1={padding.top} 
					x2={getX(gridValue)} 
					y2={height - padding.bottom} 
					class="grid-line"
				/>
				<text 
					x={getX(gridValue)} 
					y={height - padding.bottom + 18} 
					text-anchor="middle" 
					class="axis-label"
				>
					{gridValue}s
				</text>
			{/each}

			<!-- Vertical Limit Lines / Thresholds -->
			<!-- 15s TikTok Limit -->
			<line 
				x1={getX(15)} 
				y1={padding.top - 15} 
				x2={getX(15)} 
				y2={height - padding.bottom} 
				class="threshold-line tiktok-line"
			/>
			<text 
				x={getX(15)} 
				y={padding.top - 20} 
				text-anchor="middle" 
				class="threshold-text tiktok-text"
			>
				Limite TikTok/Reels (15s)
			</text>

			<!-- 30s Spotify Monetization -->
			<line 
				x1={getX(30)} 
				y1={padding.top - 15} 
				x2={getX(30)} 
				y2={height - padding.bottom} 
				class="threshold-line spotify-line"
			/>
			<text 
				x={getX(30)} 
				y={padding.top - 20} 
				text-anchor="middle" 
				class="threshold-text spotify-text"
			>
				Monetização Spotify (30s)
			</text>

			<!-- Songs Data Rows -->
			{#each songsData as song, i}
				<!-- Row background hover effect -->
				<rect 
					x={padding.left - 10} 
					y={padding.top + (i * (innerHeight / songsData.length)) - 12} 
					width={innerWidth + 20} 
					height="24" 
					class="row-hover"
				/>

				<!-- Song labels on the left -->
				<text 
					x={padding.left - 20} 
					y={padding.top + (i * (innerHeight / songsData.length)) + 4} 
					text-anchor="end" 
					class="song-label"
					class:highlight={hoveredSong?.id === song.id}
				>
					{song.title}
				</text>

				<!-- Lead lines from name to node -->
				<line 
					x1={padding.left - 10} 
					y1={padding.top + (i * (innerHeight / songsData.length))} 
					x2={getX(song.chorus_start_seconds)} 
					y2={padding.top + (i * (innerHeight / songsData.length))} 
					class="lead-line"
				/>

				<!-- Data Node (Glow behind first) -->
				<circle 
					cx={getX(song.chorus_start_seconds)} 
					cy={padding.top + (i * (innerHeight / songsData.length))} 
					r="9" 
					class="node-glow" 
					class:brega-glow={song.genre === "Brega Funk"}
					class:pop-glow={song.genre !== "Brega Funk"}
					class:hovered={hoveredSong?.id === song.id}
				/>
				
				<!-- Data Node Core -->
				<!-- svelte-ignore a11y-mouse-events-have-key-events -->
				<circle 
					cx={getX(song.chorus_start_seconds)} 
					cy={padding.top + (i * (innerHeight / songsData.length))} 
					r="6" 
					class="node-core"
					role="img"
					aria-label="{song.title} - {song.artist}"
					class:brega-node={song.genre === "Brega Funk"}
					class:pop-node={song.genre !== "Brega Funk"}
					on:mouseover={(e) => handleMouseEnter(song, e, i)}
					on:mouseout={handleMouseLeave}
				/>
			{/each}
		</svg>

		<!-- Interactive Tooltip Overlay -->
		{#if hoveredSong}
			<div 
				class="tooltip" 
				style:left="{tooltipX}px" 
				style:top="{tooltipY}px"
			>
				<div class="tooltip-header">
					<span class="t-title">{hoveredSong.title}</span>
					<span class="t-artist">{hoveredSong.artist}</span>
				</div>
				<div class="tooltip-body">
					<div><strong>Gênero:</strong> {hoveredSong.genre}</div>
					<div><strong>Refrão aos:</strong> <span class="t-highlight">{hoveredSong.chorus_start_seconds}s</span></div>
					<div><strong>Duração:</strong> {hoveredSong.duration_seconds}s</div>
					<div><strong>Reproduções:</strong> {hoveredSong.spotify_streams}</div>
				</div>
			</div>
		{/if}
	</div>

	<!-- Chart Legend -->
	<div class="legend">
		<div class="legend-item">
			<span class="dot brega"></span>
			<span>Brega Funk (Refrão rápido: 10s - 15s)</span>
		</div>
		<div class="legend-item">
			<span class="dot pop"></span>
			<span>Pop / Funk RJ-SP (Refrão tardio: 35s - 60s)</span>
		</div>
	</div>
</div>

<style>
	.timeline-container {
		background: var(--color-dark-surface);
		border: 2px solid var(--color-border);
		border-radius: 12px;
		padding: 20px;
		width: 100%;
		max-width: 750px;
		margin: 20px auto;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
		position: relative;
	}

	.header {
		margin-bottom: 24px;
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

	.chart-wrapper {
		position: relative;
		width: 100%;
		overflow-x: auto;
	}

	.chart-svg {
		display: block;
		overflow: visible;
	}

	/* Grid & Lines */
	.grid-line {
		stroke: rgba(255, 255, 255, 0.05);
		stroke-width: 1px;
	}

	.axis-label {
		fill: rgba(255, 255, 255, 0.5);
		font-family: var(--sans);
		font-size: 10px;
	}

	.lead-line {
		stroke: rgba(255, 255, 255, 0.05);
		stroke-width: 1px;
		stroke-dasharray: 2, 2;
	}

	/* Row Hover Effects */
	.row-hover {
		fill: transparent;
		transition: fill 0.2s ease;
	}

	.row-hover:hover {
		fill: rgba(255, 255, 255, 0.02);
	}

	.song-label {
		fill: rgba(255, 255, 255, 0.6);
		font-family: var(--sans);
		font-size: 11px;
		font-weight: 500;
		transition: fill 0.2s ease;
	}

	.song-label.highlight {
		fill: #ffffff;
		font-weight: bold;
	}

	/* Threshold Lines */
	.threshold-line {
		stroke-width: 1.5px;
		stroke-dasharray: 4, 4;
	}

	.tiktok-line {
		stroke: var(--color-neon-yellow);
	}

	.spotify-line {
		stroke: var(--color-neon-pink);
	}

	.threshold-text {
		font-family: var(--sans);
		font-size: 9px;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.tiktok-text {
		fill: var(--color-neon-yellow);
	}

	.spotify-text {
		fill: var(--color-neon-pink);
	}

	/* Node Styles */
	.node-core {
		cursor: pointer;
		transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.node-core:hover {
		transform: scale(1.5);
	}

	.brega-node {
		fill: var(--color-neon-yellow);
	}

	.pop-node {
		fill: var(--color-neon-cyan);
	}

	.node-glow {
		fill: none;
		stroke-width: 3px;
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	.node-glow.hovered {
		opacity: 0.6;
	}

	.brega-glow {
		stroke: var(--color-neon-yellow);
		filter: drop-shadow(0 0 4px var(--color-neon-yellow));
	}

	.pop-glow {
		stroke: var(--color-neon-cyan);
		filter: drop-shadow(0 0 4px var(--color-neon-cyan));
	}

	/* Tooltip */
	.tooltip {
		position: absolute;
		background: rgba(18, 19, 23, 0.95);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 6px;
		padding: 10px 14px;
		font-family: var(--sans);
		pointer-events: none;
		z-index: 100;
		transform: translate(-50%, -100%);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
		min-width: 180px;
	}

	.tooltip-header {
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		padding-bottom: 6px;
		margin-bottom: 6px;
	}

	.t-title {
		font-weight: bold;
		color: #ffffff;
		font-size: 12px;
	}

	.t-artist {
		font-size: 10px;
		opacity: 0.6;
		margin-top: 2px;
	}

	.tooltip-body {
		font-size: 10px;
		color: rgba(255, 255, 255, 0.8);
		display: flex;
		flex-direction: column;
		gap: 3px;
	}

	.t-highlight {
		color: var(--color-neon-yellow);
		font-weight: bold;
	}

	/* Legend */
	.legend {
		margin-top: 20px;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding-top: 12px;
		display: flex;
		gap: 20px;
		justify-content: center;
	}

	@media (max-width: 600px) {
		.legend {
			flex-direction: column;
			align-items: center;
			gap: 8px;
		}
	}

	.legend-item {
		display: flex;
		align-items: center;
		font-size: var(--12px);
		color: var(--color-fg);
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		margin-right: 8px;
		display: inline-block;
	}

	.dot.brega {
		background: var(--color-neon-yellow);
		box-shadow: 0 0 5px var(--color-neon-yellow);
	}

	.dot.pop {
		background: var(--color-neon-cyan);
		box-shadow: 0 0 5px var(--color-neon-cyan);
	}
</style>

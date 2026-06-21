<script>
	import { onDestroy } from "svelte";
	import songsData from "../data/songs.json";
	import { playBeat, stopBeat } from "../utils/synth.js";

	let selectedSongId = "envolvimento";
	let isPlaying = false;
	let countdown = 30; // Count down from 30s
	let elapsedSeconds = 0;
	let progressPercentage = 0;
	let timerInterval = null;
	let feedbackMessage = "";
	let hasDropped = false;

	$: selectedSong = songsData.find(s => s.id === selectedSongId);
	$: isBregaFunk = selectedSong?.genre === "Brega Funk";
	$: chorusTime = selectedSong?.chorus_start_seconds || 0;

	// Calculate marker position on a 30-second scale
	$: chorusMarkerPercent = Math.min((chorusTime / 30) * 100, 100);
	$: isChorusTimeReached = elapsedSeconds >= chorusTime;

	function selectSong(id) {
		resetTest();
		selectedSongId = id;
	}

	function togglePlay() {
		if (isPlaying) {
			pauseSong();
		} else {
			playSong();
		}
	}

	function playSong() {
		isPlaying = true;
		feedbackMessage = "Ouvindo a introdução...";
		
		// Start synthesizer
		// We pass a beat callback (which triggers roughly every 0.25s / beat)
		playBeat(
			isBregaFunk ? "brega" : "pop", 
			(beatCount) => {
				// Beat sync animations or logs if needed
			},
			hasDropped
		);

		timerInterval = setInterval(() => {
			elapsedSeconds += 1;
			countdown -= 1;
			progressPercentage = (elapsedSeconds / 30) * 100;

			// Check for Brega Funk chorus drop
			if (isBregaFunk && elapsedSeconds >= chorusTime && !hasDropped) {
				hasDropped = true;
				feedbackMessage = "🔥 BOOM! REFRÃO NO AR! Encaixou perfeito no TikTok!";
				// Restart beat with chorus lead synth enabled
				playBeat("brega", null, true);
			}

			// Check for Pop introduction fatigue
			if (!isBregaFunk && elapsedSeconds === 15) {
				feedbackMessage = "Ainda na introdução... Bateu a preguiça de esperar?";
			}

			// End of 30-second test
			if (elapsedSeconds >= 30) {
				endTest();
			}
		}, 1000);
	}

	function pauseSong() {
		isPlaying = false;
		stopBeat();
		if (timerInterval) {
			clearInterval(timerInterval);
		}
	}

	function resetTest() {
		pauseSong();
		countdown = 30;
		elapsedSeconds = 0;
		progressPercentage = 0;
		hasDropped = false;
		feedbackMessage = "Clique no Play para testar os 15 segundos da música.";
	}

	function endTest() {
		pauseSong();
		if (isBregaFunk) {
			feedbackMessage = `🎉 Sucesso! O refrão começou aos ${chorusTime}s. Você curtiu o auge da música e o Spotify contabilizou a reprodução!`;
		} else {
			feedbackMessage = `⏱️ Limite de 30s atingido! A música monetizou, mas você esperou 30s e o refrão NÃO chegou (só começaria aos ${chorusTime}s). Provavelmente teria pulado.`;
		}
	}

	onDestroy(() => {
		pauseSong();
	});
</script>

<div class="hook-test-container">
	<h3 class="title">O Teste dos 30 Segundos</h3>
	<p class="description">
		O Spotify só paga o artista se o usuário ouvir pelo menos 30 segundos. Escolha uma música e dê play para ver se você aguenta esperar até o refrão começar.
	</p>

	<!-- Song Selector Cards -->
	<div class="song-selector">
		{#each songsData.filter(s => ["envolvimento", "tudo_ok", "show_das_poderosas", "envolver"].includes(s.id)) as song}
			<button 
				class="song-card" 
				class:active={selectedSongId === song.id}
				on:click={() => selectSong(song.id)}
			>
				<div class="song-info">
					<span class="song-title">{song.title}</span>
					<span class="song-artist">{song.artist}</span>
				</div>
				<span class="genre-badge" class:brega={song.genre === "Brega Funk"}>
					{song.genre}
				</span>
			</button>
		{/each}
	</div>

	<!-- Player Section -->
	<div class="player-panel">
		<div class="timer-display">
			<span class="timer-label">Tempo restante</span>
			<span class="timer-value" class:pulse={isPlaying}>{countdown}s</span>
		</div>

		<div class="controls">
			<button class="play-btn" on:click={togglePlay}>
				{#if isPlaying}
					<span class="icon">⏸</span> Pausar
				{:else}
					<span class="icon">▶</span> Dar Play
				{/if}
			</button>
			<button class="reset-btn" on:click={resetTest}>Reiniciar</button>
		</div>

		<!-- Custom Progress Bar -->
		<div class="progress-container">
			<div class="progress-bar">
				<div class="progress-fill" style:width="{progressPercentage}%" class:brega-glow={isBregaFunk} class:pop-glow={!isBregaFunk}></div>
				
				<!-- 30s mark / Spotify monetization boundary -->
				<div class="spotify-boundary" title="Limite de monetização (30s)"></div>

				<!-- Chorus entry marker -->
				{#if chorusTime <= 30}
					<div 
						class="chorus-marker" 
						class:active={isChorusTimeReached}
						style:left="{chorusMarkerPercent}%"
						title="Entrada do Refrão ({chorusTime}s)"
					>
						<span class="marker-label">Refrão ({chorusTime}s)</span>
					</div>
				{/if}
			</div>
			<div class="progress-labels">
				<span>0s</span>
				<span class="spotify-label">Limite Monetização (30s)</span>
			</div>
		</div>

		<!-- Live Feedback Message -->
		<div class="feedback-box" class:glow-green={hasDropped} class:glow-red={!isBregaFunk && elapsedSeconds >= 15}>
			<p>{feedbackMessage}</p>
		</div>

		<!-- Comparison Details -->
		<div class="song-meta-details">
			<div class="detail-item">
				<span class="label">Origem:</span>
				<span class="val">{selectedSong?.origin_city} ({selectedSong?.year})</span>
			</div>
			<div class="detail-item">
				<span class="label">Entrada Real do Refrão:</span>
				<span class="val highlight">{selectedSong?.chorus_start_seconds} segundos</span>
			</div>
		</div>
	</div>
</div>

<style>
	.hook-test-container {
		background: var(--color-dark-surface);
		border: 2px solid var(--color-border);
		border-radius: 12px;
		padding: 24px;
		max-width: 700px;
		margin: 20px auto;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
	}

	.title {
		margin-top: 0;
		color: var(--color-primary);
		font-family: var(--sans);
		font-size: var(--24px);
		border-bottom: 2px solid var(--color-neon-cyan);
		padding-bottom: 8px;
		display: inline-block;
	}

	.description {
		font-size: var(--16px);
		color: var(--color-fg);
		margin-bottom: 20px;
		line-height: 1.5;
	}

	.song-selector {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
		margin-bottom: 24px;
	}

	@media (max-width: 600px) {
		.song-selector {
			grid-template-columns: 1fr;
		}
	}

	.song-card {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		padding: 12px;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: left;
		transition: all 0.2s ease;
		color: var(--color-fg);
	}

	.song-card:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: var(--color-neon-cyan);
	}

	.song-card.active {
		background: rgba(0, 243, 255, 0.05);
		border-color: var(--color-neon-cyan);
		box-shadow: 0 0 10px rgba(0, 243, 255, 0.2);
	}

	.song-info {
		display: flex;
		flex-direction: column;
	}

	.song-title {
		font-weight: bold;
		font-size: var(--16px);
	}

	.song-artist {
		font-size: var(--12px);
		opacity: 0.7;
		margin-top: 2px;
	}

	.genre-badge {
		font-size: 10px;
		padding: 4px 8px;
		border-radius: 12px;
		background: var(--color-neon-pink);
		color: #ffffff;
		font-weight: bold;
		white-space: nowrap;
	}

	.genre-badge.brega {
		background: var(--color-neon-yellow);
		color: #000000;
	}

	.player-panel {
		background: rgba(0, 0, 0, 0.2);
		border-radius: 8px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.timer-display {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 16px;
	}

	.timer-label {
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 1px;
		opacity: 0.6;
	}

	.timer-value {
		font-size: var(--48px);
		font-weight: bold;
		font-family: var(--mono);
		color: var(--color-neon-cyan);
	}

	.timer-value.pulse {
		animation: pulse 1s infinite alternate;
	}

	@keyframes pulse {
		from { transform: scale(1); opacity: 1; }
		to { transform: scale(1.05); opacity: 0.8; }
	}

	.controls {
		display: flex;
		gap: 12px;
		margin-bottom: 24px;
	}

	.play-btn {
		background: var(--color-neon-cyan);
		color: #000000;
		font-weight: bold;
		padding: 10px 24px;
		border-radius: 20px;
		font-size: var(--16px);
		cursor: pointer;
		border: none;
		transition: all 0.2s ease;
	}

	.play-btn:hover {
		box-shadow: 0 0 15px rgba(0, 243, 255, 0.5);
		transform: scale(1.02);
	}

	.reset-btn {
		background: transparent;
		border: 1px solid rgba(255, 255, 255, 0.3);
		color: var(--color-fg);
		padding: 10px 24px;
		border-radius: 20px;
		cursor: pointer;
		font-weight: bold;
		transition: all 0.2s ease;
	}

	.reset-btn:hover {
		border-color: var(--color-neon-pink);
		color: var(--color-neon-pink);
	}

	.progress-container {
		width: 100%;
		margin-bottom: 20px;
	}

	.progress-bar {
		height: 12px;
		background: #25262c;
		border-radius: 6px;
		width: 100%;
		position: relative;
		overflow: visible;
		border: 1px solid rgba(255, 255, 255, 0.05);
	}

	.progress-fill {
		height: 100%;
		border-radius: 6px;
		transition: width 0.1s linear;
	}

	.brega-glow {
		background: var(--color-neon-yellow);
		box-shadow: 0 0 10px var(--color-neon-yellow);
	}

	.pop-glow {
		background: var(--color-neon-pink);
		box-shadow: 0 0 10px var(--color-neon-pink);
	}

	.spotify-boundary {
		position: absolute;
		right: 0px; /* 30 seconds is the end of the bar */
		top: -4px;
		bottom: -4px;
		width: 3px;
		background: #1db954; /* Spotify green */
		border-radius: 1px;
	}

	.chorus-marker {
		position: absolute;
		top: -8px;
		bottom: -8px;
		width: 2px;
		background: #ffffff;
		transition: all 0.3s ease;
	}

	.chorus-marker::after {
		content: "";
		position: absolute;
		top: -4px;
		left: -4px;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #ffffff;
	}

	.chorus-marker.active {
		background: var(--color-neon-yellow);
	}

	.chorus-marker.active::after {
		background: var(--color-neon-yellow);
		box-shadow: 0 0 8px var(--color-neon-yellow);
	}

	.marker-label {
		position: absolute;
		top: -24px;
		transform: translateX(-50%);
		font-size: 9px;
		white-space: nowrap;
		background: rgba(0, 0, 0, 0.8);
		padding: 2px 6px;
		border-radius: 4px;
		color: #ffffff;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.progress-labels {
		display: flex;
		justify-content: space-between;
		font-size: 10px;
		margin-top: 6px;
		opacity: 0.5;
	}

	.spotify-label {
		color: #1db954;
		font-weight: bold;
	}

	.feedback-box {
		background: rgba(255, 255, 255, 0.03);
		border-radius: 8px;
		padding: 12px 16px;
		width: 100%;
		text-align: center;
		font-size: var(--16px);
		margin-bottom: 20px;
		border: 1px dashed rgba(255, 255, 255, 0.1);
		transition: all 0.3s ease;
		color: var(--color-fg);
	}

	.feedback-box.glow-green {
		border-color: var(--color-neon-yellow);
		background: rgba(243, 255, 0, 0.05);
		color: var(--color-neon-yellow);
		box-shadow: 0 0 15px rgba(243, 255, 0, 0.1);
	}

	.feedback-box.glow-red {
		border-color: var(--color-neon-pink);
		background: rgba(255, 0, 127, 0.05);
		color: var(--color-neon-pink);
		box-shadow: 0 0 15px rgba(255, 0, 127, 0.1);
	}

	.song-meta-details {
		display: flex;
		justify-content: space-around;
		width: 100%;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding-top: 16px;
	}

	.detail-item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.detail-item .label {
		font-size: 10px;
		opacity: 0.5;
		text-transform: uppercase;
	}

	.detail-item .val {
		font-size: var(--14px);
		font-weight: bold;
		margin-top: 4px;
	}

	.detail-item .val.highlight {
		color: var(--color-neon-cyan);
	}
</style>

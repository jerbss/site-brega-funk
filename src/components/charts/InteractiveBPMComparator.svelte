<script>
	import { onDestroy } from "svelte";
	import { base } from "$app/paths";
	import waveformsData from "$data/surtada_waveforms.json";

	let { title, subtitle, availableWidth } = $props();

	// Links oficiais do Spotify
	const spotifyLinks = {
		original: "https://open.spotify.com/track/61vDGoB9k3ximR5YNzjmBc",
		remix: "https://open.spotify.com/track/5CQWHZQ67gCo90gksxDj9s"
	};

	const audioPaths = {
		original: `${base}/assets/img/songs/surtada_original.mp3`,
		remix: `${base}/assets/img/songs/surtada_remix.mp3`
	};

	// Estados de reprodução independentes por faixa
	let activeVersion = $state(null); // 'original' ou 'remix' ou null
	let isPlaying = $state({ original: false, remix: false });
	let currentTime = $state({ original: 0, remix: 0 });
	let duration = $state({ original: 0, remix: 0 });

	let audioObjects = {};

	// Cores consistentes
	const colors = {
		intro: "#555555",
		chorus: "var(--color-link-hover, #ccff00)",
		verse: "#00bfff"
	};

	// Inicializa e gerencia os listeners do áudio
	function getAudio(version) {
		if (!audioObjects[version]) {
			const audio = new Audio(audioPaths[version]);

			audio.addEventListener("timeupdate", () => {
				currentTime[version] = audio.currentTime;
			});

			audio.addEventListener("durationchange", () => {
				duration[version] = audio.duration;
			});

			audio.addEventListener("ended", () => {
				isPlaying[version] = false;
				currentTime[version] = 0;
			});

			audioObjects[version] = audio;
		}
		return audioObjects[version];
	}

	// Play/Pause de um player específico
	function togglePlay(version) {
		const audio = getAudio(version);

		if (isPlaying[version]) {
			audio.pause();
			isPlaying[version] = false;
			if (activeVersion === version) activeVersion = null;
		} else {
			// Pausar o outro player se estiver tocando
			const otherVersion = version === "original" ? "remix" : "original";
			if (isPlaying[otherVersion]) {
				const otherAudio = getAudio(otherVersion);
				otherAudio.pause();
				isPlaying[otherVersion] = false;
			}

			activeVersion = version;
			audio
				.play()
				.then(() => {
					isPlaying[version] = true;
				})
				.catch((err) => {
					console.warn("Audio play blocked", err);
					isPlaying[version] = false;
					activeVersion = null;
				});
		}
	}

	// Scrubbing: salta para segundo específico
	function seekTo(version, seconds) {
		const audio = getAudio(version);
		audio.currentTime = seconds;
		currentTime[version] = seconds;
	}

	function stopAll() {
		Object.values(audioObjects).forEach((audio) => {
			audio.pause();
		});
		isPlaying = { original: false, remix: false };
		activeVersion = null;
	}

	onDestroy(() => {
		stopAll();
		Object.values(audioObjects).forEach((audio) => {
			audio.src = "";
			audio.load();
		});
	});

	// Estados derivados reativos para evitar o uso de {@const} no template
	let remixDur = $derived(duration.remix || waveformsData.remix.duration);
	let remixPct = $derived((currentTime.remix / remixDur) * 100);
	let activeRemixSec = $derived(getSectionAtTime("remix", currentTime.remix));

	let origDur = $derived(duration.original || waveformsData.original.duration);
	let origPct = $derived((currentTime.original / origDur) * 100);
	let activeOrigSec = $derived(
		getSectionAtTime("original", currentTime.original)
	);

	// Mapeia seção atual da reprodução
	function getSectionAtTime(version, seconds) {
		const struct = waveformsData[version].structure;
		return struct.find((s) => seconds >= s.start && seconds < s.end) || null;
	}

	// Mapeia a cor de cada barra da waveform baseando-se nos segundos
	function getBarColor(version, index, totalBars) {
		const fileDur = waveformsData[version].duration;
		const sec = (index / totalBars) * fileDur;
		const secData = getSectionAtTime(version, sec);
		return secData ? colors[secData.type] : "rgba(255, 255, 255, 0.2)";
	}

	function formatTime(secs) {
		if (isNaN(secs) || secs === 0) return "0:00";
		const m = Math.floor(secs / 60);
		const s = Math.floor(secs % 60);
		return `${m}:${s < 10 ? "0" : ""}${s}`;
	}
</script>

<div class="player-card" style="width: {availableWidth}px;">
	<h3 class="title">{title}</h3>
	{#if subtitle}
		<p class="subtitle">{@html subtitle}</p>
	{/if}

	<div class="players-stack">
		<!-- ========================================== -->
		<!-- 1. VERSÃO ORIGINAL                         -->
		<!-- ========================================== -->

		<div
			class="player-instance"
			class:active-playing={activeVersion === "original"}
		>
			<div class="instance-header">
				<div class="title-meta">
					<span class="badge badge-original"
						>Versão Original (Calibre 2.1 & OIK)</span
					>
					<span class="bpm-tag">BPM: 82</span>
				</div>
				<a
					href={spotifyLinks.original}
					target="_blank"
					rel="noopener noreferrer"
					class="spotify-link"
					title="Ouvir no Spotify"
				>
					<svg viewBox="0 0 24 24" class="sp-icon"
						><path
							d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.58 14.42c-.2.32-.61.42-.93.22-2.5-1.53-5.65-1.88-9.35-1.03-.36.08-.73-.14-.81-.5-.08-.36.14-.73.5-.81 4.05-.92 7.55-.53 10.37 1.2.32.2.42.61.22.92zm1.22-2.73c-.25.41-.78.54-1.19.29-2.86-1.76-7.23-2.27-10.61-1.24-.46.14-.94-.12-1.08-.58-.14-.46.12-.94.58-1.08 3.86-1.17 8.68-.6 12 1.44.42.25.55.79.3 1.17zm.1-2.91C14.37 8.52 8.74 8.33 5.48 9.32c-.5.15-1.03-.13-1.18-.63-.15-.5.13-1.03.63-1.18 3.75-1.14 9.95-.92 14.1 1.55.45.27.6.85.33 1.3-.27.45-.85.6-1.3.33z"
						/></svg
					>
					Spotify
				</a>
			</div>

			<div class="player-body">
				<!-- Meta: Seção e Tempo -->
				<div class="meta-row">
					<div class="now-playing-info">
						<button
							class="play-btn-circle"
							onclick={() => togglePlay("original")}
							aria-label={isPlaying.original
								? "Pausar Original"
								: "Tocar Original"}
						>
							{#if isPlaying.original}
								<svg viewBox="0 0 24 24"
									><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg
								>
							{:else}
								<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
							{/if}
						</button>

						{#if activeOrigSec}
							<span
								class="structure-tag"
								style="--badge-color: {colors[activeOrigSec.type]}"
							>
								{activeOrigSec.name}
							</span>
						{/if}
					</div>

					<div class="time-display">
						<span class="current" class:active-color={isPlaying.original}
							>{formatTime(currentTime.original)}</span
						>
						<span class="divider">/</span>
						<span class="total">{formatTime(origDur)}</span>
					</div>
				</div>

				<!-- Waveform Colorida -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="waveform-scrubber"
					onclick={(e) => {
						const rect = e.currentTarget.getBoundingClientRect();
						const clickPct = (e.clientX - rect.left) / rect.width;
						seekTo("original", clickPct * origDur);
					}}
				>
					<div class="playhead" style="left: {origPct}%"></div>
					<div class="waveform-bars">
						{#each waveformsData.original.waveform as rms, i}
							{@const totalBars = waveformsData.original.waveform.length}
							{@const progressPct = (i / totalBars) * 100}
							{@const barColor = getBarColor("original", i, totalBars)}
							<div
								class="wave-bar"
								class:played={origPct >= progressPct}
								style="height: {Math.max(
									12,
									rms * 100
								)}%; --bar-color: {barColor};"
							></div>
						{/each}
					</div>
				</div>

				<!-- Linha do Tempo Proporcional de Atalhos (Alinhados) -->
				<div class="section-shortcuts">
					<div class="shortcut-timeline">
						{#each waveformsData.original.structure as sec}
							{@const startPct = (sec.start / origDur) * 100}
							{@const widthPct = ((sec.end - sec.start) / origDur) * 100}
							<button
								class="shortcut-btn"
								class:active-section={activeVersion === "original" &&
									currentTime.original >= sec.start &&
									currentTime.original < sec.end}
								style="left: {startPct}%; width: calc({widthPct}% - 2px); --section-color: {colors[
									sec.type
								]}"
								onclick={(e) => {
									e.stopPropagation();
									seekTo("original", sec.start);
									if (!isPlaying.original) togglePlay("original");
								}}
							>
								<span class="shortcut-text">{sec.name}</span>
								<span class="shortcut-time">{formatTime(sec.start)}</span>
							</button>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- ========================================== -->
		<!-- 2. REMIX BREGA FUNK                        -->
		<!-- ========================================== -->

		<div
			class="player-instance"
			class:active-playing={activeVersion === "remix"}
		>
			<div class="instance-header">
				<div class="title-meta">
					<span class="badge badge-remix"
						>Versão Remix (Dadá Boladão & Tati Zaqui)</span
					>
					<span class="bpm-tag">BPM: 154</span>
				</div>
				<a
					href={spotifyLinks.remix}
					target="_blank"
					rel="noopener noreferrer"
					class="spotify-link"
					title="Ouvir no Spotify"
				>
					<svg viewBox="0 0 24 24" class="sp-icon"
						><path
							d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.58 14.42c-.2.32-.61.42-.93.22-2.5-1.53-5.65-1.88-9.35-1.03-.36.08-.73-.14-.81-.5-.08-.36.14-.73.5-.81 4.05-.92 7.55-.53 10.37 1.2.32.2.42.61.22.92zm1.22-2.73c-.25.41-.78.54-1.19.29-2.86-1.76-7.23-2.27-10.61-1.24-.46.14-.94-.12-1.08-.58-.14-.46.12-.94.58-1.08 3.86-1.17 8.68-.6 12 1.44.42.25.55.79.3 1.17zm.1-2.91C14.37 8.52 8.74 8.33 5.48 9.32c-.5.15-1.03-.13-1.18-.63-.15-.5.13-1.03.63-1.18 3.75-1.14 9.95-.92 14.1 1.55.45.27.6.85.33 1.3-.27.45-.85.6-1.3.33z"
						/></svg
					>
					Spotify
				</a>
			</div>

			<div class="player-body">
				<!-- Meta: Seção e Tempo -->
				<div class="meta-row">
					<div class="now-playing-info">
						<button
							class="play-btn-circle"
							onclick={() => togglePlay("remix")}
							aria-label={isPlaying.remix ? "Pausar Remix" : "Tocar Remix"}
						>
							{#if isPlaying.remix}
								<svg viewBox="0 0 24 24"
									><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg
								>
							{:else}
								<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
							{/if}
						</button>

						{#if activeRemixSec}
							<span
								class="structure-tag"
								style="--badge-color: {colors[activeRemixSec.type]}"
							>
								{activeRemixSec.name}
							</span>
						{/if}
					</div>

					<div class="time-display">
						<span class="current" class:active-color={isPlaying.remix}
							>{formatTime(currentTime.remix)}</span
						>
						<span class="divider">/</span>
						<span class="total">{formatTime(remixDur)}</span>
					</div>
				</div>

				<!-- Waveform Colorida -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="waveform-scrubber"
					onclick={(e) => {
						const rect = e.currentTarget.getBoundingClientRect();
						const clickPct = (e.clientX - rect.left) / rect.width;
						seekTo("remix", clickPct * remixDur);
					}}
				>
					<div class="playhead" style="left: {remixPct}%"></div>
					<div class="waveform-bars">
						{#each waveformsData.remix.waveform as rms, i}
							{@const totalBars = waveformsData.remix.waveform.length}
							{@const progressPct = (i / totalBars) * 100}
							{@const barColor = getBarColor("remix", i, totalBars)}
							<div
								class="wave-bar"
								class:played={remixPct >= progressPct}
								style="height: {Math.max(
									12,
									rms * 100
								)}%; --bar-color: {barColor};"
							></div>
						{/each}
					</div>
				</div>

				<!-- Linha do Tempo Proporcional de Atalhos (Alinhados) -->
				<div class="section-shortcuts">
					<div class="shortcut-timeline">
						{#each waveformsData.remix.structure as sec}
							{@const startPct = (sec.start / remixDur) * 100}
							{@const widthPct = ((sec.end - sec.start) / remixDur) * 100}
							<button
								class="shortcut-btn"
								class:active-section={activeVersion === "remix" &&
									currentTime.remix >= sec.start &&
									currentTime.remix < sec.end}
								style="left: {startPct}%; width: calc({widthPct}% - 2px); --section-color: {colors[
									sec.type
								]}"
								onclick={(e) => {
									e.stopPropagation();
									seekTo("remix", sec.start);
									if (!isPlaying.remix) togglePlay("remix");
								}}
							>
								<span class="shortcut-text">{sec.name}</span>
								<span class="shortcut-time">{formatTime(sec.start)}</span>
							</button>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Guia Rápido de Legendas Corrigido -->
	<div class="quick-guide">
		<div class="guide-item">
			<span class="guide-dot" style="background: {colors.intro}"></span>
			<span>Ponte / Saída</span>
		</div>
		<div class="guide-item">
			<span class="guide-dot" style="background: {colors.chorus}"></span>
			<span>Refrão</span>
		</div>
		<div class="guide-item">
			<span class="guide-dot" style="background: {colors.verse}"></span>
			<span>Verso</span>
		</div>
	</div>
</div>

<style>
	.player-card {
		background: rgba(18, 18, 18, 0.7);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		padding: 1.5rem;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
		box-sizing: border-box;
		backdrop-filter: blur(8px);
		width: 100%;
	}

	.title {
		font-size: 1.4rem;
		font-weight: 800;
		color: var(--heading-color, #bd00ff);
		margin: 0 0 0.5rem 0;
		text-transform: uppercase;
		letter-spacing: -0.5px;
		text-align: center;
		font-family: "Syne", sans-serif;
	}

	.subtitle {
		font-family: var(--sans, sans-serif);
		font-size: var(--14px, 14px);
		color: rgba(255, 255, 255, 0.65);
		text-align: center;
		margin-bottom: 1.5rem;
		line-height: 1.4;
	}

	/* Pilha de Players */
	.players-stack {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 100%;
	}

	.player-instance {
		background: rgba(255, 255, 255, 0.01);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 10px;
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		transition: all 0.3s ease;
	}

	.player-instance.active-playing {
		border-color: rgba(255, 255, 255, 0.2);
		background: rgba(255, 255, 255, 0.03);
	}

	.instance-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.title-meta {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.badge {
		font-size: 14px;
		font-weight: 800;
		font-family: "Syne", sans-serif;
		padding: 4px 8px;
		border-radius: 4px;
		background: rgba(255, 255, 255, 0.08);
		color: #ffffff;
		border: 1px solid rgba(255, 255, 255, 0.12);
	}

	.bpm-tag {
		font-family: var(--mono, monospace);
		font-size: 11px;
		color: rgba(255, 255, 255, 0.5);
	}

	.bpm-tag.highlight {
		color: var(--heading-color, #bd00ff);
		font-weight: bold;
	}

	/* Spotify Link */
	.spotify-link {
		display: flex;
		align-items: center;
		gap: 6px;
		font-family: "Syne", sans-serif;
		font-size: 11px;
		font-weight: bold;
		color: rgba(255, 255, 255, 0.6);
		text-decoration: none;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 4px;
		padding: 4px 8px;
		transition: all 0.2s ease;
		background: rgba(255, 255, 255, 0.02);
	}

	.spotify-link:hover {
		color: #1db954; /* Verde clássico do Spotify */
		border-color: #1db954;
		background: rgba(29, 185, 84, 0.05);
	}

	.sp-icon {
		width: 14px;
		height: 14px;
		fill: currentColor;
	}

	/* Player Body */
	.player-body {
		background: rgba(0, 0, 0, 0.3);
		border-radius: 8px;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.meta-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.now-playing-info {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.play-btn-circle {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: var(--heading-color, #bd00ff);
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.play-btn-circle:hover {
		transform: scale(1.08);
	}

	.play-btn-circle svg {
		width: 16px;
		height: 16px;
		fill: #000;
	}

	.structure-tag {
		background: var(--badge-color);
		color: #000;
		font-size: 9px;
		font-weight: bold;
		text-transform: uppercase;
		padding: 2px 6px;
		border-radius: 3px;
		letter-spacing: 0.5px;
	}

	.time-display {
		font-family: var(--mono, monospace);
		font-size: 12px;
		display: flex;
		gap: 4px;
	}

	.time-display .current {
		color: rgba(255, 255, 255, 0.6);
	}

	.time-display .current.active-color {
		color: var(--heading-color, #bd00ff);
		font-weight: bold;
	}

	.time-display .divider,
	.time-display .total {
		color: rgba(255, 255, 255, 0.35);
	}

	/* Scrubber Waveform */
	.waveform-scrubber {
		position: relative;
		height: 48px;
		width: 100%;
		background: rgba(0, 0, 0, 0.4);
		border-radius: 6px;
		padding: 6px 8px;
		box-sizing: border-box;
		cursor: pointer;
		display: flex;
		align-items: flex-end;
		overflow: hidden;
	}

	.waveform-bars {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		gap: 1px;
		pointer-events: none;
	}

	.wave-bar {
		flex: 1;
		background: rgba(255, 255, 255, 0.08);
		border-radius: 1px;
		transition: background 0.15s ease;
	}

	.wave-bar.played {
		background: var(--bar-color);
		filter: drop-shadow(0 0 1px var(--bar-color));
	}

	.playhead {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 2px;
		background: #ffffff;
		box-shadow: 0 0 6px #ffffff;
		pointer-events: none;
		z-index: 5;
		transition: left 0.1s linear;
	}

	/* Atalhos estruturais */
	.section-shortcuts {
		width: 100%;
		height: 38px;
		position: relative;
		margin-top: -4px;
	}

	.shortcut-timeline {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.shortcut-btn {
		position: absolute;
		top: 0;
		bottom: 0;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-top: 3px solid var(--section-color);
		border-radius: 0 0 6px 6px;
		color: rgba(255, 255, 255, 0.55);
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2px 4px;
		box-sizing: border-box;
		transition: all 0.2s ease;
		overflow: hidden;
	}

	.shortcut-btn:hover {
		background: rgba(255, 255, 255, 0.06);
		color: #fff;
		border-color: rgba(255, 255, 255, 0.12);
		border-top-color: var(--section-color);
	}

	.shortcut-btn.active-section {
		background: rgba(255, 255, 255, 0.04);
		border-color: rgba(255, 255, 255, 0.18);
		border-top-color: var(--section-color);
		color: #fff;
		font-weight: bold;
		box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
	}

	.shortcut-text {
		font-family: "Syne", sans-serif;
		font-size: 10px;
		font-weight: bold;
		text-transform: uppercase;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 100%;
		text-align: center;
	}

	.shortcut-time {
		font-family: var(--mono, monospace);
		font-size: 8px;
		opacity: 0.5;
		margin-top: 1px;
	}

	/* Guia de Legendas */
	.quick-guide {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-top: 1.5rem;
		font-family: var(--sans, sans-serif);
		font-size: 11px;
		flex-wrap: wrap;
	}

	.guide-item {
		display: flex;
		align-items: center;
		gap: 6px;
		color: rgba(255, 255, 255, 0.6);
	}

	.guide-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}
</style>

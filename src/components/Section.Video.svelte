<script>
	import themes from "$data/themes.json";
	import { getContext, onMount } from "svelte";

	let { url, title, nodeId, sectionId, format = "landscape", source } = $props();
	const { registerNode } = getContext("nodeRegistry");

	let el;
	let videoEl = $state();
	let isMuted = $state(true);
	let isPlaying = $state(true);

	const isYoutube = $derived(url && (url.includes("youtube.com") || url.includes("youtu.be") || url.includes("youtube-nocookie.com")));

	onMount(() => {
		registerNode(nodeId, el);
		if (videoEl) {
			// Autoplay workaround: browsers allow autoplay only if muted
			videoEl.play().catch(err => {
				isPlaying = false;
			});
		}
	});

	function toggleMute(e) {
		e.stopPropagation();
		if (videoEl) {
			isMuted = !isMuted;
		}
	}

	function togglePlay() {
		if (videoEl) {
			if (isPlaying) {
				videoEl.pause();
				isPlaying = false;
			} else {
				videoEl.play();
				isPlaying = true;
			}
		}
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div id={nodeId} class="video-container {format}">
	<div
		bind:this={el}
		class="video-wrapper"
		style={themes[sectionId]["text-style"] || null}
		onclick={!isYoutube ? togglePlay : null}
	>
		{#if isYoutube}
			<iframe
				src={url}
				title={title || "YouTube video player"}
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		{:else}
			<!-- svelte-ignore a11y_media_has_caption -->
			<video
				bind:this={videoEl}
				src={url}
				autoplay
				loop
				muted={isMuted}
				playsinline
				preload="metadata"
			></video>

			<!-- Custom Controls overlay (Minimal & Clean) -->
			<div class="video-overlay">
				<!-- Big Play Indicator if paused -->
				{#if !isPlaying}
					<div class="play-state-indicator">
						<svg viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>
					</div>
				{/if}

				<button
					class="volume-btn"
					onclick={toggleMute}
					aria-label={isMuted ? "Ativar som" : "Desativar som"}
				>
					{#if isMuted}
						<!-- Muted Icon (Diagonal Line) -->
						<svg viewBox="0 0 24 24" class="volume-icon"><path fill="currentColor" d="M3.27 3L2 4.27 6.03 8.3 3 11v2h4l5 5v-5.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81l2.04 2.05 1.27-1.27-18.48-18.47zM10 15.17l-3-2.67H5v-1h2.2L10 9.2v5.97zM12 4v4.18l2-2L12 4zm4.5 8c0-1.77-1.02-3.29-2.5-4.03v2.22l2.36 2.36c.09-.17.14-.36.14-.55zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71z"/></svg>
					{:else}
						<!-- Unmuted Icon -->
						<svg viewBox="0 0 24 24" class="volume-icon"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
					{/if}
				</button>
			</div>
		{/if}
	</div>
	{#if source}
		<div class="source-tab">
			<span class="source-text">{@html source}</span>
		</div>
	{/if}
</div>

<style>
	.video-wrapper {
		position: relative;
		width: 100%;
		background: var(--text-bg);
		border: 2px solid var(--border);
		border-radius: var(--border-radius);
		outline-color: var(--border);
		box-shadow: var(--box-shadow);
		overflow: hidden;
		margin: 3rem auto;
		z-index: 2;
		box-sizing: border-box;
		cursor: pointer;
	}

	/* Landscape standard */
	.video-wrapper.landscape {
		max-width: 100%;
		aspect-ratio: 16 / 9;
	}

	/* Vertical (TikTok / Reels style) */
	.video-wrapper.vertical {
		max-width: 340px;
		aspect-ratio: 9 / 16;
	}

	/* Square / 1:1 format */
	.video-wrapper.square {
		max-width: 500px;
		aspect-ratio: 1 / 1;
	}

	iframe, video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
		object-fit: cover;
	}

	/* Video Controls Overlay */
	.video-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 3;
		pointer-events: none;
	}

	/* Big play button when paused */
	.play-state-indicator {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.7);
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		backdrop-filter: blur(4px);
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.play-state-indicator svg {
		width: 30px;
		height: 30px;
	}

	.volume-btn {
		position: absolute;
		bottom: 16px;
		right: 16px;
		background: rgba(5, 2, 12, 0.75);
		border: 2px solid var(--border);
		border-radius: 50%;
		width: 42px;
		height: 42px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ffffff;
		cursor: pointer;
		pointer-events: auto; /* Allow clicking over transparent overlay */
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		padding: 0;
	}

	.volume-btn:hover {
		background: #05020c;
		border-color: #00f3ff;
		color: #00f3ff;
		box-shadow: 0 0 10px #00f3ff;
		transform: scale(1.1);
	}

	.video-icon {
		width: 20px;
		height: 20px;
	}

	.video-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 3rem auto;
		width: 100%;
		max-width: 100%;
		z-index: 2;
		position: relative;
	}

	.video-container.vertical {
		max-width: 340px;
	}

	.video-container.square {
		max-width: 500px;
	}

	/* Reset video-wrapper margin when inside container */
	.video-container .video-wrapper {
		margin: 0;
	}

	.source-tab {
		align-self: flex-start;
		margin-left: 0.25rem;
		margin-top: 0.5rem;
		padding: 0;
		background: transparent;
		border: none;
		border-radius: 0;
		box-shadow: none;
		max-width: 100%;
		width: auto;
		z-index: 3;
		box-sizing: border-box;
	}

	.source-text {
		font-family: var(--sans, sans-serif);
		font-size: var(--12px, 12px);
		color: rgba(255, 255, 255, 0.5); /* Muted light gray */
		font-weight: 400;
		line-height: 1.4;
		display: inline-block;
	}
</style>

<script>
	import { onMount, onDestroy } from "svelte";

	let { title, subtitle } = $props();
	let containerEl;
	let observer;
	let isVisible = $state(false);

	onMount(() => {
		if (typeof window !== "undefined" && "IntersectionObserver" in window) {
			observer = new IntersectionObserver((entries) => {
				entries.forEach(entry => {
					isVisible = entry.isIntersecting;
				});
			}, {
				rootMargin: "200px 0px" // Load slightly before it comes into view
			});
			if (containerEl) observer.observe(containerEl);
		} else {
			isVisible = true; // Fallback
		}
	});

	onDestroy(() => {
		if (observer) observer.disconnect();
	});
</script>

<div bind:this={containerEl} class="playlist-container">
	{#if title}
		<h3>{title}</h3>
	{/if}
	{#if subtitle}
		<p class="subtitle">{@html subtitle}</p>
	{/if}
	<div class="iframe-wrapper">
		{#if isVisible}
			<iframe
				data-testid="embed-iframe"
				src="https://open.spotify.com/embed/playlist/527lvGPJfj69FwMUi8z4eg?utm_source=generator&si=163e2bf414c84692"
				width="100%"
				height="352"
				frameBorder="0"
				allowfullscreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
				title={title || "Spotify Playlist"}
			></iframe>
		{:else}
			<div style="height: 352px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.4); font-family: var(--sans, sans-serif);">
				Carregando playlist do Spotify...
			</div>
		{/if}
	</div>
</div>

<style>
	.playlist-container {
		width: 100%;
		max-width: 800px;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
	}

	h3 {
		font-family: "Syne", sans-serif;
		font-size: clamp(1.25rem, 4vw, 1.75rem);
		font-weight: 800;
		color: var(--heading-color, #ff007f);
		margin-bottom: 0.5rem;
		text-transform: uppercase;
		letter-spacing: -0.5px;
		text-align: center;
		text-shadow: var(--heading-shadow);
	}

	.subtitle {
		font-size: var(--14px, 14px);
		color: rgba(255, 255, 255, 0.7);
		text-align: center;
		max-width: 600px;
		margin-bottom: 2rem;
		line-height: 1.4;
	}

	.iframe-wrapper {
		width: 100%;
		border-radius: 12px;
		overflow: hidden;
		background: #282828;
		border: 2px solid var(--border);
		box-shadow: var(--box-shadow);
		transition: box-shadow 0.3s ease;
		line-height: 0;
	}

	.iframe-wrapper iframe {
		display: block;
	}

	.iframe-wrapper:hover {
		box-shadow: 0 0 25px rgba(255, 0, 127, 0.4);
	}
</style>

<script>
	let { title, subtitle, availableWidth } = $props();

	const contexts = [
		{
			id: "raiz",
			title: "Nas Calçadas (Raiz)",
			description: "O passinho em seu ambiente natural nas comunidades de Recife.",
			videoSrc: "assets/video/passinho1.mp4",
			tiktokUrl: "https://www.tiktok.com/@.scr3amvs/video/7198320834488913157?is_from_webapp=1&sender_device=pc&web_id=7648866911602279956"
		},
		{
			id: "tiktok",
			title: "Nas Redes (TikTok)",
			description: "Os desafios virais que espalharam o ritmo pelo mundo.",
			videoSrc: "assets/video/passinho3.mp4",
			tiktokUrl: "https://www.tiktok.com/@jnzinnnft/video/7578169400294001941?is_from_webapp=1&sender_device=pc&web_id=7648866911602279956"
		},
		{
			id: "futebol",
			title: "Nos Campos (Futebol)",
			description: "A dança adotada por jogadores em comemorações de gols.",
			videoSrc: "assets/video/passinho2.mp4",
			tiktokUrl: "https://www.tiktok.com/@heyviiihww/video/7550841399441116421?is_from_webapp=1&sender_device=pc&web_id=7648866911602279956"
		}
	];

	// Track volume muted state (browsers block autoplay with sound enabled)
	let mutedStates = $state({
		raiz: true,
		futebol: true,
		tiktok: true
	});

	function toggleMute(id) {
		mutedStates[id] = !mutedStates[id];
	}
</script>

<div class="grid-container" style="width: {availableWidth}px;">

	<div class="grid">
		{#each contexts as item}
			<div class="card">
				<div class="video-container">
					<!-- svelte-ignore a11y_media_has_caption -->
					<video
						src={item.videoSrc}
						autoplay
						loop
						playsinline
						muted={mutedStates[item.id]}
						class="video-player"
					>
						Seu navegador não suporta vídeos HTML5.
					</video>

					<button
						class="volume-btn"
						onclick={() => toggleMute(item.id)}
						aria-label={mutedStates[item.id] ? "Ativar som" : "Desativar som"}
					>
						{#if mutedStates[item.id]}
							<!-- Muted Icon -->
							<svg viewBox="0 0 24 24" class="volume-icon"><path fill="currentColor" d="M4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
						{:else}
							<!-- Unmuted Icon -->
							<svg viewBox="0 0 24 24" class="volume-icon"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
						{/if}
					</button>
				</div>
				<div class="card-content">
					<a
						href={item.tiktokUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="tiktok-link"
					>
						Ver no TikTok
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.grid-container {
		font-family: "Syne", sans-serif;
		margin: 0 auto;
	}

	.title {
		font-size: 1.5rem;
		font-weight: 800;
		color: var(--color-link-hover, #00f3ff);
		margin: 0 0 0.5rem 0;
		text-transform: uppercase;
		letter-spacing: -0.5px;
		text-align: center;
		text-shadow: 0 0 10px rgba(0, 243, 255, 0.3);
	}

	.subtitle {
		font-family: var(--sans, sans-serif);
		font-size: var(--14px, 14px);
		color: rgba(255, 255, 255, 0.7);
		text-align: center;
		margin-bottom: 2rem;
		line-height: 1.4;
		max-width: 650px;
		margin-left: auto;
		margin-right: auto;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		width: 100%;
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.grid {
			grid-template-columns: 1fr;
			gap: 1.25rem;
		}
	}

	.card {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(0, 243, 255, 0.15);
		border-radius: 12px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		transition: border-color 0.3s ease;
	}

	.card:hover {
		border-color: rgba(0, 243, 255, 0.4);
	}

	.video-container {
		position: relative;
		width: 100%;
		aspect-ratio: 9 / 16;
		background: #0d0d0d;
		overflow: hidden;
		border-bottom: 1px solid rgba(0, 243, 255, 0.1);
	}

	.video-player {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.volume-btn {
		position: absolute;
		bottom: 12px;
		right: 12px;
		background: rgba(0, 0, 0, 0.6);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 50%;
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ffffff;
		cursor: pointer;
		z-index: 5;
		transition: background-color 0.2s ease, transform 0.2s ease;
		padding: 0;
	}

	.volume-btn:hover {
		background: rgba(0, 0, 0, 0.85);
		transform: scale(1.05);
	}

	.volume-icon {
		width: 18px;
		height: 18px;
	}

	.card-content {
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
		background: rgba(13, 13, 13, 0.4);
	}


	.tiktok-link {
		display: inline-block;
		color: #00f3ff;
		text-decoration: underline;
		font-family: var(--sans, sans-serif);
		font-size: 0.85rem;
		font-weight: 500;
		transition: color 0.2s ease;
		margin-top: 0.25rem;
	}

	.tiktok-link:hover {
		color: #ffffff;
	}
</style>

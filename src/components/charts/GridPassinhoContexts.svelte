<script>
	import { onMount, onDestroy } from "svelte";

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
			id: "futebol-raiz",
			title: "Nos Campos (Futebol)",
			description: "A dança adotada por jogadores em comemorações de gols.",
			videoSrc: "assets/video/passinho2.mp4",
			tiktokUrl: "https://www.tiktok.com/@heyviiihww/video/7550841399441116421?is_from_webapp=1&sender_device=pc&web_id=7648866911602279956"
		},
		{
			id: "futebol-titulo",
			title: "Nos Gramados (Título)",
			description: "Kaio Jorge comemorando o título de campeão com o passinho.",
			videoSrc: "assets/video/kaio_jorge_comemoracao.mp4",
			tiktokUrl: "https://www.tiktok.com/@cruzeiro/video/7615060559595064596?is_from_webapp=1&web_id=7648866911602279956"
		}
	];

	// Track volume muted state (browsers block autoplay with sound enabled)
	let mutedStates = $state({
		raiz: true,
		tiktok: true,
		"futebol-raiz": true,
		"futebol-titulo": true
	});

	let videoElements = {};
	let observer;

	onMount(() => {
		if (typeof window !== "undefined" && "IntersectionObserver" in window) {
			observer = new IntersectionObserver((entries) => {
				entries.forEach(entry => {
					const id = entry.target.dataset.id;
					const video = videoElements[id];
					if (video) {
						if (entry.isIntersecting) {
							video.play().catch(() => {});
						} else {
							video.pause();
						}
					}
				});
			}, {
				threshold: 0.1 // Play when at least 10% of card is in viewport
			});

			Object.values(videoElements).forEach(video => {
				if (video) observer.observe(video.closest(".card"));
			});
		}
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});

	function toggleMute(id) {
		mutedStates[id] = !mutedStates[id];
	}
</script>

<div class="grid-container" style="width: {availableWidth}px;">

	<div class="grid">
		{#each contexts as item}
			<div class="card" data-id={item.id}>
				<div class="video-container">
					<!-- svelte-ignore a11y_media_has_caption -->
					<video
						bind:this={videoElements[item.id]}
						src={item.videoSrc}
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
							<!-- Muted Icon (with line) -->
							<svg viewBox="0 0 24 24" class="volume-icon"><path fill="currentColor" d="M3.27 3L2 4.27 6.03 8.3 3 11v2h4l5 5v-5.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81l2.04 2.05 1.27-1.27-18.48-18.47zM10 15.17l-3-2.67H5v-1h2.2L10 9.2v5.97zM12 4v4.18l2-2L12 4zm4.5 8c0-1.77-1.02-3.29-2.5-4.03v2.22l2.36 2.36c.09-.17.14-.36.14-.55zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71z"/></svg>
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
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
		width: 100%;
	}

	@media (max-width: 1000px) {
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
		transition: all 0.3s ease;
	}

	.card:hover {
		border-color: rgba(0, 243, 255, 0.4);
		box-shadow: 0 0 15px rgba(0, 243, 255, 0.08);
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
		background: rgba(5, 2, 12, 0.75);
		border: 1.5px solid rgba(0, 243, 255, 0.3);
		border-radius: 50%;
		width: 38px;
		height: 38px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ffffff;
		cursor: pointer;
		z-index: 5;
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		padding: 0;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
	}

	.volume-btn:hover {
		background: #05020c;
		border-color: #00f3ff;
		color: #00f3ff;
		box-shadow: 0 0 8px #00f3ff;
		transform: scale(1.1);
	}

	.volume-icon {
		width: 18px;
		height: 18px;
	}

	.card-content {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
		background: rgba(13, 13, 13, 0.4);
		text-align: center;
	}

	.tiktok-link {
		display: inline-block;
		color: #00f3ff;
		text-decoration: none;
		font-family: var(--sans, sans-serif);
		font-size: 0.8rem;
		font-weight: 600;
		transition: all 0.2s ease;
		border: 1px solid rgba(0, 243, 255, 0.3);
		padding: 0.35rem 0.75rem;
		border-radius: 20px;
		background: rgba(0, 243, 255, 0.05);
	}

	.tiktok-link:hover {
		color: #ffffff;
		background: rgba(0, 243, 255, 0.2);
		border-color: #00f3ff;
		box-shadow: 0 0 10px rgba(0, 243, 255, 0.3);
	}
</style>

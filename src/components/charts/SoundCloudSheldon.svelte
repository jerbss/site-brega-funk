<script>
	let { title, subtitle, availableWidth } = $props();

	// Color matching themes.json for second-gen: #ff007f
	const embedUrl = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A111143102&color=%23ff007f&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true";
</script>

<div class="soundcloud-container" style="width: {availableWidth}px;">
	<h3 class="title">{title}</h3>
	{#if subtitle}
		<p class="subtitle">{@html subtitle}</p>
	{/if}

	<div class="player-wrapper">
		<iframe
			title="MC Sheldon - Pensei Que Era Pra Sempre"
			width="100%"
			height="300"
			scrolling="no"
			frameborder="no"
			allow="autoplay; encrypted-media"
			src={embedUrl}
		></iframe>
	</div>
</div>

<style>
	.soundcloud-container {
		font-family: "Syne", sans-serif;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.title {
		font-size: 1.5rem;
		font-weight: 800;
		color: var(--heading-color, #ff007f);
		margin: 0 0 0.5rem 0;
		text-transform: uppercase;
		letter-spacing: -0.5px;
		text-align: center;
		text-shadow: var(--heading-shadow, 0 0 10px rgba(255, 0, 127, 0.3));
	}

	.subtitle {
		font-family: var(--sans, sans-serif);
		font-size: var(--14px, 14px);
		color: rgba(255, 255, 255, 0.7);
		text-align: center;
		margin-bottom: 1.5rem;
		line-height: 1.4;
		max-width: 600px;
	}

	.player-wrapper {
		width: 100%;
		max-width: 700px;
		border-radius: 16px;
		overflow: hidden;
		border: 2px solid var(--border, #ff007f);
		box-shadow: var(--box-shadow, 0 8px 32px rgba(255, 0, 127, 0.2));
		background: #0d0d0d;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.player-wrapper:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 40px rgba(255, 0, 127, 0.3);
	}

	iframe {
		display: block;
		border: none;
	}
</style>

<script>
	let { availableWidth } = $props();

	// Color matching themes.json for second-gen: #ff007f
	const embedUrl = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A111143102&color=%23ff007f&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true";
</script>

<div class="soundcloud-container" style="width: {availableWidth}px;">
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
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.player-wrapper {
		width: 100%;
		max-width: 700px;
		border-radius: 12px;
		overflow: hidden;
		background: #0d0d0d;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	iframe {
		display: block;
		border: none;
	}
</style>

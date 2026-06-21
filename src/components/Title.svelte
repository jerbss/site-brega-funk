<script>
	import copy from "$data/copy.json";
	import mostInView from "$actions/mostInView.js";
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@900&family=Syne:wght@800&family=Instrument+Serif:ital@1&display=swap" rel="stylesheet">
</svelte:head>

<section id="title" use:mostInView={"title"}>
	<div class="title-container">
		<h1 class="title-line title-como-o fade-in-up" style="animation-delay: 0.2s">
			<span class="serif-italic">Como o</span>
		</h1>
		<h1 class="title-line title-brega-funk fade-in-up" style="animation-delay: 0.4s">
			<span class="neon-text neon-magenta">BREGA FUNK</span>
		</h1>
		<h1 class="title-line title-conquistou fade-in-up" style="animation-delay: 0.6s">
			<span class="serif-italic">conquistou o Brasil em</span>
		</h1>
		<h1 class="title-line title-segundos fade-in-up" style="animation-delay: 0.8s">
			<span class="neon-text neon-yellow">15 SEGUNDOS?</span>
		</h1>
	</div>
</section>

<style>
	#title {
		padding: 8rem 2rem 4rem 2rem;
		min-height: 85vh;
		background: transparent;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		box-sizing: border-box;
	}

	.title-container {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 3.5rem;
		max-width: 800px;
		width: 100%;
	}

	.title-line {
		margin: 0.2rem 0;
		width: 100%;
		white-space: nowrap;
		word-break: keep-all;
		overflow-wrap: normal;
	}

	.serif-italic {
		font-family: "Instrument Serif", serif;
		font-style: italic;
		font-size: clamp(1.2rem, 3.5vw, 2.4rem);
		color: rgba(255, 255, 255, 0.9);
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
		display: block;
		text-align: center;
		width: 100%;
		white-space: nowrap;
		word-break: keep-all;
		overflow-wrap: normal;
	}

	.neon-text {
		font-family: "Syne", sans-serif;
		font-weight: 800;
		font-size: clamp(1.6rem, 7.5vw, 4.5rem);
		letter-spacing: -1px;
		display: block;
		text-align: center;
		text-transform: uppercase;
		line-height: 1.1;
		width: 100%;
		white-space: nowrap;
		word-break: keep-all;
		overflow-wrap: normal;
	}

	/* Recife Baile Hot Pink Glow - Subtle and readable */
	.neon-magenta {
		color: #ff007f;
		text-shadow: 
			0 0 5px rgba(255, 0, 127, 0.8), 
			0 0 15px rgba(255, 0, 127, 0.4);
		-webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.15);
	}

	/* Recife Yellow Neon Glow - Subtle and readable */
	.neon-yellow {
		color: #d4ff00;
		text-shadow: 
			0 0 5px rgba(212, 255, 0, 0.8), 
			0 0 15px rgba(212, 255, 0, 0.4);
		-webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.15);
	}

	/* Elegant Fade In Up entrance animation */
	.fade-in-up {
		opacity: 0;
		transform: translateY(15px);
		animation: fadeInUp 0.8s forwards cubic-bezier(0.25, 1, 0.5, 1);
	}

	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 600px) {
		#title {
			padding: 6rem 1rem 3rem 1rem;
		}
	}
</style>

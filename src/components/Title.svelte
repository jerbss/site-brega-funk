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

		<!-- Neon Laser Divider -->
		<div class="laser-divider fade-in-up" style="animation-delay: 1.0s">
			<div class="glow-bar glow-left"></div>
			<div class="soundwave-icon">
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="3" y="10" width="2" height="4" rx="1" fill="currentColor"/>
					<rect x="7" y="7" width="2" height="10" rx="1" fill="currentColor"/>
					<rect x="11" y="4" width="2" height="16" rx="1" fill="currentColor"/>
					<rect x="15" y="7" width="2" height="10" rx="1" fill="currentColor"/>
					<rect x="19" y="10" width="2" height="4" rx="1" fill="currentColor"/>
				</svg>
			</div>
			<div class="glow-bar glow-right"></div>
		</div>
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
		display: flex;
		justify-content: center;
		align-items: center;
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
		display: inline-block;
		text-align: center;
		white-space: nowrap;
		word-break: keep-all;
		overflow-wrap: normal;
	}

	.neon-text {
		font-family: "Syne", sans-serif;
		font-weight: 800;
		font-size: clamp(1.6rem, 7.5vw, 4.5rem);
		letter-spacing: -1px;
		display: inline-block;
		text-align: center;
		text-transform: uppercase;
		line-height: 1.1;
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

	/* Neon Laser Divider */
	.laser-divider {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		width: 100%;
		max-width: 500px;
		margin-top: 3.5rem;
	}

	.glow-bar {
		height: 2px;
		flex-grow: 1;
		border-radius: 1px;
	}

	.glow-left {
		background: linear-gradient(to right, transparent, #ff007f, #d4ff00);
		box-shadow: 0 0 8px rgba(255, 0, 127, 0.6), 0 0 15px rgba(212, 255, 0, 0.4);
	}

	.glow-right {
		background: linear-gradient(to right, #d4ff00, #ff007f, transparent);
		box-shadow: 0 0 8px rgba(212, 255, 0, 0.4), 0 0 15px rgba(255, 0, 127, 0.6);
	}

	.soundwave-icon {
		width: 32px;
		height: 32px;
		color: #ff007f;
		filter: drop-shadow(0 0 8px #ff007f);
		animation: pulse-wave 3s infinite ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.soundwave-icon svg {
		width: 100%;
		height: 100%;
	}

	@keyframes pulse-wave {
		0%, 100% {
			transform: scale(1);
			color: #ff007f;
			filter: drop-shadow(0 0 8px rgba(255, 0, 127, 0.8));
		}
		50% {
			transform: scale(1.15);
			color: #d4ff00;
			filter: drop-shadow(0 0 12px rgba(212, 255, 0, 0.9));
		}
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

		.laser-divider {
			max-width: 80%;
			margin-top: 2rem;
		}
	}
</style>

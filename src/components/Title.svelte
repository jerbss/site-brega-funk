<script>
	import copy from "$data/copy.json";
	import _ from "lodash";
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

	<!-- Introductions -->
	<div class="landing fade-in-up" style="animation-delay: 1.1s">
		<div class="intros">
			{#each ["eunice", "minji"] as name}
				<div class="intro">
					<div class="img-frame">
						<img class="img" alt="photo of {name}" src={`assets/img/title/${name}.jpg`} />
					</div>
					<div class="caption">Hi, I'm {_.startCase(name)}!</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	#title {
		padding: 8rem 2rem 4rem 2rem;
		min-height: 85vh;
		background: linear-gradient(
			to bottom,
			rgba(5, 2, 12, 0.1),
			rgba(5, 2, 12, 0.4) 60%,
			rgba(5, 2, 12, 0.7)
		);
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

	.landing {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.intros {
		display: flex;
		justify-content: center;
		gap: 2.5rem;
		max-width: 500px;
		width: 100%;
		margin: 0 auto;
	}

	.intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.img-frame {
		border-radius: var(--border-radius);
		padding: 2px;
		background: linear-gradient(135deg, #ff007f, #d4ff00);
		box-shadow: 0 4px 15px rgba(255, 0, 127, 0.2);
		transition: transform 0.3s ease;
	}

	.img-frame:hover {
		transform: scale(1.05) rotate(2deg);
	}

	.img {
		border-radius: calc(var(--border-radius) - 2px);
		height: 120px;
		width: 120px;
		display: block;
		object-fit: cover;
	}

	.caption {
		font-family: var(--font-body);
		font-weight: 500;
		font-size: var(--12px);
		color: #ffffff;
		opacity: 0.85;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
	}

	@media (max-width: 600px) {
		#title {
			padding: 6rem 1rem 3rem 1rem;
		}
		
		.intros {
			gap: 1.5rem;
		}

		.img {
			height: 90px;
			width: 90px;
		}
	}
</style>

<script>
	import "$styles/app.css";

	let { children } = $props();
</script>

<div class="app-container">
	<!-- Dynamic backdrop: Animated spotlights & stage smoke -->
	<div class="dynamic-backdrop">
		<div class="spotlight spotlight-yellow"></div>
		<div class="spotlight spotlight-pink"></div>
		<div class="spotlight spotlight-cyan"></div>
		<div class="speaker-grille"></div>
		<div class="grunge-grain"></div>
	</div>

	<main id="content">
		{@render children?.()}
	</main>
</div>

<style>
	.app-container {
		position: relative;
		min-height: 100vh;
		background-color: #05020c;
		overflow-x: hidden;
	}

	.dynamic-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 1; /* behind everything */
		pointer-events: none;
		overflow: hidden;
	}

	/* Animated strobes & drifting smoke */
	.spotlight {
		position: absolute;
		border-radius: 50%;
		filter: blur(120px);
		opacity: 0.15;
		mix-blend-mode: screen;
		animation: drift 25s infinite ease-in-out alternate;
	}

	.spotlight-yellow {
		width: 60vw;
		height: 60vw;
		background: radial-gradient(circle, #d4ff00 0%, transparent 70%);
		top: -10%;
		left: -10%;
		animation-duration: 30s;
	}

	.spotlight-pink {
		width: 80vw;
		height: 80vw;
		background: radial-gradient(circle, #ff007f 0%, transparent 70%);
		bottom: -20%;
		right: -10%;
		animation-duration: 40s;
		animation-delay: -10s;
	}

	.spotlight-cyan {
		width: 70vw;
		height: 70vw;
		background: radial-gradient(circle, #00f3ff 0%, transparent 70%);
		top: 30%;
		right: 15%;
		animation-duration: 35s;
		animation-delay: -5s;
	}

	/* Speaker Grille dot matrix overlay */
	.speaker-grille {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: radial-gradient(
			rgba(212, 255, 0, 0.03) 1px,
			transparent 1px
		);
		background-size: 24px 24px;
		opacity: 0.8;
	}

	/* High-end analog noise/grain texture overlay */
	.grunge-grain {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
		opacity: 0.045; /* extremely subtle organic texture */
		mix-blend-mode: overlay;
	}

	#content {
		position: relative;
		z-index: 2; /* sits on top of the backdrop */
	}

	/* Drifting animation for neon spotlights */
	@keyframes drift {
		0% {
			transform: translate(0, 0) scale(1) rotate(0deg);
		}
		50% {
			transform: translate(10vw, 8vh) scale(1.1) rotate(180deg);
			opacity: 0.25;
		}
		100% {
			transform: translate(-5vw, -5vh) scale(0.9) rotate(360deg);
		}
	}
</style>

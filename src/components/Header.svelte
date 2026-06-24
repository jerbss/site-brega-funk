<script>
</script>


<header>
	<!-- Navegação por geração removida para o projeto Brega Funk -->
</header>

<style>
	header {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: var(--z-top);
		width: 100%;
		height: 7rem;
		padding: 1rem 1rem 4rem 1rem;

		background-image: linear-gradient(
			to bottom,
			#05020c 20%,
			rgba(5, 2, 12, 0.7) 60%,
			rgba(5, 2, 12, 0)
		);
	}

	.wordmark-header.visible {
		display: block;
	}

	.wordmark-header a {
		height: 100%;
		border: none;
		display: block;
		color: var(--color-fg);
		transition: transform calc(var(--1s) * 0.25) rotate(var(--left-tilt, -2deg));
	}

	.wordmark-header a:hover {
		transform: rotate(0) scale(1.05);
	}

	.wordmark-header {
		width: 100px;
		transform: rotate(-4deg);
		display: block;
		padding-top: 0.5rem;
		transform: rotate(var(--left-tilt, -2deg));
		max-width: 320px;
		transition: transform calc(var(--1s) * 0.25);
	}

	.wordmark-header:hover {
		transform: rotate(0) scale(1.05);
	}

	:global(header .wordmark svg) {
		height: 100%;
		width: auto;
	}

	@media (max-width: 1200px) {
		header {
			display: flex;
			justify-content: space-between;
		}
	}

	@media (max-width: 700px) {
		header {
			justify-content: center;
		}

		.wordmark-header {
			display: none;
		}
	}

	@media (max-width: 550px) {
		.years {
			display: none;
		}
	}
</style>

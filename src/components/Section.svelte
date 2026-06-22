<script>
	import themes from "$data/themes.json";
	import Nodes from "$components/Nodes.svelte";
	import mostInView from "$actions/mostInView.js";
	import inView from "$actions/inView.js";

	let { id, heading, years, coverAlt, nodes } = $props();

	let visible = $state(false);

	function handleEnter() {
        visible = true;
    }

	const style = Object.entries(themes[id] || {})
		.filter(([key, value]) => !key.endsWith("-style"))
		.map(([key, value]) => `--${key}: ${value}`)
		.join(";");
</script>

<section {id} {style} use:mostInView={id}>
	{#if heading}
		<h2>{heading}</h2>
	{/if}

	<Nodes {id} {nodes} />
</section>

<style>
	section {
		padding: 5rem 2rem;
		font-family: var(--font-body);
		background: linear-gradient(to bottom, var(--background));
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
		font-size: clamp(2rem, 6vw, 4.5rem);
		width: 100%;
		max-width: 1000px;
		line-height: 1.1;
		margin: 2rem 0 3rem 0;
		font-weight: bold;
		text-align: center;
		text-transform: uppercase;
		font-family: "Syne", sans-serif;
		color: var(--heading-color);
		text-shadow: var(--heading-shadow);
	}

	@media (max-width: 600px) {
		section {
			padding: 3rem 1.5rem;
		}
	}
</style>

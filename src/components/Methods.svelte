<script>
	import copy from "$data/copy.json";
</script>

<section id="methods">
	<div class="wrapper">
		{#each copy.methods as { type, value }}
			{#if type === "header"}
				<h3>{@html value}</h3>
			{:else if type === "text"}
				<p>{@html value}</p>
			{/if}
		{/each}
	</div>
</section>

<style>
	section {
		padding: 5rem 2rem;
		background: transparent;
	}

	h3 {
		margin: 0;
	}

	.wrapper {
		max-width: 900px;
		margin: 0 auto;
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: var(--border-radius);
		padding: 1.5rem;
		width: fit-content;
		color: #ffffff;
	}
</style>

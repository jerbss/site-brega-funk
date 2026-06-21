<script>
	import copy from "$data/copy.json";
	import Title from "$components/Title.svelte";
	import Section from "$components/Section.svelte";
	import Methods from "$components/Methods.svelte";
</script>

<article>
	<Title />

	{#each copy.sections as section}
		<Section {...section} />
	{/each}

	<Methods />
</article>

<style>
	article {
	}
</style>

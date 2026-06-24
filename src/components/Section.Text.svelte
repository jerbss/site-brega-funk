<script>
	import Song from "$components/Song.svelte";
	import themes from "$data/themes.json";
	import { getContext, onMount } from "svelte";
	import inView from "$actions/inView.js";

	let {
		sectionId,
		nodeId,
		speaker,
		text,
		song,
		isFirstSpeaker = false
	} = $props();
	const { registerNode } = getContext("nodeRegistry");

	let el;
	let visible = $state(false);

	function handleEnter() {
		visible = true;
	}

	onMount(() => {
		registerNode(nodeId, el);
	});
</script>

{#snippet textBlock(withMargin)}
	<div
		id={nodeId}
		class="text-block"
		class:with-margin={withMargin}
		class:is-visible={visible}
		bind:this={el}
		style={themes[sectionId]["text-style"] || null}
		use:inView
		onenter={handleEnter}
	>
		{#if Array.isArray(text)}
			{#each text as { value }}
				<p>{@html value}</p>
			{/each}
		{:else}
			<p>{@html text}</p>
		{/if}
	</div>
{/snippet}

{#if song}
	<div class="text-wrapper">
		{@render textBlock(false)}
	</div>
{:else}
	{@render textBlock(true)}
{/if}

<style>
	.text-wrapper {
		display: flex;
		align-items: flex-start;
		margin: 2rem 0;
		justify-content: space-between;
		gap: 1.5rem;
		z-index: 2;
	}

	.text-block {
		--speaker-overhang: 1.75rem;
		border-radius: var(--border-radius, 12px);
		padding: 2rem;
		width: 100%;
		max-width: 666px;
		position: relative;
		z-index: 1000;
		margin: 0 auto;

		/* Retornando o estilo do retângulo */
		color: var(--text-color, #ffffff);
		background: var(--text-bg, rgba(255, 255, 255, 0.05));
		border: 2px solid var(--border, rgba(255, 255, 255, 0.2));
		box-shadow: var(--box-shadow, 0px 0px 15px rgba(255, 255, 255, 0.05));
	}

	.text-block.with-margin {
		margin: 3rem auto;
	}

	@media (max-width: 600px) {
		.text-block.with-margin {
			margin: 2rem auto;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.text-block {
			opacity: 0;
			transition:
				transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
				opacity 0.6s ease-out;
			transition-property: transform, opacity !important;
			will-change: transform, opacity;
		}

	}

	.text-block.is-visible {
		opacity: 1;
	}

	@media (max-width: 600px) {
		.text-block {
			font-size: var(--14px);
		}

		.text-wrapper {
			flex-direction: column;
		}

		.text-wrapper.reverse {
			flex-direction: column-reverse;
		}

		.text-block {
			padding: 1rem 1.5rem;
		}
	}
</style>

<script>
	import DebutChart from "$components/Section.DebutChart.svelte";
	import GangnamChart from "$components/Section.GangnamChart.svelte";
	import YouTubeChart from "$components/Section.YouTubeChart.svelte";
	import ConcertsChart from "$components/Section.ConcertsChart.svelte";
	import themes from "$data/themes.json";
	import { getContext, onMount } from "svelte";
	import _ from "lodash";
	import useWindowDimensions from "$runes/useWindowDimensions.svelte.js";
	let dimensions = new useWindowDimensions();

	let { id, figcaption, title, subtitle, source, nodeId, sectionId } = $props();
	const { registerNode } = getContext("nodeRegistry");

	let el;
	let width = $state(0);
	let padding = $derived(dimensions.width < 600 ? 16 : 32);
	let availableWidth = $derived(width - 2 * padding);

	onMount(() => {
		registerNode(nodeId, el);
	});

	const components = {
		debuts: DebutChart,
		"gangnam-style": GangnamChart,
		"youtube-records": YouTubeChart,
		concerts: ConcertsChart
	};
	const C = components[id];
</script>

<figure
	id={nodeId}
	bind:this={el}
	bind:clientWidth={width}
	style={themes[sectionId]["text-style"] + `; --padding: ${padding}px;`}
>
	{#if C}
		<C {title} {subtitle} {availableWidth} />
	{:else}
		<div class="placeholder-graphic">
			<div class="placeholder-icon">⚡</div>
			<h4 class="placeholder-title">{title}</h4>
			{#if subtitle}
				<p class="placeholder-subtitle">{@html subtitle}</p>
			{/if}
			<div class="placeholder-visual-box">
				<span class="pulse-text">[ Espaço Reservado para o Elemento Interativo ]</span>
			</div>
		</div>
	{/if}

	{#if source}
		<div class="source">{@html source}</div>
	{/if}

	<figcaption class="sr-only">{figcaption}</figcaption>
</figure>

<style>
	figure {
		position: relative;
		width: 100%;
		background: var(--text-bg);
		border: 2px solid var(--border);
		border-radius: var(--border-radius);
		outline-color: var(--border);
		box-shadow: var(--box-shadow);
		color: var(--text-color);
		margin: 3rem 0;
		padding: var(--padding);
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 2;
	}

	.source {
		margin-top: 1rem;
		align-self: start;
		font-size: var(--12px);
	}

	.placeholder-graphic {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-height: 250px;
		padding: 2rem;
		border: 2px dashed var(--border);
		border-radius: var(--border-radius);
		background: rgba(255, 255, 255, 0.02);
		text-align: center;
		box-sizing: border-box;
	}

	.placeholder-icon {
		font-size: 3rem;
		margin-bottom: 0.5rem;
		animation: pulse 2s infinite ease-in-out;
	}

	.placeholder-title {
		font-family: "Syne", sans-serif;
		font-size: 1.25rem;
		font-weight: 800;
		color: var(--color-link-hover);
		margin: 0.5rem 0;
		text-transform: uppercase;
		letter-spacing: -0.5px;
	}

	.placeholder-subtitle {
		font-size: var(--14px);
		color: rgba(255, 255, 255, 0.7);
		max-width: 600px;
		margin-bottom: 1.5rem;
		line-height: 1.4;
	}

	.placeholder-visual-box {
		width: 100%;
		max-width: 500px;
		padding: 1.5rem;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		box-sizing: border-box;
	}

	.pulse-text {
		font-family: var(--mono);
		font-size: var(--12px);
		color: var(--color-focus);
		letter-spacing: 1px;
		animation: pulse 1.5s infinite ease-in-out;
		display: block;
	}

	@keyframes pulse {
		0%, 100% { opacity: 0.6; transform: scale(0.98); }
		50% { opacity: 1; transform: scale(1); }
	}

	@media (max-width: 600px) {
		:global(figure h3) {
			font-size: var(--20px);
		}
	}
</style>

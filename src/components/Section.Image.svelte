<script>
	import themes from "$data/themes.json";
	import { getContext, onMount } from "svelte";
	import { base } from "$app/paths";

	let { sectionId, nodeId, src, alt, shape = "rectangle", source } = $props();
	const { registerNode } = getContext("nodeRegistry");

	let el;

	onMount(() => {
		registerNode(nodeId, el);
	});

	const boxShadows =
		themes[sectionId]["box-shadow"] !== ""
			? themes[sectionId]["box-shadow"]
					?.split(/,(?![^(]*\))/)
					.map((s) => s.trim())
			: [];

	const insetShadows = boxShadows
		.filter((d) => d.startsWith("inset"))
		.join(", ");
</script>

<div id={nodeId} class="image-container" class:full-width={shape === "full"}>
	<div
		class="image-wrapper"
		bind:this={el}
		style={insetShadows ? `--inset-shadows: ${insetShadows}` : ""}
	>
		<img
			src={`${base}/assets/img/${sectionId}/${src}`}
			class:rectangle={shape === "rectangle" || shape === "full"}
			class:circle={shape === "circle"}
			class:oval={shape === "oval"}
			{alt}
		/>
	</div>
	{#if source}
		<div class="source-tab">
			<span class="source-text">{@html source}</span>
		</div>
	{/if}
</div>

<style>
	.image-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 3rem auto;
		width: 100%;
		max-width: 300px;
		z-index: 2;
		position: relative;
	}

	.image-container.full-width {
		max-width: 100%;
	}

	.image-wrapper {
		width: 100%;
		position: relative;
		display: inline-block;
	}

	.image-wrapper::after {
		content: "";
		position: absolute;
		inset: 0;
		border-radius: var(--border-radius);
		box-shadow: var(--inset-shadows);
		pointer-events: none;
	}

	img {
		display: block;
		margin: 0 auto;
		border: 2px solid var(--border);
		border-radius: var(--border-radius);
		box-shadow: var(--box-shadow);
		width: 100%;
		height: auto;
	}

	/* Style the footnote as an offset tab flush with the image border */
	.source-tab {
		align-self: flex-start;
		margin-left: 0.25rem;
		margin-top: 0.5rem;
		padding: 0;
		background: transparent;
		border: none;
		border-radius: 0;
		box-shadow: none;
		max-width: 100%;
		width: auto;
		z-index: 3;
		box-sizing: border-box;
	}

	.source-text {
		font-family: var(--sans, sans-serif);
		font-size: var(--12px, 12px);
		color: rgba(255, 255, 255, 0.5); /* Muted light gray */
		font-weight: 400;
		line-height: 1.4;
		display: inline-block;
	}

	.rectangle {
		border-radius: var(--border-radius);
	}

	.circle {
		border-radius: 100%;
	}

	.oval {
		border-radius: 1000px;
	}
</style>

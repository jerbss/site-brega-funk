<script>
	import themes from "$data/themes.json";
	import { getContext, onMount } from "svelte";

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

<div
	id={nodeId}
	class="image-container"
	class:full-width={shape === "full"}
>
	<div
		class="image-wrapper"
		bind:this={el}
		style={insetShadows ? `--inset-shadows: ${insetShadows}` : ""}
	>
		<img
			src={`assets/img/${sectionId}/${src}`}
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
		align-self: flex-start; /* Aligns to the left side (offset from center) */
		margin-left: 1.5rem; /* Margem da borda para não ficar colado na extremidade */
		margin-top: -2px; /* Sobrepõe a borda inferior da imagem */
		padding: 4px 12px;
		background: var(--text-bg, #0d0d0d); /* Cor de fundo do site */
		border: 2px solid var(--border);
		border-top: none; /* Elimina a borda superior para parecer uma aba conectada */
		border-radius: 0 0 6px 6px;
		z-index: 3;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
		max-width: 42%; /* Garante que a aba nunca chegue na linha central (50%) */
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.source-text {
		font-family: var(--mono, monospace);
		font-size: var(--11px, 11px);
		color: var(--color-link-hover, #ccff00); /* Neon color or similar highlighting link color */
		letter-spacing: 0.5px;
		opacity: 0.85;
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

<script>
	import themes from "$data/themes.json";
	import { getContext, onMount } from "svelte";

	let { url, title, nodeId, sectionId } = $props();
	const { registerNode } = getContext("nodeRegistry");

	let el;

	onMount(() => {
		registerNode(nodeId, el);
	});
</script>

<div
	id={nodeId}
	bind:this={el}
	class="video-wrapper"
	style={themes[sectionId]["text-style"] || null}
>
	<iframe
		src={url}
		title={title || "YouTube video player"}
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	></iframe>
</div>

<style>
	.video-wrapper {
		position: relative;
		width: 100%;
		max-width: 100%;
		aspect-ratio: 16 / 9;
		background: var(--text-bg);
		border: 2px solid var(--border);
		border-radius: var(--border-radius);
		outline-color: var(--border);
		box-shadow: var(--box-shadow);
		overflow: hidden;
		margin: 3rem auto;
		z-index: 2;
		box-sizing: border-box;
	}

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}
</style>

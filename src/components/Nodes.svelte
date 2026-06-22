<script>
	import _ from "lodash";
	import { setContext, onMount } from "svelte";
	import Text from "$components/Section.Text.svelte";
	import Image from "$components/Section.Image.svelte";
	import Images from "$components/Section.Images.svelte";
	import Chart from "$components/Section.Chart.svelte";
	import Video from "$components/Section.Video.svelte";
	import useWindowDimensions from "$runes/useWindowDimensions.svelte.js";
	// import connections from "$data/connections.json";
	let dimensions = new useWindowDimensions();

	let { id, nodes } = $props();

	const components = {
		Text,
		Image,
		Images,
		Chart,
		Video
	};

	const curvedPath = (a, b, aSide, bSide) => {
		const startX = a.x;
		const startY = a.y;
		const endX = b.x;
		const endY = b.y;

		if (aSide === "bottom" && bSide === "top") {
			const gapY = endY - startY;
			if (gapY <= 0) {
				return `M ${startX},${startY} L ${endX},${endY}`;
			}

			const midY = startY + gapY / 2;
			const dx = Math.abs(endX - startX);

			let r = 20;
			if (gapY / 2 < r) {
				r = gapY / 2;
			}
			if (dx / 2 < r) {
				r = dx / 2;
			}

			if (dx < 1) {
				return `M ${startX},${startY} L ${endX},${endY}`;
			}

			const sweep1 = startX < endX ? 0 : 1;
			const sweep2 = startX < endX ? 1 : 0;
			const targetX1 = startX < endX ? startX + r : startX - r;
			const targetX2 = startX < endX ? endX - r : endX + r;

			return `M ${startX},${startY}
				L ${startX},${midY - r}
				A ${r},${r} 0 0 ${sweep1} ${targetX1},${midY}
				L ${targetX2},${midY}
				A ${r},${r} 0 0 ${sweep2} ${endX},${midY + r}
				L ${endX},${endY}`;
		}

		return `M ${startX},${startY} L ${endX},${endY}`;
	};

	const registerNode = (id, el) => {
		nodeEls.set(id, el);
		nodeEls = new Map(nodeEls);
	};

	setContext("nodeRegistry", {
		registerNode
	});

	let svgEl = $state();
	let anchors = $state({});
	let nodeEls = $state(new Map());
	let nodeIds = $derived(
		_.orderBy(Array.from(nodeEls.keys()), (key) => {
			const parts = key.split("-");
			return parseInt(parts[parts.length - 1], 10);
		})
	);

	const connections = $derived(
		nodeIds.slice(0, -1).reduce((acc, from, i) => {
			const next = nodeIds[i + 1];

			const multi = from.split("-").length > 3;
			const nextIsMulti = next.split("-").length > 3;

			if (multi) {
				const [, , node, subnode] = from.split("-");
				const nodeNum = +node;

				acc.push({
					from,
					to: `${id}-${nodeNum + 1}`,
					fromSide: "bottom",
					toSide: "top"
				});
			} else if (nextIsMulti) {
				const parts = next.split("-");
				const baseNode = parts[2];
				const subnodes = nodeIds.filter((n) =>
					n.startsWith(`${id}-${baseNode}-`)
				);

				subnodes.forEach((to) => {
					acc.push({
						from,
						to,
						fromSide: "bottom",
						toSide: "top"
					});
				});
			} else {
				acc.push({
					from,
					to: next,
					fromSide: "bottom",
					toSide: "top"
				});
			}

			return acc;
		}, [])
	);

	const calculateAnchors = () => {
		if (!svgEl) return {};

		const svgRect = svgEl.getBoundingClientRect();
		const result = {};

		for (const [nodeId, el] of nodeEls) {
			if (!el) continue;
			const rect = el.getBoundingClientRect();
			const outlineWidth = el.style["outline-width"] || "0px";
			const outlineOffset = el.style["outline-offset"] || "0px";
			const totalOffset = parseFloat(outlineWidth) + parseFloat(outlineOffset);

			const toSvgSpace = (x, y) => ({
				x: x - svgRect.left,
				y: y - svgRect.top
			});

			result[nodeId] = {
				top: toSvgSpace(rect.left + rect.width / 2, rect.top - totalOffset),
				bottom: toSvgSpace(
					rect.left + rect.width / 2,
					rect.bottom + totalOffset
				),
				left: toSvgSpace(rect.left, rect.top + rect.height / 2),
				right: toSvgSpace(rect.right, rect.top + rect.height / 2)
			};
		}

		anchors = result;
	};

	let resizeObserver;

	onMount(() => {
		resizeObserver = new ResizeObserver(() => {
			calculateAnchors();
		});

		for (const el of nodeEls.values()) {
			if (el) resizeObserver.observe(el);
		}

		return () => {
			if (resizeObserver) resizeObserver.disconnect();
		};
	});

	$effect(() => {
		if (resizeObserver) {
			resizeObserver.disconnect();
			for (const el of nodeEls.values()) {
				if (el) resizeObserver.observe(el);
			}
		}
		calculateAnchors();
	});

	$effect(() => {
		// Keep dependency on width to force recalculation on window resize
		const _w = dimensions.width;
		calculateAnchors();
	});
</script>

<div class="content">
	<svg id={`${id}-svg`} bind:this={svgEl}>
		<!-- {#each Object.values(anchors) as a}
			<circle cx={a.top.x} cy={a.top.y} r="8" fill="lightblue" />
			<circle cx={a.bottom.x} cy={a.bottom.y} r="8" fill="lightblue" />
			<circle cx={a.left.x} cy={a.left.y} r="8" fill="lightblue" />
			<circle cx={a.right.x} cy={a.right.y} r="8" fill="lightblue" />
		{/each} -->

		{#each connections as { from, to, fromSide, toSide }}
			{#if anchors[from] && anchors[to]}
				<path
					d={curvedPath(
						anchors[from][fromSide],
						anchors[to][toSide],
						fromSide,
						toSide
					)}
					fill="none"
					stroke-width="2"
				/>
			{/if}
		{/each}
	</svg>
	{#each nodes as { type, value }, i}
		{@const C = components[type]}
		{@const isFirstSpeaker =
			value.speaker !== undefined &&
			nodes.findIndex((n) => n.value?.speaker === value.speaker) === i}
		<C sectionId={id} nodeId={`${id}-${i}`} {isFirstSpeaker} {...value} />
	{/each}
</div>

<style>
	.content {
		position: relative;
		width: 100%;
		max-width: 900px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}

	svg {
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		pointer-events: none;
		z-index: 1;
	}

	path {
		stroke: var(--line-stroke);
		opacity: 0.5;
	}
</style>

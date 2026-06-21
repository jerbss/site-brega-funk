<script>
	import Header from "./Header.svelte";
	import Scrolly from "./helpers/Scrolly.svelte";
	import HookTest from "./HookTest.svelte";
	import ExpansionMap from "./ExpansionMap.svelte";
	import TimelineChart from "./TimelineChart.svelte";
	import copy from "$data/copy.json";
	import { storySteps, currentStoryStepIndex } from "$stores/storySteps.js";

	let activeStepIndex = 0;

	// Bind active step index to global story store
	$: $currentStoryStepIndex = activeStepIndex;
</script>

<div class="scrolly-container">
	<!-- Left Side: Sticky Visualizer (Desktop) / Top Side (Mobile) -->
	<div class="visualizer-pane">
		<div class="sticky-content">
			{#if activeStepIndex === 0}
				<!-- Title card visually appealing graphic/intro -->
				<div class="title-graphic">
					<div class="glow-logo">🔊 15s</div>
					<p class="tagline">A revolução do tempo na música brasileira</p>
					<span class="pulse-indicator">Role para ler ↓</span>
				</div>
			{:else if activeStepIndex === 1}
				<HookTest />
			{:else if activeStepIndex === 2}
				<ExpansionMap stepIndex={activeStepIndex} />
			{:else if activeStepIndex === 3}
				<TimelineChart />
			{:else if activeStepIndex === 4}
				<div class="conclusion-graphic">
					<div class="summary-card">
						<h3>A Economia da Atenção</h3>
						<p>O Brega Funk redefiniu o sucesso adaptando o som às regras do jogo digital.</p>
						<span class="badge">Metodologia e Dados</span>
					</div>
				</div>
			{/if}
		</div>
	</div>

	<!-- Right Side: Scrollable Story Steps (Desktop) / Bottom Side (Mobile) -->
	<div class="story-pane">
		<Scrolly bind:value={activeStepIndex}>
			{#each storySteps as step, i}
				<div class="step-wrapper" class:active={activeStepIndex === i}>
					<div class="step-card">
						<span class="step-number">Passo 0{i + 1}</span>
						<p class="step-text">{@html step.text}</p>
						{#if step.figCaption}
							<div class="caption">{@html step.figCaption}</div>
						{/if}
					</div>
				</div>
			{/each}
		</Scrolly>
	</div>
</div>

<style>
	.scrolly-container {
		display: flex;
		position: relative;
		width: 100%;
		min-height: 100vh;
		background: var(--color-bg);
	}

	.visualizer-pane {
		position: sticky;
		top: 0;
		width: 55%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 24px;
		box-sizing: border-box;
		border-right: 1px solid rgba(255, 255, 255, 0.05);
	}

	.sticky-content {
		width: 100%;
		max-width: 750px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.story-pane {
		width: 45%;
		padding: 0 40px;
		box-sizing: border-box;
	}

	.step-wrapper {
		min-height: 100vh;
		display: flex;
		align-items: center;
		opacity: 0.15;
		transition: opacity 0.4s ease;
		padding: 10vh 0;
	}

	.step-wrapper.active {
		opacity: 1;
	}

	.step-card {
		background: #14151a;
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 8px;
		padding: 30px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
	}

	.step-number {
		font-family: var(--mono);
		font-size: var(--14px);
		color: var(--color-neon-cyan);
		font-weight: bold;
		letter-spacing: 2px;
		display: block;
		margin-bottom: 12px;
		text-transform: uppercase;
	}

	.step-text {
		font-size: var(--18px);
		line-height: 1.6;
		color: var(--color-fg);
		margin: 0 0 16px 0;
	}

	.caption {
		font-size: var(--12px);
		opacity: 0.5;
		border-left: 2px solid var(--color-neon-pink);
		padding-left: 10px;
		font-style: italic;
	}

	/* Title & Conclusion Graphics */
	.title-graphic {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.glow-logo {
		font-size: 72px;
		font-weight: bold;
		color: var(--color-neon-yellow);
		text-shadow: 0 0 20px rgba(243, 255, 0, 0.6);
		animation: pulseGlow 2s infinite alternate;
	}

	@keyframes pulseGlow {
		from { text-shadow: 0 0 20px rgba(243, 255, 0, 0.6); }
		to { text-shadow: 0 0 35px rgba(243, 255, 0, 0.9); }
	}

	.tagline {
		margin-top: 16px;
		font-size: var(--20px);
		color: var(--color-fg);
		opacity: 0.8;
	}

	.pulse-indicator {
		margin-top: 32px;
		font-size: var(--12px);
		color: var(--color-neon-cyan);
		opacity: 0.7;
		animation: bounce 1.5s infinite;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	@keyframes bounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(8px); }
	}

	.conclusion-graphic {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.summary-card {
		background: #14151a;
		border: 1px dashed var(--color-neon-pink);
		border-radius: 8px;
		padding: 24px;
		max-width: 400px;
		text-align: center;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
	}

	.summary-card h3 {
		margin-top: 0;
		color: var(--color-neon-pink);
	}

	.summary-card p {
		font-size: var(--14px);
		opacity: 0.8;
		line-height: 1.5;
		color: var(--color-fg);
	}

	.badge {
		display: inline-block;
		background: var(--color-neon-cyan);
		color: #000000;
		font-size: 10px;
		font-weight: bold;
		padding: 4px 10px;
		border-radius: 12px;
		text-transform: uppercase;
		margin-top: 12px;
		cursor: pointer;
	}

	/* Mobile responsive styles */
	@media (max-width: 1000px) {
		.scrolly-container {
			flex-direction: column;
		}

		.visualizer-pane {
			position: sticky;
			top: 0;
			width: 100%;
			height: 48vh;
			z-index: 10;
			background: rgba(14, 15, 17, 0.95);
			backdrop-filter: blur(10px);
			border-right: none;
			border-bottom: 1px solid rgba(255, 255, 255, 0.05);
			padding: 12px;
		}

		.story-pane {
			width: 100%;
			padding: 0 16px;
		}

		.step-wrapper {
			min-height: 52vh;
			padding: 10vh 0;
		}

		.step-card {
			padding: 20px;
		}
	}
</style>
import { derived, writable } from "svelte/store";
import copy from "$data/copy.json";

const stepsWithoutText = {
	intro: {},
	hookTestStep: {},
	expansionMapStep: {},
	timelineChartStep: {},
	conclusionStep: {}
};

export const storySteps = Object.keys(stepsWithoutText).map((key, index) => ({
	id: key,
	index,
	text: copy.stepText[key].copy,
	figCaption: copy.stepText[key].figCaption
}));

export const currentStoryStepIndex = writable(0);

export const TOTAL_STORY_STEPS = storySteps.length;

export const currentStoryStep = derived(
	[currentStoryStepIndex],
	([$currentStoryStepIndex]) => storySteps[$currentStoryStepIndex]
);

export const isLastStep = derived(
	[currentStoryStepIndex],
	([$currentStoryStepIndex]) => $currentStoryStepIndex === TOTAL_STORY_STEPS - 1
);

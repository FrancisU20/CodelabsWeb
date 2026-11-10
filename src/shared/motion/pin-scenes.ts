import { activeIndex, entryProgress, pinProgress } from "./progress";
import type { SceneContext } from "./scene-context";
import { writeProgress } from "./scene-progress";
import { renderCounters } from "./scroll-counters";

const isStory = (section: HTMLElement): boolean => section.dataset.story !== undefined;

const storyCount = (section: HTMLElement): number => Number(section.dataset.storyCount);

export const measurePins = (context: SceneContext) => {
  context.metrics = context.pins.map((section) => ({
    section,
    top: section.getBoundingClientRect().top + window.scrollY,
    length: section.offsetHeight - window.innerHeight,
    counters: context.counters.filter((counter) => section.contains(counter)),
  }));
};

export const renderPins = (context: SceneContext) =>
  context.metrics.forEach(({ section, top, length, counters }) => {
    renderCounters(counters, entryProgress(window.scrollY, top, window.innerHeight));
    const progress = pinProgress(window.scrollY, top, length);
    if (!writeProgress(context, section, progress) || !isStory(section)) return;
    section.dataset.active = String(activeIndex(progress, storyCount(section)));
  });

export const resetStories = (context: SceneContext) =>
  context.pins.filter(isStory).forEach((section) => {
    section.dataset.active = "0";
  });

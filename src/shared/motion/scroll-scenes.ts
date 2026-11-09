import { measureTrack } from "./horizontal-track";
import { MOTION_CLASS, REDUCED_MOTION_QUERY, WIDE_SCREEN_QUERY } from "./motion-mode";
import { activeIndex, pinProgress, scrubProgress } from "./progress";
import { observeReveals } from "./reveal-observer";
import type { SceneContext } from "./scene-context";
import { renderCounters, showFinalCounters } from "./scroll-counters";

const STORY_SCREENS = 3;

const queryAll = (selector: string): HTMLElement[] => [...document.querySelectorAll<HTMLElement>(selector)];

const isStory = (section: HTMLElement): boolean => section.dataset.story !== undefined;

const isMotionActive = (context: SceneContext): boolean => context.root.classList.contains(MOTION_CLASS);

const writeProgress = (context: SceneContext, element: HTMLElement, progress: number): boolean => {
  const value = progress.toFixed(4);
  if (context.renderedValues.get(element) === value) return false;
  context.renderedValues.set(element, value);
  element.style.setProperty("--p", value);
  return true;
};

const measure = (context: SceneContext) => {
  context.tracks.forEach((section) => measureTrack(section, isMotionActive(context)));
  context.metrics = context.pins.map((section) => ({
    section,
    top: section.getBoundingClientRect().top + window.scrollY,
    length: section.offsetHeight - window.innerHeight,
    counters: context.counters.filter((counter) => section.contains(counter)),
  }));
};

const renderScrubs = (context: SceneContext) =>
  context.scrubs
    .map((element) => ({ element, progress: scrubProgress(element.getBoundingClientRect().top, window.innerHeight) }))
    .forEach(({ element, progress }) => writeProgress(context, element, progress));

const renderPins = (context: SceneContext) =>
  context.metrics.forEach(({ section, top, length, counters }) => {
    const progress = pinProgress(window.scrollY, top, length);
    if (!writeProgress(context, section, progress)) return;
    if (isStory(section)) {
      section.dataset.active = String(activeIndex(progress, STORY_SCREENS));
    }
    renderCounters(counters, progress);
  });

const render = (context: SceneContext) => {
  context.frameRequested = false;
  if (!isMotionActive(context)) return;
  renderScrubs(context);
  renderPins(context);
};

const requestRender = (context: SceneContext) => {
  if (context.frameRequested) return;
  context.frameRequested = true;
  window.requestAnimationFrame(() => render(context));
};

const showStaticState = (context: SceneContext) => {
  context.renderedValues.clear();
  [...context.pins, ...context.scrubs].forEach((element) => element.style.removeProperty("--p"));
  context.pins.filter(isStory).forEach((section) => {
    section.dataset.active = "0";
  });
  showFinalCounters(context.counters);
};

const applyMode = (context: SceneContext) => {
  const motionOn = !context.reducedMotion.matches && context.wideScreen.matches;
  context.root.classList.toggle(MOTION_CLASS, motionOn);
  measure(context);
  if (!motionOn) {
    showStaticState(context);
    return;
  }
  render(context);
};

const createContext = (): SceneContext => ({
  root: document.documentElement,
  reducedMotion: window.matchMedia(REDUCED_MOTION_QUERY),
  wideScreen: window.matchMedia(WIDE_SCREEN_QUERY),
  pins: queryAll("[data-pin]"),
  scrubs: queryAll("[data-scrub]"),
  tracks: queryAll("[data-track]"),
  counters: queryAll("[data-count]"),
  metrics: [],
  renderedValues: new Map(),
  frameRequested: false,
});

export const startScrollScenes = (): (() => void) => {
  const context = createContext();
  let active = true;
  const onScroll = () => requestRender(context);
  const onLayoutChange = () => {
    if (!active) return;
    measure(context);
    requestRender(context);
  };
  const onModeChange = () => applyMode(context);
  const revealObserver = observeReveals(queryAll("[data-reveal]"), context.reducedMotion.matches);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onLayoutChange);
  window.addEventListener("load", onLayoutChange);
  context.reducedMotion.addEventListener("change", onModeChange);
  context.wideScreen.addEventListener("change", onModeChange);
  document.fonts?.ready.then(onLayoutChange);
  applyMode(context);
  return () => {
    active = false;
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onLayoutChange);
    window.removeEventListener("load", onLayoutChange);
    context.reducedMotion.removeEventListener("change", onModeChange);
    context.wideScreen.removeEventListener("change", onModeChange);
    revealObserver.disconnect();
  };
};

import { measureTrack } from "./horizontal-track";
import { MOTION_CLASS, REDUCED_MOTION_QUERY } from "./motion-mode";
import { measurePins, renderPins, resetStories } from "./pin-scenes";
import { observeReveals } from "./reveal-observer";
import type { SceneContext } from "./scene-context";
import { clearProgress } from "./scene-progress";
import { showFinalCounters } from "./scroll-counters";
import { renderScrubs } from "./scrub-scenes";

const queryAll = (selector: string): HTMLElement[] => [...document.querySelectorAll<HTMLElement>(selector)];

const isMotionActive = (context: SceneContext): boolean => context.root.classList.contains(MOTION_CLASS);

const measure = (context: SceneContext) => {
  context.tracks.forEach((section) => measureTrack(section, isMotionActive(context)));
  measurePins(context);
};

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
  clearProgress(context, [...context.pins, ...context.scrubs]);
  resetStories(context);
  showFinalCounters(context.counters);
};

const applyMode = (context: SceneContext) => {
  const motionOn = !context.reducedMotion.matches;
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
  viewportWidth: window.innerWidth,
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
  const onResize = () => {
    if (window.innerWidth === context.viewportWidth) return;
    context.viewportWidth = window.innerWidth;
    onLayoutChange();
  };
  const onModeChange = () => applyMode(context);
  const revealObserver = observeReveals(queryAll("[data-reveal]"), context.reducedMotion.matches);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  window.addEventListener("load", onLayoutChange);
  context.reducedMotion.addEventListener("change", onModeChange);
  document.fonts?.ready.then(onLayoutChange);
  applyMode(context);
  return () => {
    active = false;
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
    window.removeEventListener("load", onLayoutChange);
    context.reducedMotion.removeEventListener("change", onModeChange);
    revealObserver.disconnect();
  };
};

import { MOTION_CLASS, REDUCED_MOTION_QUERY } from "./motion-mode";
import { activeIndex, clampUnit, pinProgress, scrubProgress } from "./progress";
import type { SceneContext } from "./scene-context";

const PENDING_REVEAL_CLASS = "is-pending";
const STORY_SCREENS = 3;
const TRACK_BREAKPOINT = "(min-width: 761px)";
const TRACK_TAIL_VIEWPORTS = 1.2;
const COUNTER_SPEED = 1.8;
const REVEAL_THRESHOLD = 0.15;

const queryAll = (selector: string): HTMLElement[] => [...document.querySelectorAll<HTMLElement>(selector)];

const counterText = (counter: HTMLElement, value: number): string =>
  `${counter.dataset.prefix ?? ""}${value}${counter.dataset.suffix ?? ""}`;

const isStory = (section: HTMLElement): boolean => section.dataset.story !== undefined;

const writeProgress = (context: SceneContext, element: HTMLElement, progress: number): boolean => {
  const value = progress.toFixed(4);
  if (context.renderedValues.get(element) === value) return false;
  context.renderedValues.set(element, value);
  element.style.setProperty("--p", value);
  return true;
};

const measureTrack = (context: SceneContext, section: HTMLElement) => {
  const rail = section.querySelector<HTMLElement>("[data-track-rail]");
  section.style.removeProperty("height");
  rail?.style.removeProperty("--dist");
  if (!rail || !context.root.classList.contains(MOTION_CLASS) || !context.wideScreen.matches) return;
  const distance = Math.max(0, rail.scrollWidth - window.innerWidth);
  rail.style.setProperty("--dist", `${distance}px`);
  section.style.height = `${distance + window.innerHeight * TRACK_TAIL_VIEWPORTS}px`;
};

const measure = (context: SceneContext) => {
  context.tracks.forEach((section) => measureTrack(context, section));
  context.metrics = context.pins.map((section) => ({
    section,
    top: section.getBoundingClientRect().top + window.scrollY,
    length: section.offsetHeight - window.innerHeight,
  }));
};

const updateCounters = (context: SceneContext, section: HTMLElement, progress: number) =>
  context.counters
    .filter((counter) => section.contains(counter))
    .forEach((counter) => {
      const target = Number(counter.dataset.count);
      counter.textContent = counterText(counter, Math.round(target * clampUnit(progress * COUNTER_SPEED)));
    });

const renderScrubs = (context: SceneContext) =>
  context.scrubs.forEach((element) => {
    writeProgress(context, element, scrubProgress(element.getBoundingClientRect().top, window.innerHeight));
  });

const renderPins = (context: SceneContext) =>
  context.metrics.forEach(({ section, top, length }) => {
    const progress = pinProgress(window.scrollY, top, length);
    if (!writeProgress(context, section, progress)) return;
    if (isStory(section)) {
      section.dataset.active = String(activeIndex(progress, STORY_SCREENS));
    }
    updateCounters(context, section, progress);
  });

const render = (context: SceneContext) => {
  context.frameRequested = false;
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
  context.counters.forEach((counter) => {
    counter.textContent = counterText(counter, Number(counter.dataset.count));
  });
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

const observeReveals = (reducedMotion: MediaQueryList): IntersectionObserver => {
  const observer = new IntersectionObserver(
    (entries) =>
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          entry.target.classList.remove(PENDING_REVEAL_CLASS);
          observer.unobserve(entry.target);
        }),
    { threshold: REVEAL_THRESHOLD },
  );
  queryAll("[data-reveal]")
    .filter((element) => !reducedMotion.matches && element.getBoundingClientRect().top >= window.innerHeight)
    .forEach((element) => {
      element.classList.add(PENDING_REVEAL_CLASS);
      observer.observe(element);
    });
  return observer;
};

const createContext = (): SceneContext => ({
  root: document.documentElement,
  reducedMotion: window.matchMedia(REDUCED_MOTION_QUERY),
  wideScreen: window.matchMedia(TRACK_BREAKPOINT),
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
  const revealObserver = observeReveals(context.reducedMotion);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onLayoutChange);
  window.addEventListener("load", onLayoutChange);
  context.reducedMotion.addEventListener("change", onModeChange);
  context.wideScreen.addEventListener("change", onLayoutChange);
  document.fonts?.ready.then(onLayoutChange);
  applyMode(context);
  return () => {
    active = false;
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onLayoutChange);
    window.removeEventListener("load", onLayoutChange);
    context.reducedMotion.removeEventListener("change", onModeChange);
    context.wideScreen.removeEventListener("change", onLayoutChange);
    revealObserver.disconnect();
  };
};

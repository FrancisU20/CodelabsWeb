import type { PinMetric } from "./pin-metric";

export type SceneContext = {
  root: HTMLElement;
  reducedMotion: MediaQueryList;
  viewportWidth: number;
  pins: HTMLElement[];
  scrubs: HTMLElement[];
  tracks: HTMLElement[];
  counters: HTMLElement[];
  metrics: PinMetric[];
  renderedValues: Map<HTMLElement, string>;
  frameRequested: boolean;
  countObserver: IntersectionObserver | null;
};

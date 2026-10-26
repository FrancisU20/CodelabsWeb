const SCRUB_START_VIEWPORT = 0.9;
const SCRUB_LENGTH_VIEWPORTS = 0.55;

export const clampUnit = (value: number): number => Math.min(1, Math.max(0, value));

export const pinProgress = (scrollY: number, top: number, length: number): number =>
  length > 0 ? clampUnit((scrollY - top) / length) : 1;

export const scrubProgress = (elementTop: number, viewportHeight: number): number =>
  clampUnit((viewportHeight * SCRUB_START_VIEWPORT - elementTop) / (viewportHeight * SCRUB_LENGTH_VIEWPORTS));

export const activeIndex = (progress: number, count: number): number => Math.min(count - 1, Math.floor(progress * count));

import { clampUnit } from "./progress";

const COUNTER_SPEED = 1.25;
const COUNT_UP_DURATION_MS = 1200;
const COUNT_UP_THRESHOLD = 0.4;

const counterTarget = (counter: HTMLElement): number => Number(counter.dataset.count);

const writeCounter = (counter: HTMLElement, value: number) => {
  counter.textContent = `${counter.dataset.prefix ?? ""}${value}${counter.dataset.suffix ?? ""}`;
};

export const renderCounters = (counters: HTMLElement[], progress: number) =>
  counters.forEach((counter) => writeCounter(counter, Math.round(counterTarget(counter) * clampUnit(progress * COUNTER_SPEED))));

export const showFinalCounters = (counters: HTMLElement[]) =>
  counters.forEach((counter) => writeCounter(counter, counterTarget(counter)));

const countUp = (counter: HTMLElement, startedAt: number, now: number) => {
  const progress = clampUnit((now - startedAt) / COUNT_UP_DURATION_MS);
  writeCounter(counter, Math.round(counterTarget(counter) * progress));
  if (progress < 1) window.requestAnimationFrame((next) => countUp(counter, startedAt, next));
};

export const countUpOnView = (counters: HTMLElement[]): IntersectionObserver => {
  const observer = new IntersectionObserver(
    (entries) =>
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          observer.unobserve(entry.target);
          window.requestAnimationFrame((now) => countUp(entry.target as HTMLElement, now, now));
        }),
    { threshold: COUNT_UP_THRESHOLD },
  );
  counters.forEach((counter) => {
    writeCounter(counter, 0);
    observer.observe(counter);
  });
  return observer;
};

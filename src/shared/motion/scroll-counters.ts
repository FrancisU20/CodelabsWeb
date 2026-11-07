import { clampUnit } from "./progress";

const COUNTER_SPEED = 1.8;

const counterTarget = (counter: HTMLElement): number => Number(counter.dataset.count);

const writeCounter = (counter: HTMLElement, value: number) => {
  counter.textContent = `${counter.dataset.prefix ?? ""}${value}${counter.dataset.suffix ?? ""}`;
};

export const renderCounters = (counters: HTMLElement[], progress: number) =>
  counters.forEach((counter) => writeCounter(counter, Math.round(counterTarget(counter) * clampUnit(progress * COUNTER_SPEED))));

export const showFinalCounters = (counters: HTMLElement[]) =>
  counters.forEach((counter) => writeCounter(counter, counterTarget(counter)));

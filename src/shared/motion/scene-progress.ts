import type { SceneContext } from "./scene-context";

export const writeProgress = (context: SceneContext, element: HTMLElement, progress: number): boolean => {
  const value = progress.toFixed(4);
  if (context.renderedValues.get(element) === value) return false;
  context.renderedValues.set(element, value);
  element.style.setProperty("--p", value);
  return true;
};

export const clearProgress = (context: SceneContext, elements: HTMLElement[]) => {
  context.renderedValues.clear();
  elements.forEach((element) => element.style.removeProperty("--p"));
};

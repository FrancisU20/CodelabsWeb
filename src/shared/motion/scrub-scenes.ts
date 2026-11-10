import { scrubProgress } from "./progress";
import type { SceneContext } from "./scene-context";
import { writeProgress } from "./scene-progress";

export const renderScrubs = (context: SceneContext) =>
  context.scrubs
    .map((element) => ({ element, progress: scrubProgress(element.getBoundingClientRect().top, window.innerHeight) }))
    .forEach(({ element, progress }) => writeProgress(context, element, progress));

import type { Guide } from "./guide";
import type { GuideBlock } from "./guide-block";

const WORDS_PER_MINUTE = 200;

const blockText = (block: GuideBlock): string[] => {
  if (block.kind === "paragraph") return [block.text];
  if (block.kind === "list") return block.items;
  return [...block.head, ...block.rows.flat()];
};

const guideText = (guide: Guide): string[] => [
  guide.summary,
  ...guide.sections.flatMap((guideSection) => [guideSection.heading, ...guideSection.blocks.flatMap(blockText)]),
  ...guide.faqs.flatMap((entry) => [entry.question, entry.answer]),
];

export const readingMinutes = (guide: Guide): number =>
  Math.max(1, Math.round(guideText(guide).join(" ").split(/\s+/).length / WORDS_PER_MINUTE));

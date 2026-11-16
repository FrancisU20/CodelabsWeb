import type { Guide } from "./guide";
import type { GuideBlock } from "./guide-block";
import type { GuidePoint } from "./guide-point";

const WORDS_PER_MINUTE = 200;

const pointText = (point: GuidePoint): string[] => [point.title, point.text ?? ""];

const blockText = (block: GuideBlock): string[] => {
  switch (block.kind) {
    case "paragraph":
    case "answer":
      return [block.text];
    case "list":
    case "alerts":
      return block.items;
    case "points":
    case "steps":
    case "checklist":
      return block.items.flatMap(pointText);
    case "tiers":
      return block.items.flatMap((tier) => [tier.name, tier.price, tier.detail, tier.text]);
    case "table":
      return [...block.head, ...block.rows.flat()];
  }
};

const guideText = (guide: Guide): string[] => [
  guide.summary,
  ...guide.sections.flatMap((guideSection) => [guideSection.heading, ...guideSection.blocks.flatMap(blockText)]),
  ...guide.faqs.flatMap((entry) => [entry.question, entry.answer]),
];

export const readingMinutes = (guide: Guide): number =>
  Math.max(1, Math.round(guideText(guide).join(" ").split(/\s+/).length / WORDS_PER_MINUTE));

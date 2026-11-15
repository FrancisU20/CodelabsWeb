import type { GuideBlock } from "./guide-block";
import type { GuideFaq } from "./guide-faq";
import type { GuideSection } from "./guide-section";

const SPANISH_ECUADOR = "es-EC";

export const usd = (amount: number): string =>
  new Intl.NumberFormat(SPANISH_ECUADOR, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount);

export const paragraph = (text: string): GuideBlock => ({ kind: "paragraph", text });

export const list = (...items: string[]): GuideBlock => ({ kind: "list", items });

export const table = (head: string[], ...rows: string[][]): GuideBlock => ({ kind: "table", head, rows });

export const section = (heading: string, ...blocks: GuideBlock[]): GuideSection => ({ heading, blocks });

export const faq = (question: string, answer: string): GuideFaq => ({ question, answer });

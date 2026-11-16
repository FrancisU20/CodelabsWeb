import type { GuideBlock } from "./guide-block";
import type { GuideFaq } from "./guide-faq";
import type { GuidePoint } from "./guide-point";
import type { GuideSection } from "./guide-section";
import type { GuideTier } from "./guide-tier";

const SPANISH_ECUADOR = "es-EC";

type PointEntry = readonly [title: string, text?: string];

const toPoint = ([title, text]: PointEntry): GuidePoint => ({ title, text });

export const usd = (amount: number): string =>
  new Intl.NumberFormat(SPANISH_ECUADOR, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount);

export const paragraph = (text: string): GuideBlock => ({ kind: "paragraph", text });

export const answer = (text: string): GuideBlock => ({ kind: "answer", text });

export const list = (...items: string[]): GuideBlock => ({ kind: "list", items });

export const points = (...items: PointEntry[]): GuideBlock => ({ kind: "points", items: items.map(toPoint) });

export const steps = (...items: PointEntry[]): GuideBlock => ({ kind: "steps", items: items.map(toPoint) });

export const checklist = (...items: PointEntry[]): GuideBlock => ({ kind: "checklist", items: items.map(toPoint) });

export const alerts = (...items: string[]): GuideBlock => ({ kind: "alerts", items });

export const tiers = (...items: GuideTier[]): GuideBlock => ({ kind: "tiers", items });

export const table = (head: string[], ...rows: string[][]): GuideBlock => ({ kind: "table", head, rows });

export const section = (heading: string, ...blocks: GuideBlock[]): GuideSection => ({ heading, blocks });

export const faq = (question: string, answer: string): GuideFaq => ({ question, answer });

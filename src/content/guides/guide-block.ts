import type { GuidePoint } from "./guide-point";
import type { GuideTier } from "./guide-tier";

export type GuideBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "answer"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "points"; items: GuidePoint[] }
  | { kind: "steps"; items: GuidePoint[] }
  | { kind: "checklist"; items: GuidePoint[] }
  | { kind: "alerts"; items: string[] }
  | { kind: "tiers"; items: GuideTier[] }
  | { kind: "table"; head: string[]; rows: string[][] };

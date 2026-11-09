import type { LegalSection } from "./legal-section";

export type LegalDocument = {
  layout: "articles" | "cards";
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  notice?: string;
  sections: LegalSection[];
};

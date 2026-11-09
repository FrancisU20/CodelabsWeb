import type { LegalBlock } from "./legal-block";

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

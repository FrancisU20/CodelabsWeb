import { describe, expect, it } from "vitest";
import type { LegalDocument } from "./legal-document";
import type { LegalDocumentKey } from "./legal-document-key";
import { LEGAL_DOCUMENTS } from "./legal-documents";

const inlineKinds = (content: LegalDocument["sections"][number]["blocks"][number]): string[] =>
  (content.kind === "paragraph" ? content.content : content.items.flat()).map((part) => (typeof part === "string" ? "text" : part.kind));

const shape = (document: LegalDocument) => document.sections.map((section) => section.blocks.map((block) => [block.kind, inlineKinds(block)]));

describe("LEGAL_DOCUMENTS", () => {
  it.each(Object.keys(LEGAL_DOCUMENTS) as LegalDocumentKey[])("LEGAL_DOCUMENTS_%s_englishMirrorsSpanishStructure", (key) => {
    expect(shape(LEGAL_DOCUMENTS[key].en)).toEqual(shape(LEGAL_DOCUMENTS[key].es));
  });
});

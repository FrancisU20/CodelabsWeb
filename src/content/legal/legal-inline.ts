import type { LegalDocumentKey } from "./legal-document-key";

export type LegalInline =
  | string
  | { kind: "email"; subject?: string }
  | { kind: "privacyEmail" }
  | { kind: "phone" }
  | { kind: "whatsapp"; message: string }
  | { kind: "document"; document: LegalDocumentKey; label: string };

import type { LegalBlock } from "./legal-block";
import type { LegalDocumentKey } from "./legal-document-key";
import type { LegalInline } from "./legal-inline";

export const COURTESY_TRANSLATION_NOTICE = "This is a courtesy translation. The Spanish version prevails.";

export const EMAIL: LegalInline = { kind: "email" };

export const PHONE: LegalInline = { kind: "phone" };

export const emailWithSubject = (subject: string): LegalInline => ({ kind: "email", subject });

export const whatsApp = (message: string): LegalInline => ({ kind: "whatsapp", message });

export const documentLink = (document: LegalDocumentKey, label: string): LegalInline => ({ kind: "document", document, label });

export const paragraph = (...content: LegalInline[]): LegalBlock => ({ kind: "paragraph", content });

export const list = (...items: LegalInline[][]): LegalBlock => ({ kind: "list", items });

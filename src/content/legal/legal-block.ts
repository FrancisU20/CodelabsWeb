import type { LegalInline } from "./legal-inline";

export type LegalBlock = { kind: "paragraph"; content: LegalInline[] } | { kind: "list"; items: LegalInline[][] };

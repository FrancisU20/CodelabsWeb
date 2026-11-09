import type { LegalDocumentKey } from "@/content/legal/legal-document-key";
import { LEGAL_DOCUMENTS } from "@/content/legal/legal-documents";
import LegalDocumentPage from "@/features/legal/legal-document-page";
import type { Locale } from "@/i18n/locale";

const LegalView = ({ documentKey, locale }: { documentKey: LegalDocumentKey; locale: Locale }) => (
  <LegalDocumentPage document={LEGAL_DOCUMENTS[documentKey][locale]} locale={locale} />
);

export default LegalView;

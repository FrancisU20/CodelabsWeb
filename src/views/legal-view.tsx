import type { LegalDocumentKey } from "@/content/legal/legal-document-key";
import { LEGAL_DOCUMENTS } from "@/content/legal/legal-documents";
import LegalDocumentPage from "@/features/legal/legal-document-page";
import LegalMeta from "@/features/legal/legal-meta";
import type { Locale } from "@/i18n/locale";
import PageIntro from "@/layout/page-intro/page-intro";

const LegalView = ({ documentKey, locale }: { documentKey: LegalDocumentKey; locale: Locale }) => {
  const document = LEGAL_DOCUMENTS[documentKey][locale];

  return (
    <>
      <PageIntro eyebrow={document.eyebrow} title={document.title} description={document.intro} tone="deep" actions={<LegalMeta document={document} />} />
      <LegalDocumentPage document={document} locale={locale} />
    </>
  );
};

export default LegalView;

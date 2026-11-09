import type { Locale } from "@/i18n/locale";
import { dataProcessing as dataProcessingEn } from "./en/data-processing";
import { privacy as privacyEn } from "./en/privacy";
import { terms as termsEn } from "./en/terms";
import { unsubscribe as unsubscribeEn } from "./en/unsubscribe";
import { dataProcessing as dataProcessingEs } from "./es/data-processing";
import { privacy as privacyEs } from "./es/privacy";
import { terms as termsEs } from "./es/terms";
import { unsubscribe as unsubscribeEs } from "./es/unsubscribe";
import type { LegalDocument } from "./legal-document";
import type { LegalDocumentKey } from "./legal-document-key";

export const LEGAL_DOCUMENTS: Record<LegalDocumentKey, Record<Locale, LegalDocument>> = {
  privacy: { es: privacyEs, en: privacyEn },
  terms: { es: termsEs, en: termsEn },
  dataProcessing: { es: dataProcessingEs, en: dataProcessingEn },
  unsubscribe: { es: unsubscribeEs, en: unsubscribeEn },
};

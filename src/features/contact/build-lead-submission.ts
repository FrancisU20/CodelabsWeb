import { LEAD_CONSENT_VERSION } from "@/config/contact";
import type { Locale } from "@/i18n/locale";
import { fieldValue } from "./form-field-value";
import type { LeadSubmission } from "./lead-submission";

export const HONEYPOT_FIELD = "website";

export const buildLeadSubmission = (data: FormData, locale: Locale, elapsedMs: number): LeadSubmission => ({
  formType: "contact",
  locale,
  name: fieldValue(data, "name"),
  company: fieldValue(data, "company"),
  email: fieldValue(data, "email"),
  project: fieldValue(data, "project"),
  consentVersion: LEAD_CONSENT_VERSION,
  honeypot: fieldValue(data, HONEYPOT_FIELD),
  elapsedMs: Math.round(elapsedMs),
});

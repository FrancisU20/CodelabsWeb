import type { Locale } from "@/i18n/locale";

export type LeadSubmission = {
  formType: "contact";
  locale: Locale;
  name: string;
  company: string;
  email: string;
  project: string;
  consentVersion: string;
  honeypot: string;
  elapsedMs: number;
};

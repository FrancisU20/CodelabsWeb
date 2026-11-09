import { buildLegalMetadata } from "@/i18n/page-metadata";
import LegalView from "@/views/legal-view";

export const metadata = buildLegalMetadata("privacy", "en");

export default function PrivacyPage() {
  return <LegalView documentKey="privacy" locale="en" />;
}

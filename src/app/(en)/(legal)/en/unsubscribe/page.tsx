import { buildLegalMetadata } from "@/i18n/page-metadata";
import LegalView from "@/views/legal-view";

export const metadata = buildLegalMetadata("unsubscribe", "en");

export default function UnsubscribePage() {
  return <LegalView documentKey="unsubscribe" locale="en" />;
}

import { buildLegalMetadata } from "@/i18n/page-metadata";
import LegalView from "@/views/legal-view";

export const metadata = buildLegalMetadata("dataProcessing", "en");

export default function DataProcessingPage() {
  return <LegalView documentKey="dataProcessing" locale="en" />;
}

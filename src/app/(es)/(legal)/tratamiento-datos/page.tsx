import { buildLegalMetadata } from "@/i18n/page-metadata";
import LegalView from "@/views/legal-view";

export const metadata = buildLegalMetadata("dataProcessing", "es");

export default function DataProcessingPage() {
  return <LegalView documentKey="dataProcessing" locale="es" />;
}

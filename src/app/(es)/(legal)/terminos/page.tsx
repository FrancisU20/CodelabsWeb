import { buildLegalMetadata } from "@/i18n/page-metadata";
import LegalView from "@/views/legal-view";

export const metadata = buildLegalMetadata("terms", "es");

export default function TermsPage() {
  return <LegalView documentKey="terms" locale="es" />;
}

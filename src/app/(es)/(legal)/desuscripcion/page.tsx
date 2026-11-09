import { buildLegalMetadata } from "@/i18n/page-metadata";
import LegalView from "@/views/legal-view";

export const metadata = buildLegalMetadata("unsubscribe", "es");

export default function UnsubscribePage() {
  return <LegalView documentKey="unsubscribe" locale="es" />;
}

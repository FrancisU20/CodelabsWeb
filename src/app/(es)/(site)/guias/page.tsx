import { buildGuidesMetadata } from "@/i18n/page-metadata";
import GuidesView from "@/views/guides-view";

export const metadata = buildGuidesMetadata();

export default function GuiasPage() {
  return <GuidesView locale="es" />;
}

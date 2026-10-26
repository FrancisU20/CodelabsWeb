import { buildPageMetadata } from "@/i18n/page-metadata";
import WorkView from "@/views/work-view";

export const metadata = buildPageMetadata("work", "es");

export default function CasosPage() {
  return <WorkView locale="es" />;
}

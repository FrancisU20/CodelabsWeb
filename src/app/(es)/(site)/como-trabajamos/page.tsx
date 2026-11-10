import { buildPageMetadata } from "@/i18n/page-metadata";
import HowWeWorkView from "@/views/how-we-work-view";

export const metadata = buildPageMetadata("howWeWork", "es");

export default function ComoTrabajamosPage() {
  return <HowWeWorkView locale="es" />;
}

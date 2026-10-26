import { buildPageMetadata } from "@/i18n/page-metadata";
import ServicesView from "@/views/services-view";

export const metadata = buildPageMetadata("services", "es");

export default function ServiciosPage() {
  return <ServicesView locale="es" />;
}

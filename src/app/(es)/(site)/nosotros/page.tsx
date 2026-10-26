import { buildPageMetadata } from "@/i18n/page-metadata";
import AboutView from "@/views/about-view";

export const metadata = buildPageMetadata("about", "es");

export default function NosotrosPage() {
  return <AboutView locale="es" />;
}

import { buildPageMetadata } from "@/i18n/page-metadata";
import ServicesView from "@/views/services-view";

export const metadata = buildPageMetadata("services", "en");

export default function ServicesPage() {
  return <ServicesView locale="en" />;
}

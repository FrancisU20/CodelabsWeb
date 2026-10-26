import { buildPageMetadata } from "@/i18n/page-metadata";
import ContactView from "@/views/contact-view";

export const metadata = buildPageMetadata("contact", "es");

export default function ContactoPage() {
  return <ContactView locale="es" />;
}

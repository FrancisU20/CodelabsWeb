import { buildPageMetadata } from "@/i18n/page-metadata";
import ContactView from "@/views/contact-view";

export const metadata = buildPageMetadata("contact", "en");

export default function ContactPage() {
  return <ContactView locale="en" />;
}

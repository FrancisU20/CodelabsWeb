import { buildPageMetadata } from "@/i18n/page-metadata";
import AboutView from "@/views/about-view";

export const metadata = buildPageMetadata("about", "en");

export default function AboutPage() {
  return <AboutView locale="en" />;
}

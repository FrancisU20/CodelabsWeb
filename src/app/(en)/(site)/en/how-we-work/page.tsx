import { buildPageMetadata } from "@/i18n/page-metadata";
import HowWeWorkView from "@/views/how-we-work-view";

export const metadata = buildPageMetadata("howWeWork", "en");

export default function HowWeWorkPage() {
  return <HowWeWorkView locale="en" />;
}

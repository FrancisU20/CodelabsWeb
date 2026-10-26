import { buildPageMetadata } from "@/i18n/page-metadata";
import WorkView from "@/views/work-view";

export const metadata = buildPageMetadata("work", "en");

export default function CaseStudiesPage() {
  return <WorkView locale="en" />;
}

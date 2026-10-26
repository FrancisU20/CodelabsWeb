import { buildPageMetadata } from "@/i18n/page-metadata";
import HomeView from "@/views/home-view";

export const metadata = buildPageMetadata("home", "en");

export default function HomePageEn() {
  return <HomeView locale="en" />;
}

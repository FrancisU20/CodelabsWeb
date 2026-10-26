import { buildPageMetadata } from "@/i18n/page-metadata";
import HomeView from "@/views/home-view";

export const metadata = buildPageMetadata("home", "es");

export default function HomePage() {
  return <HomeView locale="es" />;
}

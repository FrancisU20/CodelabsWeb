import type { MetadataRoute } from "next";
import { LOCALES } from "@/i18n/locale";
import { absoluteUrl } from "@/i18n/page-metadata";
import type { PageKey } from "@/i18n/page-key";
import { SITE_URL } from "@/config/site";
import { LEGAL_PATHS, ROUTES } from "@/i18n/routing";

export const dynamic = "force-static";

const HOME_PRIORITY = 1;
const PAGE_PRIORITY = 0.8;
const LEGAL_PRIORITY = 0.3;

const entriesFor = (page: PageKey): MetadataRoute.Sitemap =>
  LOCALES.map((locale) => ({
    url: absoluteUrl(page, locale),
    changeFrequency: "monthly",
    priority: page === "home" ? HOME_PRIORITY : PAGE_PRIORITY,
    alternates: { languages: { es: absoluteUrl(page, "es"), en: absoluteUrl(page, "en") } },
  }));

const legalEntries = (): MetadataRoute.Sitemap =>
  Object.values(LEGAL_PATHS).map((path) => ({ url: `${SITE_URL}${path}`, changeFrequency: "yearly", priority: LEGAL_PRIORITY }));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...(Object.keys(ROUTES) as PageKey[]).flatMap(entriesFor), ...legalEntries()];
}

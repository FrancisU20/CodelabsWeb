import type { MetadataRoute } from "next";
import type { Locale } from "@/i18n/locale";
import { LOCALES } from "@/i18n/locale";
import { SITE_URL } from "@/config/site";
import { LEGAL_ROUTES, ROUTES, SERVICE_ROUTES } from "@/i18n/routing";

export const dynamic = "force-static";

const HOME_PRIORITY = 1;
const PAGE_PRIORITY = 0.8;
const SERVICE_PRIORITY = 0.9;
const LEGAL_PRIORITY = 0.3;

type SitemapGroup = {
  routes: Record<Locale, string>[];
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const entriesFor = ({ routes, priority, changeFrequency }: SitemapGroup): MetadataRoute.Sitemap =>
  routes.flatMap((paths) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}${paths[locale]}`,
      changeFrequency,
      priority,
      alternates: { languages: { es: `${SITE_URL}${paths.es}`, en: `${SITE_URL}${paths.en}` } },
    })),
  );

export default function sitemap(): MetadataRoute.Sitemap {
  const { home, ...pages } = ROUTES;

  return [
    { routes: [home], priority: HOME_PRIORITY, changeFrequency: "monthly" as const },
    { routes: Object.values(pages), priority: PAGE_PRIORITY, changeFrequency: "monthly" as const },
    { routes: Object.values(SERVICE_ROUTES), priority: SERVICE_PRIORITY, changeFrequency: "monthly" as const },
    { routes: Object.values(LEGAL_ROUTES), priority: LEGAL_PRIORITY, changeFrequency: "yearly" as const },
  ].flatMap(entriesFor);
}

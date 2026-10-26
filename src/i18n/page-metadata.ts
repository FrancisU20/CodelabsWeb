import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/config/site";
import type { Locale } from "./locale";
import { getMessages } from "./messages/get-messages";
import type { PageKey } from "./page-key";
import { pagePath } from "./routing";

const OPEN_GRAPH_LOCALE: Record<Locale, string> = { es: "es_EC", en: "en_US" };
const SHARE_IMAGE_SIZE = { width: 1200, height: 630 };

export const absoluteUrl = (page: PageKey, locale: Locale): string => `${SITE_URL}${pagePath(page, locale)}`;

const shareImage = (locale: Locale, alt: string) => ({ url: `/og/share-${locale}.png`, ...SHARE_IMAGE_SIZE, alt });

export const buildPageMetadata = (page: PageKey, locale: Locale): Metadata => {
  const { title, description } = getMessages(locale).seo[page];
  const url = absoluteUrl(page, locale);
  const image = shareImage(locale, title);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { es: absoluteUrl(page, "es"), en: absoluteUrl(page, "en"), "x-default": absoluteUrl(page, "es") },
    },
    openGraph: { title, description, url, siteName: SITE_NAME, locale: OPEN_GRAPH_LOCALE[locale], type: "website", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
};

export const buildRootMetadata = (locale: Locale): Metadata => {
  const { title, description } = getMessages(locale).seo.home;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon-256.png", type: "image/png", sizes: "256x256" },
        { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
        { url: "/codelabs-mark.svg", type: "image/svg+xml" },
      ],
      shortcut: ["/favicon.ico"],
      apple: ["/apple-touch-icon.png"],
    },
    manifest: "/manifest.webmanifest",
  };
};

export const buildLegalMetadata = (title: string, description: string, path: string): Metadata => ({
  title: `${title} | ${SITE_NAME}`,
  description,
  alternates: { canonical: `${SITE_URL}${path}` },
});

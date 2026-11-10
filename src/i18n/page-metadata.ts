import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/config/site";
import type { LegalDocumentKey } from "@/content/legal/legal-document-key";
import { LEGAL_DOCUMENTS } from "@/content/legal/legal-documents";
import { IMAGES } from "@/content/images";
import type { ServiceId } from "@/content/service-id";
import type { Locale } from "./locale";
import { getMessages } from "./messages/get-messages";
import type { PageKey } from "./page-key";
import { LEGAL_ROUTES, ROUTES, SERVICE_ROUTES } from "./routing";

const OPEN_GRAPH_LOCALE: Record<Locale, string> = { es: "es_EC", en: "en_US" };
const SHARE_IMAGE_SIZE = { width: 1200, height: 630 };

const shareImage = (locale: Locale, alt: string) => ({ url: IMAGES.share[locale], ...SHARE_IMAGE_SIZE, alt });

type LocalizedPage = {
  title: string;
  description: string;
  paths: Record<Locale, string>;
};

const buildLocalizedMetadata = ({ title, description, paths }: LocalizedPage, locale: Locale): Metadata => {
  const url = `${SITE_URL}${paths[locale]}`;
  const image = shareImage(locale, title);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { es: `${SITE_URL}${paths.es}`, en: `${SITE_URL}${paths.en}`, "x-default": `${SITE_URL}${paths.es}` },
    },
    openGraph: { title, description, url, siteName: SITE_NAME, locale: OPEN_GRAPH_LOCALE[locale], type: "website", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
};

export const buildPageMetadata = (page: PageKey, locale: Locale): Metadata =>
  buildLocalizedMetadata({ ...getMessages(locale).seo[page], paths: ROUTES[page] }, locale);

export const buildServiceMetadata = (service: ServiceId, locale: Locale): Metadata => {
  const { seoTitle, seoDescription } = getMessages(locale).servicePages.items[service];

  return buildLocalizedMetadata({ title: seoTitle, description: seoDescription, paths: SERVICE_ROUTES[service] }, locale);
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
        { url: IMAGES.brand.favicon },
        { url: IMAGES.brand.icon256, type: "image/png", sizes: "256x256" },
        { url: IMAGES.brand.icon512, type: "image/png", sizes: "512x512" },
        { url: IMAGES.brand.mark, type: "image/svg+xml" },
      ],
      shortcut: [IMAGES.brand.favicon],
      apple: [IMAGES.brand.appleTouch],
    },
    manifest: "/manifest.webmanifest",
  };
};

export const buildLegalMetadata = (key: LegalDocumentKey, locale: Locale): Metadata => {
  const { metaTitle, metaDescription } = LEGAL_DOCUMENTS[key][locale];
  const spanishUrl = `${SITE_URL}${LEGAL_ROUTES[key].es}`;

  return {
    title: `${metaTitle} | ${SITE_NAME}`,
    description: metaDescription,
    alternates: {
      canonical: `${SITE_URL}${LEGAL_ROUTES[key][locale]}`,
      languages: { es: spanishUrl, en: `${SITE_URL}${LEGAL_ROUTES[key].en}`, "x-default": spanishUrl },
    },
  };
};

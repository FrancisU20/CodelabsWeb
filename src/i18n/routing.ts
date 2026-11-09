import type { LegalDocumentKey } from "@/content/legal/legal-document-key";
import type { Locale } from "./locale";
import type { PageKey } from "./page-key";

export const ROUTES: Record<PageKey, Record<Locale, string>> = {
  home: { es: "/", en: "/en" },
  services: { es: "/servicios", en: "/en/services" },
  work: { es: "/casos", en: "/en/case-studies" },
  about: { es: "/nosotros", en: "/en/about" },
  contact: { es: "/contacto", en: "/en/contact" },
};

export const CLIENTS_ANCHOR: Record<Locale, string> = { es: "clientes", en: "clients" };

export const LEGAL_ROUTES: Record<LegalDocumentKey, Record<Locale, string>> = {
  privacy: { es: "/privacidad", en: "/en/privacy" },
  terms: { es: "/terminos", en: "/en/terms" },
  dataProcessing: { es: "/tratamiento-datos", en: "/en/data-processing" },
  unsubscribe: { es: "/desuscripcion", en: "/en/unsubscribe" },
};

const ALL_ROUTES = [...Object.values(ROUTES), ...Object.values(LEGAL_ROUTES)];

export const pagePath = (page: PageKey, locale: Locale): string => ROUTES[page][locale];

export const legalPath = (document: LegalDocumentKey, locale: Locale): string => LEGAL_ROUTES[document][locale];

export const clientsPath = (locale: Locale): string => `${ROUTES.home[locale]}#${CLIENTS_ANCHOR[locale]}`;

export const getAlternatePath = (pathname: string, target: Locale): string =>
  (ALL_ROUTES.find((paths) => Object.values(paths).includes(pathname)) ?? ROUTES.home)[target];

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

export const LEGAL_PATHS = {
  privacy: "/privacidad",
  terms: "/terminos",
  dataProcessing: "/tratamiento-datos",
  unsubscribe: "/desuscripcion",
};

const PAGE_KEYS = Object.keys(ROUTES) as PageKey[];

export const pagePath = (page: PageKey, locale: Locale): string => ROUTES[page][locale];

export const clientsPath = (locale: Locale): string => `${ROUTES.home[locale]}#${CLIENTS_ANCHOR[locale]}`;

const pageFromPathname = (pathname: string): PageKey =>
  PAGE_KEYS.find((page) => Object.values(ROUTES[page]).includes(pathname)) ?? "home";

export const getAlternatePath = (pathname: string, target: Locale): string =>
  pagePath(pageFromPathname(pathname), target);

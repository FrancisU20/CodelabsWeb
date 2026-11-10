import type { LegalDocumentKey } from "@/content/legal/legal-document-key";
import type { ServiceId } from "@/content/service-id";
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

const PROCESS_ANCHOR = "proceso";

export const SERVICE_ROUTES: Record<ServiceId, Record<Locale, string>> = {
  mobile: { es: "/servicios/apps-moviles", en: "/en/services/mobile-apps" },
  web: { es: "/servicios/paginas-web-y-tiendas", en: "/en/services/websites-and-online-stores" },
  custom: { es: "/servicios/sistemas-a-la-medida", en: "/en/services/custom-systems" },
  cloud: { es: "/servicios/nube-y-seguridad", en: "/en/services/cloud-and-security" },
  modernization: { es: "/servicios/modernizacion", en: "/en/services/modernization" },
  support: { es: "/servicios/soporte-y-mantenimiento", en: "/en/services/support-and-maintenance" },
};

export const LEGAL_ROUTES: Record<LegalDocumentKey, Record<Locale, string>> = {
  privacy: { es: "/privacidad", en: "/en/privacy" },
  terms: { es: "/terminos", en: "/en/terms" },
  dataProcessing: { es: "/tratamiento-datos", en: "/en/data-processing" },
  unsubscribe: { es: "/desuscripcion", en: "/en/unsubscribe" },
};

const ALL_ROUTES = [...Object.values(ROUTES), ...Object.values(SERVICE_ROUTES), ...Object.values(LEGAL_ROUTES)];

export const pagePath = (page: PageKey, locale: Locale): string => ROUTES[page][locale];

export const legalPath = (document: LegalDocumentKey, locale: Locale): string => LEGAL_ROUTES[document][locale];

export const servicePath = (service: ServiceId, locale: Locale): string => SERVICE_ROUTES[service][locale];

const slugOf = (path: string): string => path.slice(path.lastIndexOf("/") + 1);

export const serviceSlugs = (locale: Locale): string[] => Object.values(SERVICE_ROUTES).map((paths) => slugOf(paths[locale]));

export const serviceIdFromSlug = (slug: string, locale: Locale): ServiceId | undefined =>
  (Object.keys(SERVICE_ROUTES) as ServiceId[]).find((service) => slugOf(SERVICE_ROUTES[service][locale]) === slug);

export const processPath = (locale: Locale): string => `${ROUTES.about[locale]}#${PROCESS_ANCHOR}`;

export const getAlternatePath = (pathname: string, target: Locale): string =>
  (ALL_ROUTES.find((paths) => Object.values(paths).includes(pathname)) ?? ROUTES.home)[target];

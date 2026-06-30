import type { Locale } from "./locale";

const pathPairs: Array<[es: string, en: string]> = [
  ["/", "/en"],
  ["/servicios", "/en/services"],
  ["/casos", "/en/case-studies"],
  ["/nosotros", "/en/about"],
  ["/contacto", "/en/contact"],
];

export const localeFromPathname = (pathname: string): Locale =>
  pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";

/** Devuelve la ruta equivalente en el locale destino para el selector de idioma. */
export const getAlternatePath = (pathname: string, target: Locale): string => {
  const match = pathPairs.find(([es, en]) => es === pathname || en === pathname);
  if (!match) return target === "en" ? "/en" : "/";
  return target === "en" ? match[1] : match[0];
};

export type SiteRoutes = {
  home: string;
  servicios: string;
  casos: string;
  nosotros: string;
  contacto: string;
  clientesAnchor: string;
};

export const getRoutes = (locale: Locale): SiteRoutes =>
  locale === "en"
    ? {
        home: "/en",
        servicios: "/en/services",
        casos: "/en/case-studies",
        nosotros: "/en/about",
        contacto: "/en/contact",
        clientesAnchor: "/en#clients",
      }
    : {
        home: "/",
        servicios: "/servicios",
        casos: "/casos",
        nosotros: "/nosotros",
        contacto: "/contacto",
        clientesAnchor: "/#clientes",
      };

import type { Locale } from "@/i18n/locale";
import { getAlternatePath, pagePath } from "@/i18n/routing";
import type { LanguageLink } from "./language-link";

export type NavbarLinks = {
  alternate: LanguageLink;
  contactHref: string;
  servicesHref: string;
};

export const navbarLinks = (locale: Locale, pathname: string): NavbarLinks => {
  const otherLocale: Locale = locale === "es" ? "en" : "es";
  return {
    alternate: { locale: otherLocale, href: getAlternatePath(pathname, otherLocale) },
    contactHref: pagePath("contact", locale),
    servicesHref: pagePath("services", locale),
  };
};

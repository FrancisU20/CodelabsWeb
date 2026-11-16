import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { GUIDES_LOCALE, GUIDES_ROUTE, pagePath, servicePath } from "@/i18n/routing";
import { servicePriceLabel } from "@/i18n/service-price-label";
import type { NavItem } from "./nav-item";
import type { ServiceNavItem } from "./service-nav-item";

export const buildNavItems = (locale: Locale): NavItem[] => {
  const labels = getMessages(locale).nav;

  const pages = [
    { href: pagePath("work", locale), label: labels.work },
    { href: pagePath("howWeWork", locale), label: labels.howWeWork },
    { href: pagePath("about", locale), label: labels.about },
  ];
  return locale === GUIDES_LOCALE ? [...pages, { href: GUIDES_ROUTE, label: labels.guides }] : pages;
};

export const buildServiceNavItems = (locale: Locale): ServiceNavItem[] =>
  getMessages(locale).services.items.map((service) => ({
    href: servicePath(service.id, locale),
    label: service.title,
    summary: service.summary,
    price: servicePriceLabel(service.id, locale),
  }));

import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { pagePath, servicePath } from "@/i18n/routing";
import type { NavItem, ServiceNavItem } from "./nav-item";

export const buildNavItems = (locale: Locale): NavItem[] => {
  const labels = getMessages(locale).nav;

  return [
    { href: pagePath("work", locale), label: labels.work },
    { href: pagePath("howWeWork", locale), label: labels.howWeWork },
    { href: pagePath("about", locale), label: labels.about },
  ];
};

export const buildServiceNavItems = (locale: Locale): ServiceNavItem[] =>
  getMessages(locale).services.items.map((service) => ({
    href: servicePath(service.id, locale),
    label: service.title,
    summary: service.summary,
  }));

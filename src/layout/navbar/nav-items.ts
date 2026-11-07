import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { clientsPath, pagePath } from "@/i18n/routing";
import type { NavItem } from "./nav-item";

export const buildNavItems = (locale: Locale): NavItem[] => {
  const labels = getMessages(locale).nav;

  return [
    { href: clientsPath(locale), label: labels.clients },
    { href: pagePath("work", locale), label: labels.work },
    { href: pagePath("services", locale), label: labels.services },
    { href: pagePath("about", locale), label: labels.about },
    { href: pagePath("contact", locale), label: labels.contact },
  ];
};

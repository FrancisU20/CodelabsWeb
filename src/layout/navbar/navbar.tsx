"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/locale";
import type { Messages } from "@/i18n/messages/messages";
import { getAlternatePath, pagePath } from "@/i18n/routing";
import Logo from "@/shared/ui/logo";
import MenuToggle from "./menu-toggle";
import NavDropdown from "./nav-dropdown";
import type { NavItem, ServiceNavItem } from "./nav-item";
import NavLinks from "./nav-links";
import { useDismissibleMenu } from "./use-dismissible-menu";

const MOBILE_MENU_ID = "mobile-menu";
const SERVICES_MENU_ID = "services-menu";
const LANGUAGE_MENU_ID = "language-menu";

const SERVICES_PANEL_CLASS =
  "absolute inset-x-4 top-full grid gap-x-10 gap-y-6 rounded-b-lg border border-t-0 border-line bg-ink p-8 [grid-template-columns:repeat(3,minmax(0,1fr))]";
const LANGUAGE_PANEL_CLASS = "absolute right-0 top-[calc(100%+6px)] min-w-[150px] rounded-md border border-line bg-ink p-1.5";
const LANGUAGE_OPTION_CLASS = "block rounded px-3 py-2.5 hover:bg-panel";

type NavbarProps = {
  locale: Locale;
  copy: Messages["nav"];
  items: NavItem[];
  serviceItems: ServiceNavItem[];
};

const Navbar = ({ locale, copy, items, serviceItems }: NavbarProps) => {
  const pathname = usePathname();
  const { open, containerRef, toggleRef, toggle, close } = useDismissibleMenu(pathname, MOBILE_MENU_ID);
  const otherLocale: Locale = locale === "es" ? "en" : "es";
  const switchHref = getAlternatePath(pathname, otherLocale);
  const contactHref = pagePath("contact", locale);

  return (
    <header ref={containerRef} className="sticky top-0 z-50 border-b border-line bg-ink">
      <div className="site-wrap relative flex min-h-[72px] items-center gap-8">
        <Link href={pagePath("home", locale)} aria-label={copy.homeAriaLabel}>
          <Logo />
        </Link>
        <nav aria-label={copy.menuAriaLabel} className="hidden flex-1 items-center gap-7 lg:flex">
          <NavDropdown id={SERVICES_MENU_ID} label={copy.services} pathname={pathname} panelClassName={SERVICES_PANEL_CLASS}>
            {serviceItems.map((service) => (
              <Link key={service.href} href={service.href} className="group block">
                <b className="block font-display text-lg font-semibold transition-colors group-hover:text-brand">{service.label}</b>
                <span className="mt-0.5 block text-md leading-snug text-dim">{service.summary}</span>
              </Link>
            ))}
            <Link href={pagePath("services", locale)} className="col-span-3 font-semibold text-brand">
              {copy.allServices}
            </Link>
          </NavDropdown>
          <NavLinks items={items} pathname={pathname} className="contents" linkClassName="font-medium text-muted hover:text-brand aria-[current=page]:text-brand" />
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <NavDropdown
            id={LANGUAGE_MENU_ID}
            label={copy.currentLanguage}
            ariaLabel={`${copy.languageAriaLabel}: ${copy.currentLanguage}`}
            pathname={pathname}
            className="relative"
            panelClassName={LANGUAGE_PANEL_CLASS}
          >
            <Link href={pathname} aria-current="true" className={`${LANGUAGE_OPTION_CLASS} font-semibold text-brand`}>
              {copy.currentLanguage}
            </Link>
            <Link href={switchHref} hrefLang={otherLocale} lang={otherLocale} className={LANGUAGE_OPTION_CLASS}>
              {copy.otherLanguage}
            </Link>
          </NavDropdown>
          <Link href={contactHref} className="btn btn-primary min-h-11 px-5 text-base">
            {copy.cta}
          </Link>
        </div>
        <MenuToggle buttonRef={toggleRef} open={open} controls={MOBILE_MENU_ID} openLabel={copy.openMenu} closeLabel={copy.closeMenu} onToggle={toggle} />
      </div>
      {open && (
        <div id={MOBILE_MENU_ID} className="site-wrap border-t border-line pb-5 lg:hidden">
          <nav aria-label={copy.menuAriaLabel} className="flex flex-col">
            <Link href={pagePath("services", locale)} onClick={close} className="flex min-h-[54px] items-center text-lg font-medium">
              {copy.services}
            </Link>
            <NavLinks
              items={serviceItems}
              pathname={pathname}
              onNavigate={close}
              className="flex flex-col border-b border-line pb-2 pl-4"
              linkClassName="flex min-h-11 items-center text-base text-muted"
            />
            <NavLinks
              items={items}
              pathname={pathname}
              onNavigate={close}
              className="flex flex-col"
              linkClassName="flex min-h-[54px] items-center border-b border-line text-lg font-medium"
            />
          </nav>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
            <Link href={switchHref} hrefLang={otherLocale} lang={otherLocale} onClick={close} className="inline-flex min-h-11 items-center font-medium underline underline-offset-4">
              {copy.otherLanguage}
            </Link>
            <Link href={contactHref} onClick={close} className="btn btn-primary min-h-11 px-5 text-base">
              {copy.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/locale";
import type { Messages } from "@/i18n/messages/messages";
import { getAlternatePath, pagePath } from "@/i18n/routing";
import ButtonLink from "@/shared/ui/button/button-link";
import Logo from "@/shared/ui/logo";
import DesktopNav from "./desktop-nav";
import LanguageMenu from "./language-menu";
import MenuToggle from "./menu-toggle";
import MobileMenu from "./mobile-menu";
import type { NavItem, ServiceNavItem } from "./nav-item";
import { MOBILE_MENU_ID } from "./navbar-ids";
import { useDismissibleMenu } from "./use-dismissible-menu";

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
  const alternate = { locale: otherLocale, href: getAlternatePath(pathname, otherLocale) };
  const contactHref = pagePath("contact", locale);
  const servicesHref = pagePath("services", locale);

  return (
    <header ref={containerRef} className="sticky top-0 z-50 border-b border-line bg-ink">
      <div className="site-wrap relative flex min-h-[72px] items-center gap-8">
        <Link href={pagePath("home", locale)} aria-label={copy.homeAriaLabel}>
          <Logo />
        </Link>
        <DesktopNav copy={copy} items={items} serviceItems={serviceItems} servicesHref={servicesHref} pathname={pathname} />
        <div className="hidden items-center gap-5 lg:flex">
          <LanguageMenu copy={copy} pathname={pathname} alternate={alternate} />
          <ButtonLink href={contactHref} size="sm">
            {copy.cta}
          </ButtonLink>
        </div>
        <MenuToggle buttonRef={toggleRef} open={open} controls={MOBILE_MENU_ID} openLabel={copy.openMenu} closeLabel={copy.closeMenu} onToggle={toggle} />
      </div>
      {open && (
        <MobileMenu
          copy={copy}
          items={items}
          serviceItems={serviceItems}
          servicesHref={servicesHref}
          contactHref={contactHref}
          alternate={alternate}
          pathname={pathname}
          onNavigate={close}
        />
      )}
    </header>
  );
};

export default Navbar;

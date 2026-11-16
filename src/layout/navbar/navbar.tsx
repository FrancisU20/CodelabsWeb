"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { Locale } from "@/i18n/locale";
import type { Messages } from "@/i18n/messages/messages";
import { pagePath } from "@/i18n/routing";
import Logo from "@/shared/ui/logo";
import DesktopActions from "./desktop-actions";
import DesktopNav from "./desktop-nav";
import MenuToggle from "./menu-toggle";
import MobileMenu from "./mobile-menu";
import type { NavItem } from "./nav-item";
import type { ServiceNavItem } from "./service-nav-item";
import { MOBILE_MENU_ID } from "./navbar-ids";
import { navbarLinks } from "./navbar-links";
import { useDismissibleMenu } from "./use-dismissible-menu";
import { useScrolled } from "./use-scrolled";
import styles from "./navbar.module.css";

const MENU_OPEN_ATTRIBUTE = "data-menu-open";

type NavbarProps = {
  locale: Locale;
  copy: Messages["nav"];
  items: NavItem[];
  serviceItems: ServiceNavItem[];
  whatsAppHref: string;
};

const Navbar = ({ locale, copy, items, serviceItems, whatsAppHref }: NavbarProps) => {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const { open, containerRef, toggleRef, toggle, close } = useDismissibleMenu(pathname, MOBILE_MENU_ID);
  const links = navbarLinks(locale, pathname);

  useEffect(() => {
    document.documentElement.toggleAttribute(MENU_OPEN_ATTRIBUTE, open);
  }, [open]);

  return (
    <header ref={containerRef} className={styles.header} data-scrolled={scrolled || open || undefined}>
      <div className={`site-wrap ${styles.bar}`}>
        <Link href={pagePath("home", locale)} aria-label={copy.homeAriaLabel} className={styles.logo}>
          <Logo />
        </Link>
        <DesktopNav copy={copy} items={items} serviceItems={serviceItems} servicesHref={links.servicesHref} pathname={pathname} />
        <DesktopActions copy={copy} links={links} pathname={pathname} />
        <MenuToggle buttonRef={toggleRef} open={open} controls={MOBILE_MENU_ID} openLabel={copy.openMenu} closeLabel={copy.closeMenu} onToggle={toggle} />
      </div>
      {open && (
        <MobileMenu copy={copy} items={items} serviceItems={serviceItems} links={links} whatsAppHref={whatsAppHref} pathname={pathname} onNavigate={close} />
      )}
    </header>
  );
};

export default Navbar;

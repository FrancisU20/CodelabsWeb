"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/locale";
import type { Messages } from "@/i18n/messages/messages";
import { getAlternatePath, pagePath } from "@/i18n/routing";
import Logo from "@/shared/ui/logo";
import MenuToggle from "./menu-toggle";
import type { NavItem } from "./nav-item";
import NavLinks from "./nav-links";
import { useDismissibleMenu } from "./use-dismissible-menu";

const MOBILE_MENU_ID = "mobile-menu";

type NavbarProps = {
  locale: Locale;
  copy: Messages["nav"];
  items: NavItem[];
};

const Navbar = ({ locale, copy, items }: NavbarProps) => {
  const pathname = usePathname();
  const menu = useDismissibleMenu(pathname);
  const switchHref = getAlternatePath(pathname, locale === "es" ? "en" : "es");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[var(--nav-bg)] backdrop-blur-xl backdrop-saturate-150">
      <div className="site-wrap flex min-h-14 items-center justify-between gap-4">
        <Link href={pagePath("home", locale)} aria-label={copy.homeAriaLabel}>
          <Logo />
        </Link>
        <NavLinks items={items} pathname={pathname} ariaLabel={copy.menuAriaLabel} className="hidden gap-7 text-sm text-muted md:flex" linkClassName="" />
        <div className="hidden items-center gap-3 md:flex">
          <Link href={switchHref} className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-muted hover:text-fg">
            {copy.switchLanguage}
          </Link>
          <Link href={pagePath("contact", locale)} className="btn btn-primary min-h-9 px-4 text-sm">
            {copy.cta}
          </Link>
        </div>
        <MenuToggle open={menu.open} controls={MOBILE_MENU_ID} openLabel={copy.openMenu} closeLabel={copy.closeMenu} onToggle={menu.toggle} />
      </div>
      {menu.open && (
        <NavLinks
          id={MOBILE_MENU_ID}
          items={[...items, { href: switchHref, label: copy.switchLanguage }]}
          pathname={pathname}
          ariaLabel={copy.menuAriaLabel}
          onNavigate={menu.close}
          className="site-wrap flex flex-col gap-1 border-t border-line py-3 text-base text-muted md:hidden"
          linkClassName="py-2.5"
        />
      )}
    </header>
  );
};

export default Navbar;

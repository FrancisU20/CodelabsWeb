import Link from "next/link";
import type { Messages } from "@/i18n/messages/messages";
import ButtonLink from "@/shared/ui/button/button-link";
import type { LanguageLink } from "./language-link";
import type { NavItem, ServiceNavItem } from "./nav-item";
import NavLinks from "./nav-links";
import { MOBILE_MENU_ID } from "./navbar-ids";

type MobileMenuProps = {
  copy: Messages["nav"];
  items: NavItem[];
  serviceItems: ServiceNavItem[];
  servicesHref: string;
  contactHref: string;
  alternate: LanguageLink;
  pathname: string;
  onNavigate: () => void;
};

const MobileMenu = ({ copy, items, serviceItems, servicesHref, contactHref, alternate, pathname, onNavigate }: MobileMenuProps) => (
  <div id={MOBILE_MENU_ID} className="site-wrap border-t border-line pb-5 lg:hidden">
    <nav aria-label={copy.menuAriaLabel} className="flex flex-col">
      <Link href={servicesHref} onClick={onNavigate} className="flex min-h-[54px] items-center text-lg font-medium">
        {copy.services}
      </Link>
      <NavLinks
        items={serviceItems}
        pathname={pathname}
        onNavigate={onNavigate}
        className="flex flex-col border-b border-line pb-2 pl-4"
        linkClassName="flex min-h-11 items-center text-base text-muted"
      />
      <NavLinks
        items={items}
        pathname={pathname}
        onNavigate={onNavigate}
        className="flex flex-col"
        linkClassName="flex min-h-[54px] items-center border-b border-line text-lg font-medium"
      />
    </nav>
    <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
      <Link
        href={alternate.href}
        hrefLang={alternate.locale}
        lang={alternate.locale}
        onClick={onNavigate}
        className="inline-flex min-h-11 items-center font-medium underline underline-offset-4"
      >
        {copy.otherLanguage}
      </Link>
      <ButtonLink href={contactHref} onClick={onNavigate} size="sm">
        {copy.cta}
      </ButtonLink>
    </div>
  </div>
);

export default MobileMenu;

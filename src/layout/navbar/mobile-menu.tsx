import Link from "next/link";
import type { Messages } from "@/i18n/messages/messages";
import MobileMenuFooter from "./mobile-menu-footer";
import type { NavItem } from "./nav-item";
import type { NavbarLinks } from "./navbar-links";
import type { ServiceNavItem } from "./service-nav-item";
import NavLinks from "./nav-links";
import { MOBILE_MENU_ID } from "./navbar-ids";

type MobileMenuProps = {
  copy: Messages["nav"];
  items: NavItem[];
  serviceItems: ServiceNavItem[];
  links: NavbarLinks;
  pathname: string;
  onNavigate: () => void;
};

const MobileMenu = ({ copy, items, serviceItems, links, pathname, onNavigate }: MobileMenuProps) => (
  <div id={MOBILE_MENU_ID} className="site-wrap border-t border-line pb-5 lg:hidden">
    <nav aria-label={copy.menuAriaLabel} className="flex flex-col">
      <Link href={links.servicesHref} onClick={onNavigate} className="flex min-h-[54px] items-center text-lg font-medium">
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
    <MobileMenuFooter copy={copy} links={links} onNavigate={onNavigate} />
  </div>
);

export default MobileMenu;

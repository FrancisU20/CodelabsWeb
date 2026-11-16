import Link from "next/link";
import type { Messages } from "@/i18n/messages/messages";
import MobileMenuFooter from "./mobile-menu-footer";
import type { NavItem } from "./nav-item";
import type { NavbarLinks } from "./navbar-links";
import type { ServiceNavItem } from "./service-nav-item";
import NavLinks from "./nav-links";
import { MOBILE_MENU_ID } from "./navbar-ids";
import styles from "./navbar.module.css";

type MobileMenuProps = {
  copy: Messages["nav"];
  items: NavItem[];
  serviceItems: ServiceNavItem[];
  links: NavbarLinks;
  whatsAppHref: string;
  pathname: string;
  onNavigate: () => void;
};

const MobileMenu = ({ copy, items, serviceItems, links, whatsAppHref, pathname, onNavigate }: MobileMenuProps) => (
  <div id={MOBILE_MENU_ID} className={styles.sheet}>
    <nav aria-label={copy.menuAriaLabel} className={`site-wrap ${styles.sheetNav}`}>
      <Link href={links.servicesHref} onClick={onNavigate} className={styles.sheetLink} aria-current={pathname === links.servicesHref ? "page" : undefined}>
        {copy.services}
      </Link>
      <NavLinks items={serviceItems} pathname={pathname} onNavigate={onNavigate} className={styles.sheetServices} linkClassName={styles.sheetService} />
      <NavLinks items={items} pathname={pathname} onNavigate={onNavigate} className="contents" linkClassName={styles.sheetLink} />
    </nav>
    <MobileMenuFooter copy={copy} links={links} whatsAppHref={whatsAppHref} onNavigate={onNavigate} />
  </div>
);

export default MobileMenu;

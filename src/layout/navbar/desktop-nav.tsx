import Link from "next/link";
import type { Messages } from "@/i18n/messages/messages";
import NavDropdown from "./nav-dropdown";
import type { NavItem } from "./nav-item";
import type { ServiceNavItem } from "./service-nav-item";
import NavLinks from "./nav-links";
import { SERVICES_MENU_ID } from "./navbar-ids";
import styles from "./navbar.module.css";

type DesktopNavProps = {
  copy: Messages["nav"];
  items: NavItem[];
  serviceItems: ServiceNavItem[];
  servicesHref: string;
  pathname: string;
};

const DesktopNav = ({ copy, items, serviceItems, servicesHref, pathname }: DesktopNavProps) => (
  <nav aria-label={copy.menuAriaLabel} className={styles.desktopNav}>
    <NavDropdown id={SERVICES_MENU_ID} label={copy.services} pathname={pathname} current={pathname.startsWith(servicesHref)} panelClassName={styles.services}>
      {serviceItems.map((service) => (
        <Link key={service.href} href={service.href} className={styles.service} aria-current={service.href === pathname ? "page" : undefined}>
          <b>{service.label}</b>
          <span>{service.summary}</span>
          <em>{service.price}</em>
        </Link>
      ))}
      <Link href={servicesHref} className={styles.allServices}>
        {copy.allServices} →
      </Link>
    </NavDropdown>
    <NavLinks items={items} pathname={pathname} className="contents" linkClassName={styles.link} />
  </nav>
);

export default DesktopNav;

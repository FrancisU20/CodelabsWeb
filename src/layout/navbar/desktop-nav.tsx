import Link from "next/link";
import type { Messages } from "@/i18n/messages/messages";
import NavDropdown from "./nav-dropdown";
import type { NavItem } from "./nav-item";
import type { ServiceNavItem } from "./service-nav-item";
import NavLinks from "./nav-links";
import { SERVICES_MENU_ID } from "./navbar-ids";

const SERVICES_PANEL_CLASS =
  "absolute inset-x-4 top-full grid gap-x-10 gap-y-6 rounded-b-lg border border-t-0 border-line bg-ink p-8 [grid-template-columns:repeat(3,minmax(0,1fr))]";

type DesktopNavProps = {
  copy: Messages["nav"];
  items: NavItem[];
  serviceItems: ServiceNavItem[];
  servicesHref: string;
  pathname: string;
};

const DesktopNav = ({ copy, items, serviceItems, servicesHref, pathname }: DesktopNavProps) => (
  <nav aria-label={copy.menuAriaLabel} className="hidden flex-1 items-center gap-7 lg:flex">
    <NavDropdown id={SERVICES_MENU_ID} label={copy.services} pathname={pathname} panelClassName={SERVICES_PANEL_CLASS}>
      {serviceItems.map((service) => (
        <Link key={service.href} href={service.href} className="group block">
          <b className="block font-display text-lg font-semibold transition-colors group-hover:text-brand">{service.label}</b>
          <span className="mt-0.5 block text-md leading-snug text-dim">{service.summary}</span>
        </Link>
      ))}
      <Link href={servicesHref} className="col-span-3 font-semibold text-brand">
        {copy.allServices}
      </Link>
    </NavDropdown>
    <NavLinks items={items} pathname={pathname} className="contents" linkClassName="font-medium text-muted hover:text-brand aria-[current=page]:text-brand" />
  </nav>
);

export default DesktopNav;

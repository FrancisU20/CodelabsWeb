import Link from "next/link";
import type { NavItem } from "./nav-item";

type NavLinksProps = {
  items: NavItem[];
  pathname: string;
  className: string;
  linkClassName: string;
  onNavigate?: () => void;
};

const NavLinks = ({ items, pathname, className, linkClassName, onNavigate }: NavLinksProps) => (
  <div className={className}>
    {items.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        onClick={onNavigate}
        aria-current={pathname.startsWith(item.href) ? "page" : undefined}
        className={linkClassName}
      >
        {item.label}
      </Link>
    ))}
  </div>
);

export default NavLinks;

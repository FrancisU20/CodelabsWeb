import Link from "next/link";
import type { NavItem } from "./nav-item";

type NavLinksProps = {
  items: NavItem[];
  pathname: string;
  className: string;
  linkClassName: string;
  ariaLabel: string;
  id?: string;
  onNavigate?: () => void;
};

const NavLinks = ({ items, pathname, className, linkClassName, ariaLabel, id, onNavigate }: NavLinksProps) => (
  <nav id={id} aria-label={ariaLabel} className={className}>
    {items.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        onClick={onNavigate}
        aria-current={item.href === pathname ? "page" : undefined}
        className={`${linkClassName} transition-colors hover:text-fg aria-[current=page]:text-fg`}
      >
        {item.label}
      </Link>
    ))}
  </nav>
);

export default NavLinks;

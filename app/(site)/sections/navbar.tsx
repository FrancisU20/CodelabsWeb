"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/app/ui/logo";
import { getDictionary } from "@/app/i18n/dictionary";
import { getAlternatePath, getRoutes, localeFromPathname } from "@/app/i18n/paths";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const dict = getDictionary(locale).nav;
  const routes = getRoutes(locale);
  const otherLocale = locale === "es" ? "en" : "es";
  const switchHref = getAlternatePath(pathname, otherLocale);

  const navItems = [
    { href: routes.clientesAnchor, label: dict.clientes },
    { href: routes.servicios, label: dict.servicios },
    { href: routes.casos, label: dict.casos },
    { href: routes.nosotros, label: dict.nosotros },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        <Link
          href={routes.home}
          aria-label={dict.homeAriaLabel}
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <Logo variant="light" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href={switchHref}
            className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/70 transition-colors hover:text-white"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <Link
            href={routes.contacto}
            className="gradient-pill soft-shadow inline-flex rounded-full px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-[2px]"
          >
            {dict.cta}
          </Link>
        </div>
        <button
          type="button"
          aria-label={open ? dict.closeMenu : dict.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M5 5L15 15M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 5H17M3 10H17M3 15H17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-black/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-white/70">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors duration-200 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={switchHref}
              className="transition-colors duration-200 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {otherLocale === "en" ? "English" : "Español"}
            </Link>
            <Link
              href={routes.contacto}
              className="gradient-pill soft-shadow rounded-full px-4 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {dict.cta}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/app/ui/logo";
import { getDictionary } from "@/app/i18n/dictionary";
import { getRoutes, localeFromPathname } from "@/app/i18n/paths";

const legalLinks = [
  { href: "/privacidad", label: "Privacidad" },
  { href: "/desuscripcion", label: "Desuscripción" },
  { href: "/terminos", label: "Términos" },
  { href: "/tratamiento-datos", label: "Tratamiento de datos" },
];

const Footer = () => {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const dict = getDictionary(locale).footer;
  const navDict = getDictionary(locale).nav;
  const routes = getRoutes(locale);

  const navLinks = [
    { href: routes.clientesAnchor, label: navDict.clientes },
    { href: routes.servicios, label: navDict.servicios },
    { href: routes.casos, label: navDict.casos },
    { href: routes.nosotros, label: navDict.nosotros },
    { href: routes.contacto, label: navDict.contacto },
  ];

  return (
    <footer className="border-t border-white/10 bg-black py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-[1.2fr,0.8fr,0.8fr]">
        <div className="space-y-3">
          <Logo variant="light" />
          <p className="max-w-md text-sm text-white/70">{dict.tagline}</p>
          <p className="text-xs text-white/60">
            {dict.addressPrefix}{" "}
            <a
              href="mailto:info@codelabsecuador.com"
              className="underline hover:text-white"
            >
              info@codelabsecuador.com
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-white/70">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            {dict.navTitle}
          </p>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-sm text-white/70">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            {dict.legalTitle}
          </p>
          {legalLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-6 pt-6">
        <p className="text-xs text-white/50">{dict.copyright(new Date().getFullYear())}</p>
      </div>
    </footer>
  );
};

export default Footer;

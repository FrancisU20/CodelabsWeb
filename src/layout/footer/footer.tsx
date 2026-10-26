import Link from "next/link";
import { SITE_NAME } from "@/config/site";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { LEGAL_PATHS } from "@/i18n/routing";
import Logo from "@/shared/ui/logo";

const Footer = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).footer;
  const legalLinks = [
    { href: LEGAL_PATHS.privacy, label: dict.privacy },
    { href: LEGAL_PATHS.terms, label: dict.terms },
    { href: LEGAL_PATHS.dataProcessing, label: dict.dataProcessing },
    { href: LEGAL_PATHS.unsubscribe, label: dict.unsubscribe },
  ];

  return (
    <footer className="border-t border-line pt-10 pb-[110px]">
      <div className="site-wrap flex flex-wrap items-center justify-between gap-4 text-[13px] text-muted">
        <Logo className="h-[22px] w-auto" />
        <span>
          © {new Date().getFullYear()} {SITE_NAME}. {dict.location}
        </span>
        <nav aria-label={dict.legalAriaLabel} className="flex flex-wrap gap-x-6 gap-y-2">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="py-1 hover:text-fg">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

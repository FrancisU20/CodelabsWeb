import Link from "next/link";
import type { Messages } from "@/i18n/messages/messages";
import ButtonLink from "@/shared/ui/button/button-link";
import type { NavbarLinks } from "./navbar-links";

const MobileMenuFooter = ({ copy, links, onNavigate }: { copy: Messages["nav"]; links: NavbarLinks; onNavigate: () => void }) => (
  <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
    <Link
      href={links.alternate.href}
      hrefLang={links.alternate.locale}
      lang={links.alternate.locale}
      onClick={onNavigate}
      className="inline-flex min-h-11 items-center font-medium underline underline-offset-4"
    >
      {copy.otherLanguage}
    </Link>
    <ButtonLink href={links.contactHref} onClick={onNavigate} size="sm">
      {copy.cta}
    </ButtonLink>
  </div>
);

export default MobileMenuFooter;

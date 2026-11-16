import Link from "next/link";
import type { Messages } from "@/i18n/messages/messages";
import ButtonLink from "@/shared/ui/button/button-link";
import Icon from "@/shared/ui/icons/svg-icon";
import type { NavbarLinks } from "./navbar-links";
import styles from "./navbar.module.css";

type MobileMenuFooterProps = {
  copy: Messages["nav"];
  links: NavbarLinks;
  whatsAppHref: string;
  onNavigate: () => void;
};

const MobileMenuFooter = ({ copy, links, whatsAppHref, onNavigate }: MobileMenuFooterProps) => (
  <div className={`site-wrap ${styles.sheetFooter}`}>
    <ButtonLink href={links.contactHref} onClick={onNavigate}>
      {copy.cta}
    </ButtonLink>
    <a href={whatsAppHref} target="_blank" rel="noopener noreferrer" className={styles.sheetWhatsApp}>
      <Icon name="whatsapp" />
      {copy.whatsApp}
    </a>
    <Link href={links.alternate.href} hrefLang={links.alternate.locale} lang={links.alternate.locale} onClick={onNavigate} className={styles.sheetLanguage}>
      <Icon name="globe" />
      {copy.otherLanguage}
    </Link>
  </div>
);

export default MobileMenuFooter;

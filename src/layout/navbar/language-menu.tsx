import Link from "next/link";
import type { Messages } from "@/i18n/messages/messages";
import Icon from "@/shared/ui/icons/svg-icon";
import type { LanguageLink } from "./language-link";
import NavDropdown from "./nav-dropdown";
import { LANGUAGE_MENU_ID } from "./navbar-ids";
import styles from "./navbar.module.css";

type LanguageMenuProps = {
  copy: Messages["nav"];
  pathname: string;
  alternate: LanguageLink;
};

const LanguageMenu = ({ copy, pathname, alternate }: LanguageMenuProps) => (
  <NavDropdown
    id={LANGUAGE_MENU_ID}
    label={
      <>
        <Icon name="globe" className={styles.globe} />
        {copy.currentLanguageCode}
      </>
    }
    ariaLabel={`${copy.languageAriaLabel}: ${copy.currentLanguage}`}
    pathname={pathname}
    className={styles.language}
    buttonClassName={styles.languageButton}
    panelClassName={styles.languagePanel}
  >
    <Link href={pathname} aria-current="true" className={styles.option}>
      <span>{copy.currentLanguage}</span>
      <small>{copy.currentLanguageCode}</small>
    </Link>
    <Link href={alternate.href} hrefLang={alternate.locale} lang={alternate.locale} className={styles.option}>
      <span>{copy.otherLanguage}</span>
      <small>{copy.otherLanguageCode}</small>
    </Link>
  </NavDropdown>
);

export default LanguageMenu;

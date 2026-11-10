import Link from "next/link";
import type { Messages } from "@/i18n/messages/messages";
import type { LanguageLink } from "./language-link";
import NavDropdown from "./nav-dropdown";
import { LANGUAGE_MENU_ID } from "./navbar-ids";

const PANEL_CLASS = "absolute right-0 top-[calc(100%+6px)] min-w-[150px] rounded-md border border-line bg-ink p-1.5";
const OPTION_CLASS = "block rounded px-3 py-2.5 hover:bg-panel";

type LanguageMenuProps = {
  copy: Messages["nav"];
  pathname: string;
  alternate: LanguageLink;
};

const LanguageMenu = ({ copy, pathname, alternate }: LanguageMenuProps) => (
  <NavDropdown
    id={LANGUAGE_MENU_ID}
    label={copy.currentLanguage}
    ariaLabel={`${copy.languageAriaLabel}: ${copy.currentLanguage}`}
    pathname={pathname}
    className="relative"
    panelClassName={PANEL_CLASS}
  >
    <Link href={pathname} aria-current="true" className={`${OPTION_CLASS} font-semibold text-brand`}>
      {copy.currentLanguage}
    </Link>
    <Link href={alternate.href} hrefLang={alternate.locale} lang={alternate.locale} className={OPTION_CLASS}>
      {copy.otherLanguage}
    </Link>
  </NavDropdown>
);

export default LanguageMenu;

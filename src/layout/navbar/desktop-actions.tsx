import type { Messages } from "@/i18n/messages/messages";
import ButtonLink from "@/shared/ui/button/button-link";
import LanguageMenu from "./language-menu";
import type { NavbarLinks } from "./navbar-links";
import styles from "./navbar.module.css";

const DesktopActions = ({ copy, links, pathname }: { copy: Messages["nav"]; links: NavbarLinks; pathname: string }) => (
  <div className={styles.actions}>
    <LanguageMenu copy={copy} pathname={pathname} alternate={links.alternate} />
    <ButtonLink href={links.contactHref} size="sm" className={styles.cta}>
      {copy.cta}
      <span className={styles.ctaArrow} aria-hidden="true">
        →
      </span>
    </ButtonLink>
  </div>
);

export default DesktopActions;

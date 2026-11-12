import type { Messages } from "@/i18n/messages/messages";
import ButtonLink from "@/shared/ui/button/button-link";
import LanguageMenu from "./language-menu";
import type { NavbarLinks } from "./navbar-links";

const DesktopActions = ({ copy, links, pathname }: { copy: Messages["nav"]; links: NavbarLinks; pathname: string }) => (
  <div className="hidden items-center gap-5 lg:flex">
    <LanguageMenu copy={copy} pathname={pathname} alternate={links.alternate} />
    <ButtonLink href={links.contactHref} size="sm">
      {copy.cta}
    </ButtonLink>
  </div>
);

export default DesktopActions;

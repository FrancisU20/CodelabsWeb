import { fillTerms } from "@/i18n/fill-terms";
import type { Locale } from "@/i18n/locale";
import type { Messages } from "@/i18n/messages/messages";
import { pagePath } from "@/i18n/routing";
import ButtonLink from "@/shared/ui/button/button-link";
import styles from "./guides.module.css";

const GuideCta = ({ copy, locale }: { copy: Messages["guides"]["cta"]; locale: Locale }) => (
  <aside className={`tone-night ${styles.cta}`}>
    <div>
      <b>{copy.title}</b>
      <span>{fillTerms(copy.body)}</span>
    </div>
    <ButtonLink variant="light" href={pagePath("contact", locale)}>
      {copy.button}
    </ButtonLink>
  </aside>
);

export default GuideCta;

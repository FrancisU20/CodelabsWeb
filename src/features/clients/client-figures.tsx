import { APPS_PUBLISHED, COUNTRIES_SERVED, FOUNDING_YEAR, PROJECTS_DELIVERED } from "@/content/company-figures";
import type { Locale } from "@/i18n/locale";
import type { Messages } from "@/i18n/messages/messages";
import { formatCountryList } from "@/shared/lib/country-names";
import styles from "./clients.module.css";

type ClientFiguresProps = {
  copy: Messages["clients"]["figures"];
  locale: Locale;
};

const ClientFigures = ({ copy, locale }: ClientFiguresProps) => {
  const figures = [
    { value: String(FOUNDING_YEAR), label: copy.founded },
    { value: `+${PROJECTS_DELIVERED}`, label: copy.projects },
    { value: `+${APPS_PUBLISHED}`, label: copy.apps },
    { value: String(COUNTRIES_SERVED.length), unit: copy.countries, label: formatCountryList(COUNTRIES_SERVED, locale) },
  ];

  return (
    <dl className={`site-wrap ${styles.figures}`} aria-label={copy.label} data-reveal>
      {figures.map((figure) => (
        <div key={figure.label} className={styles.figure}>
          <dt>{figure.label}</dt>
          <dd>
            {figure.value}
            {"unit" in figure && <span className={styles.unit}> {figure.unit}</span>}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export default ClientFigures;

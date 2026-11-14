import { clientLogos } from "@/content/clients";
import { INDUSTRIES } from "@/content/industries";
import type { Locale } from "@/i18n/locale";
import type { Messages } from "@/i18n/messages/messages";
import { formatList } from "@/shared/lib/list-format";
import styles from "./clients.module.css";

type ClientIndustriesProps = {
  copy: Messages["clients"]["industries"];
  locale: Locale;
};

const clientNamesIn = (industry: string, locale: Locale): string =>
  formatList(
    clientLogos.filter((client) => client.industry === industry).map((client) => client.name),
    locale,
  );

const ClientIndustries = ({ copy, locale }: ClientIndustriesProps) => (
  <div className={`site-wrap ${styles.industriesBlock}`} data-reveal>
    <h3 className={styles.industriesTitle}>{copy.title}</h3>
    <ul className={styles.industries}>
      {INDUSTRIES.map((industry) => (
        <li key={industry} className={styles.industry}>
          <strong>{copy.items[industry]}</strong>
          <span>{clientNamesIn(industry, locale)}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ClientIndustries;

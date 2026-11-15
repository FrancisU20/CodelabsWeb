import Link from "next/link";
import type { ServiceId } from "@/content/service-id";
import { SERVICE_TECHNOLOGIES } from "@/content/service-technologies";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { pagePath } from "@/i18n/routing";
import Section from "@/shared/ui/section/section";
import styles from "./service-detail.module.css";

const ServiceCases = ({ service, locale }: { service: ServiceId; locale: Locale }) => {
  const { labels, items } = getMessages(locale).serviceDetails;

  return (
    <Section tone="mist" space="section" aria-labelledby="service-cases">
      <div className={`site-wrap ${styles.proof}`}>
        <div>
          <h2 id="service-cases" className={`section-title ${styles.sectionTitle}`}>
            {labels.casesTitle}
          </h2>
          <ul className={styles.cases} data-reveal>
            {items[service].cases.map((entry) => (
              <li key={entry.name}>
                <b>{entry.name}</b>
                <span>{entry.summary}</span>
              </li>
            ))}
          </ul>
          <Link className={styles.textLink} href={pagePath("work", locale)}>
            {labels.casesLink} →
          </Link>
        </div>
        <div>
          <h2 className={styles.techTitle}>{labels.techTitle}</h2>
          <ul className={styles.tech}>
            {SERVICE_TECHNOLOGIES[service].map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default ServiceCases;

import type { ServiceId } from "@/content/service-id";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import Section from "@/shared/ui/section/section";
import styles from "./service-detail.module.css";

const ServiceOutcomes = ({ service, locale }: { service: ServiceId; locale: Locale }) => {
  const { labels, items } = getMessages(locale).serviceDetails;

  return (
    <Section space="section" aria-labelledby="service-outcomes">
      <div className="site-wrap">
        <h2 id="service-outcomes" className={`section-title ${styles.sectionTitle}`}>
          {labels.outcomesTitle}
        </h2>
        <ul className={styles.outcomes} data-reveal>
          {items[service].outcomes.map((outcome) => (
            <li key={outcome.title}>
              <h3>{outcome.title}</h3>
              <p>{outcome.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default ServiceOutcomes;

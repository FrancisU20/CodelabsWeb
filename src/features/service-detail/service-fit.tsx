import type { ServiceId } from "@/content/service-id";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import Section from "@/shared/ui/section/section";
import styles from "./service-detail.module.css";

const ServiceFit = ({ service, locale }: { service: ServiceId; locale: Locale }) => {
  const { labels, items } = getMessages(locale).servicePages;

  return (
    <Section tone="night" space="section" aria-labelledby="service-fit">
      <div className={`site-wrap ${styles.fit}`}>
        <h2 id="service-fit" className={`section-title ${styles.sectionTitle}`}>
          {labels.fitTitle}
        </h2>
        <ul className={styles.fitList} data-reveal>
          {items[service].fit.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default ServiceFit;

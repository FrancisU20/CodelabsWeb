import type { ServiceId } from "@/content/service-id";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import Section from "@/shared/ui/section/section";
import styles from "./service-detail.module.css";

const ServiceIncludes = ({ service, locale }: { service: ServiceId; locale: Locale }) => {
  const { labels, items } = getMessages(locale).servicePages;

  return (
    <Section tone="mist" space="section" aria-labelledby="service-includes">
      <div className="site-wrap">
        <h2 id="service-includes" className={`section-title ${styles.sectionTitle}`}>
          {labels.includesTitle}
        </h2>
        <ul className={styles.includes} data-reveal>
          {items[service].includes.map((entry) => (
            <li key={entry.title}>
              <h3>{entry.title}</h3>
              <p>{entry.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default ServiceIncludes;

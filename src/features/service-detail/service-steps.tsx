import type { ServiceId } from "@/content/service-id";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import Section from "@/shared/ui/section/section";
import styles from "./service-detail.module.css";

const ServiceSteps = ({ service, locale }: { service: ServiceId; locale: Locale }) => {
  const { labels, items } = getMessages(locale).serviceDetails;

  return (
    <Section space="section" aria-labelledby="service-steps">
      <div className="site-wrap">
        <h2 id="service-steps" className={`section-title ${styles.sectionTitle}`}>
          {labels.stepsTitle}
        </h2>
        <ol className={styles.steps} data-reveal>
          {items[service].steps.map((step) => (
            <li key={step.title}>
              <small>{step.when}</small>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
};

export default ServiceSteps;

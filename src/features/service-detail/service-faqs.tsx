import type { ServiceId } from "@/content/service-id";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { serviceFaqs } from "@/i18n/service-faqs";
import Section from "@/shared/ui/section/section";
import styles from "./service-detail.module.css";

const ServiceFaqs = ({ service, locale }: { service: ServiceId; locale: Locale }) => (
  <Section space="section" aria-labelledby="service-faqs">
    <div className={`site-wrap ${styles.faqWrap}`}>
      <h2 id="service-faqs" className={`section-title ${styles.sectionTitle}`}>
        {getMessages(locale).serviceDetails.labels.faqTitle}
      </h2>
      <div className={styles.faqs}>
        {serviceFaqs(service, locale).map((entry) => (
          <details key={entry.question} className={styles.faq}>
            <summary>{entry.question}</summary>
            <p>{entry.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </Section>
);

export default ServiceFaqs;

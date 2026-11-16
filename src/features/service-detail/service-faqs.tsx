import type { ServiceId } from "@/content/service-id";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { serviceFaqs } from "@/i18n/service-faqs";
import FaqList from "@/shared/ui/faq-list/faq-list";
import Section from "@/shared/ui/section/section";
import styles from "./service-detail.module.css";

const ServiceFaqs = ({ service, locale }: { service: ServiceId; locale: Locale }) => (
  <Section space="section" aria-labelledby="service-faqs">
    <div className={`site-wrap ${styles.faqWrap}`}>
      <h2 id="service-faqs" className={`section-title ${styles.sectionTitle}`}>
        {getMessages(locale).serviceDetails.labels.faqTitle}
      </h2>
      <FaqList faqs={serviceFaqs(service, locale)} />
    </div>
  </Section>
);

export default ServiceFaqs;

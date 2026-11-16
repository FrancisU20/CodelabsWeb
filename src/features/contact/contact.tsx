import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import ContactDetails from "./contact-details";
import ContactForm from "./contact-form";
import OfficeMap from "./office-map";
import styles from "./contact.module.css";

const Contact = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).contact;

  return (
    <section id="contacto" className={styles.section}>
      <div className={`site-wrap ${styles.layout}`}>
        <ContactForm copy={copy} locale={locale} />
        <div className={styles.side}>
          <OfficeMap copy={copy.map} />
          <ContactDetails copy={copy} />
        </div>
      </div>
    </section>
  );
};

export default Contact;

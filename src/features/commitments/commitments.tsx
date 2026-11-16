import { fillTerms } from "@/i18n/fill-terms";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import Section from "@/shared/ui/section/section";
import SectionHeading from "@/shared/ui/section/section-heading";
import PaymentTerms from "./payment-terms";
import styles from "./commitments.module.css";

const Commitments = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).howWeWork;

  return (
    <Section space="section" aria-labelledby="commitments-title">
      <div className={`site-wrap ${styles.layout}`}>
        <SectionHeading titleId="commitments-title" title={copy.commitments.title} reveal />
        <ul className={styles.promises}>
          {copy.commitments.items.map((item) => (
            <li key={item.title} data-reveal>
              <h3>{fillTerms(item.title)}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
        <PaymentTerms copy={copy.payment} locale={locale} />
      </div>
    </Section>
  );
};

export default Commitments;

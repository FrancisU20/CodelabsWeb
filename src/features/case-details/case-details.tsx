import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import SectionHeading from "@/shared/ui/section/section-heading";
import styles from "./case-details.module.css";

const CaseDetails = ({ locale }: { locale: Locale }) => {
  const { title, labels, items } = getMessages(locale).caseDetails;

  return (
    <section className={styles.section} aria-labelledby="case-details-title">
      <div className="site-wrap">
        <SectionHeading title={title} titleId="case-details-title" reveal />
        <div className={styles.rows} data-reveal>
          {items.map((item) => (
            <article key={item.sector} className={styles.row}>
              <h3 className={styles.sector}>{item.sector}</h3>
              <dl className={styles.facts}>
                <div>
                  <dt>{labels.need}</dt>
                  <dd>{item.need}</dd>
                </div>
                <div>
                  <dt>{labels.built}</dt>
                  <dd>{item.built}</dd>
                </div>
                <div>
                  <dt>{labels.changed}</dt>
                  <dd>{item.changed}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseDetails;

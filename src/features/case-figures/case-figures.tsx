import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import styles from "./case-figures.module.css";

const CaseFigures = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).caseFigures;

  return (
    <section className={styles.section} aria-labelledby="case-figures-title">
      <div className="site-wrap">
        <h2 id="case-figures-title" className={styles.label}>
          {dict.label}
        </h2>
        <div className={styles.grid} data-reveal>
          {dict.items.map((item) => (
            <div key={item.value}>
              <strong>{item.value}</strong>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseFigures;

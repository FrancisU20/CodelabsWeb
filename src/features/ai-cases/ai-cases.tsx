import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import ChatWindow from "@/shared/devices/chat-window";
import styles from "./ai-cases.module.css";

const AiCases = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).aiCases;

  return (
    <section className={styles.section} aria-labelledby="ai-cases-title">
      <div className="site-wrap">
        <h2 id="ai-cases-title" className={styles.label}>
          {dict.label}
        </h2>
        <div className={styles.grid}>
          {dict.items.map((item) => (
            <article key={item.title} className={styles.card} data-reveal>
              <ChatWindow {...item.chat} />
              <div className={styles.copy}>
                <p className={styles.sector}>{item.sector}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.note}>{dict.note}</p>
      </div>
    </section>
  );
};

export default AiCases;

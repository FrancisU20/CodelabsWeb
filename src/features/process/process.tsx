import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { cssVars } from "@/shared/lib/css-vars";
import styles from "./process.module.css";

const stepNumber = (index: number): string => String(index + 1);

const Process = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).howWeWork;

  return (
    <section
      id="proceso"
      aria-label={dict.title.lines.join(" ")}
      className="bg-panel pt-14 pb-16 sm:pt-[88px] sm:pb-[120px]"
    >
      <div className="site-wrap">
        <ol className={styles.steps}>
          {dict.steps.map((step, index) => (
            <li key={step.title} className={styles.step} style={cssVars({ "--i": index })} data-reveal>
              <span className={styles.number} data-number={stepNumber(index)} aria-hidden="true" />
              <div>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.body}>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;

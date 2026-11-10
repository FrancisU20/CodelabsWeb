import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { cssVars } from "@/shared/lib/css-vars";
import Section from "@/shared/ui/section/section";
import styles from "./process.module.css";

const stepNumber = (index: number): string => String(index + 1);

const Process = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).howWeWork;

  return (
    <Section id="proceso" tone="mist" space="section" aria-label={dict.title.lines.join(" ")}>
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
    </Section>
  );
};

export default Process;

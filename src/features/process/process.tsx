import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { cssVars } from "@/shared/lib/css-vars";
import SectionHeading from "@/shared/ui/section/section-heading";
import styles from "./process.module.css";

const stepNumber = (index: number): string => String(index + 1);

type ProcessProps = {
  locale: Locale;
  showHeading?: boolean;
};

const Process = ({ locale, showHeading = true }: ProcessProps) => {
  const dict = getMessages(locale).howWeWork;

  return (
    <section
      id="proceso"
      aria-labelledby={showHeading ? "process-title" : undefined}
      aria-label={showHeading ? undefined : dict.title.lines.join(" ")}
      className="bg-panel pt-14 pb-16 sm:pt-[88px] sm:pb-[120px]"
    >
      <div className="site-wrap">
        {showHeading && <SectionHeading className="mb-12 flex flex-col gap-5" title={dict.title} titleId="process-title" reveal />}
        <ol className="m-0 flex list-none flex-col gap-5 p-0">
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

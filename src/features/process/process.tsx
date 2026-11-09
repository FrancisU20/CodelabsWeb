import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { cssVars } from "@/shared/lib/css-vars";
import SectionHeading from "@/shared/ui/section/section-heading";
import styles from "./process.module.css";

const stepNumber = (index: number): string => String(index + 1).padStart(2, "0");

const Process = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).howWeWork;

  return (
    <section id="proceso" aria-labelledby="process-title" className="pt-[100px] pb-[140px]">
      <div className="site-wrap">
        <SectionHeading className="mb-16 flex flex-col gap-5" eyebrow={dict.eyebrow} title={dict.title} titleId="process-title" reveal />
        <ol className="m-0 flex list-none flex-col gap-6 p-0">
          {dict.steps.map((step, index) => (
            <li key={step.title} className={styles.step} style={cssVars({ "--i": index })}>
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

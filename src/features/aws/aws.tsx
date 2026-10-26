import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import AwsFlow from "./aws-flow";
import AwsLogo from "./aws-logo";
import styles from "./aws.module.css";

const Aws = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).aws;

  return (
    <section id="aws" aria-labelledby="aws-title">
      <div className={`site-wrap ${styles.stage}`}>
        <div className={styles.head}>
          <div className="flex flex-col gap-[18px]">
            <p className="eyebrow">{dict.eyebrow}</p>
            <h2 id="aws-title" className="section-title m-0">
              {dict.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className={styles.badge}>
              <AwsLogo />
              <div className={styles.badgeText}>
                <strong>{dict.badgeTitle}</strong>
                <span>{dict.badgeCaption}</span>
              </div>
            </div>
            <p className="lede m-0">{dict.body}</p>
          </div>
        </div>
        <div className={styles.benefits}>
          {dict.benefits.map((benefit) => (
            <div key={benefit.title} className={styles.benefit}>
              <i className={styles.benefitMark} />
              <b>{benefit.title}</b>
              <span>{benefit.body}</span>
            </div>
          ))}
        </div>
        <AwsFlow ariaLabel={dict.flowAriaLabel} steps={dict.flow} />
      </div>
    </section>
  );
};

export default Aws;

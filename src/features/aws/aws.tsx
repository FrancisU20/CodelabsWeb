import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import SectionHeading from "@/shared/ui/section/section-heading";
import AwsFlow from "./aws-flow";
import AwsLogo from "./aws-logo";
import styles from "./aws.module.css";

const Aws = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).aws;

  return (
    <section id="aws" aria-labelledby="aws-title">
      <div className={`site-wrap ${styles.stage}`}>
        <div className={styles.head}>
          <SectionHeading className="flex flex-col gap-[18px]" eyebrow={dict.eyebrow} title={dict.title} titleId="aws-title" />
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

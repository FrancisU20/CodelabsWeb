import { APPS_PUBLISHED, AWS_CERTIFICATIONS, COUNTRIES_SERVED, FOUNDING_YEAR, PROJECTS_DELIVERED, yearsInBusiness } from "@/content/company-figures";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { pinLength } from "@/shared/motion/pin-length";
import Kicker from "@/shared/ui/kicker";
import styles from "./impact.module.css";

const COUNT_STAGGER = 0.08;

const Impact = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).impact;
  const years = yearsInBusiness(new Date().getFullYear());
  const figures = [
    { value: PROJECTS_DELIVERED, prefix: "+", label: dict.projects },
    { value: APPS_PUBLISHED, prefix: "+", label: dict.apps },
    { value: COUNTRIES_SERVED.length, prefix: "", label: dict.countries },
    { value: years, prefix: "", label: dict.years.replace("{founded}", String(FOUNDING_YEAR)) },
  ];

  return (
    <section aria-labelledby="impact-title" data-pin style={pinLength("short")}>
      <div className={`site-wrap ${styles.stage}`} data-stage>
        <Kicker>{dict.eyebrow}</Kicker>
        <h2 id="impact-title" className={styles.title} data-reveal>
          {dict.title.replace("{years}", String(years))}
        </h2>
        <dl className={styles.figures}>
          {figures.map((figure, index) => (
            <div key={figure.label} className={styles.figure} data-reveal>
              <dt>{figure.label}</dt>
              <dd data-count={figure.value} data-prefix={figure.prefix} data-count-delay={index * COUNT_STAGGER}>
                {figure.prefix}
                {figure.value}
              </dd>
            </div>
          ))}
        </dl>
        <p className={styles.aws}>
          <i aria-hidden="true" />
          {dict.awsPartner} · {AWS_CERTIFICATIONS} {dict.awsCertifications}
        </p>
      </div>
    </section>
  );
};

export default Impact;

import { APPS_PUBLISHED, AWS_CERTIFICATIONS, CLOUD_PARTNER, FOUNDING_YEAR } from "@/content/company-figures";
import type { Messages } from "@/i18n/messages/messages";
import styles from "./impact.module.css";

const ImpactFigures = ({ copy }: { copy: Messages["impact"] }) => {
  const figures = [
    { value: String(FOUNDING_YEAR), label: copy.figures.founded },
    { value: `+${APPS_PUBLISHED}`, label: copy.figures.apps },
    { value: CLOUD_PARTNER, label: `${copy.figures.awsPartner} · ${AWS_CERTIFICATIONS} ${copy.figures.awsCertifications}` },
  ];

  return (
    <section className={styles.results} aria-label={copy.figuresLabel}>
      <dl className={`site-wrap ${styles.grid}`} data-reveal>
        {figures.map((figure) => (
          <div key={figure.label} className={styles.result}>
            <dt>{figure.label}</dt>
            <dd>{figure.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default ImpactFigures;

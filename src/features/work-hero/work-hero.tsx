import Image from "next/image";
import { clientLogos } from "@/content/clients";
import { APPS_PUBLISHED, COUNTRIES_SERVED, PROJECTS_DELIVERED } from "@/content/company-figures";
import { WORK_HERO_CLIENTS } from "@/content/work-hero-clients";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import Section from "@/shared/ui/section/section";
import styles from "./work-hero.module.css";

const LOGO_WIDTH = 480;
const LOGO_HEIGHT = 240;

const WorkHero = ({ locale }: { locale: Locale }) => {
  const messages = getMessages(locale);
  const page = messages.pages.work;
  const copy = messages.workHero;
  const logos = clientLogos.filter((logo) => WORK_HERO_CLIENTS.includes(logo.name));
  const stats = [
    { value: `+${PROJECTS_DELIVERED}`, label: copy.projects },
    { value: `+${APPS_PUBLISHED}`, label: copy.apps },
    { value: String(COUNTRIES_SERVED.length), label: copy.countries },
  ];

  return (
    <Section tone="deep" aria-labelledby="work-title">
      <div className={`site-wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="eyebrow m-0">{page.eyebrow}</p>
          <h1 id="work-title" className={`${styles.title} lift-in`}>
            {page.title}
          </h1>
          <p className="lede m-0">{page.description}</p>
          <dl className={styles.stats} aria-label={copy.statsLabel}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ul className={styles.mosaic} data-scrub>
          {logos.map((logo) => (
            <li key={logo.name}>
              <Image src={logo.src} alt={logo.name} width={LOGO_WIDTH} height={LOGO_HEIGHT} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default WorkHero;

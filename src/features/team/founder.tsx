import Image from "next/image";
import { FOUNDER_LINKEDIN_URL, FOUNDER_NAME } from "@/config/site";
import { FOUNDER_EXPERIENCE_YEARS, FOUNDING_YEAR, PROJECTS_DELIVERED } from "@/content/company-figures";
import { IMAGES } from "@/content/images";
import { fillTemplate } from "@/i18n/fill-template";
import type { Messages } from "@/i18n/messages/messages";
import ButtonLink from "@/shared/ui/button/button-link";
import Kicker from "@/shared/ui/kicker";
import Section from "@/shared/ui/section/section";
import styles from "./founder.module.css";

const PHOTO_SIZE = 480;

const BIO_VALUES = { experience: FOUNDER_EXPERIENCE_YEARS, founded: FOUNDING_YEAR, projects: PROJECTS_DELIVERED };

const Founder = ({ copy }: { copy: Messages["team"]["founder"] }) => (
  <Section space="section" aria-labelledby="founder-name">
    <div className={`site-wrap ${styles.founder}`}>
      <Image src={IMAGES.founder} alt={FOUNDER_NAME} width={PHOTO_SIZE} height={PHOTO_SIZE} className={styles.photo} data-reveal />
      <div className={styles.copy} data-reveal>
        <Kicker>{copy.label}</Kicker>
        <h2 id="founder-name" className={styles.name}>
          {FOUNDER_NAME}
        </h2>
        <p className={styles.role}>{copy.role}</p>
        {copy.bio.map((paragraph) => (
          <p key={paragraph} className={styles.bio}>
            {fillTemplate(paragraph, BIO_VALUES)}
          </p>
        ))}
        <figure className={styles.quote}>
          <blockquote>{copy.quote}</blockquote>
          <figcaption>
            {FOUNDER_NAME}, {copy.role}
          </figcaption>
        </figure>
        <ButtonLink href={FOUNDER_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>
          {copy.linkedin}
        </ButtonLink>
      </div>
    </div>
  </Section>
);

export default Founder;

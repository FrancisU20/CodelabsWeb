import Image from "next/image";
import Link from "next/link";
import { FOUNDER_NAME } from "@/config/site";
import type { Guide } from "@/content/guides/guide";
import { readingMinutes } from "@/content/guides/guide-reading-time";
import { IMAGES } from "@/content/images";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { GUIDES_ROUTE } from "@/i18n/routing";
import Section from "@/shared/ui/section/section";
import { formatGuideDate } from "./guide-date";
import styles from "./guides.module.css";

const AVATAR_SIZE = 96;

const GuideHeader = ({ guide, locale }: { guide: Guide; locale: Locale }) => {
  const messages = getMessages(locale);
  const copy = messages.guides;

  return (
    <Section tone="deep" aria-labelledby="guide-title">
      <header className={`site-wrap ${styles.header}`}>
        <Link className="eyebrow" href={GUIDES_ROUTE}>
          {copy.eyebrow}
        </Link>
        <h1 id="guide-title" className="lift-in">
          {guide.title}
        </h1>
        <p className="lede m-0">{guide.summary}</p>
        <div className={styles.byline}>
          <Image src={IMAGES.founder} alt="" width={AVATAR_SIZE} height={AVATAR_SIZE} className={styles.avatar} />
          <p>
            <b>
              {copy.byline} {FOUNDER_NAME}
            </b>
            <span>{messages.team.founder.role}</span>
          </p>
          <p className={styles.meta}>
            {copy.published} {formatGuideDate(guide.published, locale)} · {readingMinutes(guide)} {copy.readingTime}
          </p>
        </div>
      </header>
    </Section>
  );
};

export default GuideHeader;

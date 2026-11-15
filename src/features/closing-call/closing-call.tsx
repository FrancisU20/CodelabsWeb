import Image from "next/image";
import { BOOKING_URL } from "@/config/contact";
import { IMAGES } from "@/content/images";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { pagePath } from "@/i18n/routing";
import ButtonLink from "@/shared/ui/button/button-link";
import Section from "@/shared/ui/section/section";
import styles from "./closing-call.module.css";

const PHOTO_WIDTH = 960;
const PHOTO_HEIGHT = 1200;

const ClosingCall = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).closingCall;

  return (
    <Section tone="brand" aria-labelledby="closing-call-title">
      <div className={`site-wrap ${styles.layout}`}>
        <div className={styles.copy} data-reveal>
          <h2 id="closing-call-title" className="section-title m-0">
            {copy.title}
          </h2>
          <p className={styles.body}>{copy.body}</p>
          <div className={styles.actions}>
            <ButtonLink variant="light" href={pagePath("contact", locale)}>
              {copy.cta}
            </ButtonLink>
            <ButtonLink variant="outline" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {copy.bookingCta}
            </ButtonLink>
          </div>
        </div>
        <div className={styles.photo} data-reveal>
          <Image src={IMAGES.closing} alt={copy.photoAlt} width={PHOTO_WIDTH} height={PHOTO_HEIGHT} sizes="(max-width: 760px) 100vw, 40vw" />
        </div>
      </div>
    </Section>
  );
};

export default ClosingCall;

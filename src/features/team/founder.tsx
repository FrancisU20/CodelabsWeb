import Image from "next/image";
import { FOUNDER_LINKEDIN_URL, FOUNDER_NAME } from "@/config/site";
import { IMAGES } from "@/content/images";
import type { Messages } from "@/i18n/messages/messages";
import Kicker from "@/shared/ui/kicker";
import styles from "./founder.module.css";

const PHOTO_SIZE = 480;

const Founder = ({ copy }: { copy: Messages["team"]["founder"] }) => (
  <section className="site-wrap" aria-labelledby="founder-name">
    <div className={styles.founder} data-reveal>
      <Image src={IMAGES.founder} alt={FOUNDER_NAME} width={PHOTO_SIZE} height={PHOTO_SIZE} className={styles.photo} />
      <div className={styles.copy}>
        <Kicker>{copy.label}</Kicker>
        <h2 id="founder-name" className={styles.name}>
          {FOUNDER_NAME}
        </h2>
        <p className={styles.bio}>{copy.bio}</p>
        <a className={styles.link} href={FOUNDER_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          {copy.linkedin}
        </a>
      </div>
    </div>
  </section>
);

export default Founder;

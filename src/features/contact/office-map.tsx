import Image from "next/image";
import { GOOGLE_BUSINESS_URL, SITE_NAME, SITE_OFFICE } from "@/config/site";
import { IMAGES } from "@/content/images";
import type { Messages } from "@/i18n/messages/messages";
import styles from "./contact.module.css";

const MAP_WIDTH = 1040;
const MAP_HEIGHT = 640;

const OfficeMap = ({ copy }: { copy: Messages["contact"]["map"] }) => (
  <figure className={styles.map}>
    <Image src={IMAGES.officeMap} alt={copy.label} width={MAP_WIDTH} height={MAP_HEIGHT} sizes="(max-width: 900px) 100vw, 45vw" />
    <span className={styles.pin} aria-hidden="true">
      <b>{SITE_NAME}</b>
      <i />
    </span>
    <figcaption className={styles.mapBar}>
      <span>{SITE_OFFICE}</span>
      <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer">
        {copy.directions} →
      </a>
    </figcaption>
    <small className={styles.attribution}>{copy.attribution}</small>
  </figure>
);

export default OfficeMap;

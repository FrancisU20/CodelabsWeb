import Image from "next/image";
import type { ClientLogo } from "@/content/client-logo";
import styles from "./clients.module.css";

const LOGO_WIDTH = 480;
const LOGO_HEIGHT = 240;

type ClientLogoGroupProps = {
  logos: ClientLogo[];
  duplicate?: boolean;
};

const ClientLogoGroup = ({ logos, duplicate = false }: ClientLogoGroupProps) => (
  <div className={`${styles.group} ${duplicate ? styles.duplicate : ""}`} aria-hidden={duplicate || undefined}>
    {logos.map((client) => (
      <span key={client.src} className={styles.tile}>
        <Image src={client.src} alt={duplicate ? "" : client.name} width={LOGO_WIDTH} height={LOGO_HEIGHT} />
      </span>
    ))}
  </div>
);

export default ClientLogoGroup;

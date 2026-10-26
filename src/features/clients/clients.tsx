import { clientLogoRows } from "@/content/clients";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { CLIENTS_ANCHOR } from "@/i18n/routing";
import ClientLogoGroup from "./client-logo-group";
import styles from "./clients.module.css";

const Clients = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).clients;

  return (
    <section id={CLIENTS_ANCHOR[locale]} className={styles.clients} aria-labelledby="clients-title">
      <div className={`site-wrap ${styles.head}`}>
        <p className="eyebrow">{dict.eyebrow}</p>
        <h2 id="clients-title" className={styles.title}>
          {dict.title}
        </h2>
      </div>
      <div className={styles.rows}>
        {clientLogoRows.map((logos, rowIndex) => (
          <div key={logos[0].src} className={`${styles.marquee} ${rowIndex % 2 === 1 ? styles.reverse : ""}`}>
            <ClientLogoGroup logos={logos} />
            <ClientLogoGroup logos={logos} duplicate />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;

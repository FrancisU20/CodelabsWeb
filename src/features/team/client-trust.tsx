import Image from "next/image";
import Link from "next/link";
import { clientLogos } from "@/content/clients";
import { AWS_ACCREDITATIONS, AWS_CERTIFICATIONS } from "@/content/company-figures";
import { NAMED_CLIENTS } from "@/content/named-clients";
import { fillTemplate } from "@/i18n/fill-template";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { pagePath } from "@/i18n/routing";
import Section from "@/shared/ui/section/section";
import SectionHeading from "@/shared/ui/section/section-heading";
import styles from "./client-trust.module.css";

const LOGO_WIDTH = 480;
const LOGO_HEIGHT = 240;

const ClientTrust = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).about.trust;
  const logos = clientLogos.filter((logo) => NAMED_CLIENTS.includes(logo.name));

  return (
    <Section tone="mist" space="section" aria-labelledby="trust-title">
      <div className={`site-wrap ${styles.layout}`}>
        <SectionHeading title={copy.title} titleId="trust-title" reveal />
        <ul className={styles.logos} data-reveal>
          {logos.map((logo) => (
            <li key={logo.name}>
              <Image src={logo.src} alt={logo.name} width={LOGO_WIDTH} height={LOGO_HEIGHT} />
            </li>
          ))}
        </ul>
        <div className={styles.footer} data-reveal>
          <p>{fillTemplate(copy.body, { certifications: AWS_CERTIFICATIONS, accreditations: AWS_ACCREDITATIONS })}</p>
          <Link href={pagePath("work", locale)} className={styles.link}>
            {copy.link}
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default ClientTrust;

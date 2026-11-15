import Link from "next/link";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { servicePath } from "@/i18n/routing";
import { servicePriceLabel } from "@/i18n/service-price-label";
import { pinLength } from "@/shared/motion/pin-length";
import Section from "@/shared/ui/section/section";
import SectionTitle from "@/shared/ui/section/section-title";
import ServiceChapterVisual from "./service-chapter-visual";
import styles from "./service-chapters.module.css";

const chapterNumber = (index: number, total: number): string => `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

const ServiceChapters = ({ locale }: { locale: Locale }) => {
  const messages = getMessages(locale);
  const dict = messages.services;
  const aiExample = messages.servicePages.items.ai.example;

  return (
    <Section
      tone="night"
      id="servicios"
      className={styles.scene}
      aria-labelledby="services-title"
      data-pin
      data-story
      data-story-count={dict.items.length}
      data-active="0"
      style={pinLength("chapters")}
    >
      <div className={`site-wrap ${styles.stage}`} data-stage>
        <SectionTitle id="services-title" title={dict.title} className={styles.title} />
        <div className={styles.chapters}>
          {dict.items.map((service, index) => (
            <article key={service.id} className={styles.chapter} data-index={index} data-current={index === 0 || undefined}>
              <div className={styles.copy}>
                <p className={styles.number}>
                  {chapterNumber(index, dict.items.length)} · {service.title}
                </p>
                <h3 className={styles.need}>{service.need}</h3>
                <p className={styles.summary}>{service.summary}</p>
                <p className={styles.price}>
                  <b>{servicePriceLabel(service.id, locale)}</b>
                  <Link href={servicePath(service.id, locale)} className={styles.link}>
                    {dict.more}
                    <span className="sr-only">: {service.title}</span>
                  </Link>
                </p>
              </div>
              <div className={styles.visual} aria-hidden="true">
                <ServiceChapterVisual service={service} aiExample={aiExample} />
              </div>
            </article>
          ))}
        </div>
        <div className={styles.progress} aria-hidden="true">
          <i />
        </div>
      </div>
    </Section>
  );
};

export default ServiceChapters;

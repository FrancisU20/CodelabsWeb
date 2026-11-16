import Link from "next/link";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { servicePath } from "@/i18n/routing";
import { servicePriceLabel } from "@/i18n/service-price-label";
import ChapterScene from "@/shared/ui/chapter-scene/chapter-scene";
import ServiceChapterVisual from "./service-chapter-visual";
import styles from "./service-chapters.module.css";

const ServiceChapters = ({ locale }: { locale: Locale }) => {
  const messages = getMessages(locale);
  const dict = messages.services;
  const aiExample = messages.servicePages.items.ai.example;
  const chapters = dict.items.map((service) => ({
    id: service.id,
    label: service.title,
    title: service.need,
    body: service.summary,
    extra: (
      <p className={styles.price}>
        <b>{servicePriceLabel(service.id, locale)}</b>
        <Link href={servicePath(service.id, locale)} className={styles.link}>
          {dict.more}
          <span className="sr-only">: {service.title}</span>
        </Link>
      </p>
    ),
    visual: <ServiceChapterVisual service={service} aiExample={aiExample} />,
  }));

  return <ChapterScene id="servicios" titleId="services-title" title={dict.title} chapters={chapters} />;
};

export default ServiceChapters;

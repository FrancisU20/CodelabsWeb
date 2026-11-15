import type { GuideFaq } from "@/content/guides/guide-faq";
import styles from "./guides.module.css";

const GuideFaqs = ({ title, faqs }: { title: string; faqs: GuideFaq[] }) => (
  <section className={styles.faqs} aria-labelledby="guide-faqs">
    <h2 id="guide-faqs">{title}</h2>
    {faqs.map((entry) => (
      <div key={entry.question} className={styles.faq}>
        <h3>{entry.question}</h3>
        <p>{entry.answer}</p>
      </div>
    ))}
  </section>
);

export default GuideFaqs;

import { joinClassNames } from "@/shared/lib/class-names";
import styles from "./faq-list.module.css";

type FaqListProps = {
  faqs: { question: string; answer: string }[];
  className?: string;
};

const FaqList = ({ faqs, className }: FaqListProps) => (
  <div className={joinClassNames(styles.faqs, className)}>
    {faqs.map((entry) => (
      <details key={entry.question} className={styles.faq}>
        <summary>{entry.question}</summary>
        <p>{entry.answer}</p>
      </details>
    ))}
  </div>
);

export default FaqList;

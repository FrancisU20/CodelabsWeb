import { joinClassNames } from "@/shared/lib/class-names";
import styles from "./service-detail.module.css";

const ServiceFit = ({ title, reasons }: { title: string; reasons: string[] }) => (
  <div className={joinClassNames("tone-night", styles.fit)}>
    <h2 className={styles.fitTitle}>{title}</h2>
    <ul className={styles.fitList}>
      {reasons.map((reason) => (
        <li key={reason}>{reason}</li>
      ))}
    </ul>
  </div>
);

export default ServiceFit;

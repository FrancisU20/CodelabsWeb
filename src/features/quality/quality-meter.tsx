import styles from "./quality.module.css";

const QualityMeter = ({ title, caption }: { title: string; caption: string }) => (
  <div className={styles.meterWrap}>
    <div className={styles.meter}>
      <div className={styles.meterCore}>
        <b>{title}</b>
        <span>{caption}</span>
      </div>
    </div>
  </div>
);

export default QualityMeter;

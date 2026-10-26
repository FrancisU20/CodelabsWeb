import type { ReactNode } from "react";
import styles from "./phone.module.css";

type PhoneFrameProps = {
  className?: string;
  children: ReactNode;
};

const PhoneFrame = ({ className = "", children }: PhoneFrameProps) => (
  <div className={`${styles.phone} ${className}`}>
    <div className={styles.screen}>
      <span className={styles.island} />
      {children}
    </div>
  </div>
);

export default PhoneFrame;

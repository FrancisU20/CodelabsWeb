import type { ReactNode } from "react";
import styles from "./toc-article.module.css";

type NumberedPartProps = {
  id: string;
  index: number;
  heading: string;
  children: ReactNode;
};

const partNumber = (index: number): string => String(index + 1).padStart(2, "0");

const NumberedPart = ({ id, index, heading, children }: NumberedPartProps) => (
  <section id={id} className={styles.part}>
    <h2>
      <span>{partNumber(index)}</span>
      {heading}
    </h2>
    {children}
  </section>
);

export default NumberedPart;

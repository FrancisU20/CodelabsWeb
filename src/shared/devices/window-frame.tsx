import type { ReactNode } from "react";
import { joinClassNames } from "@/shared/lib/class-names";
import type { WindowKind } from "./window-kind";
import styles from "./window.module.css";

const CONTROL_DOTS = ["close", "minimize", "maximize"];

type WindowFrameProps = {
  kind: WindowKind;
  caption: string;
  className?: string;
  children: ReactNode;
};

const WindowFrame = ({ kind, caption, className, children }: WindowFrameProps) => (
  <div className={joinClassNames(styles.frame, styles[kind], className)}>
    <div className={styles.bar}>
      {CONTROL_DOTS.map((control) => (
        <span key={control} className={styles.dot} />
      ))}
      <span className={styles.caption}>{caption}</span>
    </div>
    {children}
  </div>
);

export default WindowFrame;

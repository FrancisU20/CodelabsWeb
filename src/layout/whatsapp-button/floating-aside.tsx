"use client";

import type { ReactNode } from "react";
import { cx } from "@/shared/lib/class-names";
import { useFloatingCover } from "./use-floating-cover";
import styles from "./whatsapp-button.module.css";

type FloatingAsideProps = {
  ariaLabel: string;
  children: ReactNode;
};

const FloatingAside = ({ ariaLabel, children }: FloatingAsideProps) => {
  const covered = useFloatingCover();

  return (
    <aside aria-label={ariaLabel} className={cx(styles.slot, covered && styles.covered)}>
      {children}
    </aside>
  );
};

export default FloatingAside;

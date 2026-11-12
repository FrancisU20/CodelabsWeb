"use client";

import type { ReactNode } from "react";
import { joinClassNames } from "@/shared/lib/class-names";
import { useFloatingCover } from "./use-floating-cover";
import styles from "./whatsapp-button.module.css";

type FloatingAsideProps = {
  ariaLabel: string;
  children: ReactNode;
};

const FloatingAside = ({ ariaLabel, children }: FloatingAsideProps) => {
  const covered = useFloatingCover();

  return (
    <aside aria-label={ariaLabel} className={joinClassNames(styles.slot, covered && styles.covered)}>
      {children}
    </aside>
  );
};

export default FloatingAside;

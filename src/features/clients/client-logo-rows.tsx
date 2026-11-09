"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { cx } from "@/shared/lib/class-names";
import styles from "./clients.module.css";

type ClientLogoRowsProps = {
  pauseLabel: string;
  resumeLabel: string;
  children: ReactNode;
};

const ClientLogoRows = ({ pauseLabel, resumeLabel, children }: ClientLogoRowsProps) => {
  const [paused, setPaused] = useState(false);

  return (
    <>
      <div className={cx(styles.rows, paused && styles.paused)}>{children}</div>
      <button type="button" className={styles.control} onClick={() => setPaused((previous) => !previous)}>
        {paused ? resumeLabel : pauseLabel}
      </button>
    </>
  );
};

export default ClientLogoRows;

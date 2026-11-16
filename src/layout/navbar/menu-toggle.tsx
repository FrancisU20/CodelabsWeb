import type { RefObject } from "react";
import styles from "./navbar.module.css";

type MenuToggleProps = {
  buttonRef: RefObject<HTMLButtonElement | null>;
  open: boolean;
  controls: string;
  openLabel: string;
  closeLabel: string;
  onToggle: () => void;
};

const MenuToggle = ({ buttonRef, open, controls, openLabel, closeLabel, onToggle }: MenuToggleProps) => (
  <button
    ref={buttonRef}
    type="button"
    aria-label={open ? closeLabel : openLabel}
    aria-expanded={open}
    aria-controls={controls}
    onClick={onToggle}
    className={styles.toggle}
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </button>
);

export default MenuToggle;

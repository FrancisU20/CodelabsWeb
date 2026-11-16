"use client";

import type { ReactNode } from "react";
import { joinClassNames } from "@/shared/lib/class-names";
import Icon from "@/shared/ui/icons/svg-icon";
import { useDismissibleMenu } from "./use-dismissible-menu";
import styles from "./navbar.module.css";

type NavDropdownProps = {
  id: string;
  label: ReactNode;
  ariaLabel?: string;
  pathname: string;
  current?: boolean;
  className?: string;
  buttonClassName?: string;
  panelClassName: string;
  children: ReactNode;
};

const NavDropdown = ({ id, label, ariaLabel, pathname, current, className, buttonClassName, panelClassName, children }: NavDropdownProps) => {
  const { open, containerRef, toggleRef, toggle, close } = useDismissibleMenu<HTMLDivElement>(pathname, id);

  return (
    <div ref={containerRef} className={className}>
      <button
        ref={toggleRef}
        type="button"
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-controls={id}
        data-current={current || undefined}
        onClick={toggle}
        className={joinClassNames(styles.trigger, buttonClassName)}
      >
        {label}
        <Icon name="chevron-down" className={styles.chevron} />
      </button>
      {open && (
        <div id={id} className={joinClassNames(styles.panel, panelClassName)} onClick={close}>
          {children}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;

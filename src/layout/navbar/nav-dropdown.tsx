"use client";

import type { ReactNode } from "react";
import { useDismissibleMenu } from "./use-dismissible-menu";

type NavDropdownProps = {
  id: string;
  label: string;
  ariaLabel?: string;
  pathname: string;
  className?: string;
  panelClassName: string;
  children: ReactNode;
};

const NavDropdown = ({ id, label, ariaLabel, pathname, className, panelClassName, children }: NavDropdownProps) => {
  const { open, containerRef, toggleRef, toggle, close } = useDismissibleMenu<HTMLDivElement>(pathname, id);

  return (
    <div ref={containerRef} className={className}>
      <button
        ref={toggleRef}
        type="button"
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-controls={id}
        onClick={toggle}
        className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 font-medium text-muted transition-colors hover:text-brand"
      >
        {label}
        <span aria-hidden="true" className="text-[11px]">
          ▾
        </span>
      </button>
      {open && (
        <div id={id} className={panelClassName} onClick={close}>
          {children}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;

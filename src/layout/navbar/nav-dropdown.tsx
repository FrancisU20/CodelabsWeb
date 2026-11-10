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
  const menu = useDismissibleMenu<HTMLDivElement>(pathname, id);

  return (
    <div ref={menu.containerRef} className={className}>
      <button
        ref={menu.toggleRef}
        type="button"
        aria-label={ariaLabel}
        aria-expanded={menu.open}
        aria-controls={id}
        onClick={menu.toggle}
        className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 font-medium text-muted transition-colors hover:text-brand"
      >
        {label}
        <span aria-hidden="true" className="text-[11px]">
          ▾
        </span>
      </button>
      {menu.open && (
        <div id={id} className={panelClassName} onClick={menu.close}>
          {children}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;

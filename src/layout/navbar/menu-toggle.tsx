import type { RefObject } from "react";

type MenuToggleProps = {
  buttonRef: RefObject<HTMLButtonElement>;
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
    className="inline-flex h-11 w-11 items-center justify-center ml-auto rounded-lg border border-line lg:hidden"
  >
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <path d={open ? "M5 5L15 15M15 5L5 15" : "M3 5H17M3 10H17M3 15H17"} />
    </svg>
  </button>
);

export default MenuToggle;

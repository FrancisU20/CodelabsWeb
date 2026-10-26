import { Fragment } from "react";
import type { ReactNode } from "react";

const PATHS: ReactNode[] = [
  <Fragment key="manager">
    <circle cx="12" cy="7" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </Fragment>,
  <Fragment key="design">
    <path d="M12 3l9 4.5-9 4.5-9-4.5z" />
    <path d="M3 12l9 4.5 9-4.5" />
    <path d="M3 16.5 12 21l9-4.5" />
  </Fragment>,
  <Fragment key="development">
    <path d="m8 7-5 5 5 5" />
    <path d="m16 7 5 5-5 5" />
  </Fragment>,
  <Fragment key="cloud">
    <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 0 0 4 12a4 4 0 0 0 2 7z" />
  </Fragment>,
  <Fragment key="quality">
    <path d="M9 12l2 2 4-4" />
    <circle cx="12" cy="12" r="9" />
  </Fragment>,
  <Fragment key="support">
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="3" y="14" width="4" height="6" rx="1.5" />
    <rect x="17" y="14" width="4" height="6" rx="1.5" />
  </Fragment>,
];

const RoleIcon = ({ index }: { index: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    {PATHS[index % PATHS.length]}
  </svg>
);

export default RoleIcon;

import type { ReactNode } from "react";
import type { ServiceId } from "@/content/service-id";

const ART: Record<ServiceId, ReactNode> = {
  mobile: (
    <>
      <rect x="36" y="8" width="48" height="104" rx="12" />
      <path d="M54 98h12" />
      <rect x="44" y="22" width="32" height="20" rx="4" opacity=".5" />
      <rect x="44" y="50" width="32" height="10" rx="3" opacity=".3" />
    </>
  ),
  web: (
    <>
      <rect x="8" y="20" width="104" height="80" rx="10" />
      <path d="M8 38h104" />
      <circle cx="20" cy="29" r="2.5" />
      <circle cx="29" cy="29" r="2.5" />
      <rect x="20" y="50" width="44" height="8" rx="3" opacity=".6" />
      <rect x="20" y="66" width="80" height="22" rx="4" opacity=".3" />
    </>
  ),
  custom: (
    <>
      <rect x="14" y="18" width="92" height="24" rx="6" />
      <rect x="14" y="48" width="92" height="24" rx="6" />
      <rect x="14" y="78" width="92" height="24" rx="6" />
      <circle cx="28" cy="30" r="3" />
      <circle cx="28" cy="60" r="3" />
      <circle cx="28" cy="90" r="3" />
    </>
  ),
  cloud: (
    <>
      <path d="M88 84a20 20 0 0 0-4-39.6A28 28 0 0 0 30 52a16 16 0 0 0 2 32z" />
      <path d="M46 96v12M60 92v16M74 96v12" opacity=".5" />
    </>
  ),
  modernization: (
    <>
      <path d="M20 60a40 40 0 0 1 68-28" />
      <path d="M100 60a40 40 0 0 1-68 28" />
      <path d="M88 18v14H74" />
      <path d="M32 102V88h14" />
    </>
  ),
  support: (
    <>
      <circle cx="60" cy="60" r="44" />
      <path d="M60 34v28l18 12" />
    </>
  ),
};

const ServiceArt = ({ id }: { id: ServiceId }) => (
  <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    {ART[id]}
  </svg>
);

export default ServiceArt;

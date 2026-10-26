import type { ReactNode } from "react";
import SiteShell from "@/layout/site-shell/site-shell";

export default function LegalLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <SiteShell locale="es">{children}</SiteShell>;
}

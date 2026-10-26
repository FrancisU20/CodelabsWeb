import type { ReactNode } from "react";
import SiteShell from "@/layout/site-shell/site-shell";

export default function SiteLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <SiteShell locale="en">{children}</SiteShell>;
}

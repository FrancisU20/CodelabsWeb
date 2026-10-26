import type { ReactNode } from "react";
import { buildRootMetadata } from "@/i18n/page-metadata";
import RootDocument from "@/layout/root-document/root-document";

export const metadata = buildRootMetadata("es");

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <RootDocument locale="es">{children}</RootDocument>;
}

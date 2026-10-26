import type { Metadata } from "next";
import { SITE_NAME } from "@/config/site";
import { getMessages } from "@/i18n/messages/get-messages";
import { buildRootMetadata } from "@/i18n/page-metadata";
import RootDocument from "@/layout/root-document/root-document";
import NotFoundView from "@/views/not-found-view";

export const metadata: Metadata = {
  ...buildRootMetadata("es"),
  title: `${getMessages("es").notFound.title} | ${SITE_NAME}`,
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <RootDocument locale="es">
      <NotFoundView />
    </RootDocument>
  );
}

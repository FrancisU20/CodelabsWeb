import type { ReactNode } from "react";
import type { Locale } from "@/i18n/locale";
import { FONT_VARIABLES } from "@/styles/fonts";
import OrganizationJsonLd from "@/layout/structured-data/organization-json-ld";
import { MOTION_BOOTSTRAP_SCRIPT } from "@/shared/motion/motion-mode";
import "@/styles/globals.css";

type RootDocumentProps = {
  locale: Locale;
  children: ReactNode;
};

const RootDocument = ({ locale, children }: RootDocumentProps) => (
  <html lang={locale} suppressHydrationWarning>
    <body className={`${FONT_VARIABLES} antialiased`}>
      <script dangerouslySetInnerHTML={{ __html: MOTION_BOOTSTRAP_SCRIPT }} />
      {children}
      <OrganizationJsonLd locale={locale} />
    </body>
  </html>
);

export default RootDocument;

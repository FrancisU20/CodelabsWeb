import type { ReactNode } from "react";
import Script from "next/script";
import { CLOUDFLARE_BEACON_CONFIG, CLOUDFLARE_BEACON_URL } from "@/config/analytics";
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
      <Script src={CLOUDFLARE_BEACON_URL} data-cf-beacon={CLOUDFLARE_BEACON_CONFIG} strategy="lazyOnload" />
    </body>
  </html>
);

export default RootDocument;

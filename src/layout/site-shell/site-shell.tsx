import type { ReactNode } from "react";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import Footer from "@/layout/footer/footer";
import Navbar from "@/layout/navbar/navbar";
import WhatsAppButton from "@/layout/whatsapp-button/whatsapp-button";
import ScrollSceneController from "@/shared/motion/scroll-scene-controller";
import IconSprite from "@/shared/ui/icons/icon-sprite";

const MAIN_CONTENT_ID = "contenido";

type SiteShellProps = {
  locale: Locale;
  children: ReactNode;
};

const SiteShell = ({ locale, children }: SiteShellProps) => (
  <div className="min-h-screen bg-ink text-fg">
    <a
      href={`#${MAIN_CONTENT_ID}`}
      className="sr-only fixed top-3 left-3 z-[80] rounded-full bg-brand-strong px-5 py-3 font-semibold text-white focus:not-sr-only"
    >
      {getMessages(locale).nav.skipToContent}
    </a>
    <IconSprite />
    <Navbar locale={locale} />
    <main id={MAIN_CONTENT_ID} className="relative">
      {children}
    </main>
    <Footer locale={locale} />
    <WhatsAppButton locale={locale} />
    <ScrollSceneController />
  </div>
);

export default SiteShell;

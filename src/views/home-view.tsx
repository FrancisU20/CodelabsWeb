import type { Locale } from "@/i18n/locale";
import Clients from "@/features/clients/clients";
import ClosingCall from "@/features/closing-call/closing-call";
import Hero from "@/features/hero/hero";
import Impact from "@/features/impact/impact";
import Services from "@/features/services/services";

const HomeView = ({ locale }: { locale: Locale }) => (
  <>
    <Hero locale={locale} />
    <Clients locale={locale} />
    <Services locale={locale} scrollTrack />
    <Impact locale={locale} />
    <ClosingCall locale={locale} />
  </>
);

export default HomeView;

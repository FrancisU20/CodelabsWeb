import type { Locale } from "@/i18n/locale";
import Clients from "@/features/clients/clients";
import ClosingCall from "@/features/closing-call/closing-call";
import Hero from "@/features/hero/hero";
import Impact from "@/features/impact/impact";
import Reviews from "@/features/reviews/reviews";
import ServiceChapters from "@/features/services/service-chapters";

const HomeView = ({ locale }: { locale: Locale }) => (
  <>
    <Hero locale={locale} />
    <Clients locale={locale} />
    <ServiceChapters locale={locale} />
    <Impact locale={locale} />
    <Reviews locale={locale} />
    <ClosingCall locale={locale} />
  </>
);

export default HomeView;

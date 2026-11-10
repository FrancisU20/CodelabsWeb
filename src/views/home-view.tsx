import type { Locale } from "@/i18n/locale";
import Clients from "@/features/clients/clients";
import Contact from "@/features/contact/contact";
import Hero from "@/features/hero/hero";
import Impact from "@/features/impact/impact";
import Manifesto from "@/features/manifesto/manifesto";
import Process from "@/features/process/process";
import Services from "@/features/services/services";
import Stories from "@/features/stories/stories";

const HomeView = ({ locale }: { locale: Locale }) => (
  <>
    <Hero locale={locale} />
    <Clients locale={locale} />
    <Manifesto locale={locale} />
    <Stories locale={locale} />
    <Impact locale={locale} />
    <Services locale={locale} scrollTrack />
    <Process locale={locale} />
    <Contact locale={locale} />
  </>
);

export default HomeView;

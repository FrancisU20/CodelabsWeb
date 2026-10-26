import type { Locale } from "@/i18n/locale";
import Aws from "@/features/aws/aws";
import Clients from "@/features/clients/clients";
import Contact from "@/features/contact/contact";
import Hero from "@/features/hero/hero";
import Impact from "@/features/impact/impact";
import Manifesto from "@/features/manifesto/manifesto";
import Process from "@/features/process/process";
import Quality from "@/features/quality/quality";
import Services from "@/features/services/services";
import Stories from "@/features/stories/stories";
import Team from "@/features/team/team";
import WebShowcase from "@/features/web-showcase/web-showcase";

const HomeView = ({ locale }: { locale: Locale }) => (
  <>
    <Hero locale={locale} />
    <Clients locale={locale} />
    <Manifesto locale={locale} />
    <Stories locale={locale} />
    <WebShowcase locale={locale} />
    <Services locale={locale} />
    <Quality locale={locale} />
    <Impact locale={locale} />
    <Aws locale={locale} />
    <Team locale={locale} />
    <Process locale={locale} />
    <Contact locale={locale} />
  </>
);

export default HomeView;

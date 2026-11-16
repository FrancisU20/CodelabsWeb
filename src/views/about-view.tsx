import ClosingCall from "@/features/closing-call/closing-call";
import ClientTrust from "@/features/team/client-trust";
import Founder from "@/features/team/founder";
import Team from "@/features/team/team";
import { APPS_PUBLISHED, COUNTRIES_SERVED, FOUNDING_YEAR, PROJECTS_DELIVERED } from "@/content/company-figures";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import PageIntro from "@/layout/page-intro/page-intro";
import StatGrid from "@/shared/ui/stat-grid";

const AboutView = ({ locale }: { locale: Locale }) => {
  const messages = getMessages(locale);
  const { facts, factsLabel } = messages.about;
  const stats = [
    { value: String(FOUNDING_YEAR), label: facts.founded },
    { value: `+${PROJECTS_DELIVERED}`, label: facts.projects },
    { value: `+${APPS_PUBLISHED}`, label: facts.apps },
    { value: String(COUNTRIES_SERVED.length), label: facts.countries },
  ];

  return (
    <>
      <PageIntro {...messages.pages.about} tone="deep" aside={<StatGrid label={factsLabel} stats={stats} />} />
      <Founder copy={messages.team.founder} />
      <Team locale={locale} />
      <ClientTrust locale={locale} />
      <ClosingCall locale={locale} />
    </>
  );
};

export default AboutView;

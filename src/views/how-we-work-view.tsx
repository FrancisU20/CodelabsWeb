import ClosingCall from "@/features/closing-call/closing-call";
import Commitments from "@/features/commitments/commitments";
import Process from "@/features/process/process";
import ProjectUpdates from "@/features/project-updates/project-updates";
import { fillTerms } from "@/i18n/fill-terms";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import PageIntro from "@/layout/page-intro/page-intro";
import StatGrid from "@/shared/ui/stat-grid";

const HowWeWorkView = ({ locale }: { locale: Locale }) => {
  const messages = getMessages(locale);
  const copy = messages.howWeWork;
  const facts = copy.facts.map((fact) => ({ value: fillTerms(fact.value), label: fact.label }));

  return (
    <>
      <PageIntro {...messages.pages.howWeWork} tone="deep" aside={<StatGrid label={copy.factsLabel} stats={facts} />} />
      <ProjectUpdates locale={locale} />
      <Process locale={locale} />
      <Commitments locale={locale} />
      <ClosingCall locale={locale} variant="process" />
    </>
  );
};

export default HowWeWorkView;

import ClosingCall from "@/features/closing-call/closing-call";
import GuideList from "@/features/guides/guide-list";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import PageIntro from "@/layout/page-intro/page-intro";

const GuidesView = ({ locale }: { locale: Locale }) => {
  const { eyebrow, title, description } = getMessages(locale).guides;

  return (
    <>
      <PageIntro eyebrow={eyebrow} title={title} description={description} />
      <GuideList locale={locale} />
      <ClosingCall locale={locale} />
    </>
  );
};

export default GuidesView;

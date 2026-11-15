import type { ServiceId } from "@/content/service-id";
import Aws from "@/features/aws/aws";
import ClosingCall from "@/features/closing-call/closing-call";
import OtherServices from "@/features/service-detail/other-services";
import ServiceCases from "@/features/service-detail/service-cases";
import ServiceFaqs from "@/features/service-detail/service-faqs";
import ServiceFit from "@/features/service-detail/service-fit";
import ServiceIncludes from "@/features/service-detail/service-includes";
import ServiceIntro from "@/features/service-detail/service-intro";
import ServiceOutcomes from "@/features/service-detail/service-outcomes";
import ServiceSteps from "@/features/service-detail/service-steps";
import ServiceChapterVisual from "@/features/services/service-chapter-visual";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import ServiceJsonLd from "@/layout/structured-data/service-json-ld";

const AWS_SERVICE: ServiceId = "cloud";

const ServiceDetailView = ({ service, locale }: { service: ServiceId; locale: Locale }) => {
  const messages = getMessages(locale);
  const summary = messages.services.items.find((item) => item.id === service);
  const art = summary && <ServiceChapterVisual service={summary} aiExample={messages.servicePages.items.ai.example} />;

  return (
    <>
      <ServiceJsonLd service={service} locale={locale} />
      <ServiceIntro service={service} locale={locale} art={art} />
      <ServiceOutcomes service={service} locale={locale} />
      <ServiceIncludes service={service} locale={locale} />
      <ServiceSteps service={service} locale={locale} />
      {service === AWS_SERVICE && <Aws locale={locale} />}
      <ServiceFit service={service} locale={locale} />
      <ServiceCases service={service} locale={locale} />
      <ServiceFaqs service={service} locale={locale} />
      <OtherServices service={service} locale={locale} />
      <ClosingCall locale={locale} />
    </>
  );
};

export default ServiceDetailView;

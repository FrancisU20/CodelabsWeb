import type { ServiceId } from "@/content/service-id";
import Aws from "@/features/aws/aws";
import ClosingCall from "@/features/closing-call/closing-call";
import OtherServices from "@/features/service-detail/other-services";
import ServiceIncludes from "@/features/service-detail/service-includes";
import ServiceIntro from "@/features/service-detail/service-intro";
import type { Locale } from "@/i18n/locale";
import ServiceJsonLd from "@/layout/structured-data/service-json-ld";

const AWS_SERVICE: ServiceId = "cloud";

const ServiceDetailView = ({ service, locale }: { service: ServiceId; locale: Locale }) => (
  <>
    <ServiceJsonLd service={service} locale={locale} />
    <ServiceIntro service={service} locale={locale} />
    <ServiceIncludes service={service} locale={locale} />
    {service === AWS_SERVICE && <Aws locale={locale} />}
    <OtherServices service={service} locale={locale} />
    <ClosingCall locale={locale} />
  </>
);

export default ServiceDetailView;

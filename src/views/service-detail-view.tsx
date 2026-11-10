import type { ServiceId } from "@/content/service-id";
import Aws from "@/features/aws/aws";
import ClosingCall from "@/features/closing-call/closing-call";
import OtherServices from "@/features/service-detail/other-services";
import ServiceDetail from "@/features/service-detail/service-detail";
import type { Locale } from "@/i18n/locale";
import ServiceJsonLd from "@/layout/structured-data/service-json-ld";

const AWS_SERVICE: ServiceId = "cloud";

const ServiceDetailView = ({ service, locale }: { service: ServiceId; locale: Locale }) => (
  <>
    <ServiceJsonLd service={service} locale={locale} />
    <ServiceDetail service={service} locale={locale} />
    {service === AWS_SERVICE && <Aws locale={locale} />}
    <OtherServices service={service} locale={locale} />
    <ClosingCall locale={locale} />
  </>
);

export default ServiceDetailView;

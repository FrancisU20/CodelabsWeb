import type { ComponentType } from "react";
import type { ServiceId } from "@/content/service-id";
import Aws from "@/features/aws/aws";
import Contact from "@/features/contact/contact";
import Impact from "@/features/impact/impact";
import Process from "@/features/process/process";
import Quality from "@/features/quality/quality";
import OtherServices from "@/features/service-detail/other-services";
import ServiceDetail from "@/features/service-detail/service-detail";
import Stories from "@/features/stories/stories";
import WebShowcase from "@/features/web-showcase/web-showcase";
import type { Locale } from "@/i18n/locale";
import ServiceJsonLd from "@/layout/structured-data/service-json-ld";

const SERVICE_SCENES: Record<ServiceId, ComponentType<{ locale: Locale }>> = {
  mobile: Stories,
  web: Impact,
  custom: WebShowcase,
  cloud: Aws,
  modernization: Process,
  support: Quality,
};

const ServiceDetailView = ({ service, locale }: { service: ServiceId; locale: Locale }) => {
  const Scene = SERVICE_SCENES[service];

  return (
    <>
      <ServiceJsonLd service={service} locale={locale} />
      <ServiceDetail service={service} locale={locale} />
      <Scene locale={locale} />
      <OtherServices service={service} locale={locale} />
      <Contact locale={locale} />
    </>
  );
};

export default ServiceDetailView;

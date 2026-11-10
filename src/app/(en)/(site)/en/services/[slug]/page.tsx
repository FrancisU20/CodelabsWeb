import { notFound } from "next/navigation";
import { buildServiceMetadata } from "@/i18n/page-metadata";
import { serviceIdFromSlug, serviceSlugs } from "@/i18n/routing";
import ServiceDetailView from "@/views/service-detail-view";

export const dynamicParams = false;

export const generateStaticParams = () => serviceSlugs("en").map((slug) => ({ slug }));

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({ params }: ServicePageProps) => {
  const service = serviceIdFromSlug((await params).slug, "en");

  return service ? buildServiceMetadata(service, "en") : {};
};

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const service = serviceIdFromSlug((await params).slug, "en");

  if (!service) notFound();

  return <ServiceDetailView service={service} locale="en" />;
}

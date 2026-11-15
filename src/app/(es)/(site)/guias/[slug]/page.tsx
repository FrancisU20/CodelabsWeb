import { notFound } from "next/navigation";
import { GUIDES, guideBySlug } from "@/content/guides/guides";
import { buildGuideMetadata } from "@/i18n/page-metadata";
import GuideView from "@/views/guide-view";

export const dynamicParams = false;

export const generateStaticParams = () => GUIDES.map((guide) => ({ slug: guide.slug }));

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({ params }: GuidePageProps) => {
  const guide = guideBySlug((await params).slug);

  return guide ? buildGuideMetadata(guide) : {};
};

export default async function GuidePage({ params }: GuidePageProps) {
  const guide = guideBySlug((await params).slug);

  if (!guide) notFound();

  return <GuideView guide={guide} locale="es" />;
}

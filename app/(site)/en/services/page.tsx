import type { Metadata } from "next";
import PageIntro from "@/app/ui/page-intro";
import AwsShowcase from "@/app/(site)/sections/aws-showcase";
import Capabilities from "@/app/(site)/sections/capabilities";
import CtaBanner from "@/app/(site)/sections/cta-banner";
import TechStack from "@/app/(site)/sections/tech-stack";

export const metadata: Metadata = {
  title: "Services | CodeLabs",
  description:
    "Architecture, mobile apps, cloud backend, web, and AWS: software services built to a mission-critical standard.",
  alternates: {
    languages: {
      es: "https://codelabsecuador.com/servicios",
      en: "https://codelabsecuador.com/en/services",
    },
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Everything a mission-critical business needs from its software partner."
        description="From architecture to production operations: we pick the right technology for your context, not the trendiest one."
      />
      <Capabilities locale="en" />
      <AwsShowcase locale="en" />
      <TechStack locale="en" />
      <CtaBanner locale="en" />
    </>
  );
}

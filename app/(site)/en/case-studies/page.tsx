import type { Metadata } from "next";
import PageIntro from "@/app/ui/page-intro";
import CaseStudies from "@/app/(site)/sections/case-studies";
import CtaBanner from "@/app/(site)/sections/cta-banner";

export const metadata: Metadata = {
  title: "Case Studies | CodeLabs",
  description:
    "Real results in health, fintech, identity, and high-traffic platforms built by CodeLabs.",
  alternates: {
    languages: {
      es: "https://codelabsecuador.com/casos",
      en: "https://codelabsecuador.com/en/case-studies",
    },
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Case studies"
        title="Real results for businesses that run on critical software."
        description="Health, fintech, identity, and high-traffic platforms: every case is an architecture decision that held up in production."
      />
      <CaseStudies locale="en" />
      <CtaBanner locale="en" />
    </>
  );
}

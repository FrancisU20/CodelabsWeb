import type { Metadata } from "next";
import CapabilitiesTeaser from "@/app/(site)/sections/capabilities-teaser";
import CaseStudiesTeaser from "@/app/(site)/sections/case-studies-teaser";
import Clients from "@/app/(site)/sections/clients";
import CtaBanner from "@/app/(site)/sections/cta-banner";
import Hero from "@/app/(site)/sections/hero";
import TrustBar from "@/app/(site)/sections/trust-bar";
import ValueProp from "@/app/(site)/sections/value-prop";

export const metadata: Metadata = {
  title: "CodeLabs | Enterprise software engineering",
  description:
    "CodeLabs is the software engineering company that designs, builds, and operates digital products to a mission-critical standard.",
  openGraph: {
    title: "CodeLabs | Software that works in production",
    description:
      "Enterprise-grade software engineering company. End-to-end solutions across web, mobile, and cloud.",
    url: "https://codelabsecuador.com/en",
    siteName: "CodeLabs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeLabs | Software that works in production",
    description:
      "Enterprise-grade engineering, mission-critical standards. Web, mobile, cloud, AWS, and enterprise WordPress.",
  },
  alternates: {
    languages: { es: "https://codelabsecuador.com/", en: "https://codelabsecuador.com/en" },
  },
};

export default function HomeEn() {
  return (
    <>
      <Hero locale="en" />
      <TrustBar locale="en" />
      <ValueProp locale="en" />
      <Clients locale="en" />
      <CapabilitiesTeaser locale="en" />
      <CaseStudiesTeaser locale="en" />
      <CtaBanner locale="en" />
    </>
  );
}

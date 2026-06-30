import type { Metadata } from "next";
import PageIntro from "@/app/ui/page-intro";
import About from "@/app/(site)/sections/about";
import CtaBanner from "@/app/(site)/sections/cta-banner";
import HowWeWork from "@/app/(site)/sections/how-we-work";

export const metadata: Metadata = {
  title: "About | CodeLabs",
  description:
    "CodeLabs is a software engineering company with a senior team and a clear process from discovery to operations.",
  alternates: {
    languages: {
      es: "https://codelabsecuador.com/nosotros",
      en: "https://codelabsecuador.com/en/about",
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="A software engineering company with the rigor of a mission-critical system."
        description="A senior technical team, a clear process, and a standard that doesn't get negotiated on any engagement."
      />
      <About locale="en" />
      <HowWeWork locale="en" />
      <CtaBanner locale="en" />
    </>
  );
}

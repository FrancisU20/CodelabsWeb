import type { Metadata } from "next";
import CapabilitiesTeaser from "./sections/capabilities-teaser";
import CaseStudiesTeaser from "./sections/case-studies-teaser";
import Clients from "./sections/clients";
import CtaBanner from "./sections/cta-banner";
import Hero from "./sections/hero";
import TrustBar from "./sections/trust-bar";
import ValueProp from "./sections/value-prop";

export const metadata: Metadata = {
  alternates: {
    languages: { es: "https://codelabsecuador.com/", en: "https://codelabsecuador.com/en" },
  },
};

export default function Home() {
  return (
    <>
      <Hero locale="es" />
      <TrustBar locale="es" />
      <ValueProp locale="es" />
      <Clients locale="es" />
      <CapabilitiesTeaser locale="es" />
      <CaseStudiesTeaser locale="es" />
      <CtaBanner locale="es" />
    </>
  );
}

import type { Metadata } from "next";
import PageIntro from "../../ui/page-intro";
import CaseStudies from "../sections/case-studies";
import CtaBanner from "../sections/cta-banner";

export const metadata: Metadata = {
  title: "Casos de éxito | CodeLabs",
  description:
    "Resultados reales en salud, fintech, identidad y plataformas de alto tráfico construidos por CodeLabs.",
  alternates: {
    languages: {
      es: "https://codelabsecuador.com/casos",
      en: "https://codelabsecuador.com/en/case-studies",
    },
  },
};

export default function CasosPage() {
  return (
    <>
      <PageIntro
        eyebrow="Casos"
        title="Resultados reales en negocios con software crítico."
        description="Salud, fintech, identidad y plataformas de alto tráfico: cada caso es una decisión de arquitectura que se sostuvo en producción."
      />
      <CaseStudies locale="es" />
      <CtaBanner locale="es" />
    </>
  );
}

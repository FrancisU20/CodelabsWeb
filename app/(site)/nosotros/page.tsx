import type { Metadata } from "next";
import PageIntro from "../../ui/page-intro";
import About from "../sections/about";
import CtaBanner from "../sections/cta-banner";
import HowWeWork from "../sections/how-we-work";

export const metadata: Metadata = {
  title: "Nosotros | CodeLabs",
  description:
    "CodeLabs es una empresa de ingeniería de software con un equipo senior y un proceso claro de discovery a operación.",
  alternates: {
    languages: {
      es: "https://codelabsecuador.com/nosotros",
      en: "https://codelabsecuador.com/en/about",
    },
  },
};

export default function NosotrosPage() {
  return (
    <>
      <PageIntro
        eyebrow="Nosotros"
        title="Una empresa de ingeniería de software con el rigor de un sistema crítico."
        description="Un equipo técnico senior, un proceso claro y un estándar que no se negocia en cada entrega."
      />
      <About locale="es" />
      <HowWeWork locale="es" />
      <CtaBanner locale="es" />
    </>
  );
}

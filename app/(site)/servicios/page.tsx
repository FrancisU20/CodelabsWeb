import type { Metadata } from "next";
import PageIntro from "../../ui/page-intro";
import AwsShowcase from "../sections/aws-showcase";
import Capabilities from "../sections/capabilities";
import CtaBanner from "../sections/cta-banner";
import TechStack from "../sections/tech-stack";

export const metadata: Metadata = {
  title: "Servicios | CodeLabs",
  description:
    "Arquitectura, apps móviles, backend cloud, web y AWS: servicios de software con estándar de sistema crítico.",
  alternates: {
    languages: {
      es: "https://codelabsecuador.com/servicios",
      en: "https://codelabsecuador.com/en/services",
    },
  },
};

export default function ServiciosPage() {
  return (
    <>
      <PageIntro
        eyebrow="Servicios"
        title="Todo lo que un negocio crítico necesita de su socio de software."
        description="Desde arquitectura hasta operación en producción: elegimos la tecnología correcta para tu contexto, no la más de moda."
      />
      <Capabilities locale="es" />
      <AwsShowcase locale="es" />
      <TechStack locale="es" />
      <CtaBanner locale="es" />
    </>
  );
}

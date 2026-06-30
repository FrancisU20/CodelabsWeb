import type { Metadata } from "next";
import PageIntro from "../../ui/page-intro";
import Contact from "../sections/contact";
import ContactInfo from "../sections/contact-info";

export const metadata: Metadata = {
  title: "Contacto | CodeLabs",
  description:
    "Habla directo con el equipo de CodeLabs. Respuesta rápida para clarificar objetivos, riesgos y ruta ejecutiva.",
  alternates: {
    languages: {
      es: "https://codelabsecuador.com/contacto",
      en: "https://codelabsecuador.com/en/contact",
    },
  },
};

export default function ContactoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contacto"
        title="Hablemos directo con el equipo que diseña tu arquitectura."
        description="Sin intermediarios comerciales. Respuesta directa de nuestro equipo para clarificar objetivos, riesgos y una ruta ejecutiva en horas."
      />
      <ContactInfo locale="es" />
      <Contact locale="es" />
    </>
  );
}

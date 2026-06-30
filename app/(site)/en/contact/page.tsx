import type { Metadata } from "next";
import PageIntro from "@/app/ui/page-intro";
import Contact from "@/app/(site)/sections/contact";
import ContactInfo from "@/app/(site)/sections/contact-info";

export const metadata: Metadata = {
  title: "Contact | CodeLabs",
  description:
    "Talk directly to the CodeLabs team. A fast response to clarify goals, risks, and an executive roadmap.",
  alternates: {
    languages: {
      es: "https://codelabsecuador.com/contacto",
      en: "https://codelabsecuador.com/en/contact",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Talk directly to the team designing your architecture."
        description="No sales layers in between. A direct response from our team to clarify goals, risks, and an executive roadmap in hours."
      />
      <ContactInfo locale="en" />
      <Contact locale="en" />
    </>
  );
}

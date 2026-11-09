import type { LegalDocument } from "../legal-document";
import { documentLink, emailWithSubject, list, paragraph, whatsApp } from "../legal-tokens";

export const unsubscribe: LegalDocument = {
  layout: "cards",
  metaTitle: "Cómo darte de baja de nuestras comunicaciones",
  metaDescription: "Solicita dejar de recibir comunicaciones de CodeLabs en cualquier momento.",
  eyebrow: "Desuscripción",
  title: "Cómo darte de baja de nuestras comunicaciones",
  intro: "En ejercicio de tu derecho de oposición previsto en la Ley Orgánica de Protección de Datos Personales del Ecuador (LOPDP), puedes solicitar en cualquier momento dejar de recibir comunicaciones comerciales o de marketing de CodeLabs. Procesaremos tu solicitud en el menor tiempo posible.",
  updated: "Última actualización: 29 de junio de 2026",
  sections: [
    {
      heading: "Alcance de esta solicitud",
      blocks: [
        paragraph("La desuscripción aplica a comunicaciones comerciales y de marketing (por ejemplo, novedades, contenido promocional o invitaciones). No aplica a comunicaciones transaccionales o contractuales indispensables para la prestación del servicio (como confirmaciones, avisos de facturación o notificaciones relacionadas con un proyecto en curso), las cuales seguirán enviándose mientras exista una relación contractual vigente, conforme a lo necesario para su correcta ejecución."),
      ],
    },
    {
      heading: "Opciones para darte de baja",
      blocks: [
        list(
          ["Enviar un correo a ", emailWithSubject("Desuscripción"), " indicando el correo electrónico que deseas remover de nuestras listas de comunicación."],
          ["Contactarnos por WhatsApp al ", whatsApp("Solicito desuscripción"), " solicitando expresamente la desuscripción."],
        ),
      ],
    },
    {
      heading: "Tiempo de procesamiento",
      blocks: [
        paragraph("Atendemos las solicitudes de desuscripción dentro de los plazos establecidos por la normativa aplicable y, en la práctica, en el menor tiempo posible. Si recibes una comunicación adicional mientras tu solicitud está en proceso, puedes ignorarla; tu baja quedará efectiva una vez completado el proceso."),
      ],
    },
    {
      heading: "Privacidad y seguridad",
      blocks: [
        paragraph("Tu solicitud de desuscripción y los datos asociados a ella se gestionan conforme a nuestra ", documentLink("privacy", "Política de Privacidad"), " y nuestra ", documentLink("dataProcessing", "Política de Tratamiento de Datos"), ". Solo utilizaremos la información que nos proporciones para procesar tu baja y, cuando aplique, podremos conservar un registro mínimo de la solicitud para acreditar su cumplimiento."),
      ],
    },
  ],
};

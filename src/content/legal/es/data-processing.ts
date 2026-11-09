import type { LegalDocument } from "../legal-document";
import { EMAIL, list, paragraph } from "../legal-tokens";

export const dataProcessing: LegalDocument = {
  layout: "articles",
  metaTitle: "Política de tratamiento de datos personales",
  metaDescription: "Cómo CodeLabs trata los datos de clientes, prospectos y proveedores según la LOPDP.",
  eyebrow: "Política de tratamiento de datos",
  title: "Política de tratamiento de datos personales",
  intro: "Esta política describe, en cumplimiento de la Ley Orgánica de Protección de Datos Personales del Ecuador (LOPDP), cómo CodeLabs trata los datos personales de clientes, prospectos, proveedores y usuarios del Sitio. Complementa nuestra Política de Privacidad y forma parte de nuestros Términos y Condiciones.",
  updated: "Última actualización: 7 de noviembre de 2026",
  sections: [
    {
      heading: "1. Responsable del tratamiento",
      blocks: [
        paragraph("CodeLabs, operado por ULLOA TERAN FRANCISCO MATEO (RUC 1003368725001), actúa como responsable del tratamiento de los datos personales descritos en esta política. Para ejercer derechos o realizar consultas, escríbenos a ", EMAIL, "."),
      ],
    },
    {
      heading: "2. Finalidades del tratamiento",
      blocks: [
        list(
          ["Atender solicitudes de información, reuniones y propuestas comerciales."],
          ["Negociar, formalizar y ejecutar contratos de desarrollo y arquitectura de software."],
          ["Gestionar facturación, cobranza, soporte postventa y continuidad operativa."],
          ["Monitorear la seguridad, el rendimiento y la calidad de nuestros servicios y del Sitio."],
          ["Cumplir obligaciones legales, tributarias y regulatorias aplicables en Ecuador."],
          ["Prevenir fraude y proteger nuestros sistemas frente a usos indebidos."],
        ),
      ],
    },
    {
      heading: "3. Categorías de datos tratados",
      blocks: [
        paragraph("Tratamos datos de identificación y contacto (nombre, correo, teléfono), información profesional y empresarial (cargo, empresa, necesidades del proyecto), datos técnicos mínimos necesarios para la seguridad del Sitio (registros de acceso, métricas de rendimiento) y la documentación contractual y de facturación propia de la relación comercial. No solicitamos categorías especiales de datos personales (datos sensibles) salvo que un proyecto específico lo requiera de forma excepcional y bajo acuerdos y medidas de protección reforzadas."),
      ],
    },
    {
      heading: "4. Base legal y legitimación",
      blocks: [
        paragraph("El tratamiento se legitima, según el caso, en: el consentimiento del titular; la necesidad del tratamiento para la ejecución de un contrato o de medidas precontractuales solicitadas por el titular; el cumplimiento de obligaciones legales que correspondan a CodeLabs; y el interés legítimo de CodeLabs en responder solicitudes, mantener la seguridad de sus sistemas y mejorar sus servicios, siempre que dicho interés no afecte de forma desproporcionada los derechos del titular."),
      ],
    },
    {
      heading: "5. Conservación de los datos",
      blocks: [
        paragraph("Conservamos los datos personales durante la vigencia de la relación contractual y, posteriormente, durante los plazos exigidos por la normativa tributaria, contable, laboral o de otra índole aplicable en Ecuador, o mientras sea necesario para la defensa frente a reclamos. Vencidos dichos plazos, los datos se eliminan de forma segura o se anonimizan."),
      ],
    },
    {
      heading: "6. Encargados del tratamiento y terceros",
      blocks: [
        paragraph("Podemos compartir datos personales con proveedores que actúan como encargados del tratamiento por cuenta de CodeLabs (por ejemplo, proveedores de infraestructura en la nube, correo electrónico, herramientas de gestión de proyectos o soporte), quienes están obligados contractualmente a tratar los datos conforme a nuestras instrucciones, a guardar confidencialidad y a aplicar medidas de seguridad adecuadas. No vendemos ni cedemos datos personales a terceros para fines comerciales propios de dichos terceros."),
      ],
    },
    {
      heading: "7. Transferencias internacionales",
      blocks: [
        paragraph("Cuando un encargado del tratamiento se encuentre fuera de Ecuador, aplicamos las salvaguardas previstas en la LOPDP para transferencias internacionales de datos personales, tales como cláusulas contractuales, certificaciones de seguridad reconocidas o la verificación de que el país de destino cuenta con un nivel adecuado de protección, según corresponda."),
      ],
    },
    {
      heading: "8. Derechos de los titulares",
      blocks: [
        paragraph("Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, actualización, eliminación, oposición y portabilidad de tus datos personales, así como revocar el consentimiento otorgado, cuando aplique. Para ello, escríbenos a ", EMAIL, " indicando claramente tu solicitud. Atenderemos tu requerimiento dentro de los plazos previstos por la normativa aplicable y, de no quedar satisfecho con la respuesta, puedes acudir ante la autoridad de protección de datos personales competente en Ecuador."),
      ],
    },
    {
      heading: "9. Seguridad de la información",
      blocks: [
        paragraph("Implementamos medidas técnicas y organizativas razonables —cifrado en tránsito, control de accesos bajo el principio de mínimo privilegio, segmentación de información sensible y monitoreo— para prevenir accesos no autorizados, pérdida, alteración o divulgación indebida de los datos personales que tratamos."),
      ],
    },
    {
      heading: "10. Notificación de incidentes",
      blocks: [
        paragraph("En caso de que se produzca una vulneración de seguridad que afecte datos personales y que represente un riesgo para los derechos de los titulares, CodeLabs notificará el incidente a los titulares y, cuando corresponda, a la autoridad de protección de datos personales competente, conforme a los plazos y condiciones establecidos en la LOPDP."),
      ],
    },
    {
      heading: "11. Actualizaciones de esta política",
      blocks: [
        paragraph("Podremos actualizar esta política para reflejar cambios legales, regulatorios o en nuestras prácticas de tratamiento de datos. La versión vigente estará siempre disponible en este Sitio, junto con su fecha de última actualización."),
      ],
    },
  ],
};

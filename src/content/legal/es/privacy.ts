import type { LegalDocument } from "../legal-document";
import { documentLink, EMAIL, list, paragraph, PHONE, PRIVACY_EMAIL } from "../legal-tokens";

export const privacy: LegalDocument = {
  layout: "articles",
  metaTitle: "Política de privacidad",
  metaDescription: "Cómo CodeLabs recolecta, usa y protege tus datos personales conforme a la LOPDP del Ecuador.",
  eyebrow: "Política de privacidad",
  title: "Política de privacidad",
  intro: "En CodeLabs respetamos tu privacidad y tratamos tus datos personales conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador (LOPDP) y demás normativa aplicable. Este documento explica qué información recolectamos, con qué finalidad, en qué basamos su tratamiento y cuáles son tus derechos como titular de los datos.",
  updated: "Última actualización: 9 de noviembre de 2026",
  sections: [
    {
      heading: "1. Responsable del tratamiento",
      blocks: [
        paragraph("El responsable del tratamiento de tus datos personales es ULLOA TERAN FRANCISCO MATEO, persona natural con RUC 1003368725001, quien opera bajo el nombre comercial CodeLabs. Puedes contactarnos para cualquier asunto relacionado con esta política en ", EMAIL, "."),
      ],
    },
    {
      heading: "2. Información que recolectamos",
      blocks: [
        list(
          ["Datos de identificación y contacto: nombre, correo electrónico, teléfono y empresa."],
          ["Información del proyecto: contexto de negocio, requerimientos técnicos y objetivos que nos compartes para preparar una propuesta."],
          ["Datos técnicos mínimos de navegación: registros básicos (logs) y cookies estrictamente necesarias para la seguridad y el funcionamiento del Sitio. No utilizamos cookies de publicidad ni de seguimiento de terceros."],
          ["Comunicaciones: el contenido de los mensajes que nos envías por correo, WhatsApp o formularios de contacto."],
        ),
      ],
    },
    {
      heading: "3. Finalidades del tratamiento",
      blocks: [
        list(
          ["Responder tus consultas y coordinar reuniones o llamadas."],
          ["Preparar propuestas, cotizaciones y planes técnicos."],
          ["Ejecutar y dar seguimiento a contratos de servicios vigentes."],
          ["Mantener la seguridad, integridad y buen funcionamiento del Sitio."],
          ["Cumplir obligaciones legales, contables y tributarias aplicables."],
        ),
        paragraph("No utilizamos tus datos para fines distintos a los descritos sin informarte y, cuando la ley lo requiera, sin tu consentimiento previo."),
      ],
    },
    {
      heading: "4. Base legal del tratamiento",
      blocks: [
        paragraph("Tratamos tus datos personales con base en: (i) tu consentimiento, otorgado por ejemplo al completar un formulario de contacto; (ii) la ejecución de un contrato de servicios del que eres parte o sus tratativas precontractuales; (iii) el cumplimiento de obligaciones legales aplicables a CodeLabs; y (iv) nuestro interés legítimo en responder solicitudes y mantener la seguridad de nuestros sistemas, siempre que dicho interés no prevalezca sobre tus derechos fundamentales."),
      ],
    },
    {
      heading: "5. Plazos de conservación",
      blocks: [
        paragraph("Conservamos tus datos personales únicamente durante el tiempo necesario para cumplir las finalidades descritas, mientras dure la relación contractual (si la hay) y, posteriormente, durante los plazos exigidos por la normativa tributaria, contable o de otra índole aplicable en Ecuador, o mientras sea necesario para atender eventuales reclamos o requerimientos de autoridad competente. Transcurridos esos plazos, los datos se eliminan o se anonimizan de forma segura."),
        paragraph("Los datos que nos envías por el formulario de contacto se conservan durante 12 meses desde su recepción y luego se eliminan automáticamente, salvo que exista una relación contractual o una obligación legal que exija conservarlos por más tiempo."),
      ],
    },
    {
      heading: "6. Seguridad de la información",
      blocks: [
        paragraph("Aplicamos medidas técnicas y organizativas razonables para proteger tus datos personales, incluyendo cifrado en tránsito (TLS), control de accesos bajo el principio de mínimo privilegio y revisión periódica de nuestras prácticas de seguridad. Ningún sistema es completamente infalible; si llegáramos a detectar una afectación a tus datos personales que represente un riesgo para tus derechos, te lo notificaremos conforme a lo exigido por la LOPDP."),
      ],
    },
    {
      heading: "7. Compartición con terceros",
      blocks: [
        paragraph("No vendemos ni comercializamos tus datos personales. Podemos compartir información con proveedores que nos prestan servicios necesarios para operar (por ejemplo, hosting en la nube, correo electrónico o herramientas de gestión de proyectos), quienes actúan como encargados del tratamiento bajo acuerdos de confidencialidad y protección de datos, y únicamente en la medida necesaria para prestar dichos servicios. También podemos divulgar información cuando una autoridad competente lo requiera conforme a la ley."),
        paragraph("Para operar el formulario de contacto utilizamos Amazon Web Services (almacenamiento y procesamiento) y Brevo (envío de correos electrónicos), que actúan como encargados del tratamiento."),
      ],
    },
    {
      heading: "8. Transferencias internacionales de datos",
      blocks: [
        paragraph("Algunos de nuestros proveedores tecnológicos (por ejemplo, servicios de infraestructura en la nube) pueden almacenar o procesar datos fuera de Ecuador. En esos casos, exigimos que dichos proveedores mantengan niveles de protección adecuados, mediante cláusulas contractuales, certificaciones de seguridad u otros mecanismos reconocidos, conforme a lo previsto en la LOPDP para transferencias internacionales de datos personales."),
        paragraph("En particular, Amazon Web Services procesa los datos del formulario de contacto en Estados Unidos y Brevo los procesa en la Unión Europea."),
      ],
    },
    {
      heading: "9. Tus derechos como titular",
      blocks: [
        paragraph("Conforme a la LOPDP, puedes ejercer en cualquier momento tus derechos de acceso, rectificación, actualización, eliminación, oposición, portabilidad y a no ser objeto de decisiones automatizadas que produzcan efectos jurídicos sobre ti, así como revocar el consentimiento que hayas otorgado. Para ejercerlos, escríbenos a ", PRIVACY_EMAIL, " indicando tu solicitud y los datos que permitan identificarte. Atenderemos tu solicitud dentro de los plazos establecidos por la normativa aplicable. Si consideras que tus derechos no han sido atendidos adecuadamente, puedes acudir ante la autoridad de protección de datos personales competente en Ecuador."),
      ],
    },
    {
      heading: "10. Menores de edad",
      blocks: [
        paragraph("Nuestros servicios están dirigidos a empresas y profesionales, no a menores de edad. No recolectamos intencionalmente datos personales de menores de edad a través del Sitio. Si tomamos conocimiento de que se han recolectado datos de un menor sin la autorización correspondiente de su representante legal, procederemos a eliminarlos."),
      ],
    },
    {
      heading: "11. Cambios a esta política",
      blocks: [
        paragraph("Podemos actualizar esta política para reflejar cambios legales, regulatorios o en nuestras prácticas de tratamiento de datos. La versión vigente estará siempre disponible en esta página, junto con su fecha de última actualización."),
      ],
    },
    {
      heading: "12. Contacto",
      blocks: [
        paragraph("Para ejercer tus derechos o resolver dudas sobre esta política, contáctanos en ", PRIVACY_EMAIL, " o al teléfono ", PHONE, ". Esta política se complementa con nuestra ", documentLink("dataProcessing", "Política de Tratamiento de Datos"), "."),
      ],
    },
  ],
};

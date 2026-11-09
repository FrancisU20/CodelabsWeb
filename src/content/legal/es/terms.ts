import type { LegalDocument } from "../legal-document";
import { documentLink, EMAIL, paragraph, PHONE } from "../legal-tokens";

export const terms: LegalDocument = {
  layout: "articles",
  metaTitle: "Términos y condiciones de uso",
  metaDescription: "Condiciones de acceso y uso del sitio codelabsecuador.com y de los servicios de CodeLabs.",
  eyebrow: "Términos y condiciones",
  title: "Términos y condiciones de uso",
  intro: "Estos términos regulan el acceso y uso del sitio web codelabsecuador.com (el “Sitio”) y la relación entre el visitante o cliente (“el Usuario”) y CodeLabs. Al navegar el Sitio, completar un formulario o contratar nuestros servicios, el Usuario declara haber leído y aceptado estos términos en su totalidad.",
  updated: "Última actualización: 7 de noviembre de 2026",
  sections: [
    {
      heading: "1. Identidad del responsable del Sitio",
      blocks: [
        paragraph("El Sitio es operado por ULLOA TERAN FRANCISCO MATEO, persona natural, con RUC 1003368725001, con domicilio en Ecuador, quien realiza actividad económica bajo el nombre comercial “CodeLabs” (en adelante, “CodeLabs” o “nosotros”). Para consultas, soporte o ejercicio de derechos, el Usuario puede escribir a ", EMAIL, " o comunicarse al teléfono ", PHONE, "."),
      ],
    },
    {
      heading: "2. Aceptación y capacidad para contratar",
      blocks: [
        paragraph("El uso del Sitio implica la aceptación plena de estos términos. Si el Usuario no está de acuerdo con alguna disposición, debe abstenerse de usar el Sitio o contratar servicios. El Usuario declara tener capacidad legal para contratar conforme a la legislación ecuatoriana y, si actúa en representación de una empresa, declara contar con las facultades necesarias para vincularla a estos términos."),
      ],
    },
    {
      heading: "3. Descripción del Sitio y de los servicios",
      blocks: [
        paragraph("El Sitio tiene fines informativos y comerciales: presenta las capacidades, casos de éxito y datos de contacto de CodeLabs, y permite solicitar una cotización o iniciar una conversación comercial. El Sitio, por sí mismo, no constituye una oferta de contrato ni procesa pagos en línea. Los servicios de diseño, desarrollo, arquitectura y operación de software que ofrece CodeLabs se contratan mediante una propuesta comercial, cotización o contrato de servicios independiente, en el que se detallan alcance, entregables, plazos, condiciones comerciales y forma de pago aplicables a cada proyecto. En caso de conflicto entre dicho contrato y estos términos generales, prevalece lo acordado expresamente en el contrato de servicios."),
      ],
    },
    {
      heading: "4. Cotizaciones y condiciones comerciales",
      blocks: [
        paragraph("Las cotizaciones y estimaciones compartidas por CodeLabs son referenciales hasta su confirmación por escrito y no constituyen una relación contractual por sí solas. La facturación, los plazos de pago, las políticas de anticipos y, cuando corresponda, las condiciones de cancelación de un proyecto, se definen en el contrato o propuesta firmada para cada servicio. CodeLabs emite los comprobantes de venta exigidos por la normativa tributaria ecuatoriana vigente por los servicios efectivamente prestados."),
      ],
    },
    {
      heading: "5. Uso permitido del Sitio",
      blocks: [
        paragraph("El Usuario se compromete a usar el Sitio conforme a la ley, la moral, el orden público y estos términos. Queda prohibido: (i) usar el Sitio para fines ilícitos o fraudulentos; (ii) enviar comunicaciones no solicitadas (spam) a través de nuestros formularios o canales; (iii) intentar vulnerar la seguridad, disponibilidad o integridad del Sitio o de sus sistemas; (iv) extraer masivamente contenido del Sitio (scraping) sin autorización; y (v) suplantar la identidad de terceros o proporcionar información falsa."),
      ],
    },
    {
      heading: "6. Propiedad intelectual",
      blocks: [
        paragraph("El contenido del Sitio (textos, marca, logotipos, diseño, código fuente del Sitio, imágenes y demás elementos) es propiedad de CodeLabs o de sus licenciantes y está protegido por la normativa de propiedad intelectual aplicable en Ecuador y por tratados internacionales. No se autoriza su reproducción, distribución, transformación o comunicación pública sin autorización previa y escrita, salvo en los casos permitidos por la ley. Las marcas, logotipos y nombres de terceros (incluidos clientes y proveedores tecnológicos mencionados en el Sitio) pertenecen a sus respectivos titulares y se mencionan únicamente con fines informativos o de referencia técnica."),
      ],
    },
    {
      heading: "7. Confidencialidad",
      blocks: [
        paragraph("La información de negocio que el Usuario comparta a través de formularios, correo o canales de contacto para evaluar un proyecto (incluyendo descripciones técnicas o comerciales) será tratada de forma confidencial y utilizada únicamente para preparar una respuesta o propuesta, salvo que el Usuario autorice expresamente otro uso. Los términos de confidencialidad aplicables durante la ejecución de un proyecto se detallan en el contrato de servicios correspondiente."),
      ],
    },
    {
      heading: "8. Limitación de responsabilidad",
      blocks: [
        paragraph("El Sitio se ofrece “tal cual” y “según disponibilidad”. CodeLabs adopta medidas razonables de seguridad y disponibilidad, pero no garantiza que el Sitio esté libre de errores, interrupciones o vulnerabilidades. En la máxima medida permitida por la ley ecuatoriana, CodeLabs no será responsable por daños indirectos, incidentales o lucro cesante derivados del uso o la imposibilidad de uso del Sitio. Esta limitación no aplica a la responsabilidad que, conforme a la ley, no pueda excluirse ni limitarse, ni reemplaza las obligaciones específicas asumidas en un contrato de servicios."),
      ],
    },
    {
      heading: "9. Enlaces a terceros",
      blocks: [
        paragraph("El Sitio puede incluir enlaces a sitios de terceros (por ejemplo, redes sociales, repositorios o sitios de clientes). CodeLabs no controla ni se hace responsable por el contenido, las políticas de privacidad o las prácticas de esos sitios. Se recomienda revisar los términos y políticas de cada sitio de terceros antes de utilizarlo."),
      ],
    },
    {
      heading: "10. Protección de datos personales",
      blocks: [
        paragraph("El tratamiento de datos personales realizado a través del Sitio se rige por la Ley Orgánica de Protección de Datos Personales del Ecuador (LOPDP), nuestra ", documentLink("privacy", "Política de Privacidad"), " y nuestra ", documentLink("dataProcessing", "Política de Tratamiento de Datos"), ", documentos que forman parte integral de estos términos."),
      ],
    },
    {
      heading: "11. Modificaciones a estos términos",
      blocks: [
        paragraph("CodeLabs podrá actualizar estos términos para reflejar cambios legales, regulatorios o en la operación del Sitio o los servicios. La versión vigente será siempre la publicada en esta página, junto con su fecha de última actualización. El uso continuado del Sitio tras una actualización implica la aceptación de los términos vigentes."),
      ],
    },
    {
      heading: "12. Ley aplicable y jurisdicción",
      blocks: [
        paragraph("Estos términos se rigen e interpretan conforme a las leyes de la República del Ecuador, incluyendo, según corresponda, la Ley de Comercio Electrónico, Firmas Electrónicas y Mensajes de Datos, la Ley Orgánica de Defensa del Consumidor y la Ley Orgánica de Protección de Datos Personales. Para cualquier controversia derivada del uso del Sitio que no pueda resolverse de forma directa entre las partes, los involucrados se someten a los jueces competentes de Ecuador, sin perjuicio de las condiciones específicas de jurisdicción que pueda establecer un contrato de servicios particular."),
      ],
    },
    {
      heading: "13. Contacto",
      blocks: [
        paragraph("Para consultas sobre estos términos, escríbenos a ", EMAIL, " o al teléfono ", PHONE, "."),
      ],
    },
  ],
};

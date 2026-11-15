import type { Messages } from "../messages";

export const servicePages: Messages["servicePages"] = {
  labels: { back: "Todos los servicios", cta: "Cuéntanos tu proyecto", fitTitle: "Te conviene si…", includesTitle: "Qué incluye", otherTitle: "Otros servicios" },
  items: {
    web: {
      seoTitle: "Desarrollo web y comercio electrónico en Ecuador | CodeLabs",
      seoDescription: "Sitios corporativos y tiendas en línea rápidos, seguros y preparados para Google, integrados con tu inventario, tus pagos y tu CRM.",
      title: "Webs y comercio electrónico",
      description: "Sitios corporativos y tiendas en línea que cargan rápido, aparecen en Google y se conectan con tu inventario, tus pagos y tu CRM.",
      timeline: "3 a 8 semanas",
      fit: [
        "Tu sitio actual es lento o no genera contactos.",
        "Vendes en línea, pero tu tienda no se conecta con tu inventario.",
        "Necesitas aparecer cuando te buscan en Google.",
      ],
      includes: [
        { title: "Sitio corporativo", body: "Páginas claras sobre quiénes son y qué ofrecen, rápidas en el celular y fáciles de actualizar." },
        { title: "Comercio electrónico", body: "Catálogo, carrito, pagos con tarjeta, cupones y seguimiento de pedidos." },
        { title: "Integraciones", body: "Con tu inventario, facturación electrónica, CRM y WhatsApp." },
        { title: "Posicionamiento en Google", body: "Datos estructurados, velocidad, sitemap y textos pensados en las búsquedas de tus clientes." },
      ],
    },
    mobile: {
      seoTitle: "Desarrollo de apps para iPhone y Android en Ecuador | CodeLabs",
      seoDescription: "Apps para iPhone y Android para que tus clientes compren, reserven y hagan trámites, y para que tus equipos trabajen en campo, conectadas con tus sistemas.",
      title: "Apps para iPhone y Android",
      description: "Apps para que tus clientes compren, reserven, paguen o hagan trámites, y apps para que tus equipos trabajen en campo. Conectadas con tus sistemas y publicadas en App Store y Google Play.",
      timeline: "4 semanas a 5 meses",
      fit: [
        "Tus clientes esperan resolver todo desde el celular.",
        "Tus equipos de campo trabajan con papel o con mensajes.",
        "Necesitas validar identidad o firmar documentos en línea.",
      ],
      includes: [
        { title: "Apps para clientes", body: "Catálogo, carrito, pagos con tarjeta, reservas, seguimiento de pedidos y perfil." },
        { title: "Apps para equipos", body: "Visitas, entregas, inventario, auditorías y firma del cliente en el celular." },
        { title: "Identidad y firma digital", body: "Validación con cédula y reconocimiento facial, y firma electrónica certificada." },
        { title: "Publicación y soporte", body: "Publicamos en App Store y Google Play y mantenemos la app al día con cada versión de iOS y Android." },
      ],
    },
    automation: {
      seoTitle: "Automatización de procesos para empresas en Ecuador | CodeLabs",
      seoDescription: "Automatizamos procesos entre tus sistemas, como facturación, cobros, aprobaciones y reportes, para que tus equipos dejen el trabajo manual y los errores.",
      title: "Automatización de procesos",
      description: "Los procesos que tus equipos repiten cada día los puede ejecutar un sistema: facturar, cobrar, aprobar, pasar datos entre sistemas o armar reportes. Menos errores y más tiempo para lo que necesita una persona.",
      timeline: "2 a 6 semanas",
      fit: [
        "Tus equipos copian datos entre sistemas y hojas de Excel.",
        "Los cobros, seguimientos o aprobaciones dependen de que alguien se acuerde.",
        "Los reportes tardan días en estar listos.",
      ],
      includes: [
        { title: "Avisos y recordatorios automáticos", body: "Por correo o WhatsApp: cobros, vencimientos, citas y estados de pedidos." },
        { title: "Integración entre sistemas", body: "ERP, facturación electrónica, CRM y tienda en línea compartiendo los mismos datos." },
        { title: "Reportes automáticos", body: "Tus indicadores listos cada mañana, sin armarlos en Excel." },
        { title: "Flujos de aprobación", body: "Compras, gastos o pedidos que pasan por las personas correctas, con registro de cada paso." },
      ],
    },
    ai: {
      seoTitle: "Inteligencia artificial para empresas en Ecuador | CodeLabs",
      seoDescription: "Asistentes con IA para WhatsApp y web, lectura automática de documentos y consultas a los datos de tu empresa, con reglas claras y datos protegidos.",
      title: "Inteligencia artificial para tu empresa",
      description: "Asistentes que atienden a tus clientes por WhatsApp o en tu web a cualquier hora, herramientas que leen documentos y consultas a los datos de tu empresa en lenguaje natural. Trabajan con tu información y pasan la conversación a una persona cuando hace falta.",
      timeline: "2 a 8 semanas",
      fit: [
        "Tus equipos responden las mismas preguntas todo el día.",
        "Pierdes clientes por responder tarde o fuera de horario.",
        "Revisas facturas, formularios o contratos a mano.",
      ],
      includes: [
        { title: "Asistentes para WhatsApp y web", body: "Responden con la información de tu empresa, toman pedidos, cotizan y agendan." },
        { title: "Lectura de documentos", body: "Extraen datos de facturas, recetas, formularios y cédulas y los pasan a tus sistemas." },
        { title: "Consultas a tus datos", body: "Inventario, ventas o indicadores en lenguaje natural, por chat." },
        { title: "Reglas claras", body: "Defines con nosotros qué responde el asistente, qué no y cuándo pasa a una persona." },
      ],
      example: {
        name: "Asistente de tu tienda",
        initial: "A",
        status: "en línea",
        messages: [
          { from: "customer", text: "Hola, ¿tienen la licuadora de 2 litros?" },
          { from: "assistant", text: "¡Hola! Sí, tenemos 6 en la tienda del centro. Cuesta $54,90. ¿Te la separo?" },
          { from: "customer", text: "Sí, la retiro mañana" },
          { from: "assistant", text: "Listo, quedó separada a tu nombre hasta mañana a las 18:00." },
        ],
      },
    },
    custom: {
      seoTitle: "Software a la medida para empresas en Ecuador | CodeLabs",
      seoDescription: "Plataformas a la medida, integraciones entre sistemas y modernización de sistemas antiguos por etapas, sin detener tu operación.",
      title: "Software a la medida",
      description: "Plataformas construidas según cómo opera tu empresa e integradas con los sistemas que ya usas. Si tienes un sistema que se quedó corto, lo modernizamos por etapas sin detener la operación.",
      timeline: "Desde 2 meses",
      fit: [
        "Tu operación depende de hojas de Excel o de sistemas que no se hablan.",
        "Ningún software del mercado se ajusta a tus procesos.",
        "Tu sistema actual es lento o ya nadie lo mantiene.",
      ],
      includes: [
        { title: "Plataformas operativas", body: "Inventario, ventas, logística, auditorías o lo que tu operación necesite, con accesos por rol." },
        { title: "Integraciones y APIs", body: "Con tu ERP, facturación electrónica, bancos y sistemas de terceros." },
        { title: "Reportes e indicadores", body: "Tableros con los números que importan, actualizados en tiempo real." },
        { title: "Modernización de sistemas", body: "Renovamos sistemas antiguos por etapas, sin detener la operación ni perder información." },
      ],
    },
    cloud: {
      seoTitle: "Nube AWS, seguridad y soporte en Ecuador | CodeLabs",
      seoDescription: "Somos socios AWS de nivel Select: migramos tus sistemas a AWS, los mantenemos disponibles y protegidos, y te damos soporte continuo.",
      title: "Nube AWS, seguridad y soporte",
      description: "Como socios AWS de nivel Select, llevamos tus sistemas a la nube de Amazon, los mantenemos disponibles y protegidos, y te damos soporte continuo. Sin comprar servidores ni sostener un equipo de infraestructura propio.",
      timeline: "1 a 8 semanas",
      fit: [
        "Tu sistema se cae cuando aumenta la demanda.",
        "Tus servidores están en la oficina y te preocupa perder información.",
        "Nadie se hace cargo de tu infraestructura.",
      ],
      includes: [
        { title: "Migración a AWS", body: "Desde servidores propios u otros proveedores, por etapas y sin detener la operación." },
        { title: "Accesos controlados", body: "Cada persona entra solo a lo que le corresponde, con registro de cada acceso." },
        { title: "Respaldos y monitoreo", body: "Respaldos automáticos y alertas si algo falla, de día o de noche." },
        { title: "Soporte y mejoras", body: "Atendemos incidentes, aplicamos actualizaciones y optimizamos los costos de AWS." },
      ],
    },
  },
};

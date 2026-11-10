import type { Messages } from "../messages";

export const servicePages: Messages["servicePages"] = {
  labels: { back: "Todos los servicios", cta: "Cuéntanos tu idea", fitTitle: "Te conviene si…", includesTitle: "Qué incluye", otherTitle: "Otros servicios", exampleNote: "Conversación de ejemplo" },
  items: {
    web: {
      seoTitle: "Páginas web y tiendas en línea en Ecuador | CodeLabs",
      seoDescription: "Páginas web y tiendas en línea rápidas en el celular y preparadas para aparecer en Google, para empresas y negocios en Ecuador.",
      title: "Páginas web y tiendas en línea",
      description: "Una página que explique bien lo que haces, cargue rápido en el celular y aparezca cuando te buscan en Google. Si vendes productos, también armamos tu tienda.",
      fit: [
        "Hoy solo vendes por redes sociales.",
        "Tu página actual es lenta o se ve mal en el celular.",
        "Cuando te buscan en Google no apareces.",
      ],
      includes: [
        { title: "Página de tu negocio", body: "Quién eres, qué ofreces y cómo contactarte." },
        { title: "Tienda en línea", body: "Catálogo, carrito y pagos." },
        { title: "Aparecer en Google", body: "Estructura y textos pensados en lo que buscan tus clientes." },
        { title: "WhatsApp y formularios", body: "Que te escriban con un toque." },
      ],
    },
    mobile: {
      seoTitle: "Desarrollo de apps para iPhone y Android en Ecuador | CodeLabs",
      seoDescription: "Apps para iPhone y Android para que tus clientes compren, reserven y paguen desde el celular, y para que tu equipo trabaje desde el suyo.",
      title: "Apps para iPhone y Android",
      description: "Tu negocio en el celular de tus clientes: que compren, reserven, paguen o sigan su pedido sin tener que escribirte. También la publicamos en las tiendas de apps.",
      fit: [
        "Coordinas pedidos por mensajes y ya no das abasto.",
        "Quieres que tus clientes vuelvan a comprarte.",
        "Tu equipo necesita trabajar desde el celular.",
      ],
      includes: [
        { title: "Compras, reservas y pagos", body: "Desde la app, sin tener que escribirte." },
        { title: "Notificaciones", body: "Promociones, recordatorios y estado del pedido." },
        { title: "Apps para tu equipo", body: "Visitas, entregas o inventario desde el celular." },
        { title: "Publicación y actualizaciones", body: "En App Store y Google Play." },
      ],
    },
    automation: {
      seoTitle: "Automatización de procesos para empresas en Ecuador | CodeLabs",
      seoDescription: "Automatizamos facturas, recordatorios, reportes y el paso de datos entre tus programas para que tu equipo deje de hacer tareas repetitivas a mano.",
      title: "Automatización de procesos",
      description: "Las tareas que tu equipo repite todos los días las puede hacer un sistema: enviar facturas, recordar pagos, pasar datos de un lado a otro o armar reportes. Tu gente se dedica a lo que sí necesita una persona.",
      fit: [
        "Pasas horas copiando datos entre Excel y otros programas.",
        "Se te olvidan cobros o seguimientos.",
        "Armar un reporte te toma días.",
      ],
      includes: [
        { title: "Recordatorios y avisos automáticos", body: "Por correo o WhatsApp." },
        { title: "Conexión entre tus programas", body: "Que tu tienda, tu facturación y tu contabilidad se hablen." },
        { title: "Reportes que se arman solos", body: "Los números de tu negocio sin armarlos a mano." },
        { title: "Aprobaciones", body: "Pedidos o compras que pasan por las personas correctas." },
      ],
    },
    ai: {
      seoTitle: "Inteligencia artificial para negocios en Ecuador | CodeLabs",
      seoDescription: "Asistentes con IA que responden a tus clientes por WhatsApp o en tu página a cualquier hora, y herramientas que leen documentos y resumen lo importante.",
      title: "Inteligencia artificial para tu negocio",
      description: "Asistentes que contestan a tus clientes por WhatsApp o en tu página a cualquier hora, y herramientas que leen documentos y te resumen lo importante. Usan la información de tu negocio y te pasan la conversación cuando hace falta una persona.",
      fit: [
        "Te escriben las mismas preguntas todo el día.",
        "Pierdes clientes por responder tarde o fuera de horario.",
        "Revisas facturas, formularios o contratos a mano.",
      ],
      includes: [
        { title: "Asistente para WhatsApp y tu página", body: "Responde, toma pedidos y agenda." },
        { title: "Lectura de documentos", body: "Saca los datos de facturas, formularios o cédulas." },
        { title: "Resúmenes y respuestas sugeridas", body: "Para correos y solicitudes." },
        { title: "Reglas claras", body: "Decides con nosotros qué puede responder el asistente y cuándo pasa a una persona." },
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
      seoTitle: "Sistemas a la medida para negocios en Ecuador | CodeLabs",
      seoDescription: "Inventario, ventas, facturación y clientes en un solo sistema armado según cómo trabaja tu negocio, y renovación de sistemas antiguos por partes.",
      title: "Sistemas a la medida",
      description: "Inventario, ventas, facturación y clientes en un solo sistema, armado según cómo trabaja tu negocio. Si ya tienes uno que se quedó corto, lo renovamos por partes sin detener tu operación.",
      fit: [
        "Tu operación depende de varias hojas de Excel.",
        "Los programas que probaste no se ajustan a cómo trabajas.",
        "Tu sistema actual es lento o ya nadie lo mantiene.",
      ],
      includes: [
        { title: "Inventario y ventas", body: "Qué tienes, qué vendes y qué se está acabando." },
        { title: "Facturación", body: "Tus facturas en un solo lugar." },
        { title: "Reportes", body: "Para ver cómo va tu negocio." },
        { title: "Renovación de sistemas antiguos", body: "Por partes y sin perder información." },
      ],
    },
    cloud: {
      seoTitle: "Nube, seguridad y soporte en AWS | CodeLabs",
      seoDescription: "Llevamos tus sistemas a la nube de Amazon (AWS), cuidamos que estén disponibles y protegidos, y te atendemos cuando algo necesita un cambio.",
      title: "Nube, seguridad y soporte",
      description: "Llevamos tus sistemas a la nube de Amazon (AWS), cuidamos que estén disponibles y protegidos, y te atendemos cuando algo necesita un cambio. No tienes que comprar servidores ni tener a alguien de sistemas a tiempo completo.",
      fit: [
        "Tu sistema se cae cuando entra mucha gente.",
        "Tu servidor está en la oficina y te preocupa perder información.",
        "Quien hizo tu sistema ya no responde.",
      ],
      includes: [
        { title: "Paso a la nube de Amazon (AWS)", body: "Desde donde estén hoy tus sistemas." },
        { title: "Accesos controlados", body: "Cada persona entra solo a lo que le corresponde." },
        { title: "Respaldos y monitoreo", body: "Vigilamos que todo funcione." },
        { title: "Soporte y mejoras", body: "Atendemos dudas y agregamos lo que haga falta." },
      ],
    },
  },
};

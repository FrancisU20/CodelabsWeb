import type { Messages } from "../messages";

export const howWeWork: Messages["howWeWork"] = {
  factsLabel: "Nuestros compromisos en cifras",
  facts: [
    { value: "{proposal} días", label: "como máximo para recibir tu propuesta" },
    { value: "{weeks} semanas", label: "entre cada versión que pruebas" },
    { value: "{warranty} días", label: "de garantía sin costo" },
    { value: "100%", label: "del código y las cuentas a tu nombre" },
  ],
  phases: {
    title: { lines: ["Del primer mensaje", "al lanzamiento,"], accent: "fase por fase." },
    receivesLabel: "Lo que recibes",
    items: [
      {
        id: "proposal",
        label: "Propuesta",
        title: "Entendemos tu negocio y te decimos cuánto y cuándo.",
        body: "Una reunión para conocer tu operación y, en máximo {proposal} días, una propuesta con alcance, cronograma y precio.",
        receives: "Propuesta por escrito, contrato y acuerdo de confidencialidad.",
      },
      {
        id: "design",
        label: "Diseño",
        title: "Ves tu producto antes de que escribamos una línea de código.",
        body: "Diseñamos las pantallas y el recorrido. Las revisas con tu equipo, pides cambios y las apruebas.",
        receives: "Diseños navegables para probar desde tu celular.",
      },
      {
        id: "build",
        label: "Desarrollo",
        title: "Construimos por etapas y pruebas cada avance.",
        body: "Cada {weeks} semanas recibes una versión para probar, y cada semana revisamos contigo avances y próximos pasos.",
        receives: "Versiones de prueba, reunión semanal, reporte escrito y acceso al tablero del proyecto.",
      },
      {
        id: "quality",
        label: "Calidad",
        title: "Nada se publica sin pasar por revisión.",
        body: "Otro ingeniero revisa cada cambio, las pruebas automáticas corren en cada versión y revisamos la seguridad antes de entregar.",
        receives: "Una entrega revisada que funciona en celular, computador y tablet.",
      },
      {
        id: "handover",
        label: "Entrega y soporte",
        title: "Lo ponemos en marcha y seguimos contigo.",
        body: "Publicamos, capacitamos a tu equipo y te dejamos todo lo necesario para operar sin depender de nosotros.",
        receives: "Código fuente, documentación técnica, manual de uso, capacitación y {warranty} días de garantía.",
      },
    ],
  },
  visuals: {
    proposal: {
      caption: "propuesta.pdf",
      title: "Propuesta · App de reservas",
      client: "Preparada para tu empresa",
      rows: [
        { label: "Alcance", value: "12 pantallas, pagos y avisos" },
        { label: "Cronograma", value: "9 semanas" },
        { label: "Entregas", value: "Cada {weeks} semanas" },
        { label: "Abono inicial", value: "{start}%" },
        { label: "Garantía", value: "{warranty} días" },
      ],
      signature: "Contrato y acuerdo de confidencialidad",
    },
    design: { caption: "diseño de pantallas", screens: ["Inicio", "Reserva", "Pago"], approved: "Diseño aprobado por tu equipo" },
    board: {
      caption: "tablero del proyecto",
      columns: [
        { title: "Por hacer", cards: ["Avisos por correo", "Reportes"] },
        { title: "En curso", cards: ["Pago con tarjeta"] },
        { title: "Listo", cards: ["Registro de usuarios", "Calendario de clases"] },
      ],
    },
    quality: {
      caption: "revisión de entrega",
      meter: { title: "Todo en orden", caption: "5 de 5 revisiones" },
      items: [
        "Aprobaste el diseño",
        "Lo revisó otro ingeniero",
        "Pasó las pruebas automáticas",
        "Revisamos la seguridad",
        "Funciona en celular, computador y tablet",
      ],
      summary: "Listo para publicar",
    },
    handover: {
      caption: "entrega del proyecto",
      items: ["Código fuente en tu repositorio", "Documentación técnica", "Manual de uso", "Capacitación a tu equipo", "{warranty} días de garantía"],
      summary: "Todo a nombre de tu empresa",
    },
  },
  updates: {
    title: { lines: ["Siempre sabes"], accent: "en qué va tu proyecto." },
    body: "Hablas con las personas que construyen tu producto, no con un intermediario.",
    items: [
      { title: "Reunión semanal", body: "Revisamos avances, decisiones y próximos pasos." },
      { title: "Grupo de WhatsApp", body: "Escribes directo al equipo del proyecto." },
      { title: "Tablero del proyecto", body: "Ves cada tarea: por hacer, en curso y lista." },
      { title: "Reporte escrito", body: "Un resumen de avance para compartir con tu gerencia." },
    ],
    chat: {
      name: "Proyecto · App de reservas",
      initial: "P",
      status: "Tú y el equipo de CodeLabs",
      messages: [
        { from: "assistant", text: "Buenos días. Ya está lista la versión de esta semana: registro, calendario y reservas." },
        { from: "assistant", text: "Te dejamos el enlace de prueba y el reporte en el tablero." },
        { from: "customer", text: "Perfecto, la reviso hoy con mi equipo. ¿Podemos sumar pago por transferencia?" },
        { from: "assistant", text: "Sí. Lo revisamos el jueves en la reunión, con lo que implica en plazo y costo." },
      ],
    },
  },
  commitments: {
    title: { lines: ["Lo que puedes"], accent: "exigirnos." },
    items: [
      { title: "Contrato y confidencialidad", body: "Firmamos contrato y acuerdo de confidencialidad antes de empezar." },
      { title: "Un responsable fijo", body: "Una persona lleva tu proyecto de principio a fin y responde por él." },
      { title: "Revisión de código", body: "Otro ingeniero revisa cada cambio antes de publicarlo." },
      { title: "Todo a tu nombre", body: "Código, cuentas, dominio e infraestructura quedan a nombre de tu empresa." },
      { title: "Garantía de {warranty} días", body: "Corregimos sin costo los errores que aparezcan después de la entrega." },
      { title: "Socios AWS Select", body: "Ingenieros con certificaciones de Amazon Web Services." },
    ],
  },
  payment: {
    title: "Cómo pagas",
    items: [
      {
        label: "Proyecto cerrado",
        title: "{start}% al iniciar, el saldo al entregar",
        body: "Una sola factura electrónica por el proyecto. El abono reserva al equipo y arranca el trabajo.",
      },
      {
        label: "Equipo dedicado y refuerzo",
        title: "Factura mensual, a fin de mes",
        body: "Facturamos al cierre de cada mes los servicios de consultoría externa de los ingenieros que trabajan contigo.",
      },
    ],
    compareLink: "Compara las formas de trabajar",
  },
};

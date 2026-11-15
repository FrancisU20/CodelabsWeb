import type { Messages } from "../messages";

export const services: Messages["services"] = {
  title: { lines: ["¿Qué necesita", "tu empresa?"] },
  more: "Ver el servicio",
  helpChat: {
    name: "CodeLabs",
    initial: "C",
    status: "en línea",
    messages: [
      { from: "customer", text: "Necesitamos conectar nuestro sistema con una app para clientes." },
      { from: "assistant", text: "Cuéntanos cómo trabajan hoy y te proponemos el alcance, el tiempo y el equipo." },
    ],
  },
  items: [
    { id: "web", title: "Webs y comercio electrónico", need: "Vender y captar clientes en línea", summary: "Sitios y tiendas rápidos, listos para Google.", vignette: { lines: [] } },
    { id: "mobile", title: "Apps móviles", need: "Llevar tu servicio al celular de tus clientes", summary: "Apps para iPhone y Android, para clientes y equipos.", vignette: { lines: [] } },
    { id: "automation", title: "Automatización de procesos", need: "Menos trabajo manual y menos errores", summary: "Procesos que se ejecutan solos entre tus sistemas.", vignette: { lines: ["Pedido", "Factura", "Correo"] } },
    { id: "ai", title: "Inteligencia artificial", need: "Atender y analizar información con IA", summary: "Asistentes con la información de tu empresa.", vignette: { lines: ["¿Hacen envíos a Quito?", "Sí, llegan en 48 horas."] } },
    { id: "custom", title: "Software a la medida", need: "Integrar tus sistemas y procesos", summary: "Plataformas a la medida e integraciones con tus sistemas.", vignette: { lines: [] } },
    { id: "cloud", title: "Nube AWS, seguridad y soporte", need: "Operar sin caídas y con datos protegidos", summary: "Infraestructura en AWS, monitoreo y soporte continuo.", vignette: { lines: ["Tienda en línea", "Facturación", "Respaldo diario"], state: "En línea" } },
  ],
  timelineLabel: "Plazo típico",
  engagement: {
    title: { lines: ["Formas de trabajar", "con nosotros"] },
    featured: "La más elegida",
    items: {
      fixed: {
        title: "Proyecto cerrado",
        forWho: "Para cuando sabes qué necesitas: una web, una app o una integración.",
        details: [
          { label: "Cómo funciona", text: "Te enviamos una propuesta con alcance, plazo y precio fijo. Apruebas el diseño, construimos por etapas y pruebas cada avance." },
          { label: "Qué recibes", text: "El sistema funcionando, el código y las cuentas a nombre de tu empresa, y la capacitación de tu equipo." },
          { label: "Cómo pagas", text: "{start}% al iniciar, {midway}% a mitad del proyecto y {delivery}% al entregar." },
          { label: "Garantía", text: "{days} días de corrección de errores sin costo después de la entrega." },
        ],
        priceNote: "según el servicio y el alcance",
      },
      dedicated: {
        title: "Equipo dedicado",
        forWho: "Para productos que crecen mes a mes: una plataforma o una app con muchas funciones.",
        details: [
          { label: "Cómo funciona", text: "Un equipo de CodeLabs trabaja solo en tu producto. Cada {weeks} semanas defines las prioridades y recibes una entrega para probar." },
          { label: "Quiénes lo forman", text: "Dirección de proyecto incluida, más los perfiles que tu producto necesite: diseño, desarrollo web y móvil, nube y pruebas." },
          { label: "Cómo pagas", text: "Mensual, según el tamaño del equipo." },
          { label: "Compromiso", text: "Mínimo {months} meses." },
        ],
        priceNote: "al mes por ingeniero a tiempo completo",
      },
      extension: {
        title: "Refuerzo de tu equipo",
        forWho: "Para cuando ya tienes un equipo y te falta capacidad o una especialidad.",
        details: [
          { label: "Cómo funciona", text: "Nuestros ingenieros se integran a tu equipo, tus herramientas y tu horario. Tu equipo dirige el trabajo diario." },
          { label: "Perfiles", text: "Web y backend, apps móviles, nube AWS y DevOps, y pruebas (QA)." },
          { label: "Cómo pagas", text: "Mensual, por ingeniero." },
          { label: "Compromiso", text: "Mínimo {months} meses." },
        ],
        priceNote: "al mes por ingeniero intermedio · {senior} senior",
      },
    },
    chooser: [
      { question: "¿Alcance claro y presupuesto fijo?", answer: "Proyecto cerrado." },
      { question: "¿Tu producto cambia cada mes?", answer: "Equipo dedicado." },
      { question: "¿Ya tienes equipo y te falta gente?", answer: "Refuerzo de tu equipo." },
    ],
    guideLink: "Lee la guía completa para elegir",
  },
};

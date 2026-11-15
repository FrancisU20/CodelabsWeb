import type { Messages } from "../messages";

export const serviceDetails: Messages["serviceDetails"] = {
  labels: {
    outcomesTitle: "Lo que logras",
    stepsTitle: "Cómo lo hacemos",
    casesTitle: "Proyectos reales",
    casesLink: "Ver casos de éxito",
    techTitle: "Tecnologías con las que trabajamos",
    faqTitle: "Preguntas frecuentes",
  },
  items: {
    web: {
      headline: "Webs y tiendas en línea que traen clientes, no solo visitas.",
      outcomes: [
        { title: "Más contactos y ventas", body: "Cada página está pensada para que el visitante te escriba, agende o compre." },
        { title: "Apareces en Google", body: "Estructura, velocidad y textos alineados con lo que buscan tus clientes." },
        { title: "Tu operación conectada", body: "Pedidos, inventario y pagos se sincronizan con tus sistemas." },
      ],
      steps: [
        { when: "Semana 1", title: "Descubrimiento", body: "Objetivos, público y contenidos." },
        { when: "Semanas 1 y 2", title: "Diseño", body: "Las páginas clave, que apruebas antes de construir." },
        { when: "Semanas 2 a 6", title: "Desarrollo", body: "Construimos y conectamos pagos e integraciones." },
        { when: "Al final", title: "Lanzamiento", body: "Dominio, seguridad y medición de visitas." },
        { when: "Después", title: "Mejora continua", body: "Ajustes con los datos reales de tus visitas." },
      ],
      faqs: [
        { question: "¿Cuánto cuesta una web?", answer: "Una web informativa parte de {price}. Una tienda conectada a tu inventario y facturación cuesta más según el catálogo y las integraciones." },
        { question: "¿Cuánto tarda?", answer: "{timeline}, según el número de páginas y las integraciones." },
        { question: "¿Puedo actualizar el contenido yo mismo?", answer: "Sí. Te dejamos la web lista para que cambies textos, imágenes y productos sin depender de nosotros." },
        { question: "¿Incluye dominio y hosting?", answer: "Te ayudamos a registrar el dominio a nombre de tu empresa y alojamos la web en AWS con certificado de seguridad." },
      ],
      cases: [
        { name: "BASC", summary: "Plataforma educativa de cursos de aduanas." },
      ],
    },
    mobile: {
      headline: "Apps para iPhone y Android que tus clientes usan todos los días.",
      outcomes: [
        { title: "Más ventas desde el celular", body: "Tus clientes compran, reservan o pagan sin escribirte ni llamar." },
        { title: "Menos trabajo manual", body: "Pedidos, citas y trámites llegan directo a tus sistemas." },
        { title: "Tu marca en su bolsillo", body: "Notificaciones de promociones, recordatorios y estado de pedidos." },
      ],
      steps: [
        { when: "Semana 1", title: "Descubrimiento", body: "Usuarios, flujos e integraciones." },
        { when: "Semanas 2 y 3", title: "Diseño", body: "Pantallas que apruebas antes de programar." },
        { when: "Cada 2 semanas", title: "Desarrollo", body: "Una versión nueva para probar en tu celular." },
        { when: "Al final", title: "Publicación", body: "App Store y Google Play." },
        { when: "Después", title: "Soporte", body: "Actualizaciones y mejoras." },
      ],
      faqs: [
        { question: "¿Cuánto cuesta una app?", answer: "Desde {price} una app web instalable. Una app publicada en App Store y Google Play, con pagos o integraciones, cuesta más según el alcance. En la guía de precios te explicamos cada nivel." },
        { question: "¿Cuánto tarda?", answer: "{timeline}, según las funciones y las integraciones." },
        { question: "¿La app queda a nombre de mi empresa?", answer: "Sí. El código y las cuentas de App Store y Google Play quedan a nombre de tu empresa." },
        { question: "¿Qué pasa después del lanzamiento?", answer: "Tienes {warranty} días de corrección de errores sin costo y, si lo necesitas, mantenimiento mensual con actualizaciones para cada versión de iOS y Android." },
      ],
      cases: [
        { name: "Supermaxi", summary: "App para clientes y repartidores." },
        { name: "Confiamed", summary: "App de afiliados: reembolsos, citas y receta electrónica." },
        { name: "Curve Pilates Studio", summary: "Reservas de clases, publicada en App Store." },
      ],
    },
    automation: {
      headline: "Que los procesos repetitivos se hagan solos, sin errores.",
      outcomes: [
        { title: "Horas de trabajo recuperadas", body: "Lo que tu equipo copiaba a mano lo hace el sistema." },
        { title: "Menos errores", body: "Los datos pasan de un sistema a otro sin volver a escribirlos." },
        { title: "Todo a tiempo", body: "Cobros, recordatorios y aprobaciones salen cuando corresponde." },
      ],
      steps: [
        { when: "Semana 1", title: "Mapa del proceso", body: "Vemos cómo se hace hoy y dónde se pierde tiempo." },
        { when: "Semana 1", title: "Diseño del flujo", body: "Definimos qué hace el sistema y qué sigue haciendo una persona." },
        { when: "Semanas 2 a 5", title: "Construcción", body: "Conectamos tus sistemas y probamos con datos reales." },
        { when: "Al final", title: "Puesta en marcha", body: "Activamos el flujo y capacitamos a tu equipo." },
        { when: "Después", title: "Monitoreo", body: "Vigilamos que cada ejecución salga bien." },
      ],
      faqs: [
        { question: "¿Cuánto cuesta automatizar un proceso?", answer: "Desde {price} por flujo. Si hay varios sistemas conectados, el precio depende de las integraciones." },
        { question: "¿Cuánto tarda?", answer: "{timeline}." },
        { question: "¿Necesito cambiar mis sistemas actuales?", answer: "No. Conectamos los que ya usas; si alguno no permite integrarse, te proponemos alternativas." },
        { question: "¿Qué pasa si algo falla?", answer: "Cada flujo tiene alertas: si una ejecución falla, nos enteramos y lo corregimos." },
      ],
      cases: [
        { name: "Farmaenlace", summary: "Reposición de Farmacias Económicas y Medicity con seguimiento en tiempo real." },
      ],
    },
    ai: {
      headline: "Inteligencia artificial que atiende, responde y trabaja con tus datos.",
      outcomes: [
        { title: "Atención a cualquier hora", body: "Tus clientes reciben respuesta en segundos, también de noche y en fines de semana." },
        { title: "Tu equipo se enfoca en lo importante", body: "El asistente resuelve las preguntas repetidas y pasa a una persona lo que lo necesita." },
        { title: "Decisiones con datos", body: "La gerencia consulta stock, ventas o indicadores preguntando por chat." },
      ],
      steps: [
        { when: "Semana 1", title: "Casos de uso", body: "Elegimos las preguntas y tareas que más tiempo consumen." },
        { when: "Semanas 1 y 2", title: "Base de conocimiento", body: "Reunimos la información de tu empresa y conectamos tus sistemas." },
        { when: "Semanas 2 a 6", title: "Construcción y pruebas", body: "Probamos con conversaciones reales antes de abrirlo a clientes." },
        { when: "Al final", title: "Lanzamiento", body: "Activamos el asistente en WhatsApp o en tu web." },
        { when: "Después", title: "Mejora continua", body: "Revisamos conversaciones y ajustamos las respuestas." },
      ],
      faqs: [
        { question: "¿Cuánto cuesta un asistente con IA?", answer: "Desde {price}. Aparte se pagan los mensajes de WhatsApp que cobra Meta y el uso del modelo de IA, que te estimamos con tu volumen." },
        { question: "¿Cuánto tarda?", answer: "{timeline}." },
        { question: "¿El asistente puede inventar respuestas?", answer: "Lo configuramos para responder solo con información verificada de tu empresa. Si no sabe algo, lo dice y pasa a una persona." },
        { question: "¿Qué pasa con los datos de mis clientes?", answer: "Se tratan según la Ley Orgánica de Protección de Datos Personales, en servicios con acuerdos de confidencialidad." },
      ],
      cases: [
        { name: "Cadena de supermercados", summary: "Inventario por WhatsApp para la gerencia." },
        { name: "Cadena de ferreterías", summary: "Stock, precios y cotizaciones al instante." },
        { name: "Red de salud", summary: "Médico en línea, resultados y trámites." },
      ],
    },
    custom: {
      headline: "Software hecho a la medida de cómo opera tu empresa.",
      outcomes: [
        { title: "Todo en un solo lugar", body: "Sin hojas de Excel sueltas ni sistemas que no se hablan." },
        { title: "Procesos más rápidos", body: "Cada área ve lo que necesita y trabaja sobre los mismos datos." },
        { title: "Crece contigo", body: "Agregamos módulos a medida que tu operación lo pide." },
      ],
      steps: [
        { when: "Semanas 1 y 2", title: "Levantamiento", body: "Entendemos tus procesos, usuarios y sistemas actuales." },
        { when: "Semanas 2 a 4", title: "Diseño", body: "Arquitectura y pantallas que validas con tu equipo." },
        { when: "Cada 2 semanas", title: "Desarrollo por etapas", body: "Entregas que tu equipo usa y prueba desde el inicio." },
        { when: "Al final", title: "Implementación", body: "Migración de datos y capacitación." },
        { when: "Después", title: "Evolución", body: "Soporte y nuevos módulos." },
      ],
      faqs: [
        { question: "¿Cuánto cuesta un software a la medida?", answer: "Desde {price}. El precio depende de los módulos, las integraciones y el número de usuarios." },
        { question: "¿Cuánto tarda?", answer: "{timeline}, con entregas por etapas para que uses partes del sistema desde el inicio." },
        { question: "¿Por qué no comprar un software ya hecho?", answer: "Si uno del mercado se ajusta a tu operación, te lo recomendamos. Construimos a la medida cuando tus procesos son tu ventaja o ningún producto los cubre." },
        { question: "¿El código es mío?", answer: "Sí. El código, los datos y la infraestructura quedan a nombre de tu empresa." },
      ],
      cases: [
        { name: "Farmaenlace · Despachos", summary: "Plataforma de despachos de la bodega central a las farmacias." },
        { name: "Farmaenlace · Farmascan", summary: "Facturas y recetas escaneadas para los convenios con seguros." },
      ],
    },
    cloud: {
      headline: "Tus sistemas en AWS, siempre disponibles y protegidos.",
      outcomes: [
        { title: "Sin caídas", body: "La infraestructura crece cuando aumenta la demanda." },
        { title: "Información protegida", body: "Respaldos, cifrado y accesos controlados." },
        { title: "Sin servidores que mantener", body: "Nosotros operamos la infraestructura; tú te enfocas en tu negocio." },
      ],
      steps: [
        { when: "Semana 1", title: "Evaluación", body: "Revisamos tus sistemas, riesgos y costos actuales." },
        { when: "Semanas 1 y 2", title: "Plan de migración", body: "Orden, ventanas de cambio y plan de respaldo." },
        { when: "Semanas 2 a 6", title: "Migración por etapas", body: "Un sistema a la vez, probando cada paso." },
        { when: "Al final", title: "Cambio final", body: "En el horario de menor uso, sin interrupciones." },
        { when: "Después", title: "Operación", body: "Monitoreo, respaldos y soporte continuo." },
      ],
      faqs: [
        { question: "¿Cuánto cuesta migrar a AWS?", answer: "Desde {price}. Aparte se paga el consumo de AWS, que te estimamos antes de migrar." },
        { question: "¿Cuánto tarda?", answer: "{timeline}, según cuántos sistemas y bases de datos haya." },
        { question: "¿Mi sistema deja de funcionar durante la migración?", answer: "No debería. Migramos por etapas, probamos todo y hacemos el cambio final en el horario de menor uso." },
        { question: "¿Por qué con CodeLabs?", answer: "Somos socios AWS de nivel Select y nuestro equipo tiene certificaciones de Amazon." },
      ],
      cases: [
        { name: "Banco", summary: "Firma de contratos con prueba de vida y AWS Rekognition." },
      ],
    },
  },
};

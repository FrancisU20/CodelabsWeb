import { PRICE_LIST } from "../price-list";
import type { Guide } from "./guide";
import { faq, list, paragraph, section, table, usd } from "./guide-tokens";

const { team } = PRICE_LIST;

export const engagementModelsGuide: Guide = {
  slug: "proyecto-cerrado-equipo-dedicado-o-refuerzo-de-equipo",
  title: "Proyecto cerrado, equipo dedicado o refuerzo de equipo: cuál te conviene",
  metaTitle: "Proyecto cerrado, equipo dedicado o staff augmentation: cuál elegir | CodeLabs",
  metaDescription: `Diferencias entre contratar software por proyecto cerrado, con un equipo dedicado o reforzando tu equipo. Cuándo conviene cada uno y cuánto cuesta: desde ${usd(team.midLevel)} al mes por ingeniero.`,
  summary:
    "Hay tres formas de contratar desarrollo de software. Elegir bien depende de qué tan claro tienes el alcance y de cuánto control quieres tener sobre el día a día.",
  published: "2026-11-15",
  sections: [
    section(
      "Las tres formas de trabajar",
      table(
        ["", "Proyecto cerrado", "Equipo dedicado", "Refuerzo de tu equipo"],
        ["Qué es", "Alcance, tiempo y costo definidos desde el inicio", "Un equipo completo de CodeLabs trabaja solo en tu producto", "Ingenieros nuestros se integran a tu equipo"],
        ["Conviene si", "Sabes exactamente qué necesitas", "Tu producto cambia y crece todo el tiempo", "Ya tienes un equipo y te falta capacidad o una especialidad"],
        ["Quién dirige", "CodeLabs, con tu aprobación en cada etapa", "Tú defines prioridades; CodeLabs gestiona el equipo", "Tu equipo dirige el trabajo diario"],
        ["Cómo se paga", "Por etapas entregadas", "Mensual", "Mensual, por ingeniero"],
      ),
    ),
    section(
      "Proyecto cerrado",
      paragraph(
        "Es la opción con más certeza: sabes cuánto vas a pagar y cuándo vas a recibir cada parte. Funciona mejor para productos con alcance claro, como una app de reservas, una tienda en línea o una integración entre dos sistemas.",
      ),
      paragraph(
        "El riesgo está en los cambios: si a mitad del proyecto cambia lo que necesitas, hay que ajustar el alcance, el tiempo y el costo. Por eso conviene dividirlo en etapas cortas.",
      ),
    ),
    section(
      "Equipo dedicado",
      paragraph(
        "Un equipo completo, con dirección de proyecto, diseño, desarrollo y pruebas, trabaja solo para tu producto. Tú decides las prioridades de cada ciclo y el equipo entrega avances continuos.",
      ),
      paragraph(
        "Conviene cuando el producto es central para tu negocio y va a seguir creciendo: una plataforma para tus clientes, una app con muchas funciones o un sistema que se mejora todos los meses.",
      ),
    ),
    section(
      "Refuerzo de tu equipo",
      paragraph(
        "Si ya tienes un equipo de tecnología, sumamos ingenieros que trabajan con tus herramientas, tus procesos y tu horario. Es la forma más rápida de ganar capacidad sin un proceso de contratación largo.",
      ),
      paragraph(
        "Conviene cuando tienes picos de trabajo, un proyecto con fecha fija o necesitas una especialidad que no tienes, como nube AWS, apps móviles o inteligencia artificial.",
      ),
    ),
    section(
      "Cuánto cuesta",
      list(
        "Proyecto cerrado: según el alcance. Revisa los precios desde de cada servicio en nuestra página de servicios.",
        `Equipo dedicado y refuerzo de equipo: desde ${usd(team.midLevel)} al mes por un ingeniero de nivel intermedio a tiempo completo, y desde ${usd(team.senior)} al mes por un ingeniero senior.`,
      ),
    ),
    section(
      "Cómo decidir",
      list(
        "Si el alcance está claro y el presupuesto es fijo: proyecto cerrado.",
        "Si el producto va a evolucionar mes a mes: equipo dedicado.",
        "Si ya tienes equipo y te falta gente o una especialidad: refuerzo de equipo.",
        "Muchas empresas empiezan con un proyecto cerrado y, cuando el producto crece, pasan a un equipo dedicado.",
      ),
    ),
  ],
  faqs: [
    faq(
      "¿Puedo cambiar de modelo a mitad del camino?",
      "Sí. Es común empezar con un proyecto cerrado para la primera versión y seguir con un equipo dedicado para las mejoras.",
    ),
    faq(
      "¿Los ingenieros trabajan en mi horario?",
      "Sí. Trabajamos en horario de Ecuador, que coincide con Colombia, Perú y buena parte de México y Estados Unidos.",
    ),
    faq(
      "¿Cuál es el compromiso mínimo para un equipo dedicado?",
      "Lo definimos en la propuesta según el proyecto y el tamaño del equipo.",
    ),
  ],
  services: ["custom", "mobile", "cloud"],
};

import type { Guide } from "./guide";
import { alerts, answer, checklist, faq, list, paragraph, points, section } from "./guide-tokens";

export const chooseCompanyGuide: Guide = {
  slug: "como-elegir-una-empresa-de-desarrollo-de-software-en-ecuador",
  title: "Cómo elegir una empresa de desarrollo de software en Ecuador",
  metaTitle: "Cómo elegir una empresa de desarrollo de software en Ecuador | CodeLabs",
  metaDescription:
    "Qué revisar antes de contratar una empresa de desarrollo de software en Ecuador: casos verificables, propuesta clara, propiedad del código, seguridad y soporte.",
  summary:
    "Elegir mal a quien construye tu software sale caro: retrasos, código que nadie puede mantener y sistemas que se caen. Esta lista te ayuda a comparar empresas con criterios objetivos.",
  published: "2026-11-15",
  sections: [
    section(
      "Lo que debes revisar",
      checklist(
        ["Casos que puedas verificar", "Apps publicadas en App Store o Google Play, sistemas en uso o clientes que puedas mencionar. Un portafolio solo con diseños no demuestra que el equipo sepa entregar."],
        ["Una propuesta por escrito", "Qué se entrega, en qué orden, en qué plazo y cuánto cuesta. Si la propuesta es una sola cifra sin detalle, pide que la desglosen."],
        ["Entregas por etapas", "Deberías poder probar avances cada pocas semanas, no ver el resultado recién al final."],
        ["El código y las cuentas a tu nombre", "El código, los servidores, el dominio y las cuentas de las tiendas deben quedar a nombre de tu empresa."],
        ["Seguridad", "Accesos controlados, respaldos, cifrado y buenas prácticas en la nube. Si manejas datos de clientes, debe cumplir la Ley Orgánica de Protección de Datos Personales."],
        ["Soporte después del lanzamiento", "Quién atiende cuando algo falla, en cuánto tiempo y cuánto cuesta el mantenimiento mensual."],
        ["Respaldo técnico", "Certificaciones o alianzas con plataformas como AWS indican que el equipo trabaja con estándares reconocidos."],
      ),
    ),
    section(
      "Señales de alerta",
      alerts(
        "Te prometen todo en muy poco tiempo y a un precio muy bajo, sin preguntar cómo funciona tu negocio.",
        "No pueden mostrarte nada en funcionamiento.",
        "Quieren que todo quede a su nombre: el dominio, los servidores o las cuentas de las tiendas.",
        "No hay contrato o el contrato no dice qué pasa si el proyecto se retrasa.",
        "Una sola persona hace todo: diseño, programación, servidores, pruebas y soporte.",
      ),
    ),
    section(
      "Preguntas para la primera reunión",
      list(
        "¿Qué proyectos parecidos al mío han hecho y puedo verlos funcionando?",
        "¿Cómo dividen el proyecto en etapas y qué recibo en cada una?",
        "¿Quién será mi contacto y cada cuánto me informan del avance?",
        "¿Qué pasa si necesito cambios a mitad del proyecto?",
        "¿Dónde quedará alojado el sistema y quién paga esos servicios?",
        "¿Qué incluye el soporte después del lanzamiento y cuánto cuesta?",
      ),
    ),
    section(
      "Empresa local, freelancer o empresa extranjera",
      points(
        ["Freelancer", "Buena opción para algo pequeño y acotado, pero todo depende de una sola persona."],
        ["Empresa extranjera", "Puede tener mucha experiencia, pero suele cobrar tarifas de otro mercado y trabajar en otro horario."],
        ["Empresa local con equipo completo", "Diseño, desarrollo, nube, pruebas y soporte en tu mismo horario, con contratos bajo la ley ecuatoriana y precios del mercado local."],
      ),
    ),
    section(
      "Cómo trabajamos en CodeLabs",
      answer("Desde 2018 hemos entregado más de 100 proyectos y publicado más de 30 apps para empresas de Ecuador, Perú, Colombia y México."),
      paragraph(
        "Entre nuestros clientes están Supermaxi, Confiamed, Farmaenlace y BASC, y somos socios AWS de nivel Select. Cada proyecto tiene una propuesta por escrito, entregas por etapas y una persona del equipo como contacto de principio a fin.",
      ),
    ),
  ],
  faqs: [
    faq(
      "¿Cuántas propuestas debo comparar?",
      "Entre dos y tres, con el mismo alcance. Comparar propuestas que incluyen cosas distintas lleva a elegir solo por precio.",
    ),
    faq(
      "¿Es mejor pagar por hora o por proyecto cerrado?",
      "Si el alcance está claro, un proyecto cerrado te da certeza de costo y plazo. Si el producto va a cambiar seguido, un equipo dedicado da más flexibilidad.",
    ),
    faq(
      "¿Qué debe decir el contrato?",
      "El alcance, el cronograma de entregas, la forma de pago por etapas, quién es dueño del código, la confidencialidad, el tratamiento de datos personales y qué incluye el soporte.",
    ),
  ],
  services: ["custom", "mobile", "cloud"],
};

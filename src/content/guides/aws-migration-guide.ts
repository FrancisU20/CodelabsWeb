import { PRICE_LIST } from "../price-list";
import type { Guide } from "./guide";
import { answer, checklist, faq, paragraph, points, section, steps, tiers, usd } from "./guide-tokens";

const { cloud } = PRICE_LIST;

export const awsMigrationGuide: Guide = {
  slug: "migrar-tus-sistemas-a-aws",
  title: "Migrar tus sistemas a AWS: guía para empresas",
  metaTitle: "Migrar a la nube de AWS: guía para empresas en Ecuador | CodeLabs",
  metaDescription: `Por qué y cómo migrar tus sistemas a Amazon Web Services: pasos, seguridad, plazos y costos desde ${usd(cloud.small)} de migración y ${usd(cloud.smallMonthly)} al mes de operación.`,
  summary:
    "Llevar tus sistemas a la nube de Amazon reduce caídas, protege tu información y te evita comprar y mantener servidores. Así se hace una migración ordenada y sin detener tu operación.",
  published: "2026-11-15",
  sections: [
    section(
      "Por qué migrar a la nube",
      points(
        ["Sin caídas", "La infraestructura crece y se reduce según la demanda, así tu sistema no se cae cuando entra mucha gente."],
        ["Información protegida", "Respaldada y cifrada, fuera de la oficina."],
        ["Sin servidores propios", "No compras equipos ni pagas por capacidad que no usas."],
        ["Infraestructura de primer nivel", "La misma que usan bancos y grandes marcas."],
      ),
    ),
    section(
      "Qué se puede migrar",
      checklist(
        ["Páginas web y tiendas en línea"],
        ["Sistemas internos", "Facturación, inventario, ventas o recursos humanos."],
        ["Bases de datos y archivos"],
        ["Apps móviles y sus servidores"],
        ["Procesos automáticos", "Correos transaccionales y tareas programadas."],
      ),
    ),
    section(
      "Cómo es una migración ordenada",
      steps(
        ["Evaluación", "Qué sistemas tienes, cómo se conectan y qué tan críticos son."],
        ["Plan", "Qué se migra primero, cómo se protege la información y cuándo se hace cada paso."],
        ["Migración por etapas", "Un sistema a la vez, empezando por el de menor riesgo."],
        ["Pruebas", "Todo debe funcionar igual o mejor antes de cambiar el tráfico real."],
        ["Cambio sin interrupciones", "Pasamos a los usuarios a la nube en el horario de menor uso."],
        ["Operación", "Monitoreo, respaldos y soporte continuo."],
      ),
    ),
    section(
      "Seguridad desde el inicio",
      checklist(
        ["Accesos controlados", "Cada persona accede solo a lo que le corresponde."],
        ["Respaldos automáticos y cifrado"],
        ["Monitoreo y alertas", "Te avisamos si algo falla."],
        ["Buenas prácticas de AWS", "Seguridad, disponibilidad y costos bajo control."],
      ),
    ),
    section(
      "Cuánto cuesta",
      tiers(
        { name: "Pequeño negocio", price: usd(cloud.small), detail: `Operación desde ${usd(cloud.smallMonthly)} al mes`, text: "Web, tienda o un sistema." },
        { name: "Empresa mediana", price: usd(cloud.midsize), detail: `Operación desde ${usd(cloud.midsizeMonthly)} al mes`, text: "Varios sistemas y bases de datos." },
        { name: "Gran empresa", price: "A la medida", detail: "Según la arquitectura", text: "Arquitectura completa y alta disponibilidad." },
      ),
      paragraph(
        "Aparte se paga el consumo de AWS, que depende de cuánto usas. Antes de migrar te estimamos ese costo mensual.",
      ),
    ),
    section(
      "Por qué con CodeLabs",
      answer("Somos socios AWS de nivel Select y nuestro equipo tiene certificaciones de Amazon."),
      paragraph(
        "Entre ellas Solutions Architect, Developer y Cloud Practitioner. Usamos AWS en nuestros proyectos, por ejemplo en la validación de identidad con AWS Rekognition que construimos para un banco.",
      ),
    ),
  ],
  faqs: [
    faq(
      "¿Mi sistema deja de funcionar durante la migración?",
      "No debería. Migramos por etapas, probamos todo antes del cambio y hacemos el paso final en el horario de menor uso.",
    ),
    faq(
      "¿Cuánto tarda una migración?",
      "Una web o un sistema pequeño, entre 1 y 3 semanas. Varios sistemas con bases de datos, entre 3 y 8 semanas, según la complejidad.",
    ),
    faq(
      "¿La nube es más cara que tener mi propio servidor?",
      "Depende del uso. Al sumar el servidor, la electricidad, los respaldos y el tiempo de mantenimiento, la nube suele costar lo mismo o menos, y con más seguridad.",
    ),
  ],
  services: ["cloud", "custom"],
};

import { PRICE_LIST } from "../price-list";
import type { Guide } from "./guide";
import { faq, list, paragraph, section, table, usd } from "./guide-tokens";

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
      list(
        "Tu sistema deja de caerse cuando entra mucha gente: la infraestructura crece y se reduce según la demanda.",
        "Tu información queda respaldada y cifrada, fuera de la oficina.",
        "No compras servidores ni pagas por capacidad que no usas.",
        "Accedes a la misma infraestructura que usan bancos y grandes marcas.",
      ),
    ),
    section(
      "Qué se puede migrar",
      list(
        "Páginas web y tiendas en línea.",
        "Sistemas internos: facturación, inventario, ventas o recursos humanos.",
        "Bases de datos y archivos.",
        "Apps móviles y sus servidores.",
        "Correos transaccionales, tareas programadas y procesos automáticos.",
      ),
    ),
    section(
      "Cómo es una migración ordenada",
      list(
        "Evaluación: revisamos qué sistemas tienes, cómo se conectan entre sí y qué tan críticos son.",
        "Plan: definimos qué se migra primero, cómo se protege la información y cuándo se hace cada paso.",
        "Migración por etapas: movemos un sistema a la vez, empezando por el de menor riesgo.",
        "Pruebas: verificamos que todo funcione igual o mejor antes de cambiar el tráfico real.",
        "Cambio sin interrupciones: pasamos a los usuarios a la nube en el horario de menor uso.",
        "Operación: monitoreo, respaldos y soporte continuo.",
      ),
    ),
    section(
      "Seguridad desde el inicio",
      list(
        "Cada persona accede solo a lo que le corresponde.",
        "Respaldos automáticos y cifrado de la información.",
        "Monitoreo y alertas si algo falla.",
        "Configuración según las buenas prácticas de AWS para seguridad, disponibilidad y costos.",
      ),
    ),
    section(
      "Cuánto cuesta",
      table(
        ["Nivel", "Migración desde", "Operación mensual desde"],
        ["Pequeño negocio: web, tienda o un sistema", usd(cloud.small), usd(cloud.smallMonthly)],
        ["Empresa mediana: varios sistemas y bases de datos", usd(cloud.midsize), usd(cloud.midsizeMonthly)],
        ["Gran empresa: arquitectura completa y alta disponibilidad", "A la medida", "A la medida"],
      ),
      paragraph(
        "Aparte se paga el consumo de AWS, que depende de cuánto usas. Antes de migrar te estimamos ese costo mensual para que no haya sorpresas.",
      ),
    ),
    section(
      "Por qué con CodeLabs",
      paragraph(
        "Somos socios AWS de nivel Select y nuestro equipo tiene certificaciones de Amazon como Solutions Architect, Developer y Cloud Practitioner. Usamos AWS en nuestros proyectos, por ejemplo en la validación de identidad con AWS Rekognition que construimos para un banco.",
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

import type { Messages } from "../messages";

export const servicePages: Messages["servicePages"] = {
  labels: {
    back: "Todos los servicios",
    cta: "Cuéntanos tu idea",
    fitTitle: "Te conviene si…",
    includesTitle: "Qué incluye",
    otherTitle: "Otros servicios",
  },
  items: {
    mobile: {
      seoTitle: "Desarrollo de apps móviles en Ecuador | CodeLabs",
      seoDescription: "Creamos apps para iPhone y Android para empresas en Ecuador, con reservas, pedidos, pagos y registro de clientes.",
      title: "Desarrollo de apps para iPhone y Android",
      description: "Hacemos la app de tu negocio y nos encargamos de publicarla. Las pantallas las ves antes de que empecemos a programar.",
      fit: [
        "Coordinas reservas o pedidos por mensajes y ya no das abasto.",
        "Quieres cobrar desde el celular.",
        "Tus clientes te piden una forma más fácil de comprarte.",
      ],
      includes: [
        { title: "Reservas y citas", body: "Tus clientes ven horarios y cupos, y reservan sin tener que escribirte." },
        { title: "Pagos y membresías", body: "Cobros desde la app y planes para quienes vienen seguido." },
        { title: "Registro y validación", body: "Creación de cuentas y validación de identidad paso a paso." },
        { title: "Publicación y actualizaciones", body: "Nos encargamos de subirla a App Store y Google Play, y de mantenerla al día." },
      ],
    },
    web: {
      seoTitle: "Páginas web y tiendas en línea en Ecuador | CodeLabs",
      seoDescription: "Hacemos páginas web y tiendas en línea para empresas en Ecuador: rápidas en el celular y preparadas para aparecer en Google.",
      title: "Páginas web y tiendas en línea",
      description: "Una página que cargue rápido en el celular, que explique bien lo que vendes y que la gente encuentre cuando te busca.",
      fit: [
        "Hoy solo vendes por redes sociales.",
        "Tu página actual es lenta o no se ve bien en el celular.",
        "Cuando te buscan en Google no apareces.",
      ],
      includes: [
        { title: "Página de empresa", body: "Quién eres, qué ofreces y cómo contactarte." },
        { title: "Tienda en línea", body: "Catálogo, carrito y pagos." },
        { title: "Posicionamiento en Google", body: "Títulos, descripciones y estructura pensados para lo que tus clientes buscan." },
        { title: "Velocidad en el celular", body: "Que abra rápido aunque la conexión no sea buena." },
      ],
    },
    custom: {
      seoTitle: "Sistemas a la medida para empresas en Ecuador | CodeLabs",
      seoDescription: "Desarrollamos sistemas a la medida para empresas en Ecuador: inventarios, facturación, reportes y procesos internos.",
      title: "Sistemas a la medida para tu empresa",
      description: "Armamos el sistema según cómo trabaja tu gente, para que dejes de acomodar tu operación a un programa que no calza.",
      fit: [
        "Tu operación depende de hojas de Excel.",
        "Hay tareas que se repiten a mano y generan errores.",
        "Los programas que probaste no se ajustan a cómo trabajas.",
      ],
      includes: [
        { title: "Inventarios", body: "Qué tienes, dónde está y qué se está acabando." },
        { title: "Facturación", body: "Tus facturas ordenadas en un solo lugar." },
        { title: "Reportes", body: "Los números de tu negocio sin armar hojas a mano." },
        { title: "Procesos internos", body: "Pedidos, aprobaciones y seguimiento entre áreas." },
      ],
    },
    cloud: {
      seoTitle: "Nube y seguridad en AWS para empresas en Ecuador | CodeLabs",
      seoDescription: "Llevamos tus sistemas a la nube de Amazon (AWS) y los mantenemos disponibles y protegidos, sin que compres servidores.",
      title: "Nube y seguridad en AWS",
      description: "Pasamos tus sistemas a la nube de Amazon y nos encargamos de que sigan disponibles. No tienes que comprar servidores.",
      fit: [
        "Tu sistema se cae cuando entra mucha gente.",
        "Tu servidor está en la oficina y te preocupa perder información.",
        "No tienes quién administre tus servidores.",
      ],
      includes: [
        { title: "Migración a AWS", body: "Pasamos tus sistemas desde donde estén hoy." },
        { title: "Accesos controlados", body: "Cada persona entra solo a lo que le corresponde." },
        { title: "Capacidad que se ajusta", body: "Si llega mucha más gente, el sistema sube de capacidad solo." },
        { title: "Administración", body: "Vigilamos que todo funcione y lo mantenemos actualizado." },
      ],
    },
    modernization: {
      seoTitle: "Modernización de sistemas antiguos en Ecuador | CodeLabs",
      seoDescription: "Renovamos sistemas antiguos por partes, sin detener tu operación y sin perder tu información.",
      title: "Modernización de sistemas antiguos",
      description: "Renovamos tu sistema por partes, para que tu equipo pueda seguir trabajando y no se pierda información en el camino.",
      fit: [
        "Nadie quiere tocar el sistema porque se puede dañar.",
        "Ya no encuentras quién le dé mantenimiento.",
        "Agregarle algo nuevo toma demasiado tiempo.",
      ],
      includes: [
        { title: "Revisión de lo que tienes", body: "Vemos qué sirve y qué conviene cambiar." },
        { title: "Cambio por partes", body: "Se reemplaza una parte a la vez mientras el resto sigue funcionando." },
        { title: "Migración de datos", body: "Tu información pasa al sistema nuevo sin perderse." },
        { title: "Pantallas nuevas", body: "Tu equipo y tus clientes usan algo más fácil." },
      ],
    },
    support: {
      seoTitle: "Soporte y mantenimiento de apps y sistemas | CodeLabs",
      seoDescription: "Mantenemos tus apps, páginas y sistemas: vigilamos que funcionen, los actualizamos y agregamos lo que haga falta.",
      title: "Soporte y mantenimiento de apps y sistemas",
      description: "Si ya tienes una app, una página o un sistema, nos encargamos de que siga funcionando y de agregarle lo que haga falta.",
      fit: [
        "Quien hizo tu sistema ya no responde.",
        "Tienes una app o una página sin actualizar.",
        "Quieres mejorar lo que ya tienes sin empezar de cero.",
      ],
      includes: [
        { title: "Vigilancia", body: "Revisamos que todo funcione." },
        { title: "Actualizaciones", body: "Lo mantenemos al día." },
        { title: "Funciones nuevas", body: "Agregamos lo que tu negocio vaya necesitando." },
        { title: "Atención de dudas", body: "Te contestamos cuando tengas una duda o un pedido." },
      ],
    },
  },
};

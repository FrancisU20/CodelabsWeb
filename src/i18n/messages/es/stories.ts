import type { Messages } from "../messages";

export const stories: Messages["stories"] = {
  label: "Apps y plataformas",
  storeLabel: "Ver en App Store",
  note: "Diseños de referencia, salvo Curve Pilates Studio, que es la app real.",
  labels: { challenge: "El reto", solution: "Lo que construimos", result: "El resultado" },
  items: [
    {
      tag: "Banca",
      title: "Contratos firmados desde el celular.",
      challenge: "Firmar contratos sin papeles y con la identidad verificada.",
      solution: "Prueba de vida y reconocimiento facial con AWS Rekognition, más firma electrónica.",
      result: "El cliente firma desde su celular, sin ir a una agencia.",
    },
    {
      tag: "Supermaxi · Retail",
      title: "Pedidos a domicilio, de la percha a la puerta.",
      challenge: "Coordinar pedidos a domicilio entre clientes, tiendas y repartidores.",
      solution: "Una app para que los clientes pidan y sigan su pedido, y otra para que los repartidores gestionen cada entrega.",
      result: "Cada pedido se sigue en tiempo real.",
    },
    {
      tag: "Confiamed · Salud",
      title: "Los afiliados resuelven todo desde el celular.",
      challenge: "Que los afiliados resuelvan sus trámites sin llamar ni ir a una oficina.",
      solution: "Una app con reembolsos, citas médicas, receta electrónica y médico en línea.",
      result: "El servicio de Confiamed en el celular del afiliado.",
    },
    {
      tag: "BASC · Comercio exterior",
      title: "Cursos de aduanas en línea.",
      challenge: "Capacitar en aduanas a empresas afiliadas y al público en general.",
      solution: "Una plataforma educativa de cursos en línea.",
      result: "Cursos disponibles a cualquier hora, desde cualquier lugar.",
    },
    {
      tag: "Curve Pilates Studio · Bienestar",
      title: "Sus clientes reservan desde el celular.",
      challenge: "Llenar clases sin coordinar reservas por mensajes.",
      solution: "Una app con reservas, cupos en tiempo real, historial y ficha nutricional.",
      result: "Publicada en App Store; los clientes reservan solos.",
    },
  ],
};

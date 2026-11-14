import type { ClientLogo } from "./client-logo";
import type { IndustryId } from "./industry-id";
import { clientLogoPath } from "./images";

const logo = (name: string, file: string, industry: IndustryId): ClientLogo => ({ name, src: clientLogoPath(file), industry });

export const clientLogoRows: ClientLogo[][] = [
  [
    logo("Corporación Favorita", "favorita", "retail"),
    logo("Banco Pichincha", "pichincha", "banking"),
    logo("Banco Guayaquil", "guayaquil", "banking"),
    logo("Produbanco", "produbanco", "banking"),
    logo("Diners Club", "diners", "banking"),
    logo("Banco Bolivariano", "bolivariano", "banking"),
    logo("Corporación El Rosado", "rosado", "retail"),
    logo("Grupo KFC", "kfc", "retail"),
    logo("Pronaca", "pronaca", "retail"),
    logo("Farmaenlace", "farmaenlace", "pharma"),
  ],
  [
    logo("Corporación GPF", "gpf", "pharma"),
    logo("Grupo Difare", "difare", "pharma"),
    logo("Salud S.A.", "saludsa", "health"),
    logo("Confiamed", "confiamed", "health"),
    logo("Marathon Sports", "marathon", "retail"),
    logo("Kywi", "kywi", "retail"),
    logo("Grupo Tramaco", "tramaco", "logistics"),
    logo("BASC", "basc", "logistics"),
    logo("Curve Pilates", "curve-pilates", "growth"),
    logo("Emilia Beauty Bar", "emilia-beauty", "growth"),
  ],
];

export const clientLogos: readonly ClientLogo[] = clientLogoRows.flat();

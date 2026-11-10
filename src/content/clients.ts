import type { ClientLogo } from "./client-logo";
import { clientLogoPath } from "./images";

const logo = (name: string, file: string): ClientLogo => ({ name, src: clientLogoPath(file) });

export const clientLogoRows: ClientLogo[][] = [
  [
    logo("Corporación Favorita", "favorita"),
    logo("Banco Pichincha", "pichincha"),
    logo("Banco Guayaquil", "guayaquil"),
    logo("Produbanco", "produbanco"),
    logo("Diners Club", "diners"),
    logo("Banco Bolivariano", "bolivariano"),
    logo("Corporación El Rosado", "rosado"),
    logo("Grupo KFC", "kfc"),
    logo("Pronaca", "pronaca"),
    logo("Farmaenlace", "farmaenlace"),
  ],
  [
    logo("Corporación GPF", "gpf"),
    logo("Grupo Difare", "difare"),
    logo("Salud S.A.", "saludsa"),
    logo("Confiamed", "confiamed"),
    logo("Marathon Sports", "marathon"),
    logo("Kywi", "kywi"),
    logo("Grupo Tramaco", "tramaco"),
    logo("BASC", "basc"),
    logo("Curve Pilates", "curve-pilates"),
    logo("Emilia Beauty Bar", "emilia-beauty"),
  ],
];

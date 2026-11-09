import type { Shipment } from "./shipment";

export const RUTA_SHIPMENTS: Shipment[] = [
  { container: "MSKU 204118", route: "Guayaquil → Rotterdam", status: "transit" },
  { container: "HLXU 773902", route: "Manta → Valencia", status: "inspection" },
  { container: "CMAU 551240", route: "Guayaquil → Miami", status: "released" },
  { container: "TGHU 908331", route: "Puerto Bolívar → Hamburgo", status: "transit" },
];

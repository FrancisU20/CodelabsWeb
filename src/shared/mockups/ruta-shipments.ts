import type { Shipment } from "./shipment";

export const RUTA_SHIPMENTS: Shipment[] = [
  { container: "MSKU 204118", route: "Guayaquil → Rotterdam", routeCode: "GYE → RTM", status: "transit" },
  { container: "HLXU 773902", route: "Manta → Valencia", routeCode: "MEC → VLC", status: "inspection" },
  { container: "CMAU 551240", route: "Guayaquil → Miami", routeCode: "GYE → MIA", status: "released" },
  { container: "TGHU 908331", route: "Puerto Bolívar → Hamburgo", routeCode: "PBO → HAM", status: "transit" },
];

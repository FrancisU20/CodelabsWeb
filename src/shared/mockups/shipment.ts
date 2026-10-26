import type { ShipmentStatus } from "./shipment-status";

export type Shipment = {
  container: string;
  route: string;
  routeCode: string;
  status: ShipmentStatus;
};

import type { DispatchStatus } from "./dispatch-status";

export type Dispatch = {
  code: string;
  route: string;
  status: DispatchStatus;
};

import type { VignetteKind } from "@/showcase/vignette-kind";
import type { ServiceId } from "./service-id";

export const SERVICE_VIGNETTES: Record<ServiceId, VignetteKind> = {
  web: "web",
  mobile: "app",
  automation: "flow",
  ai: "chat",
  custom: "chart",
  cloud: "status",
};

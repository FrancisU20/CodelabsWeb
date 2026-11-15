import { CURVE_APP_STORE_URL } from "@/content/case-links";
import { IMAGES } from "@/content/images";
import BankSignApp from "@/showcase/bank-sign-app";
import BascApp from "@/showcase/basc-app";
import ConfiamedApp from "@/showcase/confiamed-app";
import CurveApp from "@/showcase/curve-app";
import SupermaxiApp from "@/showcase/supermaxi-app";

export const STORY_SCREENS = [
  { id: "bank", screen: <BankSignApp /> },
  { id: "supermaxi", screen: <SupermaxiApp /> },
  { id: "confiamed", screen: <ConfiamedApp logoSrc={IMAGES.brands.confiamed} /> },
  { id: "basc", screen: <BascApp logoSrc={IMAGES.brands.basc} /> },
  { id: "curve", screen: <CurveApp screenSrc={IMAGES.cases.curveBooking} />, storeUrl: CURVE_APP_STORE_URL },
];

import type { ReactNode } from "react";
import type { ProcessPhaseId } from "@/content/process-phase-id";
import type { Messages } from "@/i18n/messages/messages";
import ChecklistWindow from "./checklist-window";
import DesignScreens from "./design-screens";
import ProposalSheet from "./proposal-sheet";
import SprintBoard from "./sprint-board";

type Visuals = Messages["howWeWork"]["visuals"];

const PHASE_VISUALS: Record<ProcessPhaseId, (visuals: Visuals) => ReactNode> = {
  proposal: (visuals) => <ProposalSheet copy={visuals.proposal} />,
  design: (visuals) => <DesignScreens copy={visuals.design} />,
  build: (visuals) => <SprintBoard copy={visuals.board} />,
  quality: (visuals) => <ChecklistWindow copy={visuals.quality} />,
  handover: (visuals) => <ChecklistWindow copy={visuals.handover} />,
};

const ProcessVisual = ({ phase, visuals }: { phase: ProcessPhaseId; visuals: Visuals }) => PHASE_VISUALS[phase](visuals);

export default ProcessVisual;

import type { ReactNode } from "react";

export type SceneChapter = {
  id: string;
  label: string;
  title: string;
  body: string;
  extra?: ReactNode;
  visual: ReactNode;
};

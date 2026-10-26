"use client";

import { useEffect, useState } from "react";

const ESCAPE_KEY = "Escape";

export const useDismissibleMenu = (pathname: string) => {
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === ESCAPE_KEY) setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return {
    open,
    toggle: () => setOpen((previous) => !previous),
    close: () => setOpen(false),
  };
};

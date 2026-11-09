"use client";

import { useEffect, useRef, useState } from "react";

const ESCAPE_KEY = "Escape";
const FIRST_MENU_ITEM = "a";

export const useDismissibleMenu = (pathname: string, menuId: string) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    document.getElementById(menuId)?.querySelector<HTMLElement>(FIRST_MENU_ITEM)?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== ESCAPE_KEY) return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePress);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePress);
    };
  }, [open, menuId]);

  return {
    open,
    containerRef,
    toggleRef,
    toggle: () => setOpen((previous) => !previous),
    close: () => setOpen(false),
  };
};

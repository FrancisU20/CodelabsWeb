"use client";

import { useEffect, useRef, useState } from "react";

const ESCAPE_KEY = "Escape";
const FIRST_MENU_ITEM = "a";

export const useDismissibleMenu = <TContainer extends HTMLElement = HTMLElement>(pathname: string, menuId: string) => {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const containerRef = useRef<TContainer>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;
    document.getElementById(menuId)?.querySelector<HTMLElement>(FIRST_MENU_ITEM)?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== ESCAPE_KEY) return;
      setOpenPath(null);
      toggleRef.current?.focus();
    };
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) setOpenPath(null);
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
    toggle: () => setOpenPath((previous) => (previous === pathname ? null : pathname)),
    close: () => setOpenPath(null),
  };
};

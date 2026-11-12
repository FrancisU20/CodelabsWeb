"use client";

import { type RefObject, useEffect, useRef, useState } from "react";

const ESCAPE_KEY = "Escape";
const FIRST_MENU_ITEM = "a";

const listenForDismissal = (
  containerRef: RefObject<HTMLElement | null>,
  toggleRef: RefObject<HTMLButtonElement | null>,
  dismiss: () => void,
) => {
  const closeOnEscape = (event: KeyboardEvent) => {
    if (event.key !== ESCAPE_KEY) return;
    dismiss();
    toggleRef.current?.focus();
  };
  const closeOnOutsidePress = (event: PointerEvent) => {
    if (event.target instanceof Node && !containerRef.current?.contains(event.target)) dismiss();
  };
  window.addEventListener("keydown", closeOnEscape);
  document.addEventListener("pointerdown", closeOnOutsidePress);
  return () => {
    window.removeEventListener("keydown", closeOnEscape);
    document.removeEventListener("pointerdown", closeOnOutsidePress);
  };
};

export const useDismissibleMenu = <TContainer extends HTMLElement = HTMLElement>(pathname: string, menuId: string) => {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const containerRef = useRef<TContainer>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;
    document.getElementById(menuId)?.querySelector<HTMLElement>(FIRST_MENU_ITEM)?.focus();
    return listenForDismissal(containerRef, toggleRef, () => setOpenPath(null));
  }, [open, menuId]);

  return {
    open,
    containerRef,
    toggleRef,
    toggle: () => setOpenPath((previous) => (previous === pathname ? null : pathname)),
    close: () => setOpenPath(null),
  };
};

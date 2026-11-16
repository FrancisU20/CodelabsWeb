"use client";

import { useEffect, useState } from "react";

const BUBBLE_DELAY_MS = 8000;
const BUBBLE_SEEN_KEY = "codelabs:whatsapp-bubble-seen";

const wasSeen = (): boolean => {
  try {
    return window.sessionStorage.getItem(BUBBLE_SEEN_KEY) !== null;
  } catch {
    return false;
  }
};

const markSeen = () => {
  try {
    window.sessionStorage.setItem(BUBBLE_SEEN_KEY, "1");
  } catch {
    return;
  }
};

export const useBubbleVisibility = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (wasSeen()) return;
    const timer = window.setTimeout(() => {
      markSeen();
      setVisible(true);
    }, BUBBLE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  return { visible, dismiss: () => setVisible(false) };
};

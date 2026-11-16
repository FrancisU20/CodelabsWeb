"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { startScrollScenes } from "./scroll-scenes";

const ScrollSceneController = () => {
  const pathname = usePathname();

  useLayoutEffect(() => startScrollScenes(), [pathname]);

  return null;
};

export default ScrollSceneController;

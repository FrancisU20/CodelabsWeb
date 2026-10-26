"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { startScrollScenes } from "./scroll-scenes";

const ScrollSceneController = () => {
  const pathname = usePathname();

  useEffect(() => startScrollScenes(), [pathname]);

  return null;
};

export default ScrollSceneController;

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const FLOATING_COVER_SELECTOR = "[data-floating-cover]";

type CoverState = {
  pathname: string;
  covered: boolean;
};

export const useFloatingCover = (): boolean => {
  const pathname = usePathname();
  const [coverState, setCoverState] = useState<CoverState | null>(null);

  useEffect(() => {
    const cover = document.querySelector(FLOATING_COVER_SELECTOR);
    if (!cover) return;
    const observer = new IntersectionObserver(([entry]) => setCoverState({ pathname, covered: entry.isIntersecting }));
    observer.observe(cover);
    return () => observer.disconnect();
  }, [pathname]);

  return coverState?.pathname === pathname && coverState.covered;
};

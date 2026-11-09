import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const FLOATING_COVER_SELECTOR = "[data-floating-cover]";

export const useFloatingCover = (): boolean => {
  const pathname = usePathname();
  const [covered, setCovered] = useState(false);

  useEffect(() => {
    const cover = document.querySelector(FLOATING_COVER_SELECTOR);
    if (!cover) {
      setCovered(false);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setCovered(entry.isIntersecting));
    observer.observe(cover);
    return () => observer.disconnect();
  }, [pathname]);

  return covered;
};

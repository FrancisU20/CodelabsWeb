const TRACK_TAIL_VIEWPORTS = 1.2;

const resetTrack = (section: HTMLElement, rail: HTMLElement | null) => {
  section.style.removeProperty("height");
  rail?.style.removeProperty("--dist");
};

export const measureTrack = (section: HTMLElement, horizontal: boolean) => {
  const rail = section.querySelector<HTMLElement>("[data-track-rail]");
  resetTrack(section, rail);
  if (!rail || !horizontal) return;
  const distance = Math.max(0, rail.scrollWidth - window.innerWidth);
  rail.style.setProperty("--dist", `${distance}px`);
  section.style.height = `${distance + window.innerHeight * TRACK_TAIL_VIEWPORTS}px`;
};

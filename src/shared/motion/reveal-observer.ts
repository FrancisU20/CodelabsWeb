const PENDING_REVEAL_CLASS = "is-pending";
const REVEAL_THRESHOLD = 0.15;

const isBelowViewport = (element: HTMLElement): boolean => element.getBoundingClientRect().top >= window.innerHeight;

export const observeReveals = (elements: HTMLElement[], reducedMotion: boolean): IntersectionObserver => {
  const observer = new IntersectionObserver(
    (entries) =>
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          entry.target.classList.remove(PENDING_REVEAL_CLASS);
          observer.unobserve(entry.target);
        }),
    { threshold: REVEAL_THRESHOLD },
  );
  elements
    .filter((element) => !reducedMotion && isBelowViewport(element))
    .forEach((element) => {
      element.classList.add(PENDING_REVEAL_CLASS);
      observer.observe(element);
    });
  return observer;
};

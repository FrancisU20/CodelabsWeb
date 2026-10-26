export const MOTION_CLASS = "motion";

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export const MOTION_BOOTSTRAP_SCRIPT = `document.documentElement.classList.toggle(${JSON.stringify(MOTION_CLASS)},!window.matchMedia(${JSON.stringify(REDUCED_MOTION_QUERY)}).matches)`;

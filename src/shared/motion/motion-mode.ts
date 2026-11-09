export const MOTION_CLASS = "motion";

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export const WIDE_SCREEN_QUERY = "(min-width: 761px)";

export const MOTION_BOOTSTRAP_SCRIPT = `document.documentElement.classList.toggle(${JSON.stringify(MOTION_CLASS)},!window.matchMedia(${JSON.stringify(REDUCED_MOTION_QUERY)}).matches&&window.matchMedia(${JSON.stringify(WIDE_SCREEN_QUERY)}).matches)`;

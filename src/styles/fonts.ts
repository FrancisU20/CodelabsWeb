import localFont from "next/font/local";

const hanken = localFont({ src: "./fonts/hanken-grotesk.woff2", weight: "100 900", variable: "--font-hanken", display: "swap" });

const schibsted = localFont({ src: "./fonts/schibsted-grotesk.woff2", weight: "400 900", variable: "--font-schibsted", display: "swap" });

const jetbrainsMono = localFont({ src: "./fonts/jetbrains-mono.woff2", weight: "100 800", variable: "--font-jetbrains", display: "swap" });

const cormorant = localFont({ src: "./fonts/cormorant-garamond.woff2", weight: "300 700", variable: "--font-cormorant", display: "swap" });

export const FONT_VARIABLES = `${hanken.variable} ${schibsted.variable} ${jetbrainsMono.variable} ${cormorant.variable}`;

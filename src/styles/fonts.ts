import { Cormorant_Garamond, Hanken_Grotesk, JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";

const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });

const schibsted = Schibsted_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-schibsted", display: "swap" });

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const FONT_VARIABLES = `${hanken.variable} ${schibsted.variable} ${jetbrainsMono.variable} ${cormorant.variable}`;

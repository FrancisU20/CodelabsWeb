import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import HtmlLangSync from "@/app/ui/html-lang-sync";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeLabs | Ingeniería de software empresarial",
  description:
    "CodeLabs es la empresa de ingeniería de software que diseña, construye y opera productos digitales con estándar de nivel empresarial.",
  metadataBase: new URL("https://codelabsecuador.com"),
  keywords: [
    "CodeLabs",
    "ingeniería de software empresarial",
    "arquitectura de software",
    "Next.js",
    "Flutter",
    "React Native",
    "AWS",
    "Clean Architecture",
    "WordPress empresarial",
  ],
  openGraph: {
    title: "CodeLabs | Software que funciona en producción",
    description:
      "Empresa de ingeniería de software con estándares de nivel empresarial. Soluciones end-to-end en web, móvil y nube.",
    url: "https://codelabsecuador.com",
    siteName: "CodeLabs",
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeLabs | Software que funciona en producción",
    description:
      "Ingeniería de software premium con estándar de nivel empresarial. Web, móvil, nube, AWS y WordPress empresarial.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-256.png", type: "image/png", sizes: "256x256" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { url: "/codelabs-mark.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${GeistSans.variable} antialiased bg-white text-black`}>
        <HtmlLangSync />
        {children}
      </body>
    </html>
  );
}

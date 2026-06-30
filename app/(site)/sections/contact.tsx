"use client";

import { useState } from "react";
import { getDictionary } from "@/app/i18n/dictionary";
import type { Locale } from "@/app/i18n/locale";

const Contact = ({ locale }: { locale: Locale }) => {
  const dict = getDictionary(locale).contact;
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const phone = "0984522092";
  const waBase = `https://wa.me/593${phone.replace(/\D/g, "").slice(-9)}`;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mensaje = [
      `${dict.whatsapp.greeting} ${nombre || dict.whatsapp.fallbackName}`,
      email ? `${dict.whatsapp.email} ${email}` : "",
      empresa ? `${dict.whatsapp.empresa} ${empresa}` : "",
      descripcion ? `${dict.whatsapp.proyecto} ${descripcion}` : "",
    ]
      .filter(Boolean)
      .join(" | ");

    const url = `${waBase}?text=${encodeURIComponent(mensaje || dict.whatsapp.defaultMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl rounded-3xl border border-black/5 bg-gradient-to-br from-white via-white to-[#EEF0FB] px-6 py-10 shadow-xl shadow-indigo-500/10 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
              {dict.eyebrow}
            </p>
            <h2
              id="contact-title"
              className="text-3xl font-semibold tracking-tight text-black sm:text-4xl"
            >
              {dict.title}
            </h2>
            <p className="max-w-xl text-base text-black/70">{dict.description}</p>
            <a
              href="mailto:info@codelabsecuador.com"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-[2px]"
            >
              {dict.emailCta}
              <span aria-hidden>→</span>
            </a>
          </div>
          <form
            onSubmit={handleSubmit}
            className="grid w-full max-w-xl grid-cols-1 gap-4 rounded-2xl border border-black/5 bg-white/80 p-4 shadow-md shadow-indigo-500/5 sm:p-6"
          >
            <div className="grid gap-2">
              <label htmlFor="nombre" className="text-sm font-semibold text-black">
                {dict.labels.nombre}
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#A5B4FC]/60"
                placeholder={dict.placeholders.nombre}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-black">
                {dict.labels.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#A5B4FC]/60"
                placeholder={dict.placeholders.email}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="empresa" className="text-sm font-semibold text-black">
                {dict.labels.empresa}
              </label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#A5B4FC]/60"
                placeholder={dict.placeholders.empresa}
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="descripcion"
                className="text-sm font-semibold text-black"
              >
                {dict.labels.descripcion}
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                rows={4}
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#A5B4FC]/60"
                placeholder={dict.placeholders.descripcion}
              />
            </div>
            <button
              type="submit"
              className="gradient-pill soft-shadow h-11 rounded-xl text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-[2px]"
            >
              {dict.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

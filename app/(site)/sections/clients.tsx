"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { MouseEvent } from "react";
import { clients } from "@/app/data/clients";
import { getDictionary } from "@/app/i18n/dictionary";
import type { Locale } from "@/app/i18n/locale";

const getInitials = (name: string, fallback?: string) => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const second = parts[1]?.[0] ?? parts[0]?.[1] ?? "";
  const computed = `${first}${second}`.toUpperCase();
  return (fallback || computed || "CL").slice(0, 2);
};

const getPreferredLink = (client: (typeof clients)[number]) => {
  if (typeof window === "undefined") {
    return client.webUrl || client.iosUrl || client.androidUrl || "#";
  }
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.includes("android") && client.androidUrl) return client.androidUrl;
  if ((ua.includes("iphone") || ua.includes("ipad")) && client.iosUrl)
    return client.iosUrl;
  return client.webUrl || client.iosUrl || client.androidUrl || "#";
};

const Clients = ({ locale }: { locale: Locale }) => {
  const dict = getDictionary(locale).clients;
  const VISIBLE = 4;
  const [mounted, setMounted] = useState(false);
  const [start, setStart] = useState(0);
  const shouldRotate = clients.length > VISIBLE;

  useEffect(() => {
    // Necesitamos diferir el render hasta el cliente para evitar diferencias de hidratación.
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!shouldRotate) return;
    const id = window.setInterval(() => {
      setStart((prev) => (prev + 1) % clients.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, [shouldRotate]);

  const visibleClients = useMemo(() => {
    if (clients.length <= VISIBLE) return clients;
    return Array.from({ length: VISIBLE }, (_, idx) => {
      const pos = (start + idx) % clients.length;
      return clients[pos];
    });
  }, [start]);

  if (!mounted) {
    return null;
  }

  return (
    <section
      id="clientes"
      aria-labelledby="clients-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
            {dict.eyebrow}
          </p>
          <h2
            id="clients-title"
            className="text-3xl font-semibold tracking-tight text-black sm:text-4xl"
          >
            {dict.title}
          </h2>
          <p className="max-w-2xl text-base text-black/70">{dict.description}</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visibleClients.map((client) => (
            <a
              key={client.name}
              href={client.webUrl || client.iosUrl || client.androidUrl || "#"}
              onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                const target = getPreferredLink(client);
                if (!target || target === "#") return;
                event.preventDefault();
                window.open(target, "_blank", "noopener,noreferrer");
              }}
              className="group relative flex flex-col gap-5 rounded-3xl border border-black/5 bg-white px-5 py-6 shadow-lg shadow-indigo-500/5 transition-transform duration-200 hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#EEF0FB] via-transparent to-[#E0E4FA] opacity-0 transition duration-200 group-hover:opacity-100" />
              <div className="relative flex items-center justify-between gap-3">
                {client.logoUrl ? (
                  <div className="flex h-16 w-28 items-center justify-center rounded-2xl bg-white px-3 shadow-sm shadow-indigo-500/10">
                    <Image
                      src={client.logoUrl}
                      alt={`Logo de ${client.name}`}
                      width={160}
                      height={64}
                      className="h-12 w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-16 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#6D5FEF] px-3 text-lg font-semibold text-white shadow-md shadow-indigo-500/25">
                    <span className="truncate">{getInitials(client.name, client.logoText)}</span>
                  </div>
                )}
                <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/60">
                  {client.sector[locale]}
                </span>
              </div>
              <div className="relative space-y-1">
                <p className="text-base font-semibold text-black">{client.name}</p>
                <p className="text-sm text-black/70">{client.summary[locale]}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

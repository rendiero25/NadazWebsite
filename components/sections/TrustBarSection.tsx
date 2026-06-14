"use client";

import Image from "next/image";
import { assetUrl } from "@/lib/assets";
import { CLIENTS } from "@/lib/data";

export default function TrustBarSection() {
  const items = [...CLIENTS, ...CLIENTS];

  return (
    <section
      aria-label="Klien yang mempercayai NADAZ"
      className="section-tone-elevated border-y border-[--color-glass-border] py-4"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 sm:flex-row sm:items-center sm:gap-6 lg:px-8">
        <p className="shrink-0 text-xs font-medium text-[--color-brand-gold] uppercase">
          Dipercaya oleh
        </p>

        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent" />

          <div className="trust-marquee flex w-max items-center gap-8">
            {items.map((client, index) => (
              <span
                key={`${client.name}-${index}`}
                className="inline-flex shrink-0 items-center gap-2.5 text-sm whitespace-nowrap text-[--color-brand-muted]"
              >
                {client.logo ? (
                  <Image
                    src={assetUrl(client.logo)}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded object-contain opacity-90"
                  />
                ) : null}
                {client.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

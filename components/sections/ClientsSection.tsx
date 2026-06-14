"use client";

import { useRef } from "react";
import Image from "next/image";
import { PAGE_CONTAINER } from "@/lib/utils";
import { assetUrl } from "@/lib/assets";
import { CLIENTS } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const items = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  useScrollReveal(sectionRef, {
    selector: ".section-reveal",
    y: 24,
    duration: 0.85,
    scale: 1,
    stagger: 0.08,
  });

  return (
    <section
      ref={sectionRef}
      id="klien"
      className="section-tone-blue relative flex min-h-svh flex-col py-12 sm:py-16"
    >
      <div className={`${PAGE_CONTAINER} shrink-0`}>
        <div className="section-reveal mx-auto mb-8 max-w-2xl text-center lg:mb-10">
          <span className="eyebrow-label">Klien Kami</span>
          <h2 className="text-3xl font-semibold leading-tight text-[--color-brand-white] sm:text-4xl lg:text-5xl">
            Dipercaya Perusahaan & Instansi Terkemuka
          </h2>
          <p className="mt-4 text-base text-[--color-brand-muted] sm:text-lg">
            Dari BUMN hingga kementerian dan brand F&B nasional, mereka memilih
            NADAZ untuk presisi dan ketepatan waktu.
          </p>
        </div>
      </div>

      <div className="clients-enter relative flex flex-1 items-center overflow-hidden py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

        <div className="clients-marquee trust-marquee flex w-max items-center gap-10 py-3 sm:gap-14">
          {items.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="inline-flex shrink-0 flex-col items-center justify-center gap-2.5 px-2"
            >
              {client.logo ? (
                <Image
                  src={assetUrl(client.logo)}
                  alt={`Logo ${client.name}`}
                  width={72}
                  height={72}
                  className="h-14 w-auto max-w-[88px] object-contain opacity-90 grayscale-[15%] transition-opacity duration-300 hover:opacity-100 sm:h-16"
                />
              ) : (
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[--color-brand-gold]/30 text-lg font-semibold text-[--color-brand-gold] sm:h-16 sm:w-16">
                  {client.name.charAt(0)}
                </span>
              )}
              <span className="max-w-[9rem] text-center text-[11px] font-medium leading-snug text-[--color-brand-muted] line-clamp-2 sm:text-xs">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

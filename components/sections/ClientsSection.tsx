"use client";

import { useRef } from "react";
import Image from "next/image";
import SectionShell from "@/components/sections/SectionShell";
import { assetUrl } from "@/lib/assets";
import { CLIENTS } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const items = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  useScrollReveal(sectionRef, {
    selector: ".clients-enter",
    y: 24,
    duration: 0.85,
    scale: 1,
    stagger: 0,
  });

  return (
    <SectionShell
      ref={sectionRef}
      id="klien"
      tone="blue"
      align="center"
      eyebrow="Klien Kami"
      title="Dipercaya Perusahaan & Instansi Terkemuka"
      description="Dari BUMN hingga kementerian dan brand F&B nasional, mereka memilih NADAZ untuk presisi dan ketepatan waktu."
      headerClassName="mx-auto text-center"
    >
      <div className="clients-enter relative overflow-hidden rounded-2xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-16" />

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
    </SectionShell>
  );
}

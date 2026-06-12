"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { assetUrl } from "@/lib/assets";
import { prefersReducedMotion } from "@/lib/motion";
import SectionShell from "@/components/sections/SectionShell";
import { CLIENTS } from "@/lib/data";

export default function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !trackRef.current) return;

      const track = trackRef.current;
      const totalWidth = track.scrollWidth / 2;

      gsap.to(track, {
        x: -totalWidth,
        duration: 28,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: sectionRef }
  );

  const marqueeItems = [...CLIENTS, ...CLIENTS];

  return (
    <SectionShell
      ref={sectionRef}
      id="klien"
      eyebrow="Klien Kami"
      title="Dipercaya Oleh"
      description="Perusahaan, instansi pemerintah, dan brand ternama telah mempercayakan proyek kaca mereka kepada NADAZ."
      className="overflow-hidden"
    >
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[--color-brand-dark] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[--color-brand-dark] to-transparent" />

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-max items-center gap-4 py-2"
            aria-label="Daftar klien NADAZ"
          >
            {marqueeItems.map((client, index) => (
              <span
                key={`${client.name}-${index}`}
                className="inline-flex shrink-0 items-center gap-3 rounded-full border border-[--color-glass-border] bg-[--color-glass-bg] px-5 py-2.5 font-sans text-sm whitespace-nowrap text-[--color-brand-white] backdrop-blur-sm sm:px-6 sm:py-3"
              >
                {client.logo ? (
                  <Image
                    src={assetUrl(client.logo)}
                    alt={`Logo ${client.name}`}
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-full object-cover"
                  />
                ) : null}
                {client.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

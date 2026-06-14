"use client";

import { useRef } from "react";
import Image from "next/image";
import { assetUrl } from "@/lib/assets";
import { CLIENTS } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function TrustBarSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const items = [...CLIENTS, ...CLIENTS];

  useScrollReveal(sectionRef, {
    selector: ".trust-bar-enter",
    y: 16,
    scale: 1,
    stagger: 0,
    duration: 0.8,
    start: "top 92%",
  });

  return (
    <section
      ref={sectionRef}
      aria-label="Klien yang mempercayai NADAZ"
      className="section-tone-elevated shrink-0 overflow-hidden border-y border-[--color-glass-border] py-5 sm:py-6"
    >
      <div className="relative flex min-h-[5.5rem] items-center overflow-hidden sm:min-h-[6.5rem]">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

        <div className="trust-bar-enter">
          <div className="trust-marquee flex w-max items-center gap-12">
            {items.map((client, index) => (
              <span
                key={`${client.name}-${index}`}
                className="inline-flex shrink-0 items-center gap-3 text-base whitespace-nowrap text-[--color-brand-muted]"
              >
              {client.logo ? (
                <Image
                  src={assetUrl(client.logo)}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-md object-contain opacity-90"
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

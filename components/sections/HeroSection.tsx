"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { SITE } from "@/lib/constants";
import { prefersReducedMotion } from "@/lib/motion";
import HeroVideoBackground from "@/components/ui/HeroVideoBackground";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7 }
      )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.35"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.45"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.65 },
          "-=0.4"
        );

      gsap.to(".hero-content", {
        yPercent: 12,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "70% top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[58svh] max-h-[640px] flex-col justify-end overflow-hidden sm:min-h-[62svh]"
    >
      <HeroVideoBackground />

      <div className="hero-content relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 pt-20 sm:px-6 sm:pb-12 sm:pt-24 lg:px-8">
        <div className="max-w-2xl">
          <span className="hero-eyebrow eyebrow-label">Sejak 2016</span>

          <h1 className="hero-title text-3xl font-semibold text-[--color-brand-white] sm:text-5xl lg:text-6xl">
            Kaca Premium, Dipasang Presisi
          </h1>

          <p className="hero-subtitle mt-4 max-w-lg text-sm text-[--color-brand-muted] sm:text-base">
            Glassboard korporat, cermin gym, partisi kaca. Tempered
            bersertifikat, gratis ongkir dan pemasangan seluruh Jabodetabek.
          </p>

          <div className="hero-cta mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full px-7 py-3 text-sm sm:w-auto sm:px-8 sm:py-3.5"
            >
              Minta Penawaran Gratis
            </a>
            <a
              href="#produk"
              className="btn-outline w-full px-7 py-3 text-sm sm:w-auto sm:px-8 sm:py-3.5"
            >
              Jelajahi Produk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

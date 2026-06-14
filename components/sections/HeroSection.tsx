"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { SITE } from "@/lib/constants";
import { ASSETS } from "@/lib/assets";
import { prefersReducedMotion } from "@/lib/motion";

const BADGES = ["Sejak 2016", "Jabodetabek", "Gratis Pasang & Ongkir"] as const;

const STATS = [
  { num: "500+", label: "Proyek Selesai" },
  { num: "9", label: "Tahun Berpengalaman" },
  { num: "100+", label: "Klien Korporat" },
] as const;

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-badges",
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.6, force3D: true }
      )
        .fromTo(
          ".hero-title",
          { autoAlpha: 0, y: 32 },
          { autoAlpha: 1, y: 0, duration: 0.95, force3D: true },
          "-=0.35"
        )
        .fromTo(
          ".hero-subtitle",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.7, force3D: true },
          "-=0.45"
        )
        .fromTo(
          ".hero-cta-btn",
          { autoAlpha: 0, y: 20, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            force3D: true,
          },
          "-=0.4"
        )
        .fromTo(
          ".hero-stats",
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.6, force3D: true },
          "-=0.3"
        )
        .fromTo(
          ".hero-project-card",
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.5, force3D: true },
          "-=0.2"
        );

      gsap.to(".hero-content", {
        yPercent: 10,
        autoAlpha: 0.55,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "75% top",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[85svh] overflow-hidden bg-gradient-to-br from-white via-[#fffdf9] to-[#f5efe3]"
    >
      {/* Decorative light beams */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="hero-light-beam hero-light-beam-1" />
        <div className="hero-light-beam hero-light-beam-2" />
        <div className="hero-glass-sheen" />
      </div>

      {/* Panel kiri: konten */}
      <div className="hero-content relative z-10 flex w-full flex-col justify-center px-5 py-28 sm:px-6 sm:py-32 lg:w-[55%] lg:px-10 lg:py-20 xl:px-16">
        {/* Badge pills */}
        <div className="hero-badges mb-5 flex flex-wrap gap-2">
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="inline-block rounded-full border border-[--color-brand-gold]/35 bg-[--color-brand-gold]/10 px-3 py-1 text-xs font-medium text-[--color-brand-gold]"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h1 className="hero-title font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.12] text-[--color-brand-white] sm:text-5xl lg:text-[3.75rem]">
          Ruang Profesional
          <br />
          Dimulai dari
          <br />
          <span className="text-[--color-brand-gold]">Kaca yang Tepat</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle mt-5 max-w-md text-sm leading-relaxed text-[--color-brand-muted] sm:text-base">
          Glassboard korporat, cermin gym, partisi kaca tempered bersertifikat.
          Kami urus dari pengukuran hingga pemasangan.
        </p>

        {/* CTA buttons */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-btn btn-primary w-full px-7 py-3.5 text-sm sm:w-auto sm:px-8"
          >
            Minta Penawaran Gratis
          </a>
          <a
            href="#produk"
            className="hero-cta-btn btn-outline w-full px-7 py-3.5 text-sm sm:w-auto sm:px-8"
          >
            Jelajahi Produk
          </a>
        </div>

        {/* Stats strip */}
        <div className="hero-stats mt-8 flex border-t border-[--color-glass-border] pt-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={
                i > 0
                  ? "ml-4 flex-1 border-l border-[--color-glass-border] pl-4"
                  : "flex-1"
              }
            >
              <p className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-none text-[--color-brand-gold] sm:text-4xl">
                {stat.num}
              </p>
              <p className="mt-1 text-xs leading-snug text-[--color-brand-muted]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Panel kanan: foto + project card (desktop only) */}
      <div className="relative hidden lg:block lg:w-[45%]">
        {/* Gradient blend ke panel kiri */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#fffdf9] to-transparent" />

        <Image
          src={ASSETS.hero}
          alt="Hasil pemasangan kaca tempered NADAZ"
          fill
          priority
          className="object-cover object-center"
          sizes="45vw"
        />

        {/* Floating project card */}
        <div className="hero-project-card absolute bottom-10 left-8 right-8 z-20 rounded-xl border-l-2 border-[--color-brand-gold] bg-white/90 p-4 shadow-lg backdrop-blur-md">
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-[--color-brand-gold]">
            ✦ Featured Project
          </p>
          <p className="text-sm font-semibold text-[--color-brand-white]">
            PT HM Sampoerna — Glassboard Korporat
          </p>
          <div className="mt-1 flex items-center gap-2 text-xs text-[--color-brand-muted]">
            <span>Jakarta Selatan</span>
            <span className="text-[--color-brand-gold]">·</span>
            <span>Kaca Tempered 12mm</span>
          </div>
        </div>
      </div>
    </section>
  );
}

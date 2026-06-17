"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { SITE } from "@/lib/constants";
import { HERO_PORTFOLIO_SLIDES } from "@/lib/data";
import { prefersReducedMotion } from "@/lib/motion";
import { withPageScroller } from "@/lib/lenis-scroll-trigger";
import { useGsapScroll } from "@/hooks/useGsapScroll";
import { cn, PAGE_CONTAINER } from "@/lib/utils";
import AssetImage from "@/components/ui/AssetImage";

const STATS = [
  { num: "500+", label: "Proyek Selesai" },
  { num: "10", label: "Tahun Berpengalaman" },
  { num: "100+", label: "Klien Korporat" },
] as const;

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const activeProject = HERO_PORTFOLIO_SLIDES[slideIndex];

  useEffect(() => {
    if (prefersReducedMotion() || HERO_PORTFOLIO_SLIDES.length === 0) return;

    const timer = window.setInterval(() => {
      setSlideIndex(
        (current) => (current + 1) % HERO_PORTFOLIO_SLIDES.length
      );
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !panelRef.current) return;

      gsap.fromTo(
        ".hero-slide-active",
        { autoAlpha: 0, scale: 1.04 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.9,
          ease: "power2.out",
          force3D: true,
        }
      );
    },
    { scope: panelRef, dependencies: [slideIndex] }
  );

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
          ".hero-title",
          { autoAlpha: 0, y: 32 },
          { autoAlpha: 1, y: 0, duration: 0.95, force3D: true }
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
    },
    { scope: sectionRef }
  );

  useGsapScroll(
    () => {
      const heroContent = sectionRef.current?.querySelector(".hero-content");
      if (!heroContent || !sectionRef.current) return;

      gsap.to(heroContent, {
        yPercent: 10,
        autoAlpha: 0.55,
        ease: "none",
        force3D: true,
        scrollTrigger: withPageScroller({
          trigger: sectionRef.current,
          start: "top top",
          end: "75% top",
          scrub: 1,
        }),
      });
    },
    sectionRef
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-gradient-to-br from-white via-[#fffdf9] to-[#f5efe3]"
    >
      {/* Decorative light beams */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hero-light-beam hero-light-beam-1" />
        <div className="hero-light-beam hero-light-beam-2" />
        <div className="hero-glass-sheen" />
      </div>

      {/* Panel kiri: konten — sejajar batas kiri navbar */}
      <div className={`${PAGE_CONTAINER} relative z-10 flex flex-1 flex-col`}>
        <div className="hero-content flex flex-1 max-w-xl flex-col justify-center pt-[var(--nav-height)] sm:max-w-2xl lg:max-w-[34rem] lg:pr-10">
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
        <div className="hero-stats mt-8 inline-flex w-fit gap-3 border-t border-[--color-glass-border] pt-6 sm:gap-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={
                i > 0
                  ? "border-l border-[--color-glass-border] pl-3 sm:pl-4"
                  : undefined
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
      </div>

      {/* Panel kanan: slideshow foto + project card (desktop only) */}
      <div
        ref={panelRef}
        className="absolute inset-0 right-0 hidden lg:left-[55%] lg:block lg:w-[45%]"
      >
        {HERO_PORTFOLIO_SLIDES.map((project, index) => (
          <AssetImage
            key={project.id}
            src={project.image}
            alt={`${project.type} — ${project.client}, ${project.location}`}
            priority={index === 0}
            sizes="45vw"
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              index === slideIndex
                ? "hero-slide-active z-[1] opacity-100"
                : "z-0 opacity-0"
            )}
            imageClassName="object-center"
          />
        ))}

        {activeProject && (
          <div className="hero-project-card absolute bottom-10 left-8 right-8 z-20 rounded-xl border-l-2 border-[--color-brand-gold] bg-white/90 p-4 shadow-lg backdrop-blur-md">
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-[--color-brand-gold]">
              ✦ Proyek Unggulan
            </p>
            <p className="text-sm font-semibold text-[--color-brand-white]">
              {activeProject.client} — {activeProject.type}
            </p>
            <div className="mt-1 flex items-center gap-2 text-xs text-[--color-brand-muted]">
              <span>{activeProject.location}</span>
              <span className="text-[--color-brand-gold]">·</span>
              <span>{activeProject.category}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

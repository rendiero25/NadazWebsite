"use client";

import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { SITE } from "@/lib/constants";
import { prefersReducedMotion } from "@/lib/motion";
import SplitText from "@/components/ui/SplitText";
import AssetImage from "@/components/ui/AssetImage";
import { ASSETS } from "@/lib/assets";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 }
      )
        .fromTo(
          ".hero-word-inner",
          { yPercent: 115, opacity: 0, rotateX: -12 },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.95,
            stagger: 0.045,
            ease: "power4.out",
          },
          "-=0.25"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          ".hero-badge",
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".hero-visual",
          { opacity: 0, scale: 0.92, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1 },
          "-=0.6"
        )
        .fromTo(
          ".hero-scroll",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.2"
        );

      gsap.to(".hero-parallax-slow", {
        yPercent: 40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".hero-parallax-fast", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".hero-content", {
        yPercent: 25,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "60% top",
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
      className="relative flex min-h-screen min-h-[100dvh] flex-col justify-center overflow-hidden pt-20 pb-14 sm:pt-24 sm:pb-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-parallax-slow absolute top-1/4 -right-20 h-64 w-64 rounded-full bg-[--color-brand-blue]/20 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
        <div className="hero-parallax-fast absolute bottom-0 -left-20 h-56 w-56 rounded-full bg-[--color-brand-gold]/8 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-brand-dark)_75%)]" />
      </div>

      <div className="hero-content relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="hero-eyebrow font-mono mb-4 block text-[10px] tracking-[0.35em] text-[--color-brand-gold] uppercase sm:mb-6 sm:text-xs">
              Spesialis Kaca & Aluminium Premium
            </span>

            <SplitText
              text="Solusi Kaca Premium untuk Ruang Profesional Anda"
              className="font-display text-[2rem] leading-[1.08] font-semibold text-[--color-brand-white] sm:text-5xl md:text-6xl lg:text-7xl"
              innerClassName="pb-1"
            />

            <p className="hero-subtitle font-sans mt-5 max-w-xl text-base leading-relaxed text-[--color-brand-muted] sm:mt-6 sm:text-lg">
              Spesialis glassboard Jakarta, kaca tempered Depok, dan partisi
              kaca Jabodetabek — dipasang tim berpengalaman dengan kualitas
              tempered bersertifikat sejak 2016.
            </p>

            <div className="hero-cta mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full px-8 py-4 sm:w-auto"
              >
                Konsultasi Gratis
              </a>
              <a href="#produk" className="btn-outline w-full px-8 py-4 sm:w-auto">
                Lihat Produk
              </a>
            </div>

            <div className="hero-badge mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[--color-brand-gold]/30 bg-[--color-glass-bg] px-4 py-2 backdrop-blur-sm sm:mt-8">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[--color-brand-gold]" />
              <span className="font-mono text-[10px] text-[--color-brand-gold] sm:text-xs">
                Free Ongkir & Pasang Jabodetabek
              </span>
            </div>
          </div>

          <div className="hero-visual relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div className="glass-panel overflow-hidden p-1">
              <AssetImage
                src={ASSETS.hero}
                alt="Glassboard premium NADAZ — hasil pemasangan proyek korporat"
                className="aspect-[4/3] rounded-xl sm:aspect-[5/4] lg:aspect-[4/5]"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -right-3 -bottom-3 -z-10 hidden h-full w-full rounded-2xl border border-[--color-brand-gold]/20 sm:block" />
          </div>
        </div>
      </div>

      <a
        href="#tentang"
        className="hero-scroll link-gold absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-8"
        aria-label="Scroll ke bagian berikutnya"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <ChevronDown className="h-5 w-5 motion-safe:animate-bounce" />
      </a>
    </section>
  );
}

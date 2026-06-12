"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import SectionShell from "@/components/sections/SectionShell";
import { ABOUT_STATS } from "@/lib/data";
import { ASSETS } from "@/lib/assets";
import AssetImage from "@/components/ui/AssetImage";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollReveal(sectionRef, { selector: ".about-reveal", stagger: 0.1 });
  useScrollReveal(sectionRef, { selector: ".reveal-item", stagger: 0.08 });

  useGSAP(
    () => {
      if (prefersReducedMotion() || !sectionRef.current) return;

      ABOUT_STATS.forEach((stat) => {
        const el = sectionRef.current?.querySelector(
          `[data-stat="${stat.id}"]`
        );
        if (!el) return;

        const counter = { value: 0 };

        gsap.to(counter, {
          value: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = `${Math.round(counter.value)}${stat.suffix}`;
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <SectionShell
      ref={sectionRef}
      id="tentang"
      eyebrow="Tentang Kami"
      title="Keahlian Kaca & Aluminium Sejak 2016"
      description="Berawal dari spesialis glassboard, NADAZ berkembang menjadi PT. Arta Prima Glassindo — mitra terpercaya untuk proyek korporat, instansi pemerintah, dan kebutuhan personal di Jabodetabek."
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="about-reveal space-y-6">
          <p className="font-sans text-base leading-relaxed text-[--color-brand-muted] lg:text-lg">
            Sejak 2016, kami fokus menghadirkan solusi kaca tempered premium
            dengan pemasangan rapi dan tepat waktu. Dari kantor pemerintahan
            hingga gym dan restoran, setiap proyek ditangani dengan standar
            craftsmanship yang sama.
          </p>
          <p className="font-sans text-base leading-relaxed text-[--color-brand-muted] lg:text-lg">
            Kini sebagai{" "}
            <strong className="font-medium text-[--color-brand-white]">
              PT. Arta Prima Glassindo
            </strong>
            , NADAZ melayani Jakarta, Bogor, Depok, Tangerang, dan Bekasi dengan
            komitmen free ongkir dan pemasangan untuk seluruh wilayah
            Jabodetabek.
          </p>
        </div>

        <div className="about-reveal relative">
          <div className="glass-panel overflow-hidden">
            <AssetImage
              src={ASSETS.about}
              alt="Hasil pemasangan etalase kaca NADAZ di instansi pendidikan Jabodetabek"
              className="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ABOUT_STATS.map((stat) => (
          <div key={stat.id} className="reveal-item card-interactive glass-panel p-5 sm:p-6">
            <p
              data-stat={stat.id}
              className="font-display text-4xl font-semibold text-[--color-brand-gold]"
            >
              0{stat.suffix}
            </p>
            <p className="font-sans mt-2 text-sm text-[--color-brand-muted]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

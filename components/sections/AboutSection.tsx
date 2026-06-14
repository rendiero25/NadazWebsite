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
      tone="navy"
      fullWidthHeader
      eyebrow="Tentang Kami"
      title="9 Tahun Membangun Kepercayaan Lewat Kualitas Kaca"
      description="PT. Arta Prima Glassindo (NADAZ), mitra pemasangan kaca tempered untuk korporat, instansi pemerintah, dan proyek komersial di Jabodetabek."
    >
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="about-reveal space-y-5">
          <p className="text-base leading-relaxed text-[--color-brand-muted]">
            Sejak 2016, kami fokus pada pemasangan kaca tempered yang presisi,
            rapi, dan tepat waktu. Dari kantor pemerintahan hingga gym dan
            restoran, setiap proyek ditangani dengan standar craftsmanship yang
            sama.
          </p>
          <p className="text-base leading-relaxed text-[--color-brand-muted]">
            Sebagai{" "}
            <strong className="font-semibold text-[--color-brand-white]">
              PT. Arta Prima Glassindo
            </strong>
            , NADAZ melayani Jakarta, Bogor, Depok, Tangerang, dan Bekasi
            dengan pengiriman dan pemasangan gratis untuk seluruh Jabodetabek.
          </p>
        </div>

        <div className="about-reveal content-card overflow-hidden">
          <AssetImage
            src={ASSETS.about}
            alt="Hasil pemasangan etalase kaca NADAZ di instansi pendidikan Jabodetabek"
            className="aspect-[4/3]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="metrics-strip mt-12 grid gap-px sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {ABOUT_STATS.map((stat) => (
          <div
            key={stat.id}
            className="reveal-item bg-white/70 px-6 py-7 text-center sm:text-left"
          >
            <p
              data-stat={stat.id}
              className="text-4xl font-semibold text-[--color-brand-gold] lg:text-5xl"
            >
              0{stat.suffix}
            </p>
            <p className="mt-2 text-sm text-[--color-brand-muted]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

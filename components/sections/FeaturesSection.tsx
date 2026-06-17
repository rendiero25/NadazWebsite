"use client";

import { useRef } from "react";
import { Award, MapPin, Users } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { withPageScroller } from "@/lib/lenis-scroll-trigger";
import SectionShell from "@/components/sections/SectionShell";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useGsapScroll } from "@/hooks/useGsapScroll";

const FEATURES = [
  {
    icon: MapPin,
    title: "Gratis Ongkir & Pemasangan",
    description:
      "Hemat biaya logistik. Pengiriman dan pemasangan kami tanggung untuk seluruh Jabodetabek.",
  },
  {
    icon: Award,
    title: "500+ Unit Terpasang",
    description:
      "Pengalaman sejak 2016 melayani korporat, instansi, gym, restoran, dan hunian pribadi.",
  },
  {
    icon: Users,
    title: "Satu Panel hingga Seluruh Lantai",
    description:
      "Skala proyek apa pun ditangani sama seriusnya dengan presisi dan ketepatan waktu.",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollReveal(sectionRef, { selector: ".feature-card", stagger: 0.1 });

  useGsapScroll(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        sectionRef.current.querySelectorAll(".feature-icon"),
        { scale: 0.75, autoAlpha: 0, force3D: true },
        {
          scale: 1,
          autoAlpha: 1,
          stagger: 0.12,
          duration: 0.65,
          ease: "back.out(1.5)",
          force3D: true,
          scrollTrigger: withPageScroller({
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
            once: true,
          }),
        }
      );
    },
    sectionRef
  );

  return (
    <SectionShell
      ref={sectionRef}
      id="keunggulan"
      tone="gold"
      title="Tiga Alasan Klien Korporat Memilih NADAZ"
    >
      <div className="grid grid-cols-3 gap-3 lg:gap-6">
        {FEATURES.map((feature, index) => (
          <div
            key={feature.title}
            className="feature-card content-card min-w-0 p-4 transition-colors duration-300 hover:bg-[rgba(201,168,76,0.08)] sm:p-6 lg:p-7"
          >
            <span className="text-xs font-medium text-[--color-brand-gold]/60">
              0{index + 1}
            </span>
            <div className="feature-icon mt-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[--color-brand-gold]/25 bg-[--color-brand-gold]/10">
              <feature.icon className="h-5 w-5 text-[--color-brand-gold]" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-[--color-brand-white] sm:text-lg">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[--color-brand-muted]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

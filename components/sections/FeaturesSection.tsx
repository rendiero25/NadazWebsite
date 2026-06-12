"use client";

import { useRef } from "react";
import { Award, MapPin, Shield, Users } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import SectionShell from "@/components/sections/SectionShell";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FEATURES = [
  {
    icon: MapPin,
    title: "Free Ongkir & Pemasangan Jabodetabek",
    description:
      "Tanpa biaya pengiriman dan pemasangan untuk seluruh wilayah Jabodetabek.",
  },
  {
    icon: Shield,
    title: "Kaca Tempered Premium Bersertifikat",
    description:
      "Material berkualitas tinggi dengan standar keamanan terjamin.",
  },
  {
    icon: Award,
    title: "Berpengalaman Sejak 2016",
    description:
      "Lebih dari sembilan tahun melayani proyek korporat dan personal.",
  },
  {
    icon: Users,
    title: "Melayani Korporat & Personal",
    description:
      "Dari kantor pemerintah hingga gym, restoran, dan hunian pribadi.",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollReveal(sectionRef, { selector: ".feature-card", stagger: 0.12 });

  useGSAP(
    () => {
      if (prefersReducedMotion() || !sectionRef.current) return;

      gsap.fromTo(
        ".feature-icon",
        { scale: 0.6, rotate: -15, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <SectionShell
      ref={sectionRef}
      id="keunggulan"
      eyebrow="Keunggulan"
      title="Mengapa Memilih NADAZ?"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="feature-card card-interactive glass-panel flex gap-4 p-5 sm:gap-5 sm:p-6 lg:p-8"
          >
            <div className="feature-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[--color-brand-gold]/30 bg-[--color-brand-gold]/10">
              <feature.icon className="h-5 w-5 text-[--color-brand-gold]" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-[--color-brand-white]">
                {feature.title}
              </h3>
              <p className="font-sans mt-2 text-sm leading-relaxed text-[--color-brand-muted]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

"use client";

import { useRef } from "react";
import { Star } from "lucide-react";
import SectionShell from "@/components/sections/SectionShell";
import { TESTIMONIALS } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-1"
      role="img"
      aria-label={`Rating ${rating} dari 5 bintang`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={
            index < rating
              ? "h-4 w-4 fill-[--color-brand-gold] text-[--color-brand-gold]"
              : "h-4 w-4 text-[--color-brand-muted]/40"
          }
        />
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollReveal(sectionRef, {
    selector: ".testimonial-card",
    stagger: 0.15,
  });

  return (
    <SectionShell
      ref={sectionRef}
      id="testimoni"
      eyebrow="Testimoni"
      title="Apa Kata Klien Kami"
      description="Pengalaman nyata dari mitra yang telah mempercayakan proyek kaca mereka kepada NADAZ."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <blockquote
            key={item.id}
            className="testimonial-card card-interactive glass-panel relative p-6 sm:p-8"
          >
            <span
              className="font-display pointer-events-none absolute top-2 left-5 text-7xl leading-none text-[--color-brand-gold]/20 select-none"
              aria-hidden
            >
              &ldquo;
            </span>

            <StarRating rating={item.rating} />

            <p className="font-sans relative z-10 mt-5 text-sm leading-relaxed text-[--color-brand-muted]">
              {item.quote}
            </p>

            <footer className="mt-6 border-t border-[--color-glass-border] pt-4">
              <cite className="font-sans not-italic">
                <span className="block font-medium text-[--color-brand-white]">
                  {item.name}
                </span>
                <span className="text-sm text-[--color-brand-muted]">
                  {item.role}
                </span>
              </cite>
            </footer>
          </blockquote>
        ))}
      </div>
    </SectionShell>
  );
}

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
    stagger: 0.1,
  });

  return (
    <SectionShell
      ref={sectionRef}
      id="testimoni"
      tone="navy"
      title="Kata Mereka yang Sudah Mempercayakan Proyeknya"
      description="Pengalaman nyata dari klien korporat, instansi, dan pemilik usaha di Jabodetabek."
    >
      <div className="flex flex-row flex-wrap gap-4 lg:gap-5">
        {TESTIMONIALS.map((item) => (
          <blockquote
            key={item.id}
            className="testimonial-card card-interactive content-card w-full p-6 sm:w-[calc(50%-0.5rem)] sm:p-7 lg:w-[calc(33.333%-0.85rem)]"
          >
            <StarRating rating={item.rating} />
            <p className="mt-4 text-sm leading-relaxed text-[--color-brand-muted]">
              {item.quote}
            </p>
            <footer className="mt-5 border-t border-[--color-glass-border] pt-4">
              <cite className="not-italic">
                <span className="block text-sm font-semibold text-[--color-brand-white]">
                  {item.name}
                </span>
                <span className="text-xs text-[--color-brand-muted]">
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

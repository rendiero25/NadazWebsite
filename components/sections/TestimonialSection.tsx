"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { withPageScroller } from "@/lib/lenis-scroll-trigger";
import SectionShell from "@/components/sections/SectionShell";
import { assetUrl } from "@/lib/assets";
import { TESTIMONIALS } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useGsapScroll } from "@/hooks/useGsapScroll";
import { cn } from "@/lib/utils";

const AVATAR_OBJECT_POSITION: Partial<Record<string, string>> = {
  dyah: "object-[28%_42%]",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="testimonial-stars flex gap-1"
      role="img"
      aria-label={`Rating ${rating} dari 5 bintang`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={
            index < rating
              ? "h-4 w-4 fill-[#C9A84C] text-[#C9A84C]"
              : "h-4 w-4 fill-none text-gray-300"
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

  useGsapScroll(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        sectionRef.current.querySelectorAll(".testimonial-stars svg"),
        { scale: 0, autoAlpha: 0, force3D: true },
        {
          scale: 1,
          autoAlpha: 1,
          stagger: 0.06,
          duration: 0.45,
          ease: "back.out(2)",
          force3D: true,
          scrollTrigger: withPageScroller({
            trigger: sectionRef.current,
            start: "top 80%",
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
            <p className="mt-4 text-sm leading-relaxed text-[--color-brand-muted] sm:text-base">
              {item.quote}
            </p>
            <footer className="mt-6 flex items-center gap-3 border-t border-[--color-glass-border] pt-5">
              <Image
                src={
                  item.avatar.startsWith("http")
                    ? item.avatar
                    : assetUrl(item.avatar)
                }
                alt={`Foto ${item.name}`}
                width={52}
                height={52}
                className={cn(
                  "h-[52px] w-[52px] shrink-0 rounded-full object-cover ring-2 ring-[--color-brand-gold]/35",
                  AVATAR_OBJECT_POSITION[item.id]
                )}
              />
              <cite className="not-italic">
                <span className="block text-sm font-semibold text-[--color-brand-white] sm:text-base">
                  {item.name}
                </span>
                <span className="text-xs text-[--color-brand-muted] sm:text-sm">
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

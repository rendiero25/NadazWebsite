"use client";

import { forwardRef, useRef } from "react";
import { cn, PAGE_CONTAINER } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export type SectionTone = "base" | "navy" | "blue" | "gold" | "elevated";

const toneClass: Record<SectionTone, string> = {
  base: "section-tone-base",
  navy: "section-tone-navy",
  blue: "section-tone-blue",
  gold: "section-tone-gold",
  elevated: "section-tone-elevated",
};

interface SectionShellProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  headerClassName?: string;
  align?: "left" | "center";
  tone?: SectionTone;
  fullWidthHeader?: boolean;
}

const SectionShell = forwardRef<HTMLElement, SectionShellProps>(
  function SectionShell(
    {
      id,
      eyebrow,
      title,
      description,
      className,
      children,
      headerClassName,
      align = "left",
      tone = "base",
      fullWidthHeader = false,
    },
    forwardedRef
  ) {
    const sectionRef = useRef<HTMLElement>(null);

    const setSectionRef = (node: HTMLElement | null) => {
      sectionRef.current = node;
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    };

    useScrollReveal(sectionRef, { selector: ".section-reveal", stagger: 0.1 });

    return (
      <section
        id={id}
        ref={setSectionRef}
        className={cn(
          "relative py-16 sm:py-20 lg:py-24",
          toneClass[tone],
          className
        )}
      >
        <div className={PAGE_CONTAINER}>
          <div
            className={cn(
              "mb-10 lg:mb-12",
              !fullWidthHeader && "max-w-2xl",
              align === "center" && "mx-auto text-center",
              fullWidthHeader && align !== "center" && "w-full max-w-none",
              headerClassName
            )}
          >
            {eyebrow && (
              <span className="section-reveal eyebrow-label">{eyebrow}</span>
            )}
            <h2 className="section-reveal text-3xl font-semibold leading-tight text-[--color-brand-white] sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {description && (
              <p className="section-reveal mt-4 text-base text-[--color-brand-muted] sm:text-lg">
                {description}
              </p>
            )}
          </div>
          {children}
        </div>
      </section>
    );
  }
);

export default SectionShell;

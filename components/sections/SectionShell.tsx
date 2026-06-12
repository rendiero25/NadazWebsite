"use client";

import { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionShellProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  headerClassName?: string;
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
        className={cn("relative py-20 sm:py-24 lg:py-32", className)}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={cn("mb-12 max-w-2xl", headerClassName)}>
            <span className="section-reveal font-mono mb-4 block text-xs tracking-[0.3em] text-[--color-brand-gold] uppercase">
              {eyebrow}
            </span>
            <h2 className="section-reveal font-display text-4xl font-semibold leading-tight text-[--color-brand-white] lg:text-5xl">
              {title}
            </h2>
            {description && (
              <p className="section-reveal font-sans mt-4 text-lg text-[--color-brand-muted]">
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

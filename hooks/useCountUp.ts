"use client";

import type { RefObject } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { withPageScroller, refreshScrollTriggers } from "@/lib/lenis-scroll-trigger";
import { prefersReducedMotion } from "@/lib/motion";
import type { StatItem } from "@/lib/data";
import { useScrollReady } from "@/hooks/useScrollReady";

interface UseCountUpOptions {
  start?: string;
  duration?: number;
}

export function useCountUp(
  scopeRef: RefObject<HTMLElement | null>,
  stats: StatItem[],
  options: UseCountUpOptions = {}
) {
  const { start = "top 88%", duration = 2 } = options;
  const scrollReady = useScrollReady();

  useGSAP(
    () => {
      if (!scrollReady || prefersReducedMotion() || !scopeRef.current) return;

      stats.forEach((stat) => {
        const el = scopeRef.current?.querySelector(
          `[data-stat="${stat.id}"]`
        );
        if (!el) return;

        ScrollTrigger.create(
          withPageScroller({
            trigger: el,
            start,
            once: true,
            onEnter: () => {
              const counter = { value: 0 };

              gsap.to(counter, {
                value: stat.value,
                duration,
                ease: "power2.out",
                overwrite: true,
                onUpdate: () => {
                  el.textContent = `${Math.round(counter.value)}${stat.suffix}`;
                },
              });
            },
          })
        );
      });

      refreshScrollTriggers();
    },
    { scope: scopeRef, dependencies: [scrollReady] }
  );
}

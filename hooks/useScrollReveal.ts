"use client";

import type { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

interface UseScrollRevealOptions {
  selector?: string;
  stagger?: number;
  start?: string;
  y?: number;
  duration?: number;
}

export function useScrollReveal(
  scopeRef: RefObject<HTMLElement | null>,
  options: UseScrollRevealOptions = {}
) {
  const {
    selector = ".reveal-item",
    stagger = 0.12,
    start = "top 80%",
    y = 40,
    duration = 0.8,
  } = options;

  useGSAP(
    () => {
      if (prefersReducedMotion() || !scopeRef.current) return;

      const targets = scopeRef.current.querySelectorAll(selector);
      if (targets.length === 0) return;

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          stagger,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: scopeRef.current,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: scopeRef }
  );
}

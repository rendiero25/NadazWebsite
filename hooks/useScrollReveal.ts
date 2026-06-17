"use client";

import type { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { refreshScrollTriggers, withPageScroller } from "@/lib/lenis-scroll-trigger";
import { prefersReducedMotion } from "@/lib/motion";
import { useScrollReady } from "@/hooks/useScrollReady";

interface UseScrollRevealOptions {
  selector?: string;
  stagger?: number;
  start?: string;
  y?: number;
  scale?: number;
  duration?: number;
  ease?: string;
  once?: boolean;
}

export function useScrollReveal(
  scopeRef: RefObject<HTMLElement | null>,
  options: UseScrollRevealOptions = {}
) {
  const {
    selector = ".reveal-item",
    stagger = 0.12,
    start = "top 82%",
    y = 36,
    scale = 0.98,
    duration = 0.85,
    ease = "power3.out",
    once = true,
  } = options;

  const scrollReady = useScrollReady();

  useGSAP(
    () => {
      if (!scrollReady || prefersReducedMotion() || !scopeRef.current) return;

      const targets = scopeRef.current.querySelectorAll(selector);
      if (targets.length === 0) return;

      gsap.set(targets, { autoAlpha: 0, y, scale, force3D: true });

      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        stagger,
        duration,
        ease,
        force3D: true,
        scrollTrigger: withPageScroller({
          trigger: scopeRef.current,
          start,
          toggleActions: "play none none none",
          once,
        }),
      });

      refreshScrollTriggers();
    },
    { scope: scopeRef, dependencies: [scrollReady] }
  );
}

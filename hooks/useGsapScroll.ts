"use client";

import type { RefObject } from "react";
import { useGSAP } from "@/lib/gsap";
import { refreshScrollTriggers } from "@/lib/lenis-scroll-trigger";
import { prefersReducedMotion } from "@/lib/motion";
import { useScrollReady } from "@/hooks/useScrollReady";

export function useGsapScroll(
  factory: () => void,
  scopeRef: RefObject<HTMLElement | null>,
  dependencies: unknown[] = [],
  options?: { revertOnUpdate?: boolean }
) {
  const scrollReady = useScrollReady();

  useGSAP(
    () => {
      if (!scrollReady || prefersReducedMotion() || !scopeRef.current) return;

      factory();
      refreshScrollTriggers();
    },
    {
      scope: scopeRef,
      dependencies: [scrollReady, ...dependencies],
      revertOnUpdate: options?.revertOnUpdate,
    }
  );
}

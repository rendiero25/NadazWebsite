"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function setupReducedMotionGsap(): () => void {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: reduce)", () => {
    gsap.globalTimeline.pause();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    return () => {
      gsap.globalTimeline.resume();
    };
  });

  return () => mm.revert();
}

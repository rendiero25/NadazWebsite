"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setupReducedMotionGsap } from "@/lib/motion";

let registered = false;

export default function GsapProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const revertReducedMotion = setupReducedMotionGsap();

    return () => {
      revertReducedMotion();
    };
  }, []);

  return <>{children}</>;
}

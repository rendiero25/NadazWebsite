"use client";

import { useEffect, useState } from "react";
import type { SectionId } from "@/lib/constants";

interface UseActiveSectionOptions {
  sectionIds: readonly SectionId[];
  rootMargin?: string;
  threshold?: number | number[];
}

export function useActiveSection({
  sectionIds,
  rootMargin = "-40% 0px -55% 0px",
  threshold = 0,
}: UseActiveSectionOptions): SectionId | null {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.intersectionRatio);
        });

        let bestId: string | null = null;
        let bestRatio = 0;

        visibility.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId && bestRatio > 0) {
          setActiveSection(bestId as SectionId);
        }
      },
      { rootMargin, threshold }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds, rootMargin, threshold]);

  return activeSection;
}

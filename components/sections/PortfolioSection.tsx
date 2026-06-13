"use client";

import { useMemo, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import SectionShell from "@/components/sections/SectionShell";
import {
  PORTFOLIO_FILTERS,
  PORTFOLIO_PROJECTS,
  type PortfolioCategory,
} from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import AssetImage from "@/components/ui/AssetImage";
import { Badge } from "@/components/ui/badge";

type FilterValue = (typeof PORTFOLIO_FILTERS)[number];

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState<FilterValue>("Semua");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Semua") return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter(
      (project) => project.category === (activeFilter as PortfolioCategory)
    );
  }, [activeFilter]);

  useScrollReveal(sectionRef, { selector: ".portfolio-card", stagger: 0.08 });

  return (
    <SectionShell
      ref={sectionRef}
      id="portofolio"
      tone="elevated"
      layout="wide"
      eyebrow="Portofolio"
      title="Bukti Kualitas dari Proyek Nyata"
      description="Hasil pemasangan untuk klien korporat, instansi, dan komersial di seluruh Jabodetabek."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {PORTFOLIO_FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "touch-target rounded-full border px-4 py-2 text-xs font-medium tracking-wide uppercase transition-all duration-300",
              activeFilter === filter
                ? "border-[--color-brand-gold] bg-[--color-brand-gold]/15 text-[--color-brand-gold]"
                : "border-[--color-glass-border] text-[--color-brand-muted] hover:border-[--color-brand-gold]/40 hover:text-[--color-brand-white]"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="portfolio-card card-interactive content-card"
          >
            <AssetImage
              src={project.image}
              alt={`Hasil pengerjaan ${project.client} — ${project.type}`}
              className="aspect-[4/3] rounded-none border-0 bg-[--color-brand-navy]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="border-t border-[--color-glass-border] p-5 sm:p-6">
              <Badge
                variant="outline"
                className="mb-3 rounded-full border-[--color-brand-gold]/35 bg-[--color-brand-gold]/10 text-[10px] font-medium tracking-wide text-[--color-brand-gold] uppercase"
              >
                {project.category}
              </Badge>
              <p className="text-xs font-medium text-[--color-brand-gold]">
                {project.type}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-[--color-brand-white]">
                {project.client}
              </h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-[--color-brand-muted]">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-[--color-brand-gold]" />
                {project.location}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="reveal-item mt-10 text-center">
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="link-gold text-sm font-medium tracking-wide uppercase"
        >
          Lihat proyek lainnya di Instagram
        </a>
      </div>
    </SectionShell>
  );
}

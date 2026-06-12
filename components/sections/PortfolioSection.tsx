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
      eyebrow="Portofolio"
      title="Hasil Pengerjaan Kami"
      description="Proyek-proyek terpilih dari klien korporat, instansi, dan komersial di Jabodetabek."
    >
      <div className="mb-10 flex flex-wrap gap-2">
        {PORTFOLIO_FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "touch-target rounded-full border px-5 py-2 font-mono text-xs tracking-wide uppercase transition-all duration-300",
              activeFilter === filter
                ? "border-[--color-brand-gold] bg-[--color-brand-gold]/15 text-[--color-brand-gold]"
                : "border-[--color-glass-border] text-[--color-brand-muted] hover:border-[--color-brand-gold]/40 hover:text-[--color-brand-white]"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="portfolio-card card-interactive group relative overflow-hidden rounded-2xl border border-[--color-glass-border]"
          >
            <AssetImage
              src={project.image}
              alt={`Hasil pengerjaan ${project.client} — ${project.type}`}
              className="aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              imageClassName="transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[--color-brand-dark] via-[--color-brand-dark]/70 to-transparent p-6 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
              <p className="font-mono text-xs text-[--color-brand-gold]">
                {project.type}
              </p>
              <h3 className="font-display mt-1 text-lg font-semibold text-[--color-brand-white]">
                {project.client}
              </h3>
              <p className="font-sans mt-1 flex items-center gap-1.5 text-sm text-[--color-brand-muted]">
                <MapPin className="h-3.5 w-3.5 text-[--color-brand-gold]" />
                {project.location}
              </p>
            </div>

            <div className="absolute top-4 left-4 rounded-full border border-[--color-glass-border] bg-[--color-brand-dark]/70 px-3 py-1 font-mono text-[10px] tracking-wide text-[--color-brand-white] uppercase backdrop-blur-sm lg:group-hover:opacity-0">
              {project.category}
            </div>
          </article>
        ))}
      </div>

      <div className="reveal-item mt-12 text-center">
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline px-8 py-3 text-sm"
        >
          Lihat Lebih Banyak di Instagram
        </a>
      </div>
    </SectionShell>
  );
}

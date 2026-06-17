"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { Images, MapPin } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { withPageScroller } from "@/lib/lenis-scroll-trigger";
import SectionShell from "@/components/sections/SectionShell";
import PortfolioGalleryDialog from "@/components/sections/PortfolioGalleryDialog";
import {
  PORTFOLIO_FILTERS,
  PORTFOLIO_PROJECTS,
  type PortfolioCategory,
  type PortfolioProject,
} from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useGsapScroll } from "@/hooks/useGsapScroll";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import AssetImage from "@/components/ui/AssetImage";
import { Badge } from "@/components/ui/badge";

type FilterValue = (typeof PORTFOLIO_FILTERS)[number];

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState<FilterValue>("Semua");
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Semua") return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter(
      (project) => project.category === (activeFilter as PortfolioCategory)
    );
  }, [activeFilter]);

  const hasAnimatedPortfolio = useRef(false);

  const closeGallery = useCallback(() => {
    setSelectedProject(null);
  }, []);

  useScrollReveal(sectionRef, { selector: ".portfolio-filter", stagger: 0.06 });
  useScrollReveal(sectionRef, { selector: ".portfolio-cta", stagger: 0, y: 24 });

  useGsapScroll(
    () => {
      if (!sectionRef.current) return;

      const cards = sectionRef.current.querySelectorAll(".portfolio-card");
      if (cards.length === 0) return;

      const isFilterChange = hasAnimatedPortfolio.current;

      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 24, scale: 0.98, force3D: true },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          stagger: 0.06,
          duration: isFilterChange ? 0.5 : 0.65,
          ease: "power3.out",
          force3D: true,
          ...(isFilterChange
            ? {}
            : {
                scrollTrigger: withPageScroller({
                  trigger: sectionRef.current,
                  start: "top 82%",
                  toggleActions: "play none none none",
                  once: true,
                }),
              }),
        }
      );

      hasAnimatedPortfolio.current = true;
    },
    sectionRef,
    [activeFilter],
    { revertOnUpdate: true }
  );

  return (
    <SectionShell
      ref={sectionRef}
      id="portofolio"
      tone="gold"
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
              "portfolio-filter touch-target rounded-full border px-4 py-2 text-xs font-medium uppercase transition-all duration-300 cursor-pointer",
              activeFilter === filter
                ? "border-[#1B4F8A] bg-[#1B4F8A] text-white"
                : "border-[--color-glass-border] text-[--color-brand-muted] hover:border-[#1B4F8A]/40 hover:text-[--color-brand-white]"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {filteredProjects.map((project) => {
          const photoCount = project.gallery.length;

          return (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="portfolio-card card-interactive content-card group w-full cursor-pointer text-left"
              aria-label={`Lihat foto proyek ${project.client}, ${photoCount} foto`}
            >
              <div className="relative">
                <AssetImage
                  src={project.image}
                  alt={`Hasil pengerjaan ${project.client} — ${project.type}`}
                  className="aspect-[4/3] rounded-none border-0 bg-[--color-brand-navy]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-[#0A1628]/0 transition-colors duration-300 group-hover:bg-[#0A1628]/35 group-focus-visible:bg-[#0A1628]/35">
                  <span className="flex translate-y-2 items-center gap-2 rounded-full border border-white/20 bg-[#0A1628]/80 px-4 py-2 text-xs font-medium text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    <Images className="h-4 w-4" />
                    {photoCount > 1
                      ? `Lihat ${photoCount} foto`
                      : "Lihat foto"}
                  </span>
                </span>
              </div>
              <div className="border-t border-[--color-glass-border] p-5 sm:p-6">
                <Badge
                  variant="outline"
                  className="mb-3 rounded-full border-transparent bg-[#1a1814] text-[10px] font-medium text-white uppercase"
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
            </button>
          );
        })}
      </div>

      <div className="portfolio-cta mt-10 text-center">
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex px-7 py-3 text-sm font-medium"
        >
          Lihat proyek lainnya di Instagram
        </a>
      </div>

      <PortfolioGalleryDialog
        project={selectedProject}
        onClose={closeGallery}
      />
    </SectionShell>
  );
}

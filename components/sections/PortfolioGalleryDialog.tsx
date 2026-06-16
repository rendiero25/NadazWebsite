"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { PortfolioProject } from "@/lib/data";
import { assetUrl } from "@/lib/assets";
import { cn } from "@/lib/utils";

interface PortfolioGalleryDialogProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export default function PortfolioGalleryDialog({
  project,
  onClose,
}: PortfolioGalleryDialogProps) {
  const lenis = useLenis();
  const [activeIndex, setActiveIndex] = useState(0);
  const open = project !== null;
  const images = project?.gallery ?? [];
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!open) return;
    setActiveIndex(0);
    lenis?.stop();
    document.body.style.overflow = "hidden";

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open, project?.id, lenis]);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && hasMultiple) goPrev();
      if (event.key === "ArrowRight" && hasMultiple) goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, hasMultiple, goPrev, goNext, onClose]);

  if (!open || !project) return null;

  const activeSrc = images[activeIndex] ?? project.image;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-gallery-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#0A1628]/90 backdrop-blur-sm"
        aria-label="Tutup galeri"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-[--color-brand-navy]">
        <div className="relative px-5 py-4 text-center sm:px-6 sm:py-5">
          <button
            type="button"
            onClick={onClose}
            className="touch-target absolute top-3 right-3 cursor-pointer rounded-full p-2 text-white transition-colors hover:text-[--color-brand-gold] sm:top-4 sm:right-4"
            aria-label="Tutup galeri foto"
          >
            <X className="h-5 w-5" />
          </button>
          <p className="text-xs font-medium tracking-wide text-white uppercase">
            {project.category}
          </p>
          <h2
            id="portfolio-gallery-title"
            className="mt-1 text-lg font-semibold text-white sm:text-xl"
          >
            {project.client}
          </h2>
          <p className="mt-1 text-sm text-white">
            {project.type} · {project.location}
          </p>
        </div>

        <div className="relative aspect-[4/3] w-full bg-[--color-brand-dark]">
          <Image
            key={activeSrc}
            src={assetUrl(activeSrc)}
            alt={`Foto ${activeIndex + 1} dari ${images.length} — ${project.client}`}
            fill
            className="object-contain"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer rounded-full bg-[#0A1628]/80 p-2 text-white backdrop-blur-sm transition-colors hover:text-[--color-brand-gold]"
                aria-label="Foto sebelumnya"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer rounded-full bg-[#0A1628]/80 p-2 text-white backdrop-blur-sm transition-colors hover:text-[--color-brand-gold]"
                aria-label="Foto berikutnya"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <p className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0A1628]/80 px-3 py-1 text-center text-xs font-medium text-white backdrop-blur-sm">
                {activeIndex + 1} / {images.length}
              </p>
            </>
          )}
        </div>

        {hasMultiple && (
          <div className="flex justify-center gap-2 overflow-x-auto p-4">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "relative h-16 w-20 shrink-0 overflow-hidden rounded-lg transition-opacity",
                  index === activeIndex
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-80"
                )}
                aria-label={`Lihat foto ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              >
                <Image
                  src={assetUrl(src)}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

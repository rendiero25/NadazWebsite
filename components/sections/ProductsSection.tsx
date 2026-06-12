"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionShell from "@/components/sections/SectionShell";
import { PRODUCTS } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SITE } from "@/lib/constants";
import AssetImage from "@/components/ui/AssetImage";

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollReveal(sectionRef, { selector: ".product-card", stagger: 0.1 });

  return (
    <SectionShell
      ref={sectionRef}
      id="produk"
      eyebrow="Produk & Jasa"
      title="Solusi Lengkap untuk Setiap Kebutuhan Ruang"
      description="Glassboard Jakarta, kaca tempered Depok, partisi kaca Jabodetabek — semua dipasang profesional dengan free ongkir & pemasangan."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <article
            key={product.id}
            className="product-card card-interactive group glass-panel overflow-hidden"
          >
            <AssetImage
              src={product.image}
              alt={`Foto produk ${product.name} NADAZ`}
              className="aspect-[4/3] bg-[--color-brand-navy]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold text-[--color-brand-white]">
                  {product.name}
                </h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-[--color-brand-gold] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </div>
              <p className="font-sans mt-3 text-sm leading-relaxed text-[--color-brand-muted]">
                {product.description}
              </p>
              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono mt-4 inline-block text-xs tracking-wide text-[--color-brand-gold] uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                Tanya produk ini →
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

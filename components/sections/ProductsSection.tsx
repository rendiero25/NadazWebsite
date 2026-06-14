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

  useScrollReveal(sectionRef, { selector: ".product-card", stagger: 0.08 });

  return (
    <SectionShell
      ref={sectionRef}
      id="produk"
      tone="blue"
      title="Enam Solusi Kaca untuk Setiap Jenis Ruang"
      description="Pilih produk, kami urus pengukuran, produksi, pengiriman, dan pemasangan tanpa biaya tambahan di Jabodetabek."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {PRODUCTS.map((product) => (
          <article
            key={product.id}
            className="product-card card-interactive content-card group"
          >
            <AssetImage
              src={product.image}
              alt={`Foto produk ${product.name} NADAZ`}
              className="aspect-[4/3] rounded-none border-0 bg-[--color-brand-navy]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="border-t border-[--color-glass-border] p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-[--color-brand-white]">
                  {product.name}
                </h3>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[--color-brand-gold] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[--color-brand-muted]">
                {product.description}
              </p>
              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 inline-flex px-4 py-2 text-xs"
              >
                Tanya & minta penawaran
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

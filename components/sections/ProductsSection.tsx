"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionShell from "@/components/sections/SectionShell";
import {
  MAIN_PRODUCTS,
  OTHER_PRODUCTS,
  type Product,
} from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SITE } from "@/lib/constants";
import AssetImage from "@/components/ui/AssetImage";
import { Badge } from "@/components/ui/badge";

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card card-interactive content-card group">
      {product.image ? (
        <AssetImage
          src={product.image}
          alt={`Foto produk ${product.name} NADAZ`}
          className="aspect-[4/3] rounded-none border-0 bg-[--color-brand-navy]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[--color-brand-navy] to-[--color-brand-dark]">
          <span className="text-sm text-[--color-brand-muted]">
            Foto segera hadir
          </span>
        </div>
      )}
      <div className="border-t border-[--color-glass-border] p-5 sm:p-6">
        <Badge
          variant="outline"
          className="mb-3 rounded-full border-transparent bg-[#1a1814] text-[10px] font-medium text-white uppercase"
        >
          {product.category}
        </Badge>
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
  );
}

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollReveal(sectionRef, { selector: ".product-card", stagger: 0.08 });

  return (
    <SectionShell
      ref={sectionRef}
      id="produk"
      tone="blue"
      title="Glassboard & Cermin untuk Setiap Jenis Ruang"
      description="Pilih produk, kami urus pengukuran, produksi, pengiriman, dan pemasangan tanpa biaya tambahan di Jabodetabek."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
        {MAIN_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-14 lg:mt-16">
        <h3 className="text-xl font-semibold text-[--color-brand-white] sm:text-2xl">
          Produk Lainnya
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-[--color-brand-muted] sm:text-base">
          Solusi aluminium dan kaca tambahan untuk melengkapi kebutuhan ruang
          Anda.
        </p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:gap-6">
        {OTHER_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </SectionShell>
  );
}

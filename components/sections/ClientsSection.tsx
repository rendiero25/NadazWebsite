"use client";

import Image from "next/image";
import SectionShell from "@/components/sections/SectionShell";
import { assetUrl } from "@/lib/assets";
import { CLIENTS } from "@/lib/data";

export default function ClientsSection() {
  return (
    <SectionShell
      id="klien"
      tone="blue"
      align="center"
      eyebrow="Klien Kami"
      title="Dipercaya Perusahaan & Instansi Terkemuka"
      description="Dari BUMN hingga kementerian dan brand F&B nasional, mereka memilih NADAZ untuk presisi dan ketepatan waktu."
      headerClassName="mx-auto text-center"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CLIENTS.map((client) => (
          <div
            key={client.name}
            className="flex items-center gap-4 rounded-xl border border-[--color-glass-border] bg-white/80 px-5 py-4 transition-colors duration-300 hover:border-[--color-brand-gold]/35 hover:bg-[rgba(201,168,76,0.08)]"
          >
            {client.logo ? (
              <Image
                src={assetUrl(client.logo)}
                alt={`Logo ${client.name}`}
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-md object-contain"
              />
            ) : (
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[--color-brand-gold]/25 bg-[--color-brand-gold]/10 text-xs font-semibold text-[--color-brand-gold]">
                {client.name.charAt(0)}
              </span>
            )}
            <span className="text-sm font-medium text-[--color-brand-white]">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

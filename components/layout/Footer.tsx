import Link from "next/link";
import { AtSign, MapPin, MessageCircle } from "lucide-react";
import NadazLogo from "@/components/layout/NadazLogo";
import { FOOTER_LINKS, SITE } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="relative border-t border-[--color-glass-border] bg-gradient-to-b from-[#fffdf9] to-[#f5efe3]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <NadazLogo size="md" />
            <p className="font-sans mt-5 max-w-sm text-sm leading-relaxed text-[--color-brand-muted]">
              {SITE.tagline}. Sejak 2016 melayani korporat, instansi pemerintah,
              dan pemilik usaha di seluruh Jabodetabek, dengan gratis ongkir
              dan pemasangan.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow-label mb-5">Tautan</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-gold font-sans text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h3 className="eyebrow-label mb-5">Kontak</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={SITE.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-[--color-brand-muted] transition-colors hover:text-[--color-brand-white]"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[--color-brand-gold]" />
                  <span>
                    <span className="font-sans block font-medium text-[--color-brand-white]">
                      WhatsApp
                    </span>
                    {SITE.whatsapp}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-[--color-brand-muted] transition-colors hover:text-[--color-brand-white]"
                >
                  <AtSign className="mt-0.5 h-4 w-4 shrink-0 text-[--color-brand-gold]" />
                  <span>
                    <span className="font-sans block font-medium text-[--color-brand-white]">
                      Instagram
                    </span>
                    {SITE.instagramHandle}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[--color-brand-muted]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[--color-brand-gold]" />
                <span>
                  <span className="font-sans block font-medium text-[--color-brand-white]">
                    Alamat
                  </span>
                  {SITE.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-[--color-glass-border]" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-[--color-brand-muted]">
            © 2025 {SITE.company}. All rights reserved.
          </p>
          <p className="text-xs text-[--color-brand-muted]">
            {SITE.url.replace("https://", "")}
          </p>
        </div>
      </div>
    </footer>
  );
}

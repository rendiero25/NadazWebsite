"use client";

import { useRef } from "react";
import Link from "next/link";
import { AtSign, MapPin, MessageCircle } from "lucide-react";
import NadazLogo from "@/components/layout/NadazLogo";
import { FOOTER_LINKS, SITE } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PAGE_CONTAINER } from "@/lib/utils";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useScrollReveal(footerRef, {
    selector: ".footer-reveal",
    stagger: 0.1,
    start: "top 92%",
    y: 28,
  });

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden border-t border-white/10 bg-[#0F2847]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(201,168,76,0.22),transparent_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[--color-brand-gold]/60 to-transparent"
        aria-hidden
      />

      <div className={`${PAGE_CONTAINER} relative py-14 sm:py-16 lg:py-20`}>
        <div className="footer-reveal mb-12 flex flex-col gap-6 border-b border-white/15 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase text-[--color-brand-gold]">
              Siap mulai proyek?
            </p>
            <h2 className="mt-2 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Konsultasi gratis via WhatsApp
            </h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Gratis ongkir dan pemasangan seluruh Jabodetabek. Tim kami bantu
              dari pengukuran hingga finishing.
            </p>
          </div>
          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex shrink-0 px-8 py-4 text-base font-semibold sm:text-lg"
          >
            <MessageCircle className="h-5 w-5" />
            Chat Sekarang
          </a>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="footer-reveal lg:col-span-5">
            <NadazLogo size="lg" />
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
              {SITE.tagline}. Sejak 2016 melayani korporat, instansi pemerintah,
              dan pemilik usaha di seluruh Jabodetabek.
            </p>
          </div>

          <div className="footer-reveal lg:col-span-3">
            <h3 className="mb-5 text-sm font-semibold uppercase text-[--color-brand-gold] sm:text-base">
              Tautan
            </h3>
            <ul className="space-y-3.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-white/80 transition-colors hover:text-white sm:text-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-reveal lg:col-span-4">
            <h3 className="mb-5 text-sm font-semibold uppercase text-[--color-brand-gold] sm:text-base">
              Kontak
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={SITE.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-white/80 transition-colors hover:text-white"
                >
                  <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-[--color-brand-gold]" />
                  <span>
                    <span className="block text-base font-semibold text-white sm:text-lg">
                      WhatsApp
                    </span>
                    <span className="text-base sm:text-lg">{SITE.whatsapp}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-white/80 transition-colors hover:text-white"
                >
                  <AtSign className="mt-1 h-5 w-5 shrink-0 text-[--color-brand-gold]" />
                  <span>
                    <span className="block text-base font-semibold text-white sm:text-lg">
                      Instagram
                    </span>
                    <span className="text-base sm:text-lg">
                      {SITE.instagramHandle}
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[--color-brand-gold]" />
                <span>
                  <span className="block text-base font-semibold text-white sm:text-lg">
                    Alamat
                  </span>
                  <span className="text-base leading-relaxed sm:text-lg">
                    {SITE.address}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-reveal mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 sm:flex-row">
          <p className="text-sm text-white/55 sm:text-base">
            © 2025 {SITE.company}. All rights reserved.
          </p>
          <a
            href="https://www.rendiero.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/55 transition-colors hover:text-white sm:text-base"
          >
            developed by rendiero
          </a>
        </div>
      </div>
    </footer>
  );
}

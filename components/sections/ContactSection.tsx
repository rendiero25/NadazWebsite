"use client";

import { FormEvent, useRef, useState } from "react";
import { AtSign, MapPin, MessageCircle, Send } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  useScrollReveal(sectionRef, { selector: ".contact-reveal", stagger: 0.1 });

  useGSAP(
    () => {
      if (prefersReducedMotion() || !sectionRef.current) return;

      gsap.fromTo(
        ".contact-glow",
        { opacity: 0.4, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Halo NADAZ, saya ingin konsultasi proyek kaca.",
      "",
      `Nama: ${nama}`,
      `Email: ${email}`,
      "",
      `Pesan: ${pesan}`,
    ].join("\n");

    const url = `${SITE.whatsappLink}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="kontak"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="contact-reveal relative overflow-hidden rounded-2xl border border-[--color-brand-gold]/25 bg-gradient-to-br from-[--color-brand-gold]/15 via-[--color-brand-navy] to-[--color-brand-dark] p-6 sm:rounded-3xl sm:p-8 lg:p-16">
          <div className="contact-glow pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[--color-brand-gold]/10 blur-3xl" />

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="contact-reveal">
              <span className="font-mono mb-4 block text-xs tracking-[0.3em] text-[--color-brand-gold] uppercase">
                Hubungi Kami
              </span>
              <h2 className="font-display text-4xl font-semibold text-[--color-brand-white] lg:text-5xl">
                Siap Wujudkan Proyek Kaca Anda?
              </h2>
              <p className="font-sans mt-4 text-lg text-[--color-brand-muted]">
                Konsultasi gratis via WhatsApp. Tim kami siap membantu dari
                pengukuran hingga pemasangan di seluruh Jabodetabek.
              </p>

              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 w-full px-10 py-5 text-base sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                Chat WhatsApp Sekarang
              </a>
            </div>

            <div className="space-y-6">
              <form
                onSubmit={handleSubmit}
                className="contact-reveal glass-panel space-y-4 p-6"
              >
                <h3 className="font-mono text-xs tracking-[0.25em] text-[--color-brand-gold] uppercase">
                  Form Inquiry
                </h3>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-nama"
                    className="font-sans text-sm text-[--color-brand-muted]"
                  >
                    Nama
                  </label>
                  <Input
                    id="contact-nama"
                    name="nama"
                    required
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Nama lengkap Anda"
                    className="border-[--color-glass-border] bg-[--color-brand-dark]/50 text-[--color-brand-white] placeholder:text-[--color-brand-muted]/60"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="font-sans text-sm text-[--color-brand-muted]"
                  >
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@perusahaan.com"
                    className="border-[--color-glass-border] bg-[--color-brand-dark]/50 text-[--color-brand-white] placeholder:text-[--color-brand-muted]/60"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-pesan"
                    className="font-sans text-sm text-[--color-brand-muted]"
                  >
                    Pesan
                  </label>
                  <Textarea
                    id="contact-pesan"
                    name="pesan"
                    required
                    rows={4}
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                    placeholder="Ceritakan kebutuhan proyek kaca Anda..."
                    className="border-[--color-glass-border] bg-[--color-brand-dark]/50 text-[--color-brand-white] placeholder:text-[--color-brand-muted]/60"
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-primary w-full rounded-full"
                >
                  <Send className="h-4 w-4" />
                  Kirim via WhatsApp
                </Button>
              </form>

              <div className="contact-reveal glass-panel p-6">
                <h3 className="font-mono mb-4 text-xs tracking-[0.25em] text-[--color-brand-gold] uppercase">
                  Informasi Kontak
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={SITE.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-[--color-brand-muted] transition-colors hover:text-[--color-brand-white]"
                    >
                      <MessageCircle className="h-4 w-4 text-[--color-brand-gold]" />
                      {SITE.whatsapp}
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-[--color-brand-muted] transition-colors hover:text-[--color-brand-white]"
                    >
                      <AtSign className="h-4 w-4 text-[--color-brand-gold]" />
                      {SITE.instagramHandle}
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[--color-brand-muted]">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[--color-brand-gold]" />
                    {SITE.address}
                  </li>
                </ul>
              </div>

              <div className="contact-reveal glass-panel overflow-hidden">
                <iframe
                  title="Lokasi NADAZ di Google Maps"
                  src={SITE.mapsEmbed}
                  className="aspect-video w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

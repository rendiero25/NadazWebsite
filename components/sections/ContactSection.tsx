"use client";

import { useRef } from "react";
import { AtSign, MapPin, MessageCircle } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { SITE } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PAGE_CONTAINER } from "@/lib/utils";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollReveal(sectionRef, { selector: ".contact-reveal", stagger: 0.1 });

  useGSAP(
    () => {
      if (prefersReducedMotion() || !sectionRef.current) return;

      gsap.fromTo(
        ".contact-map",
        { autoAlpha: 0, y: 28, force3D: true },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.95,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".contact-map",
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
            invalidateOnRefresh: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="kontak"
      ref={sectionRef}
      className="section-tone-gold relative"
    >
      <div className={`${PAGE_CONTAINER} py-16 sm:py-20 lg:py-24`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="contact-reveal eyebrow-label">Hubungi Kami</span>
          <h2 className="contact-reveal text-3xl font-semibold text-[--color-brand-white] sm:text-4xl lg:text-5xl">
            Diskusikan Proyek Anda
          </h2>
          <p className="contact-reveal mt-4 text-base text-[--color-brand-muted] sm:text-lg">
            Ceritakan kebutuhan ruang Anda. Tim kami bantu hitung material,
            jadwal pemasangan, dan estimasi biaya tanpa komitmen.
          </p>

          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-reveal btn-primary mt-8 inline-flex px-8 py-3.5 text-sm sm:text-base"
          >
            <MessageCircle className="h-5 w-5" />
            Chat WhatsApp Sekarang
          </a>

          <ul className="mt-10 flex flex-col items-center space-y-4">
            <li className="contact-reveal">
              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-sm text-[--color-brand-muted] transition-colors hover:text-[--color-brand-white]"
              >
                <MessageCircle className="h-4 w-4 text-white" />
                {SITE.whatsapp}
              </a>
            </li>
            <li className="contact-reveal">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-sm text-[--color-brand-muted] transition-colors hover:text-[--color-brand-white]"
              >
                <AtSign className="h-4 w-4 text-white" />
                {SITE.instagramHandle}
              </a>
            </li>
            <li className="contact-reveal flex items-start justify-center gap-3 text-sm text-[--color-brand-muted]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" />
              {SITE.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="contact-map w-full">
        <iframe
          title="Lokasi NADAZ di Google Maps"
          src={SITE.mapsEmbed}
          className="aspect-[21/9] min-h-[196px] w-full border-0 sm:min-h-[252px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}

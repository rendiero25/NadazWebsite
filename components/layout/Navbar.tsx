"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE, SECTION_IDS, type SectionId } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { prefersReducedMotion } from "@/lib/motion";
import NadazLogo from "@/components/layout/NadazLogo";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection({ sectionIds: SECTION_IDS });

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        ".nav-inner",
        { y: -80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.15,
        }
      );
    },
    { scope: navRef }
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const isLinkActive = (href: string) => {
    const id = href.replace("#", "") as SectionId;
    return activeSection === id;
  };

  const handleNavClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      <header
        ref={navRef}
        className={cn(
          "nav-shell",
          isScrolled ? "nav-shell-scrolled" : "nav-shell-top"
        )}
      >
        <div className="nav-inner mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <NadazLogo size="sm" />

          <nav
            className="hidden items-center gap-8 lg:gap-10 md:flex"
            aria-label="Navigasi utama"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link",
                  isLinkActive(link.href)
                    ? "text-[--color-brand-gold] nav-link-active"
                    : "text-[--color-brand-muted] hover:text-[--color-brand-white]"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-2.5 text-sm"
            >
              Minta Penawaran Gratis
            </a>
          </div>

          <button
            type="button"
            className="touch-target inline-flex items-center justify-center rounded-lg border border-[--color-glass-border] text-[--color-brand-white] transition-colors hover:border-[--color-brand-gold]/40 hover:bg-[--color-glass-bg] active:scale-95 cursor-pointer md:hidden"
            onClick={() => setIsMobileOpen((open) => !open)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? "Tutup menu" : "Buka menu"}
          >
            {isMobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 bg-white/96 backdrop-blur-2xl transition-all duration-500 md:hidden",
          isMobileOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        )}
        aria-hidden={!isMobileOpen}
      >
        <nav
          className="flex h-full flex-col items-center justify-center gap-2 px-6"
          aria-label="Navigasi mobile"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className={cn(
                "touch-target flex min-h-12 items-center text-2xl font-semibold transition-colors sm:text-3xl",
                isLinkActive(link.href)
                  ? "text-[--color-brand-gold]"
                  : "text-[--color-brand-white] active:text-[--color-brand-gold]"
              )}
            >
              {link.label}
            </a>
          ))}

          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="btn-primary mt-6 px-8 py-4"
          >
            Minta Penawaran Gratis
          </a>
        </nav>
      </div>
    </>
  );
}

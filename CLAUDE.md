# NADAZ Website — CLAUDE.md

## Project Overview
Landing page profesional 1 halaman (one-page) untuk **PT. Arta Prima Glassindo** (brand: **NADAZ**),
spesialis kaca & aluminium premium di wilayah Jabodetabek.

- **Website**: nadaz.co.id
- **Hosting**: Vercel
- **Target**: B2B (perusahaan, instansi pemerintah, gym, restoran) + personal di Jabodetabek
- **Bahasa**: Indonesia

---

## Tech Stack

| Layer        | Technology                                     | Version    |
|--------------|------------------------------------------------|------------|
| Framework    | Next.js (App Router)                           | 15.x       |
| Language     | TypeScript                                     | 5.x        |
| Styling      | Tailwind CSS                                   | 4.x        |
| UI Library   | shadcn/ui                                      | latest     |
| Animation    | GSAP + ScrollTrigger + @gsap/react             | 3.12.x     |
| Icons        | Lucide React                                   | latest     |
| Fonts        | Google Fonts via next/font                     | —          |
| Deployment   | Vercel                                         | —          |

---

## Brand Identity

### Color Palette
```
--color-brand-blue:   #1B4F8A   /* Primary brand blue */
--color-brand-dark:   #0A1628   /* Deep navy background */
--color-brand-navy:   #0F1F3D   /* Slightly lighter navy for surfaces */
--color-brand-gold:   #C9A84C   /* Gold accent */
--color-brand-gold-light: #E5C96D  /* Gold hover/highlight */
--color-brand-white:  #E8EEF8   /* Off-white text */
--color-brand-muted:  #8899B3   /* Muted/secondary text */
--color-glass-border: rgba(201, 168, 76, 0.2)  /* Glass panel border */
--color-glass-bg:     rgba(27, 79, 138, 0.08)  /* Glass panel background */
```

### Typography
```
Display / Heading:  Cormorant Garant (400, 600, 700) — premium, architectural
Body:               DM Sans (300, 400, 500)           — clean, modern
Labels / Mono:      JetBrains Mono (400)              — captions, tags
```

### Design Language
- **Aesthetic**: Premium glass/material → dark background, gold accents, glassmorphism panels
- **Motion**: Smooth entrance reveals, scroll-triggered stagger, parallax depth
- **Signature**: Frosted glass panels with subtle gold border + light refraction effect
- **Tone**: Profesional, terpercaya, premium — bukan startup, tapi craftsmanship

---

## Project Structure

```
nadaz-website/
├── app/
│   ├── layout.tsx         ← Root layout: fonts, metadata, providers
│   ├── page.tsx           ← Main landing page (imports all sections)
│   └── globals.css        ← CSS variables, base styles, utility classes
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     ← Fixed navbar with scroll-aware state
│   │   └── Footer.tsx     ← Footer with links & copyright
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ClientsSection.tsx
│   │   ├── TestimonialSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                ← shadcn/ui + custom primitives
├── hooks/
│   ├── useGSAP.ts         ← GSAP context wrapper hook
│   └── useScrollProgress.ts
├── lib/
│   └── utils.ts           ← cn(), formatters
├── types/
│   └── index.ts           ← Shared TypeScript types
└── public/
    ├── images/
    │   ├── products/      ← Product photos (add after setup)
    │   ├── portfolio/     ← Portfolio/hasil pengerjaan (add after setup)
    │   └── clients/       ← Client logos (add after setup)
    └── icons/
        └── nadaz-logo.png ← Logo NADAZ transparan (add after setup)
```

---

## Page Sections (Order)

| # | Section ID      | Component               | Status |
|---|----------------|-------------------------|--------|
| 1 | `#hero`         | `HeroSection`           | 🚧     |
| 2 | `#tentang`      | `AboutSection`          | 🚧     |
| 3 | `#produk`       | `ProductsSection`       | 🚧     |
| 4 | `#keunggulan`   | `FeaturesSection`       | 🚧     |
| 5 | `#portofolio`   | `PortfolioSection`      | 🚧     |
| 6 | `#klien`        | `ClientsSection`        | 🚧     |
| 7 | `#testimoni`    | `TestimonialSection`    | 🚧     |
| 8 | `#kontak`       | `ContactSection`        | 🚧     |

---

## GSAP Animation Conventions

### Always use `useGSAP` from `@gsap/react`
```tsx
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register once in root layout or a provider
gsap.registerPlugin(ScrollTrigger)
```

### Standard Scroll Reveal Pattern
```tsx
useGSAP(() => {
  gsap.fromTo(
    ".reveal-item",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  )
}, { scope: sectionRef })
```

### Hero Entrance Timeline
```tsx
const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
tl.fromTo(".hero-eyebrow", { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
  .fromTo(".hero-title", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2 }, "-=0.4")
  .fromTo(".hero-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "-=0.6")
  .fromTo(".hero-cta", { opacity: 0, y: 20, scale: 0.95 }, { opacity: 1, y: 0, scale: 1 }, "-=0.4")
```

### Awwwards Skill Integration
Saat menggunakan awwwards animations skill (dari Cursor/Claude Code), gunakan class
konvensi dari skill tersebut dan sesuaikan dengan GSAP context di komponen.

---

## Key Data & Assets

### Contact
- **WhatsApp**: 085328613613
- **WhatsApp Link**: `https://wa.me/6285328613613`
- **Instagram**: https://www.instagram.com/glassboardindonesia/
- **Alamat**: Jl. Dayaguna III No. 99A, Mampang, Pancoran Mas, Kota Depok
- **Google Maps**: *(tambahkan link setelah konfirmasi)*

### Products (6 items)
1. Glassboard / Magnetic Glassboard
2. Standing Glassboard
3. Cermin Gym / Wall Mirror
4. Cermin Toilet / Studio
5. Partisi Kaca
6. Pintu & Jendela Aluminium

### Notable Clients
- PT. HM Sampoerna Tbk
- IFIT Indonesia
- Kementerian Perindustrian RI
- BNN (Badan Narkotika Nasional)
- Polda Metro Jaya
- Mie Gacoan (beberapa cabang)
- Artika Sari Devi (artis)

---

## Assets Status (TODO)

- [ ] Logo NADAZ (PNG transparan) → `/public/icons/nadaz-logo.png`
- [ ] Foto produk (6 items) → `/public/images/products/`
- [ ] Foto portofolio/hasil pengerjaan → `/public/images/portfolio/`
- [ ] Logo klien → `/public/images/clients/`
- [ ] Nomor WA final konfirmasi
- [ ] Google Maps embed link
- [ ] Video company profile → `/public/videos/` *(menyusul)*
- [ ] Testimoni pelanggan *(menyusul)*

---

## Development Commands

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run lint         # ESLint check
npx shadcn@latest add [component]   # Add shadcn component
```

---

## Coding Standards

- Semua komponen: TypeScript dengan explicit types
- Props interface di atas komponen, export default di bawah
- `cn()` dari `lib/utils.ts` untuk conditional Tailwind classes
- Responsive: mobile-first, gunakan `sm:` `md:` `lg:` breakpoints
- Image: selalu gunakan `next/image` dengan `alt` text
- No inline styles — semua via Tailwind atau CSS variables
- GSAP: scope setiap animation ke `sectionRef` untuk cleanup otomatis
- Accessibility: aria-label untuk icon-only buttons, semantic HTML

---

## Performance Notes

- Images: `priority` prop hanya di Hero, lazy load sisanya
- GSAP: register plugins sekali di layout, jangan di tiap komponen
- Fonts: `display: "swap"` untuk semua custom fonts
- Vercel: auto-optimized via platform defaults

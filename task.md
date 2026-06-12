# NADAZ Website — Task Breakdown
**PT. Arta Prima Glassindo | nadaz.co.id**

Terakhir update: 2025

---

## Legend
- [ ] Belum dimulai
- [x] Selesai
- [~] Sedang dikerjakan

---

## Phase 1: Project Setup

### 1.1 Init & Config
- [x] `npx create-next-app@latest` — scaffold manual di folder root (create-next-app gagal karena nama folder kapital)
- [x] Install dependencies:
  ```bash
  npm install gsap @gsap/react lucide-react
  npm install -D @types/gsap
  npx shadcn@latest init
  ```
- [x] Install shadcn components:
  ```bash
  npx shadcn@latest add button input textarea badge card separator
  ```
- [x] Set up `tailwind.config.ts` — tambahkan CSS variables NADAZ, font families
- [x] Set up `app/globals.css` — CSS variables, base styles
- [x] Set up `tsconfig.json` — strict mode, path aliases
- [x] Set up `lib/utils.ts` — cn() helper

### 1.2 Typography & Fonts
- [x] Setup Google Fonts di `app/layout.tsx`:
  - Cormorant Garant (400, 600, 700)
  - DM Sans (300, 400, 500)
  - JetBrains Mono (400)
- [x] Map fonts ke Tailwind font families:
  - `fontFamily.display` → Cormorant Garant
  - `fontFamily.sans` → DM Sans
  - `fontFamily.mono` → JetBrains Mono

### 1.3 GSAP Setup
- [x] Register GSAP plugins di `app/layout.tsx` atau `app/providers.tsx`:
  ```tsx
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"
  gsap.registerPlugin(ScrollTrigger)
  ```
- [x] Install & apply GSAP skill dari Cursor (awwwards animations skill)
- [x] Test ScrollTrigger dengan simple reveal

### 1.4 SEO & Metadata
- [x] Set metadata di `app/layout.tsx`:
  - title: "NADAZ — Spesialis Kaca & Aluminium Premium Jabodetabek"
  - description: copywriting SEO-friendly
  - og:image, og:title
  - canonical: nadaz.co.id
- [x] Buat `/public/og-image.jpg` (1200×630)
- [x] Tambahkan favicon (dari logo NADAZ)

---

## Phase 2: Layout Shell

### 2.1 Root Layout
- [x] `app/layout.tsx` — fonts, metadata, GSAP register, smooth scroll
- [x] `app/page.tsx` — import semua section

### 2.2 Navbar
- [x] `components/layout/Navbar.tsx`
  - [x] Logo NADAZ kiri (image atau SVG placeholder)
  - [x] Navigation links: Produk | Portofolio | Klien | Kontak
  - [x] CTA button kanan: "Konsultasi Gratis" → WA link
  - [x] Scroll-aware state (transparent → solid bg saat scroll)
  - [x] Mobile hamburger menu
  - [x] GSAP entrance animation (slideDown dari atas)
  - [x] Active section highlighting (IntersectionObserver)

### 2.3 Footer
- [x] `components/layout/Footer.tsx`
  - [x] Logo + tagline
  - [x] Quick links
  - [x] Kontak (WA, Instagram, alamat)
  - [x] Copyright "© 2025 PT. Arta Prima Glassindo. All rights reserved."

---

## Phase 3: Sections

### 3.1 Hero Section (`#hero`)
- [x] `components/sections/HeroSection.tsx`
  - [x] Full viewport height (min-h-screen)
  - [x] Eyebrow: "Spesialis Kaca & Aluminium Premium"
  - [x] Headline: "Solusi Kaca Premium untuk Ruang Profesional Anda"
  - [x] Subheadline: brief value prop
  - [x] 2 CTAs: "Konsultasi Gratis" (WA) + "Lihat Produk" (scroll)
  - [x] Visual: glass panel dengan product image (placeholder dulu)
  - [x] Badge "Free Ongkir & Pasang Jabodetabek"
  - [x] Scroll indicator (arrow down)
  - [x] GSAP entrance timeline (staggered reveal)
  - [x] Subtle parallax on scroll for background

### 3.2 Tentang Kami (`#tentang`)
- [x] `components/sections/AboutSection.tsx`
  - [x] Section eyebrow + heading
  - [x] Paragraf singkat tentang NADAZ sejak 2016 → kini PT. APG
  - [x] 4 stat counters: Tahun berpengalaman, Produk terpasang, Klien korporat, Area layanan
  - [x] GSAP animated number counters saat scroll masuk
  - [x] Visual: image placeholder (foto gedung/showroom) atau glass graphic

### 3.3 Produk & Jasa (`#produk`)
- [x] `components/sections/ProductsSection.tsx`
  - [x] Section eyebrow + heading
  - [x] 6-card grid (2 col mobile, 3 col desktop):
    1. Magnetic Glassboard
    2. Standing Glassboard
    3. Cermin Gym
    4. Cermin Toilet/Studio
    5. Partisi Kaca
    6. Pintu & Jendela Aluminium
  - [x] Each card: image (placeholder), nama produk, deskripsi singkat, hover effect
  - [x] Hover: lift + gold border glow
  - [x] GSAP stagger reveal on scroll

### 3.4 Keunggulan (`#keunggulan`)
- [x] `components/sections/FeaturesSection.tsx`
  - [x] Section heading: "Mengapa Memilih NADAZ?"
  - [x] 4 feature items:
    1. Free Ongkir & Pemasangan Jabodetabek
    2. Kaca Tempered Premium Bersertifikat
    3. Berpengalaman Sejak 2016
    4. Melayani Korporat & Personal
  - [x] Layout: 2x2 grid atau horizontal list
  - [x] Icon per feature (Lucide icons)
  - [x] GSAP reveal + icon animation

### 3.5 Portofolio (`#portofolio`)
- [x] `components/sections/PortfolioSection.tsx`
  - [x] Section heading: "Hasil Pengerjaan Kami"
  - [x] Masonry grid atau 3-col grid
  - [x] 6–9 placeholder image cards dengan overlay:
    - nama klien/proyek
    - jenis produk
    - lokasi
  - [x] Filter tabs: Semua | Glassboard | Cermin | Partisi (optional)
  - [x] Hover overlay dengan client info
  - [x] CTA: "Lihat Lebih Banyak" → Instagram link
  - [x] GSAP stagger reveal

### 3.6 Klien Kami (`#klien`)
- [x] `components/sections/ClientsSection.tsx`
  - [x] Section heading: "Dipercaya Oleh"
  - [x] Infinite marquee/scroll horizontal dengan client names:
    - PT. HM Sampoerna Tbk
    - IFIT Indonesia
    - Kementerian Perindustrian RI
    - BNN
    - Polda Metro Jaya
    - Mie Gacoan
    - Artika Sari Devi
  - [x] GSAP horizontal scroll animation (infinite loop)
  - [x] Badge/pill style untuk tiap client (sampai logo tersedia)

### 3.7 Testimoni (`#testimoni`)
- [x] `components/sections/TestimonialSection.tsx`
  - [x] Section heading
  - [x] 3 dummy testimoni kartu dengan:
    - Quote text
    - Nama & jabatan/perusahaan
    - Star rating (5/5)
  - [x] Layout: grid 3 col desktop, stacked mobile
  - [x] Large quote mark decoratif (Cormorant Garant)
  - [x] GSAP reveal

### 3.8 Kontak & CTA (`#kontak`)
- [x] `components/sections/ContactSection.tsx`
  - [x] Large CTA section dengan gold gradient background
  - [x] Heading + subheading
  - [x] Primary CTA: "Chat WhatsApp Sekarang" (besar, prominent)
  - [x] Kontak info:
    - WhatsApp: 085328613613
    - Instagram: @glassboardindonesia
    - Alamat: Jl. Dayaguna III No. 99A, Depok
  - [x] Google Maps embed (placeholder iframe)
  - [x] Inquiry form (nama, email, pesan, kirim via WA/email)
  - [x] GSAP reveal

---

## Phase 4: Polish & Animation

### 4.1 Micro-interactions
- [x] Navbar: smooth backdrop-blur transition on scroll
- [x] Buttons: hover scale + shadow glow
- [x] Cards: hover lift + border glow
- [x] Links: gold underline animation

### 4.2 Awwwards Animations (pakai skill)
- [x] Apply awwwards animations skill dari Cursor
- [x] Hero section: dramatic entrance dengan split text animation
- [x] Scroll progress indicator (optional)
- [x] Smooth page scroll (lenis atau CSS scroll-behavior)
- [x] Number counter animation di About section

### 4.3 Mobile Responsiveness
- [x] Test semua section di 375px (iPhone SE)
- [x] Test di 768px (tablet)
- [x] Navbar mobile menu
- [x] Touch-friendly hover states

### 4.4 Reduced Motion
- [x] Tambahkan `@media (prefers-reduced-motion: reduce)` di globals.css
- [x] GSAP: cek `matchMedia` untuk disable animations

---

## Phase 5: Content & Assets

### 5.1 Real Assets (tunggu dari klien)
- [x] Swap placeholder → logo NADAZ (`public/assets/LOGO/Logo merek NADAZ.jpg`)
- [x] Swap placeholder → foto produk (6 items dari `public/assets/`)
- [x] Swap placeholder → foto portofolio/hasil pengerjaan (9 proyek nyata)
- [x] Swap placeholder → logo klien (PT. HM Sampoerna — sisanya pill teks)
- [x] Konfirmasi nomor WhatsApp final (085328613613 — sesuai brief)
- [x] Tambahkan Google Maps embed link (Depok)
- [~] Testimoni asli dari klien (diupdate dari proyek nyata; tunggu konfirmasi klien)

### 5.2 Copy Review
- [~] Review semua copy (heading, body, CTA) bersama klien
- [x] SEO: pastikan keyword "glassboard jakarta", "kaca tempered depok", dll
- [x] Proofreading Bahasa Indonesia (copy proyek & produk diperbarui)

---

## Phase 6: Deployment

### 6.1 Vercel Setup
- [ ] Push repo ke GitHub
- [ ] Connect repo ke Vercel
- [ ] Set environment variables (kalau ada)
- [ ] Domain: nadaz.co.id → configure di Vercel

### 6.2 Pre-launch Checklist
- [ ] `npm run build` sukses tanpa error
- [ ] Lighthouse score: Performance ≥90, SEO ≥95
- [ ] Test di Chrome, Safari, Firefox
- [ ] Test di iOS Safari & Android Chrome
- [ ] Semua CTA links berfungsi (WA, Instagram, Maps)
- [ ] Form inquiry berfungsi
- [ ] Images ter-optimize (WebP, correct sizing)
- [ ] No console errors
- [ ] Metadata & OG tags benar
- [ ] Favicon terinstall

---

## Notes & Decisions

| Tanggal | Keputusan | Alasan |
|---------|-----------|--------|
| — | Next.js 15 + GSAP (bukan Framer Motion) | Lebih fleksibel untuk awwwards-level animations |
| — | One-page landing (bukan multi-page) | Sesuai brief, fokus konversi |
| — | Dark theme (navy + gold) | Mencerminkan premium glass material |
| — | WhatsApp sebagai primary CTA | Sesuai kebiasaan klien B2B Indonesia |

---

## Blockers / Waiting

- 🔲 Logo NADAZ PNG (dari klien)
- 🔲 Foto produk (dari Google Drive klien)
- 🔲 Foto portofolio (dari Google Drive klien)
- 🔲 Testimoni asli
- 🔲 Logo klien-klien unggulan
- 🔲 Google Maps link final
- 🔲 Konfirmasi nomor WA

# Hero Section Redesign — Design Spec

**Date:** 2026-06-14
**Project:** NADAZ Website (nadaz.co.id)
**Component:** `components/sections/HeroSection.tsx` + `components/ui/HeroVideoBackground.tsx`

---

## Goal

Redesign the hero section dari layout pendek satu-kolom menjadi split layout dua-kolom yang lebih impactful, dengan headline outcome-focused dan stats strip untuk memperkuat kepercayaan klien B2B pertama kali melihat halaman.

---

## Layout

**Desktop (lg+):**
- Split 2 kolom: kiri 55% konten, kanan 45% foto
- Height: `min-h-[85svh]`
- Konten kiri: vertikal center (`justify-center`)
- Panel kanan: foto `object-cover` full panel, dengan floating project card di pojok bawah

**Mobile (< lg):**
- Panel kanan tersembunyi (`hidden lg:block`)
- Konten full-width, vertikal center
- Stats strip tetap tampil 3 kolom di bawah CTA
- Height: `auto`, padding atas cukup untuk navbar

---

## Konten Panel Kiri

### Badge Pills (atas headline)
Tiga pill kecil horizontal:
- "Sejak 2016"
- "Jabodetabek"
- "Gratis Pasang & Ongkir"

Style: `bg-[--color-brand-gold]/12 border border-[--color-brand-gold]/35 text-[--color-brand-gold]` rounded-full

### Headline (H1)
```
Ruang Profesional
Dimulai dari
Kaca yang Tepat
```
- Font: **Cormorant Garamond** — **belum di-load, harus ditambahkan** ke `app/layout.tsx` via `next/font/google`, ekspor CSS variable `--font-display`, lalu pakai via `font-[family-name:var(--font-display)]` di className
- Size: `text-4xl sm:text-5xl lg:text-6xl`
- Weight: `font-semibold`
- "Kaca yang Tepat" diberi warna `text-[--color-brand-gold]` sebagai visual anchor

### Subtitle
```
Glassboard korporat, cermin gym, partisi kaca tempered bersertifikat. 
Kami urus dari pengukuran hingga pemasangan.
```
- Font: Outfit (font body project saat ini, via `--font-outfit`), `text-sm sm:text-base`
- Color: `text-[--color-brand-muted]`

### CTA Row
Dua tombol horizontal (stacked di mobile):
1. **"Minta Penawaran Gratis"** → `btn-primary` → `SITE.whatsappLink`
2. **"Jelajahi Produk"** → `btn-outline` → `#produk`

### Stats Strip
Tiga kolom dipisah garis vertikal tipis, di bawah CTA, di atas border tipis:

| Angka | Label |
|-------|-------|
| 500+ | Proyek Selesai |
| 9 | Tahun Berpengalaman |
| 100+ | Klien Korporat |

- Angka: Cormorant Garamond (`font-[family-name:var(--font-display)]`), `text-4xl`, `text-[--color-brand-gold]`
- Label: Outfit, `text-xs`, `text-[--color-brand-muted]`
- Border top `border-[--color-glass-border]` memisahkan dari CTA

---

## Konten Panel Kanan

### Foto Hero
- `<Image src={ASSETS.hero} fill className="object-cover object-center" />`
- Overlay tipis gradient kiri (`from-[#fffdf9]/25 to-transparent`) untuk blend ke panel kiri
- `priority` prop karena above the fold

### Floating Project Card
Kartu kecil di pojok kiri-bawah panel kanan:
- Background: `bg-white/92 backdrop-blur-md`
- Border kiri: `border-l-2 border-[--color-brand-gold]`
- Shadow: `shadow-lg`
- Konten hardcoded (tidak dinamis):
  - Label: "Featured Project" (gold, uppercase, xs)
  - Judul: "PT HM Sampoerna — Glassboard Korporat"
  - Meta: "Jakarta Selatan · Kaca Tempered 12mm"
- Animasi: `gsap.fromTo` slide-up (`y: 16 → 0, autoAlpha: 0 → 1`) setelah timeline utama selesai (`"-=0.2"`)

---

## Animasi (GSAP)

Gunakan pola yang sudah ada di codebase (`useGSAP`, `ScrollTrigger` tidak diperlukan di hero — entrance langsung saat mount).

Timeline sequence:
1. Badge pills → `autoAlpha: 0, y: 12` → `autoAlpha: 1, y: 0`, duration 0.6
2. H1 → `autoAlpha: 0, y: 32` → `autoAlpha: 1, y: 0`, duration 0.95, overlap `-=0.35`
3. Subtitle → `autoAlpha: 0, y: 20` → duration 0.7, overlap `-=0.45`
4. CTA buttons → stagger 0.1, overlap `-=0.4`
5. Stats strip → `autoAlpha: 0, y: 16` → duration 0.6, overlap `-=0.3`
6. Project card → `autoAlpha: 0, y: 16` → duration 0.5, overlap `-=0.2`

Parallax scroll fade (sudah ada, pertahankan):
```js
gsap.to(".hero-content", { yPercent: 10, autoAlpha: 0.55, scrub: 1 })
```

---

## File yang Diubah

| File | Perubahan |
|------|-----------|
| `app/layout.tsx` | Tambah import `Cormorant_Garamond` dari `next/font/google`, ekspor `--font-display` CSS variable |
| `components/sections/HeroSection.tsx` | Rewrite layout + konten + GSAP timeline |
| `components/ui/HeroVideoBackground.tsx` | Tidak diubah — komponen ini di-remove dari hero baru; panel kanan pakai `<Image>` langsung |

> **Catatan:** `HeroVideoBackground` tidak lagi digunakan di `HeroSection` setelah redesign. Komponen bisa dihapus atau dibiarkan (tidak berdampak ke bundle karena tree-shaken).

---

## Responsivitas

| Breakpoint | Behavior |
|-----------|----------|
| Mobile (< lg) | Single column, panel kanan hidden, stats 3-kolom |
| Desktop (lg+) | Split 55/45, panel kanan tampil dengan project card |

---

## Hal yang Tidak Berubah

- Background light theme (white-gold) — konsisten dengan brand
- CTA destinations (WhatsApp link + anchor ke #produk)
- GSAP provider dan plugin registration
- Parallax scroll fade effect
- `SITE.*` constants dan `ASSETS.*` references

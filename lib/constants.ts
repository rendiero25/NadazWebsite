export const SITE = {
  name: "NADAZ",
  company: "PT. Arta Prima Glassindo",
  tagline: "Pemasangan kaca tempered & aluminium profesional di Jabodetabek",
  url: "https://nadaz.co.id",
  whatsapp: "082124809191",
  whatsappLink: "https://wa.me/6282124809191",
  instagram: "https://www.instagram.com/glassboardindonesia/",
  instagramHandle: "@glassboardindonesia",
  address: "Jl. Dayaguna III No. 99A, Mampang, Pancoran Mas, Kota Depok",
  mapsEmbed:
    "https://maps.google.com/maps?q=Jl.+Dayaguna+III+No.+99A,+Pancoran+Mas,+Kota+Depok,+Jawa+Barat&hl=id&z=16&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/Jl.+Dayaguna+III+No.+99A,+Pancoran+Mas,+Depok",
} as const;

export const NAV_LINKS = [
  { label: "Produk", href: "#produk" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Klien", href: "#klien" },
  { label: "Kontak", href: "#kontak" },
] as const;

export const FOOTER_LINKS = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#tentang" },
  { label: "Produk", href: "#produk" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Klien", href: "#klien" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
] as const;

export const SECTION_IDS = [
  "hero",
  "tentang",
  "produk",
  "keunggulan",
  "portofolio",
  "klien",
  "testimoni",
  "kontak",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

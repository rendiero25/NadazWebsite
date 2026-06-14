import { ASSETS } from "@/lib/assets";

export type PortfolioCategory = "Glassboard" | "Cermin" | "Partisi";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface PortfolioProject {
  id: string;
  client: string;
  type: string;
  category: PortfolioCategory;
  location: string;
  image: string;
}

export interface ClientItem {
  name: string;
  logo?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
  avatar: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "magnetic-glassboard",
    name: "Magnetic Glassboard",
    description:
      "Presentasi lebih profesional — papan tulis kaca magnet tahan gores, mudah dibersihkan, dan tampil premium di ruang meeting serta kantor eksekutif.",
    image: ASSETS.products["magnetic-glassboard"],
  },
  {
    id: "standing-glassboard",
    name: "Standing Glassboard",
    description:
      "Fleksibel dipindah ke ruang mana saja. Cocok untuk brainstorming cepat dan sesi kolaborasi tanpa perlu renovasi permanen.",
    image: ASSETS.products["standing-glassboard"],
  },
  {
    id: "cermin-gym",
    name: "Cermin Gym",
    description:
      "Cermin tempered tebal 5–6 mm — aman untuk area latihan intensif, pantulan presisi tanpa distorsi, terpasang kokoh di dinding beton maupun gypsum.",
    image: ASSETS.products["cermin-gym"],
  },
  {
    id: "cermin-toilet",
    name: "Cermin Toilet / Studio",
    description:
      "Ukuran custom sesuai ruang Anda — tepi halus, pantulan jernih untuk kamar mandi, salon, dan studio kecantikan yang butuh presisi.",
    image: ASSETS.products["cermin-toilet"],
  },
  {
    id: "partisi-kaca",
    name: "Partisi Kaca",
    description:
      "Membagi ruang tanpa kehilangan cahaya alami. Frame aluminium presisi, kokoh, dan mudah dirawat untuk kantor maupun area komersial.",
    image: ASSETS.products["partisi-kaca"],
  },
  {
    id: "pintu-aluminium",
    name: "Pintu & Jendela Aluminium",
    description:
      "Sistem bukaan tahan lama dengan engsel dan kunci berkualitas — finishing rapi untuk hunian maupun area komersial dengan traffic tinggi.",
    image: ASSETS.products["pintu-aluminium"],
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "sampoerna",
    client: "PT. HM Sampoerna Tbk",
    type: "Glasstone / Glassboard Premium",
    category: "Glassboard",
    location: "Jakarta",
    image: "/images/clients/sampoerna.jpg",
  },
  {
    id: "timah-karya",
    client: "PT. Timah Karya Persada Properti",
    type: "Magnetic Glassboard",
    category: "Glassboard",
    location: "Jakarta",
    image: ASSETS.products["magnetic-glassboard"],
  },
  {
    id: "sd-sqii",
    client: "SD Quantum Inti Indonesia",
    type: "Cermin Dinding Besar",
    category: "Cermin",
    location: "Jabodetabek",
    image: ASSETS.portfolio["sd-sqii"],
  },
  {
    id: "heri-tebet",
    client: "Pak Heri Aji",
    type: "Cermin Gym 400 × 180 cm",
    category: "Cermin",
    location: "Tebet, Jakarta Selatan",
    image: ASSETS.products["cermin-gym"],
  },
  {
    id: "liza-tangerang",
    client: "Bu Liza Maulani",
    type: "Cermin Studio Premium",
    category: "Cermin",
    location: "Tangerang",
    image: ASSETS.portfolio["liza-tangerang"],
  },
  {
    id: "dyah-depok",
    client: "Bu Dyah — Kukusan Depok",
    type: "Cermin Besar Custom",
    category: "Cermin",
    location: "Depok",
    image: ASSETS.portfolio["dyah-depok"],
  },
  {
    id: "sma-insan-cendekia",
    client: "SMA Insan Cendekia Boarding School",
    type: "Etalase Kaca & Aluminium",
    category: "Partisi",
    location: "Sentul, Bogor",
    image: ASSETS.about,
  },
  {
    id: "lemari-piala",
    client: "Instansi Pendidikan",
    type: "Etalase Lemari Piala Kaca",
    category: "Partisi",
    location: "Jabodetabek",
    image: ASSETS.products["cermin-toilet"],
  },
  {
    id: "coak-kaca",
    client: "Proyek Komersial",
    type: "Coak & Potongan Kaca Presisi",
    category: "Partisi",
    location: "Jabodetabek",
    image: ASSETS.products["partisi-kaca"],
  },
];

export const PORTFOLIO_FILTERS: Array<"Semua" | PortfolioCategory> = [
  "Semua",
  "Glassboard",
  "Cermin",
  "Partisi",
];

export const CLIENTS: ClientItem[] = [
  { name: "PT. HM Sampoerna Tbk", logo: "/logo/sampoerna.png" },
  { name: "IFIT Indonesia", logo: "/logo/ifit.png" },
  { name: "Kementerian Perindustrian RI", logo: "/logo/kemenper.png" },
  { name: "BNN", logo: "/logo/bnn.png" },
  { name: "Polda Metro Jaya", logo: "/logo/polda.png" },
  { name: "Mie Gacoan", logo: "/logo/gacoan.webp" },
  { name: "Artika Sari Devi", logo: "/logo/asd.jpg" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "heri",
    quote:
      "Cermin gym 400 × 180 cm terpasang rapi di Tebet. Dari pengukuran sampai finishing, tim NADAZ tepat waktu dan hasilnya melebihi ekspektasi.",
    name: "Pak Heri Aji",
    role: "Pemilik Home Gym, Tebet Jakarta Selatan",
    rating: 5,
    avatar: "https://picsum.photos/seed/nadaz-heri-aji/128/128",
  },
  {
    id: "liza",
    quote:
      "Cermin studio di Tangerang terpasang presisi dan sesuai jadwal. Respons via WhatsApp cepat, dan gratis ongkir Jabodetabek benar-benar menghemat biaya proyek.",
    name: "Bu Liza Maulani",
    role: "Studio Fitness, Tangerang",
    rating: 5,
    avatar: "https://picsum.photos/seed/nadaz-liza-maulani/128/128",
  },
  {
    id: "dyah",
    quote:
      "Cermin custom 730 × 200 cm untuk usaha di Depok dipasang aman dan rapi. Kualitas kaca tempered-nya terasa premium, tamu langsung notice.",
    name: "Bu Dyah",
    role: "Usaha Kuliner, Depok",
    rating: 5,
    avatar: "https://picsum.photos/seed/nadaz-dyah-depok/128/128",
  },
];

export const ABOUT_STATS: StatItem[] = [
  { id: "years", value: 9, suffix: "+", label: "Tahun melayani Jabodetabek" },
  { id: "products", value: 500, suffix: "+", label: "Unit kaca terpasang" },
  { id: "clients", value: 50, suffix: "+", label: "Klien korporat & instansi" },
  { id: "areas", value: 5, suffix: "", label: "Kota wilayah layanan" },
];

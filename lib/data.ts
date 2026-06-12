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
      "Papan tulis kaca magnet premium untuk ruang meeting, kantor, dan ruang presentasi modern.",
    image: ASSETS.products["magnetic-glassboard"],
  },
  {
    id: "standing-glassboard",
    name: "Standing Glassboard",
    description:
      "Glassboard berdiri fleksibel dengan kaki roda — ideal untuk brainstorming dan ruang kolaboratif.",
    image: ASSETS.products["standing-glassboard"],
  },
  {
    id: "cermin-gym",
    name: "Cermin Gym",
    description:
      "Cermin dinding tempered tebal untuk studio fitness, gym, dan pusat kebugaran profesional.",
    image: ASSETS.products["cermin-gym"],
  },
  {
    id: "cermin-toilet",
    name: "Cermin Toilet / Studio",
    description:
      "Cermin custom presisi untuk kamar mandi, ruang rias, salon, dan studio kecantikan.",
    image: ASSETS.products["cermin-toilet"],
  },
  {
    id: "partisi-kaca",
    name: "Partisi Kaca",
    description:
      "Sekat ruang elegan dengan frame aluminium presisi — transparan, kokoh, dan fungsional.",
    image: ASSETS.products["partisi-kaca"],
  },
  {
    id: "pintu-aluminium",
    name: "Pintu & Jendela Aluminium",
    description:
      "Sistem bukaan aluminium tahan lama dengan finishing rapi untuk hunian dan komersial.",
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
  { name: "PT. HM Sampoerna Tbk", logo: "/images/clients/sampoerna.jpg" },
  { name: "IFIT Indonesia" },
  { name: "Kementerian Perindustrian RI" },
  { name: "BNN" },
  { name: "Polda Metro Jaya" },
  { name: "Mie Gacoan" },
  { name: "Artika Sari Devi" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "heri",
    quote:
      "Cermin gym 400 × 180 cm terpasang rapi di Tebet. Tim NADAZ profesional dari ukur sampai finishing, hasilnya sangat memuaskan.",
    name: "Pak Heri Aji",
    role: "Pemilik Home Gym, Tebet Jakarta Selatan",
    rating: 5,
  },
  {
    id: "liza",
    quote:
      "Pemasangan cermin studio di Tangerang tepat waktu dan presisi. Komunikasi via WhatsApp responsif, free ongkir Jabodetabek sangat membantu.",
    name: "Bu Liza Maulani",
    role: "Studio Fitness, Tangerang",
    rating: 5,
  },
  {
    id: "dyah",
    quote:
      "Cermin besar custom 730 × 200 cm untuk usaha di Depok dipasang dengan aman dan rapi. Kualitas kaca tempered terasa premium.",
    name: "Bu Dyah",
    role: "Usaha Kuliner, Depok",
    rating: 5,
  },
];

export const ABOUT_STATS: StatItem[] = [
  { id: "years", value: 9, suffix: "+", label: "Tahun berpengalaman" },
  { id: "products", value: 500, suffix: "+", label: "Produk terpasang" },
  { id: "clients", value: 50, suffix: "+", label: "Klien korporat" },
  { id: "areas", value: 5, suffix: "", label: "Kota area layanan" },
];

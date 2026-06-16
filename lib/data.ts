import { ASSETS } from "@/lib/assets";
import { getProjectGallery } from "@/lib/portfolio-galleries";

export type PortfolioCategory =
  | "Glassboard"
  | "Glasstone"
  | "Cermin"
  | "Etalase"
  | "Partisi"
  | "Jendela & Aluminium";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export interface PortfolioProject {
  id: string;
  client: string;
  type: string;
  category: PortfolioCategory;
  location: string;
  image: string;
  gallery: string[];
}

type PortfolioProjectInput = Omit<PortfolioProject, "gallery">;

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

export const MAIN_PRODUCTS: Product[] = [
  {
    id: "glassboard",
    name: "Glassboard",
    description:
      "Magnetic glassboard, standing glassboard, dan glassboard frame — papan tulis kaca premium tahan gores untuk ruang meeting, kantor eksekutif, dan instansi.",
    image: "/images/products/GLASSBOARD/Foto glassboard/IMG_0534.jpg",
    category: "Produk Utama",
  },
  {
    id: "cermin",
    name: "Cermin",
    description:
      "Cermin besar, home gym, kaki roda, toilet & wastafel — tempered custom 5–6 mm dengan ukuran presisi untuk hunian, studio, dan area komersial.",
    image:
      "/images/products/CERMIN BESAR/Pak Heri Aji Tebet jaksel/16-4-2026 foto(2).jpg",
    category: "Produk Utama",
  },
];

export const OTHER_PRODUCTS: Product[] = [
  {
    id: "partisi-kaca",
    name: "Partisi Kaca",
    description:
      "Membagi ruang tanpa kehilangan cahaya alami. Frame aluminium presisi, kokoh, dan mudah dirawat untuk kantor maupun area komersial.",
    image: "/images/products/partisikaca.jpg",
    category: "Produk Lainnya",
  },
  {
    id: "pintu-aluminium",
    name: "Pintu & Jendela Aluminium",
    description:
      "Sistem bukaan tahan lama dengan engsel dan kunci berkualitas — finishing rapi untuk hunian maupun area komersial dengan traffic tinggi.",
    image: "/images/products/pintualuminium.jpg",
    category: "Produk Lainnya",
  },
];

const PORTFOLIO_PROJECTS_BASE: PortfolioProjectInput[] = [
  {
    id: "timah-karya",
    client: "PT. Timah Karya Persada Properti",
    type: "Magnetic Glassboard",
    category: "Glassboard",
    location: "Jakarta",
    image: ASSETS.portfolio["timah-karya"],
  },
  {
    id: "glassboard-showcase",
    client: "Berbagai Instansi & Kantor",
    type: "Glassboard Premium",
    category: "Glassboard",
    location: "Jabodetabek",
    image: ASSETS.portfolio["glassboard-showcase"],
  },
  {
    id: "glassboard-frame",
    client: "Proyek Kantor",
    type: "Glassboard dengan Frame Aluminium",
    category: "Glassboard",
    location: "Jabodetabek",
    image: ASSETS.portfolio["glassboard-frame"],
  },
  {
    id: "sampoerna-glasstone",
    client: "PT. HM Sampoerna Tbk",
    type: "Glasstone / Glassboard Premium",
    category: "Glasstone",
    location: "Jakarta",
    image: ASSETS.portfolio["glasstone-sampoerna"],
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
    image: ASSETS.portfolio["heri-tebet"],
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
    type: "Cermin Besar Custom 730 × 200 cm",
    category: "Cermin",
    location: "Depok",
    image: ASSETS.portfolio["dyah-depok"],
  },
  {
    id: "cermin-besar-showcase",
    client: "Proyek Residensial & Komersial",
    type: "Cermin Dinding Besar Custom",
    category: "Cermin",
    location: "Jabodetabek",
    image: ASSETS.portfolio["cermin-besar-showcase"],
  },
  {
    id: "cermin-home-gym",
    client: "Home Gym Premium",
    type: "Cermin Gym Tempered",
    category: "Cermin",
    location: "Jabodetabek",
    image: ASSETS.portfolio["cermin-home-gym"],
  },
  {
    id: "cermin-kaki-roda",
    client: "Studio & Salon",
    type: "Cermin dengan Kaki Roda",
    category: "Cermin",
    location: "Jabodetabek",
    image: ASSETS.portfolio["cermin-kaki-roda"],
  },
  {
    id: "cermin-toilet-wastafel",
    client: "Hunian & Komersial",
    type: "Cermin Toilet & Wastafel",
    category: "Cermin",
    location: "Jabodetabek",
    image: ASSETS.portfolio["cermin-toilet-wastafel"],
  },
  {
    id: "coak-kaca",
    client: "Proyek Komersial",
    type: "Coak & Potongan Kaca Presisi",
    category: "Cermin",
    location: "Jabodetabek",
    image: ASSETS.portfolio["coak-kaca"],
  },
  {
    id: "sma-insan-cendekia",
    client: "SMA Insan Cendekia Boarding School",
    type: "Etalase Kaca & Aluminium",
    category: "Etalase",
    location: "Sentul, Bogor",
    image: ASSETS.portfolio["sma-insan-cendekia"],
  },
  {
    id: "lemari-piala",
    client: "Instansi Pendidikan",
    type: "Etalase Lemari Piala Kaca",
    category: "Etalase",
    location: "Jabodetabek",
    image: ASSETS.portfolio["lemari-piala"],
  },
  {
    id: "partisi-kaca",
    client: "Proyek Kantor & Komersial",
    type: "Partisi Kaca",
    category: "Partisi",
    location: "Jabodetabek",
    image: ASSETS.portfolio["partisi-kaca"],
  },
  {
    id: "jendela-aluminium",
    client: "Proyek Residensial & Komersial",
    type: "Pintu & Jendela Aluminium",
    category: "Jendela & Aluminium",
    location: "Jabodetabek",
    image: ASSETS.portfolio["jendela-aluminium"],
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] =
  PORTFOLIO_PROJECTS_BASE.map((project) => ({
    ...project,
    gallery: getProjectGallery(project.id, project.image),
  }));

export const PORTFOLIO_FILTERS: Array<"Semua" | PortfolioCategory> = [
  "Semua",
  "Glassboard",
  "Glasstone",
  "Cermin",
  "Etalase",
  "Partisi",
  "Jendela & Aluminium",
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
    avatar: ASSETS.portfolio["dyah-depok"],
  },
];

export const ABOUT_STATS: StatItem[] = [
  { id: "years", value: 9, suffix: "+", label: "Tahun melayani Jabodetabek" },
  { id: "products", value: 500, suffix: "+", label: "Unit kaca terpasang" },
  { id: "clients", value: 50, suffix: "+", label: "Klien korporat & instansi" },
  { id: "areas", value: 5, suffix: "", label: "Kota wilayah layanan" },
];

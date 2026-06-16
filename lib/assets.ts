/**
 * Path aset gambar website — semua file ada di public/images.
 */
export const ASSETS = {
  logo: "/images/logo/nadaz.png",
  logoCompany: "/images/logo/pt.jpg",
  hero: "/images/hero/glassboard-timah-karya.jpg",
  heroPoster: "/images/hero/light-through-glass-poster.jpg",
  heroVideoMp4: "/videos/hero-light-through-glass.mp4",
  heroVideoWebm: "/videos/hero-light-through-glass.webm",
  about: "/images/about/insan-cendekia.jpg",
  products: {
    glassboard:
      "/images/products/GLASSBOARD/Foto glassboard/IMG_0451.jpg",
    "glassboard-frame": "/images/products/GLASSBOARD FRAME/IMG_0269.jpg",
    "cermin-besar": "/images/products/CERMIN BESAR/FOTO/IMG_0901.jpg",
    "cermin-home-gym": "/images/products/CERMIN HOME GYM/IMG_0960.jpg",
    "cermin-kaki-roda": "/images/products/CERMIN KAKI RODA/IMG_1125.jpg",
    "cermin-toilet-wastafel":
      "/images/products/CERMIN TOILET - WASTAFEL/IMG_0470.jpg",
    etalase:
      "/images/products/ETALASE/SMA insan cendekia boarding school sentul/kunci etalase 22-4-2026.jpg",
    "coak-kaca": "/images/products/Coak kaca/IMG-20241012-WA0012.jpg",
  },
  portfolio: {
    "timah-karya":
      "/images/products/GLASSBOARD/PT. Timah karya Persada Properti/3.jpg",
    "glassboard-showcase":
      "/images/products/GLASSBOARD/Foto glassboard/IMG_0451.jpg",
    "glassboard-frame": "/images/products/GLASSBOARD FRAME/IMG_0269.jpg",
    "sd-sqii":
      "/images/products/CERMIN BESAR/SD SQII (sekolah quantum inti indonesia)/foto.jpg",
    "heri-tebet":
      "/images/products/CERMIN BESAR/Pak Heri Aji Tebet jaksel/400 x 180 cm foto.jpg",
    "liza-tangerang":
      "/images/products/CERMIN BESAR/Bu Liza Maulani Tangerang/foto 21-4-2026.jpg",
    "dyah-depok":
      "/images/products/CERMIN BESAR/Bu Dyah Kukusan Depok/17-4-2026 foto.jpg",
    "cermin-besar-showcase": "/images/products/CERMIN BESAR/FOTO/IMG_0901.jpg",
    "cermin-home-gym": "/images/products/CERMIN HOME GYM/IMG_0960.jpg",
    "cermin-kaki-roda": "/images/products/CERMIN KAKI RODA/IMG_1125.jpg",
    "cermin-toilet-wastafel":
      "/images/products/CERMIN TOILET - WASTAFEL/IMG_0470.jpg",
    "sma-insan-cendekia":
      "/images/products/ETALASE/SMA insan cendekia boarding school sentul/kunci etalase 22-4-2026.jpg",
    "lemari-piala":
      "/images/products/ETALASE/Foto lemari piala/IMG-20241011-WA0002.jpg",
    "coak-kaca": "/images/products/Coak kaca/IMG-20241012-WA0012.jpg",
    "glasstone-sampoerna":
      "/images/products/GLASSTONE/PT. HM Sampoerna/PT. HM Sampoerna.jpg",
    "partisi-kaca": "/images/products/partisikaca.jpg",
    "jendela-aluminium": "/images/products/pintualuminium.jpg",
  },
} as const;

export function assetUrl(path: string): string {
  return encodeURI(path);
}

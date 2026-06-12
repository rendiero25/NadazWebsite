/**
 * Path aset gambar website — semua file ada di public/images.
 */
export const ASSETS = {
  logo: "/images/logo/nadaz.jpg",
  logoCompany: "/images/logo/pt.jpg",
  hero: "/images/hero/glassboard-timah-karya.jpg",
  about: "/images/about/insan-cendekia.jpg",
  products: {
    "magnetic-glassboard": "/images/hero/glassboard-timah-karya.jpg",
    "standing-glassboard": "/images/products/standing-glassboard.jpg",
    "cermin-gym": "/images/products/cermin-gym.jpg",
    "cermin-toilet": "/images/products/cermin-toilet.jpg",
    "partisi-kaca": "/images/products/partisi-kaca.jpg",
    "pintu-aluminium": "/images/products/pintu-aluminium.jpg",
  },
  portfolio: {
    "sd-sqii": "/images/portfolio/sd-sqii.jpg",
    "liza-tangerang": "/images/portfolio/liza-tangerang.jpg",
    "dyah-depok": "/images/portfolio/dyah-depok.jpg",
  },
} as const;

export function assetUrl(path: string): string {
  return encodeURI(path);
}

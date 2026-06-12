import Image from "next/image";
import Link from "next/link";
import { ASSETS, assetUrl } from "@/lib/assets";
import { cn } from "@/lib/utils";

interface NadazLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { height: 32, text: "text-xl" },
  md: { height: 40, text: "text-2xl" },
  lg: { height: 48, text: "text-3xl" },
} as const;

export default function NadazLogo({
  className,
  showText = false,
  size = "md",
}: NadazLogoProps) {
  const { height, text } = sizeMap[size];

  return (
    <Link
      href="#hero"
      className={cn(
        "group inline-flex items-center gap-3 transition-opacity hover:opacity-90",
        className
      )}
      aria-label="NADAZ — kembali ke beranda"
    >
      <Image
        src={assetUrl(ASSETS.logo)}
        alt="Logo NADAZ"
        width={Math.round(height * 2.8)}
        height={height}
        className="h-auto w-auto shrink-0 object-contain"
        priority
      />
      {showText && (
        <span
          className={cn(
            "font-display font-semibold tracking-[0.12em] text-[--color-brand-white] uppercase",
            text
          )}
        >
          NADAZ
        </span>
      )}
    </Link>
  );
}

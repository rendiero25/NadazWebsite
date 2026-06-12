import Image from "next/image";
import { assetUrl } from "@/lib/assets";
import { cn } from "@/lib/utils";

interface AssetImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function AssetImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 33vw",
  fill = true,
  width,
  height,
}: AssetImageProps) {
  const encodedSrc = assetUrl(src);

  if (!fill && width && height) {
    return (
      <Image
        src={encodedSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={cn("object-cover", imageClassName, className)}
        sizes={sizes}
      />
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={encodedSrc}
        alt={alt}
        fill
        priority={priority}
        className={cn("object-cover", imageClassName)}
        sizes={sizes}
      />
    </div>
  );
}

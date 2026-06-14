import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Satu lebar kontainer dengan navbar — pakai di semua section */
export const PAGE_CONTAINER =
  "mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8";

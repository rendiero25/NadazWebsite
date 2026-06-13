"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/assets";

export default function HeroVideoBackground() {
  return (
    <div
      className="hero-cinematic-bg pointer-events-none absolute inset-0 overflow-hidden bg-gradient-to-br from-white via-[#fff9ee] to-[#f5efe3]"
      aria-hidden
    >
      <div className="hero-light-beam hero-light-beam-1" />
      <div className="hero-light-beam hero-light-beam-2" />
      <div className="hero-light-beam hero-light-beam-3" />
      <div className="hero-light-beam hero-light-beam-4" />
      <div className="hero-glass-sheen" />

      <Image
        src={ASSETS.hero}
        alt=""
        fill
        priority
        className="hero-media-layer object-cover object-center"
        sizes="100vw"
      />

      <div className="hero-cinematic-overlay absolute inset-0" />
      <div className="hero-grain absolute inset-0" />
    </div>
  );
}

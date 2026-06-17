"use client";

export const SCROLL_READY_EVENT = "nadaz:scroll-ready";

type NadazWindow = Window & { __nadazScrollReady?: boolean };

export function isScrollReady(): boolean {
  if (typeof window === "undefined") return false;
  return (window as NadazWindow).__nadazScrollReady === true;
}

export function markScrollReady(): void {
  if (typeof window === "undefined") return;
  (window as NadazWindow).__nadazScrollReady = true;
  window.dispatchEvent(new CustomEvent(SCROLL_READY_EVENT));
}

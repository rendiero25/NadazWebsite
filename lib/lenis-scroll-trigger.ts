"use client";

import type Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SCROLL_READY_EVENT = "nadaz:scroll-ready";

function getScrollElement(): HTMLElement {
  return document.documentElement;
}

export function bindLenisScrollTrigger(lenis: Lenis): () => void {
  const scrollElement = getScrollElement();

  ScrollTrigger.scrollerProxy(scrollElement, {
    scrollTop(value) {
      if (arguments.length && value !== undefined) {
        lenis.scrollTo(value, { immediate: true });
      }
      return lenis.scroll;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: "transform",
  });

  const onLenisResize = () => {
    lenis.resize();
  };

  ScrollTrigger.addEventListener("refresh", onLenisResize);
  lenis.on("scroll", ScrollTrigger.update);

  const tickerCallback = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  const refreshScrollTriggers = () => {
    ScrollTrigger.refresh();
  };

  requestAnimationFrame(refreshScrollTriggers);
  window.addEventListener("load", refreshScrollTriggers);

  let resizeFrame = 0;
  const onResize = () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(refreshScrollTriggers);
  };

  window.addEventListener("resize", onResize);
  window.dispatchEvent(new CustomEvent(SCROLL_READY_EVENT));

  return () => {
    window.removeEventListener("load", refreshScrollTriggers);
    window.removeEventListener("resize", onResize);
    cancelAnimationFrame(resizeFrame);
    ScrollTrigger.removeEventListener("refresh", onLenisResize);
    lenis.off("scroll", ScrollTrigger.update);
    gsap.ticker.remove(tickerCallback);
    ScrollTrigger.scrollerProxy(scrollElement, {});
  };
}

export function refreshScrollTriggers() {
  if (typeof window === "undefined") return;
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

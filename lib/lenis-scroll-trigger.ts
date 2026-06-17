"use client";

import type Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { markScrollReady } from "@/lib/scroll-ready";

export { SCROLL_READY_EVENT } from "@/lib/scroll-ready";

export function getScrollElement(): HTMLElement {
  return document.documentElement;
}

export function withPageScroller(
  config: ScrollTrigger.Vars
): ScrollTrigger.Vars {
  return {
    ...config,
    scroller: getScrollElement(),
    invalidateOnRefresh: config.invalidateOnRefresh ?? true,
  };
}

export function applyScrollDefaults(): void {
  if (typeof window === "undefined") return;
  ScrollTrigger.defaults({ scroller: getScrollElement() });
}

export function syncAllScrollTriggers(): void {
  if (typeof window === "undefined") return;

  const scroller = getScrollElement();
  applyScrollDefaults();
  ScrollTrigger.getAll().forEach((trigger) => {
    trigger.scroller = scroller;
  });
  ScrollTrigger.refresh();
}

function getScrollElementForProxy(): HTMLElement {
  return getScrollElement();
}

export function bindLenisScrollTrigger(lenis: Lenis): () => void {
  const scrollElement = getScrollElementForProxy();

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
    syncAllScrollTriggers();
  };

  requestAnimationFrame(refreshScrollTriggers);
  window.addEventListener("load", refreshScrollTriggers);

  let resizeFrame = 0;
  const onResize = () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(refreshScrollTriggers);
  };

  window.addEventListener("resize", onResize);
  markScrollReady();

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
  syncAllScrollTriggers();
}

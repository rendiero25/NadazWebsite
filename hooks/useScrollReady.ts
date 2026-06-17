"use client";

import { useEffect, useState } from "react";
import { isScrollReady, SCROLL_READY_EVENT } from "@/lib/scroll-ready";

export function useScrollReady(): boolean {
  const [ready, setReady] = useState(() => isScrollReady());

  useEffect(() => {
    if (isScrollReady()) {
      setReady(true);
      return;
    }

    const handleReady = () => setReady(true);
    window.addEventListener(SCROLL_READY_EVENT, handleReady);

    return () => window.removeEventListener(SCROLL_READY_EVENT, handleReady);
  }, []);

  return ready;
}

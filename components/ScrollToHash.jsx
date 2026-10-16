"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToSelector } from "@/lib/scrollTo";

export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    let cancelled = false;
    let attempts = 0;
    let timer;

    const attempt = () => {
      if (cancelled) return;
      const found = scrollToSelector(hash, { immediate: true });
      if (!found) {
        window.scrollTo(0, 0);
        return;
      }
      attempts += 1;
      if (attempts < 12) {
        timer = setTimeout(attempt, 80);
      }
    };

    timer = setTimeout(attempt, 0);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}

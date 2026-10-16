"use client";

import { useEffect, useSyncExternalStore } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { setLenisInstance } from "@/lib/scrollTo";

// Smooth scrolling only makes sense for mouse/trackpad wheels. On touch
// devices Lenis doesn't smooth anything (syncTouch is off) but still adds
// non-passive touch listeners and a per-frame rAF loop, which makes native
// scrolling janky — so skip it entirely there, and for reduced motion.
const DISABLE_QUERY = "(prefers-reduced-motion: reduce), (hover: none), (pointer: coarse)";

function subscribe(onChange) {
  const query = window.matchMedia(DISABLE_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const getSnapshot = () => !window.matchMedia(DISABLE_QUERY).matches;
// Render without Lenis on the server; the client decides after hydration.
const getServerSnapshot = () => false;

function LenisBridge() {
  const lenis = useLenis();
  useEffect(() => {
    setLenisInstance(lenis ?? null);
    return () => setLenisInstance(null);
  }, [lenis]);
  return null;
}

export function SmoothScrollProvider({ children }) {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Lenis is mounted beside the page rather than around it, so toggling it
  // after hydration doesn't remount the whole tree.
  return (
    <>
      {enabled && (
        <ReactLenis root options={{ lerp: 0.1, smoothWheel: true, wheelMultiplier: 1 }}>
          <LenisBridge />
        </ReactLenis>
      )}
      {children}
    </>
  );
}

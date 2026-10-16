"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EASE_IN = [0.22, 1, 0.36, 1];
const HOLD_MS = 650;
const FADE_MS = 700;

export function IntroSplash() {
  const [mounted, setMounted] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // With a hash the page jumps straight to a section, where a splash
    // pinned to the top of the document would be off-screen anyway.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.location.hash) {
      setMounted(false);
      return;
    }

    document.body.style.overflow = "hidden";
    const exitTimer = setTimeout(() => setExiting(true), HOLD_MS);
    const unmountTimer = setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = "";
    }, HOLD_MS + FADE_MS);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  // Deliberately `absolute` rather than `fixed`: Safari tints its toolbars
  // from fixed elements touching the screen edges, and would keep the
  // splash's red after it's gone. Scrolling is locked while it shows.
  return (
    <div className={`absolute inset-x-0 top-0 z-50 h-lvh ${exiting ? "pointer-events-none" : ""}`} aria-hidden="true">
      <motion.div
        className="absolute inset-0 bg-oxblood"
        style={{
          backgroundImage: "radial-gradient(120% 90% at 50% 38%, #7a1414 0%, #4c0606 46%, #2f0404 100%)",
        }}
        animate={{ opacity: exiting ? 0 : 1 }}
        transition={{ duration: FADE_MS / 1000, ease: "easeInOut" }}
      />
      <div className="flex h-full items-center justify-center">
        <motion.img
          src="/images/logos/apex-mark.svg"
          alt=""
          className="h-16 w-auto"
          style={{ filter: "brightness(0) invert(1)" }}
          initial={{ scale: 0.82, opacity: 0 }}
          animate={exiting ? { scale: 1.15, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE_IN }}
        />
      </div>
    </div>
  );
}

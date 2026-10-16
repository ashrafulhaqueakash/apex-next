"use client";

import Link from "next/link";
import { scrollToSelector } from "@/lib/scrollTo";
import { ChevronIcon } from "./Icons";

export function CTAButton({ children, className = "", onClick, href }) {
  const classes = `cta-red cursor-pointer rounded-[4px] border border-brand-edge/50 px-4 py-2 font-sans text-base font-medium text-white ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick ?? (() => scrollToSelector("#contact"))}
      className={classes}
    >
      {children}
    </button>
  );
}

export function RoundNavButton({ direction = "left", dark = false, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn-round flex h-10 w-10 cursor-pointer items-center justify-center rounded-[18px] backdrop-blur-sm ${
        dark ? "bg-coal/20 hover:bg-white/20" : "border border-coal/20 bg-transparent hover:border-coal/60 hover:bg-coal/5"
      } ${className}`}
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      <ChevronIcon direction={direction} stroke={dark ? "#fff" : "#000"} className="h-6 w-6" />
    </button>
  );
}

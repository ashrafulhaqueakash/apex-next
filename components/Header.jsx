"use client";

import { useState } from "react";
import Link from "next/link";
import { CTAButton } from "./ui/Button";
import { NavLinkPill } from "./NavLinkPill";
import { scrollToSelector } from "@/lib/scrollTo";

const NAV_LINKS = [
  { label: "What we do", to: "/what-we-do" },
  { label: "For advertisers", to: "/advertisers" },
  { label: "For property partners", to: "/property-partners" },
  // { label: "Locations", to: "/locations" },
  { label: "About", to: "/about" },
];

const HEADER_FADE = "linear-gradient(to bottom, #000 0%, #000 22%, transparent 100%)";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    // Safari 26 tints its status/tool bars from fixed elements that span
    // >=80% of the width at a screen edge, which turned the bars solid black.
    // On mobile the fixed box is zero-width and the visible header is an
    // absolute child, which Safari's check ignores — so page content shows
    // through the bars instead.
    <header className="fixed left-0 top-0 z-40 w-0 lg:right-0 lg:w-auto">
      <div className="absolute left-0 top-0 w-screen pt-[env(safe-area-inset-top)] lg:w-full">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[130px] hidden lg:block lg:backdrop-blur-[6px]"
          style={{ maskImage: HEADER_FADE, WebkitMaskImage: HEADER_FADE }}
        />
        {/* Desktop only: Safari 26 draws the status bar area without this
            overlay, so on mobile it left a hard seam just below the notch. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[130px] bg-gradient-to-b from-black/25 to-transparent lg:block" />

        <div className="relative mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-4 lg:px-14">
          <Link href="/" aria-label="The Apex Media Group — home" className="shrink-0">
            <img
              src="/images/logos/apex-mark.svg"
              alt="The Apex Media Group"
              className="h-5 w-[19px]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
            <div className="flex items-center gap-0.5 rounded-full border border-white/20 bg-black/25 p-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_30px_-12px_rgba(0,0,0,0.55)] backdrop-blur-xl">
              {NAV_LINKS.map((item) => (
                <NavLinkPill
                  key={item.label}
                  href={item.to}
                  className={(isActive) =>
                    `whitespace-nowrap rounded-full px-3.5 py-1.5 font-sans text-sm font-medium transition-colors duration-200 ${
                      isActive ? "bg-white/15 text-white" : "text-white/90 hover:bg-white/15"
                    }`
                  }
                >
                  {item.label}
                </NavLinkPill>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <CTAButton className="hidden !px-5 lg:block">TALK TO APEX</CTAButton>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="btn-round flex h-6 w-6 cursor-pointer items-center justify-center text-white lg:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                {open ? (
                  <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                ) : (
                  <path d="M3 6h18M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav className="mx-4 mb-3 flex flex-col gap-1 rounded-lg bg-ink/95 p-2 lg:hidden">
            {NAV_LINKS.map((item) => (
              <NavLinkPill
                key={item.label}
                href={item.to}
                onClick={() => setOpen(false)}
                className={(isActive) =>
                  `rounded-md px-4 py-3 font-sans text-base font-medium transition-colors duration-300 ${
                    isActive ? "bg-white/10 text-white" : "text-ivory hover:bg-white/10"
                  }`
                }
              >
                {item.label}
              </NavLinkPill>
            ))}
            <CTAButton
              className="mt-1 w-full"
              onClick={() => {
                setOpen(false);
                scrollToSelector("#contact");
              }}
            >
              TALK TO APEX
            </CTAButton>
          </nav>
        )}
      </div>
    </header>
  );
}

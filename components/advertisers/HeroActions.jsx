"use client";

import { CTAButton } from "@/components/ui/Button";
import { scrollToSelector } from "@/lib/scrollTo";

export function HeroActions() {

  return (
    <div className="mt-1 flex w-full flex-col items-center gap-3 lg:w-auto lg:flex-row">
      <CTAButton className="w-full !px-6 lg:w-auto" onClick={() => scrollToSelector("#contact")}>
        BRIEF APEX
      </CTAButton>
      <button
        type="button"
        onClick={() => scrollToSelector("#contact")}
        className="btn-outline btn-outline-ivory w-full cursor-pointer rounded-[4px] border border-white/60 px-6 py-2 font-sans text-base font-medium text-white lg:w-auto"
      >
        <span className="btn-label">REQUEST MEDIA KIT</span>
      </button>
    </div>
  );
}

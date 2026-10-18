import { Eyebrow } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { TERMS_METADATA } from "@/lib/termsData";

export function TermsHero() {
  return (
    <section className="relative flex min-h-[60vh] lg:min-h-[70vh] items-center justify-center overflow-hidden bg-ink pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background subtle architectural ambiance */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(ellipse at 50% 20%, #822e30 0%, transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,11,12,0.6) 0%, rgba(13,11,12,0.95) 75%, #0d0b0c 100%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center px-4 text-center lg:px-14">
        <Reveal className="flex flex-col items-center gap-5 lg:gap-6">
          <Eyebrow>LEGAL & REGULATORY DOCUMENTATION</Eyebrow>

          <h1 className="max-w-[1000px] font-display text-[32px] font-light leading-[38px] tracking-tight text-white sm:text-[44px] sm:leading-[50px] lg:text-[60px] lg:leading-[66px]">
            GENERAL TERMS &amp; CONDITIONS OF BUSINESS
          </h1>

          <p className="max-w-[760px] font-sans text-base leading-relaxed text-white/75 sm:text-lg">
            {TERMS_METADATA.edition}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

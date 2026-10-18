import { Eyebrow } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { PRIVACY_METADATA } from "@/lib/privacyData";

export function PrivacyHero() {
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
          <Eyebrow>CORPORATE PRIVACY &amp; DATA PROTECTION</Eyebrow>

          <h1 className="max-w-[1000px] font-display text-[32px] font-light leading-[38px] tracking-tight text-white sm:text-[44px] sm:leading-[50px] lg:text-[60px] lg:leading-[66px]">
            CORPORATE PRIVACY POLICY
          </h1>

          <p className="max-w-[760px] font-sans text-base leading-relaxed text-white/75 sm:text-lg">
            {PRIVACY_METADATA.legalEntity} &bull; {PRIVACY_METADATA.edition}
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-sans text-xs text-white/70 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span>Governed under {PRIVACY_METADATA.statutoryFramework}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

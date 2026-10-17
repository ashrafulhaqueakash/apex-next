import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";

export function PropertyConversion() {
  return (
    <section className="relative overflow-hidden bg-ivory px-4 py-16 lg:px-14 lg:py-24">
      <div className="pointer-events-none absolute -right-28 -top-36 h-[420px] w-[420px] rounded-full border border-ink/[0.06] lg:-right-16 lg:-top-52 lg:h-[600px] lg:w-[600px]" />
      <div className="relative mx-auto grid max-w-[1168px] gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <Reveal className="flex flex-col items-start gap-4">
          <Eyebrow tone="dark" align="left">Property Conversion</Eyebrow>
          <h2 className="max-w-[720px] font-display text-[28px] font-light leading-9 text-ink lg:text-[40px] lg:leading-[48px]">
            YOUR BUILDING IS ALREADY VISIBLE.
            <span className="block text-brand">MAKE THAT VISIBILITY WORK.</span>
          </h2>
          <div className="flex max-w-[640px] flex-col gap-2 font-sans text-base leading-6 text-ink/70 lg:text-lg lg:leading-7">
            <p>A prominent façade, development or rooftop could become a new commercial asset.</p>
            <p>
              Apex assesses the opportunity, creates the commercial model and manages everything required to bring it
              to market.
            </p>
          </div>
        </Reveal>

        <Reveal className="relative overflow-hidden rounded-2xl bg-ink p-6 text-white shadow-xl shadow-ink/10 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-brand/30 blur-3xl" />
          <div className="relative flex flex-col divide-y divide-white/15">
            {["ZERO CAPEX.", "MINIMAL DISRUPTION.", "FULLY MANAGED."].map((benefit, index) => (
              <div key={benefit} className="flex items-center gap-5 py-5 first:pt-0 last:pb-0">
                <span className="font-sans text-[11px] font-medium leading-4 tracking-[0.2em] text-gold">
                  0{index + 1}
                </span>
                <p className="font-display text-base font-light leading-6 sm:text-lg sm:leading-7">{benefit}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

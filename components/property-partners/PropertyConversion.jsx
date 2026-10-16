import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CTAButton } from "@/components/ui/Button";

const BENEFITS = ["ZERO CAPEX.", "MINIMAL DISRUPTION.", "FULLY MANAGED."];

export function PropertyConversion() {
  return (
    <section className="relative overflow-hidden bg-ivory px-4 py-14 lg:px-14 lg:py-20">
      <div className="pointer-events-none absolute -right-32 -top-40 h-[440px] w-[440px] rounded-full border border-ink/[0.06] lg:-right-16 lg:-top-52 lg:h-[600px] lg:w-[600px]" />
      <div className="relative mx-auto grid max-w-[1168px] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <Reveal className="flex flex-col items-start gap-5">
          <Eyebrow tone="dark" align="left">Property Conversion</Eyebrow>
          <h2 className="max-w-[720px] font-display text-[28px] font-light leading-9 text-ink lg:text-[40px] lg:leading-[48px]">
            YOUR BUILDING IS ALREADY VISIBLE.
            <span className="block text-brand">MAKE THAT VISIBILITY WORK.</span>
          </h2>
          <p className="max-w-[660px] font-sans text-base leading-6 text-ink/70 lg:text-lg lg:leading-7">
            Tell us about the property. We will assess its location, architecture, visibility and commercial potential.
          </p>
        </Reveal>

        <Reveal className="flex flex-col gap-6 rounded-2xl bg-ink p-6 text-white shadow-xl shadow-ink/10 sm:p-8 lg:p-10">
          <ul className="flex flex-col divide-y divide-white/15">
            {BENEFITS.map((benefit, index) => (
              <li key={benefit} className="flex items-center gap-5 py-4 first:pt-0 last:pb-0">
                <span className="font-sans text-[11px] font-medium leading-4 tracking-[0.2em] text-gold">
                  0{index + 1}
                </span>
                <span className="font-display text-lg font-light leading-7 sm:text-xl">{benefit}</span>
              </li>
            ))}
          </ul>
          <CTAButton className="w-full !px-8 sm:w-fit">UNLOCK YOUR PROPERTY</CTAButton>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CTAButton } from "@/components/ui/Button";

export function AboutClosing() {
  return (
    <section className="bg-ink px-4 py-12 lg:px-14 lg:py-16">
      <Reveal className="mx-auto grid max-w-[1168px] gap-6 border-y border-white/15 py-7 sm:grid-cols-[1fr_auto] sm:items-center lg:gap-12 lg:py-9">
        <div className="flex flex-col items-start gap-4">
          <h2 className="max-w-[760px] font-display text-[28px] font-light leading-9 text-white lg:text-[40px] lg:leading-[48px]">
            THE NEXT LANDMARK
            <span className="block text-gold">STARTS WITH A BUILDING.</span>
          </h2>
          <p className="max-w-[660px] font-sans text-base leading-6 text-white/70 lg:text-lg lg:leading-7">
            Whether you own the architecture or want your brand to own the moment, we would like to hear from you.
          </p>
        </div>
        <CTAButton className="w-full !px-8 sm:w-auto">TALK TO APEX</CTAButton>
      </Reveal>
    </section>
  );
}

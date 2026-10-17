import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CTAButton } from "@/components/ui/Button";

export function Closing() {
  return (
    <section className="bg-ivory px-4 py-14 lg:px-14 lg:py-20">
      <Reveal className="mx-auto grid max-w-[1168px] gap-6 border-y border-ink/15 py-7 sm:grid-cols-[1fr_auto] sm:items-center lg:gap-12 lg:py-9">
        <div className="flex flex-col items-start gap-4">
          <h2 className="max-w-[780px] font-display text-[28px] font-light leading-9 text-ink lg:text-[40px] lg:leading-[48px]">
            ONE BUILDING.
            <span className="block text-brand">A COMPLETELY DIFFERENT OPPORTUNITY.</span>
          </h2>
          <p className="max-w-[500px] font-sans text-base leading-6 text-ink/70 lg:text-lg lg:leading-7">
            Whether you own the architecture or want your brand to own the moment, Apex brings the complete capability
            together.
          </p>
        </div>
        <CTAButton className="w-full !px-8 sm:w-auto">TALK TO APEX</CTAButton>
      </Reveal>
    </section>
  );
}

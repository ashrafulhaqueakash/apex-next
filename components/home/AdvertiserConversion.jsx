import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CTAButton } from "@/components/ui/Button";

export function AdvertiserConversion() {
  return (
    <section className="bg-ink px-4 pb-14 lg:px-14 lg:pb-20">
      <div className="mx-auto flex max-w-[1168px] flex-col gap-8 lg:gap-10">
        <Reveal className="flex flex-col items-start gap-4">
          <Eyebrow align="left">Advertiser Conversion</Eyebrow>
          <h2 className="max-w-[820px] font-display text-[28px] font-light leading-9 text-white lg:text-[40px] lg:leading-[48px]">
            CAN’T FIND THE LOCATION
            <span className="block">YOU’RE LOOKING FOR?</span>
          </h2>
        </Reveal>

        <Reveal className="flex flex-col gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between lg:pt-8">
          <div className="flex max-w-[720px] flex-col gap-3">
            <p className="font-display text-lg font-medium leading-7 text-gold lg:text-xl lg:leading-8">Good.</p>
            <div className="flex flex-col gap-2 font-sans text-base leading-6 text-white/65">
              <p>We are not limited to existing media inventory.</p>
              <p>Tell us the audience, district or impact you are looking for.</p>
            </div>
            <p className="font-sans text-base font-medium leading-6 text-white lg:text-lg lg:leading-7">
              WE’LL FIND THE ARCHITECTURE.
            </p>
          </div>
          <CTAButton className="w-full shrink-0 !px-8 sm:w-auto">BRIEF APEX</CTAButton>
        </Reveal>
      </div>
    </section>
  );
}

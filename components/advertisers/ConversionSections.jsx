import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CTAButton } from "@/components/ui/Button";
import { LocationGrid } from "@/components/LocationCard";
import { locations } from "@/lib/locations";

export function AdvertiserTurnkeyDelivery() {
  return (
    <section className="bg-ivory px-4 py-12 lg:px-14 lg:py-16">
      <Reveal className="mx-auto grid max-w-[1168px] gap-6 border-y border-ink/15 py-7 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16 lg:py-9">
        <div className="flex flex-col items-start gap-4">
          <Eyebrow tone="dark" align="left">06 Turnkey Delivery</Eyebrow>
          <h2 className="max-w-[640px] font-display text-[28px] font-light leading-9 text-ink lg:text-[40px] lg:leading-[48px]">
            YOU BRING THE BRIEF. WE HANDLE THE REST.
          </h2>
        </div>
        <p className="border-t border-ink/15 pt-5 font-sans text-base leading-6 text-ink/70 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 lg:text-lg lg:leading-7">
          Creative feasibility, engineering, approvals, production, installation, illumination, monitoring and removal
          are all managed by Apex.
        </p>
      </Reveal>
    </section>
  );
}

export function AdvertiserOpportunities() {
  return (
    <section className="rounded-t-[32px] bg-white px-4 py-12 lg:rounded-t-[40px] lg:px-14 lg:py-20">
      <div className="mx-auto flex max-w-[1168px] flex-col gap-8 lg:gap-10">
        <Reveal className="flex flex-col items-start gap-4">
          <Eyebrow tone="dark" align="left">Key Opportunities</Eyebrow>
          <h2 className="font-display text-[28px] font-light leading-9 text-ink lg:text-[40px] lg:leading-[48px]">
            FIND YOUR LANDMARK.
          </h2>
          <p className="max-w-[760px] font-sans text-base leading-6 text-coal/70 lg:text-lg lg:leading-7">
            A curated portfolio of Architectural Media opportunities across Dubai, selected for visibility, scale
            and the ability to create real brand presence.
          </p>
        </Reveal>

        <LocationGrid locations={locations.slice(0, 3)} />

        <Reveal className="flex justify-center">
          <CTAButton href="/locations" className="!px-8">
            VIEW THE FULL PORTFOLIO
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}

export function BespokeOpportunities() {
  return (
    <section className="bg-ivory px-4 py-12 lg:px-14 lg:py-20">
      <Reveal className="mx-auto grid max-w-[1168px] gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16">
        <div className="flex flex-col items-start gap-4">
          <Eyebrow tone="dark" align="left">Bespoke Opportunities</Eyebrow>
          <h2 className="max-w-[640px] font-display text-[28px] font-light leading-9 text-ink lg:text-[40px] lg:leading-[48px]">
            CAN’T FIND WHAT YOU’RE LOOKING FOR?
          </h2>
        </div>

        <div className="flex flex-col items-start gap-4 border-t border-ink/15 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <p className="font-display text-xl font-medium leading-7 text-brand lg:text-2xl lg:leading-8">Good.</p>
          <div className="flex flex-col gap-2 font-sans text-base leading-6 text-ink/70 lg:text-lg lg:leading-7">
            <p>We are not limited to existing media inventory.</p>
            <p>
              Tell us the audience, district or impact you want to own. Apex can identify the architecture and build
              the opportunity around the brief.
            </p>
          </div>
          <p className="font-sans text-base font-medium leading-6 text-ink lg:text-lg lg:leading-7">
            WE’LL FIND THE ARCHITECTURE.
          </p>
          <CTAButton className="mt-1 !px-8">BRIEF APEX</CTAButton>
        </div>
      </Reveal>
    </section>
  );
}

export function AdvertiserClosing() {
  return (
    <section className="bg-ink px-4 py-12 lg:px-14 lg:py-16">
      <Reveal className="mx-auto grid max-w-[1168px] gap-6 border-y border-white/15 py-7 sm:grid-cols-[1fr_auto] sm:items-center lg:gap-12 lg:py-9">
        <div className="flex flex-col items-start gap-4">
          <Eyebrow align="left">Closing</Eyebrow>
          <h2 className="font-display text-[28px] font-light leading-9 text-white lg:text-[40px] lg:leading-[48px]">
            MAKE THE CITY CARRY THE CAMPAIGN.
          </h2>
          <p className="max-w-[700px] font-sans text-base leading-6 text-white/65 lg:text-lg lg:leading-7">
            Tell us what you want the market to notice. We will show you where it can live.
          </p>
        </div>
        <CTAButton className="w-full !px-8 sm:w-auto">START THE CONVERSATION</CTAButton>
      </Reveal>
    </section>
  );
}

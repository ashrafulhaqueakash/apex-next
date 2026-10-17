import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CTAButton } from "@/components/ui/Button";
import { LocationGrid } from "@/components/LocationCard";
import { locations } from "@/lib/locations";

export function LocationsSection() {
  return (
    <section className="bg-ink px-4 pb-16 lg:px-14 lg:pb-24">
      <div className="mx-auto flex max-w-[1168px] flex-col gap-9 lg:gap-12">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow align="left">LOCATIONS REVEALING SOON</Eyebrow>
          <h2 className="max-w-[760px] font-display text-[28px] font-light leading-9 text-white lg:text-[40px] lg:leading-[48px]">
            DO NOT JUST BUY REACH.
            <span className="block text-gold">OWN THE LOCATION.</span>
          </h2>
          <div className="flex max-w-[760px] flex-col gap-2 font-sans text-base leading-6 text-white/65 lg:text-lg lg:leading-7">
            <p>A curated portfolio of extraordinary Architectural Media locations across Dubai.</p>
            <p>
              Our first landmark locations will be unveiled soon. Each carefully selected for its architecture, visibility, scale and ability to create extraordinary brand presence. Be among the first to discover them.
            </p>
          </div>
        </Reveal>

        <LocationGrid locations={locations.slice(0, 3)} imageFirst />

        <Reveal className="flex justify-center">
          <CTAButton href="/locations" className="!px-8">
            EXPLORE ALL LOCATIONS
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";

const BUSINESS_POINTS = [
  {
    label: "15+ YEARS",
    body: "International media experience behind the business.",
  },
  {
    label: "DUBAI BASED",
    body: "Built around one of the world’s most ambitious architectural environments.",
  },
  {
    label: "THREE PRODUCT GROUPS",
    body: "BUILD, ICON and ABOVE.",
  },
  {
    label: "TWO BUILDING ENVIRONMENTS",
    body: "Completed buildings and developments under construction, with rooftops extending the opportunity above the city.",
  },
  {
    label: "TURNKEY DELIVERY",
    body: "Strategy, design, engineering, approvals, production, installation, management and removal brought together through one partner.",
  },
];

export function StoryTabs() {
  return (
    <>
      <section className="bg-ivory px-4 py-14 lg:px-14 lg:py-20">
        <div className="mx-auto grid max-w-[1168px] gap-9 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <Reveal className="flex flex-col items-start gap-5">
            <Eyebrow tone="dark" align="left">Our Story</Eyebrow>
            <h2 className="font-display text-[28px] font-light leading-9 text-ink lg:text-[40px] lg:leading-[48px]">
              FROM MEDIA TO ARCHITECTURE.
            </h2>
            <h3 className="font-display text-xl font-medium leading-7 text-brand lg:text-2xl lg:leading-8">
              Apex began with a simple observation.
            </h3>
            <p className="font-sans text-base leading-7 text-ink/70 lg:text-lg lg:leading-8">
              In a city defined by architecture, some of the most powerful media opportunities are already standing
              in plain sight.
            </p>
          </Reveal>
          <Reveal className="flex flex-col gap-4 border-t border-ink/15 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="font-sans text-base leading-7 text-ink/70 lg:text-lg lg:leading-8">
              After more than 15 years in international Out of Home media, we saw an opportunity to approach large
              format advertising differently. Not by adding more panels to the city, but by working with the buildings
              already shaping it.
            </p>
            <p className="font-sans text-base leading-7 text-ink/70 lg:text-lg lg:leading-8">
              That idea became Apex.
            </p>
            <p className="font-sans text-base leading-7 text-ink/70 lg:text-lg lg:leading-8">
              Today we bring together media, property, engineering and creative execution around one category:
            </p>
            <p className="font-display text-lg font-medium leading-7 text-brand lg:text-xl">
              ARCHITECTURAL MEDIA.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink px-4 py-14 lg:px-14 lg:py-20">
        <div className="mx-auto flex max-w-[1168px] flex-col gap-9 lg:gap-12">
          <Reveal className="flex flex-col items-start gap-4">
            <Eyebrow align="left">The Business</Eyebrow>
            <h2 className="max-w-[760px] font-display text-[28px] font-light leading-9 text-white lg:text-[40px] lg:leading-[48px]">
              BUILT IN DUBAI.
              <span className="block text-gold">BUILT FOR CITIES.</span>
            </h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {BUSINESS_POINTS.map((point, index) => (
              <StaggerItem key={point.label} className="h-full">
                <article className="flex h-full flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5 lg:p-6">
                  <span className="font-sans text-xs font-medium leading-4 tracking-[0.18em] text-gold">
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-lg font-medium leading-6 text-white lg:text-xl">
                    {point.label}
                  </h3>
                  <p className="font-sans text-sm leading-6 text-white/70 lg:text-base">{point.body}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}

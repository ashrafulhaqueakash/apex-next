import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";

const REFRAMES = [
  {
    from: "Inventory",
    to: "Architecture",
    body: "Traditional Out of Home begins with available inventory. Apex begins with a specific building and unlocks the media value already built into it.",
  },
  {
    from: "Placement",
    to: "Landmark",
    body: "A panel occupies a position. Architectural Media transforms the position itself.",
  },
  {
    from: "Campaign",
    to: "Project",
    body: "Design, engineering, approvals, production, installation, illumination, monitoring and removal are not services added later. They are part of the product from day one.",
  },
];

export function ReframeCards() {
  return (
    <section className="rounded-t-[32px] bg-white px-4 py-12 lg:rounded-t-[40px] lg:px-14 lg:py-20">
      <div className="mx-auto flex max-w-[1168px] flex-col gap-10 lg:gap-16">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <Eyebrow tone="dark">          ARCHITECTURAL MEDIA</Eyebrow>
          <h2 className="max-w-[900px] font-display text-[32px] font-light leading-10 text-ink lg:text-[52px] lg:leading-[62px]">
            A CATEGORY BUILT AROUND THE BUILDING.
          </h2>
          <p className="max-w-[720px] font-sans text-base leading-6 text-coal/70 lg:text-lg lg:leading-7">
            Architectural Media starts with the architecture. Instead of asking where a campaign can be placed, we ask what a building can become. Its scale, form, location and visibility define the opportunity. The result is not another media placement. It is a landmark carrying a brand.
          </p>
        </Reveal>
        <StaggerGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-ink/10 lg:grid-cols-3">
          {REFRAMES.map((item) => (
            <StaggerItem key={item.to} className="h-full">
              <div className="flex h-full flex-col gap-3 bg-white p-6 lg:p-8">
                <h3 className="flex flex-wrap items-baseline gap-2 font-display text-xl font-light leading-7 lg:text-2xl lg:leading-8">
                  <span className="text-coal/40 line-through decoration-oxblood/50 decoration-1">{item.from}</span>
                  <span aria-hidden="true" className="text-oxblood">
                    →
                  </span>
                  <span className="text-ink">{item.to}</span>
                </h3>
                <p className="font-sans text-base leading-6 text-coal/70">{item.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CheckIcon } from "@/components/ui/Icons";

const POINTS = [
  {
    title: "Structural engineering",
    description: "Building-specific load and wind analysis.",
  },
  {
    title: "Purpose-built systems",
    description: "Engineered for each façade and location.",
  },
  {
    title: "Material performance",
    description: "Selected for safety, durability and environmental conditions.",
  },
  {
    title: "Specialist installation",
    description: "Planned around building operations.",
  },
  {
    title: "Permits and compliance",
    description: "Required approvals integrated into the process.",
  },
  {
    title: "Professional removal",
    description: "Controlled removal at the end of every campaign.",
  },
];

export function EngineeredToPerform() {
  return (
    <section className="rounded-t-[32px] bg-white mt-10 p-4 py-6 lg:rounded-t-[40px] lg:p-14">
      <div className="mx-auto flex max-w-[1168px] flex-col gap-6 lg:gap-10">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow tone="dark" align="left">ENGINEERING</Eyebrow>
          <h2 className="font-display text-[28px] font-light leading-7 text-ink lg:text-[40px] lg:leading-10">
            CREATIVE AMBITION. ENGINEERED REALITY.
          </h2>
          <p className="font-display text-base leading-[19px] text-ink lg:w-[517px]">
            At architectural scale, an idea is only as powerful as the engineering behind it. Every Apex project is engineered around the building, environment and campaign.
          </p>
        </Reveal>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
          <StaggerGroup className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_16px_48px_rgba(13,11,12,0.06)] lg:w-[577px] lg:shrink-0">
            {POINTS.map((point, index) => (
              <StaggerItem
                key={point.title}
                className="group flex items-center gap-4 border-b border-ink/[0.08] px-4 py-4 transition-colors last:border-b-0 hover:bg-[#faf8f5] lg:px-5"
              >
                <span className="w-7 shrink-0 font-sans text-[11px] font-medium tabular-nums tracking-[0.12em] text-brand/65">
                  0{index + 1}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand transition-colors group-hover:bg-oxblood">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="font-sans text-sm font-semibold uppercase tracking-[0.08em] text-ink">
                    {point.title}
                  </span>
                  <span className="font-sans text-sm leading-5 text-coal/65">{point.description}</span>
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="h-[160px] w-full overflow-hidden rounded-lg lg:h-[252px] lg:w-[551px]">
            <img src="/images/advertisers/hero-bg.jpg" alt="" className="h-full w-full object-cover" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

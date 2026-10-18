import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CheckIcon } from "@/components/ui/Icons";

const POINTS = [
  "STRUCTURAL ENGINEERING — Building specific load and wind analysis.",
  "PURPOSE BUILT SYSTEMS — Engineered specifically for each façade and location.",
  "MATERIAL PERFORMANCE — Selected for safety, durability and environmental conditions.",
  "SPECIALIST INSTALLATION — Planned and executed around building operations.",
  "PERMITS AND COMPLIANCE — Required approvals integrated into the process.",
  "PROFESSIONAL REMOVAL — Controlled removal at the end of every campaign.",
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
          <StaggerGroup className="flex flex-col gap-[23px] lg:w-[577px] lg:shrink-0 lg:py-6">
            {POINTS.map((point) => (
              <StaggerItem key={point} className="flex items-center gap-2">
                <CheckIcon stroke="#4c0606" className="h-[18px] w-[18px]" />
                <span className="font-sans text-base leading-[19px] text-coal">{point}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="h-[160px] w-full overflow-hidden rounded-lg lg:h-[252px] lg:w-[551px]">
            <img src="/images/locations/photo-b.webp" alt="" className="h-full w-full object-cover" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

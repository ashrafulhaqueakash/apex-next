import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";

const CAPABILITIES = [
  { title: "ARCHITECTURAL MEDIA", desc: "We do not start with inventory. We start with architecture." },
  { title: "PROPERTY", desc: "We unlock the commercial potential of the built environment." },
  { title: "CREATIVE", desc: "Spectaculars and 3D concepts designed to become landmarks." },
  { title: "ENGINEERING", desc: "Every installation is individually engineered for its building and environment." },
  { title: "APPROVALS", desc: "Permitting and regulatory compliance managed from start to finish." },
  { title: "PRODUCTION", desc: "Architectural scale production to exact project specifications." },
  { title: "INSTALLATION", desc: "Specialist execution with minimal disruption to the property." },
  { title: "MANAGEMENT", desc: "One accountable partner throughout the entire lifecycle." },
];

export function Capabilities() {
  return (
    <section className="bg-ink px-4 py-14 lg:px-14 lg:py-24">
      <div className="mx-auto flex max-w-[1168px] flex-col gap-9 lg:gap-14">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <Eyebrow>WHY APEX</Eyebrow>
          <h2 className="font-display text-[28px] font-light leading-9 text-white lg:text-[40px] lg:leading-[52px]">
            BIG IDEAS REQUIRE MORE THAN MEDIA.
          </h2>
          <p className="max-w-[600px] font-sans text-base leading-6 text-white/55 lg:text-lg lg:leading-7">
            Architectural Media sits at the intersection of property, creativity, engineering and media. Apex brings it all together.
          </p>
        </Reveal>
        <StaggerGroup className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-5" amount={0.1}>
          {CAPABILITIES.map(({ title, desc }) => (
            <StaggerItem key={title} className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-gold/40 hover:bg-white/[0.05]">
                <span className="font-sans text-[11px] font-medium uppercase leading-4 tracking-[0.2em] text-gold">
                  {title}
                </span>
                <p className="font-display text-lg font-light leading-7 text-white lg:text-xl lg:leading-8">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

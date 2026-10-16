import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";

const PRINCIPLES = [
  {
    title: "THE CITY IS THE MEDIUM.",
    body: "We do not see architecture as somewhere to attach advertising. The architecture is the canvas, the scale and the context.",
  },
  {
    title: "ARCHITECTURE FIRST.",
    body: "Every project begins with the building. Its form, proportions, location and environment determine what the media should become.",
  },
  {
    title: "BEAUTY IS ENGINEERED.",
    body: "Ideas at this scale only work when they can exist safely in the real world. Engineering, materials, lighting, permitting and installation are fundamental to the idea itself.",
  },
  {
    title: "VALUE FOR EVERYONE.",
    body: "The strongest Architectural Media creates value for the property, the advertiser, the city and the people experiencing it.",
  },
  {
    title: "RESPONSIBILITY BEYOND THE CAMPAIGN.",
    body: "Through APEX AFTER, we look for opportunities to extend the life of campaign materials beyond their original use.",
  },
];

export function Philosophy() {
  return (
    <section className="bg-ink px-4 py-14 lg:px-14 lg:py-20">
      <div className="mx-auto flex max-w-[1168px] flex-col gap-9 lg:gap-12">
        <Reveal className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-12">
          <div className="flex flex-col items-start gap-4">
            <Eyebrow align="left">Our Philosophy</Eyebrow>
            <h2 className="font-display text-[28px] font-light leading-9 text-white lg:text-[40px] lg:leading-[48px]">
              BEAUTIFY THE SKYLINE.
            </h2>
          </div>
          <p className="max-w-[680px] border-t border-white/15 pt-5 font-sans text-base leading-7 text-white/70 lg:justify-self-end lg:text-lg lg:leading-8">
            We believe commercial media can create value without simply adding more visual clutter. Done properly, it
            can improve the appearance of a construction environment, unlock value for a property owner and give a
            brand a presence people genuinely remember.
          </p>
        </Reveal>
        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {PRINCIPLES.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <article className="flex h-full flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-gold/30 hover:bg-white/[0.05] lg:p-6">
                <span className="font-sans text-xs font-medium leading-4 tracking-[0.18em] text-gold">
                  0{index + 1}
                </span>
                <h3 className="font-display text-lg font-medium leading-6 text-white lg:text-xl">{item.title}</h3>
                <p className="font-sans text-sm leading-6 text-white/70 lg:text-base">{item.body}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

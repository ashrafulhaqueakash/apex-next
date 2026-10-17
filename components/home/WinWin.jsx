import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";

const STATS = [
  { value: "15+", label: "YEARS OF MEDIA EXPERIENCE" },
  { value: "100%", label: "TURNKEY DELIVERY" },
  { value: "", label: "COMPLETE PROJECT MANAGEMENT" },
  { value: "", label: "ONE ACCOUNTABLE PARTNER" },
];

const WIN_WIN_CARDS = [
  {
    who: "PROPERTY PARTNERS",
    title: "UNLOCK NEW VALUE.",
    description:
      "Turn previously unused visibility into a new revenue stream without changing the primary function of your property.",
    emphasis: "Unused visibility becomes commercial value.",
    image: "/images/testimonials/quote-1.webp",
  },
  {
    who: "ADVERTISERS",
    title: "OWN THE LANDMARK.",
    description: "Create exclusive brand presence at a scale conventional media cannot replicate.",
    emphasis: "Do not compete for attention. Command it.",
    image: "/images/testimonials/quote-2.webp",
  },
  {
    who: "THE CITY",
    title: "BEAUTIFY THE SKYLINE.",
    description:
      "Transform blank façades and construction environments into considered, high quality Architectural Media.",
    emphasis: "Less clutter. More impact.",
    image: "/images/testimonials/quote-3.webp",
  },
  {
    who: "THE PEOPLE",
    title: "CREATE SOMETHING WORTH SEEING.",
    description: "Create brand experiences people notice, photograph, share and remember.",
    emphasis: "Advertising becomes part of the city experience.",
    image: "/images/testimonials/quote-4.webp",
  },
];

export function WinWin() {
  return (
    <section className="bg-ink px-4 py-16 lg:px-14 lg:py-28">
      <div className="mx-auto flex max-w-[1168px] flex-col gap-14 lg:gap-20">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>Win-win</Eyebrow>
          <h2 className="max-w-[820px] font-display text-[28px] font-light leading-9 text-white lg:text-[40px] lg:leading-[52px]">
            ONE LANDMARK. VALUE FOR EVERYONE.
          </h2>
          <p className="max-w-[600px] font-sans text-base leading-6 text-white/55 lg:text-lg lg:leading-7">
            The best media does not just take from the city. It gives something back.
          </p>
          <p className="max-w-[600px] font-sans text-base leading-6 text-white/55 lg:text-lg lg:leading-7">
            Apex creates Architectural Media designed to generate commercial value, extraordinary brand impact and a better urban experience, all from one location.
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap items-center justify-center gap-y-8">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex min-w-[160px] flex-1 flex-col items-center gap-1.5 px-4 lg:px-10 ${
                i > 0 ? "lg:border-l lg:border-white/10" : ""
              }`}
            >
              <span className="font-display text-[30px] font-light leading-none text-white lg:text-[38px]">
                {stat.value}
              </span>
              <span className="text-center font-sans text-sm leading-5 text-white/45">{stat.label}</span>
            </div>
          ))}
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
          {WIN_WIN_CARDS.map((item) => (
            <StaggerItem key={item.who} className="h-full">
              <div className="group relative flex h-full min-h-[220px] flex-col justify-end gap-3 overflow-hidden rounded-xl border border-white/10 p-6 transition-colors duration-300 hover:border-gold/40 lg:p-8">
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-45 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:opacity-60"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, rgba(13,11,12,0.2) 0%, rgba(13,11,12,0.72) 52%, rgba(13,11,12,0.95) 100%)" }}
                />
                <span className="relative font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                  {item.who}
                </span>
                <h3 className="relative font-display text-xl font-medium leading-7 text-white lg:text-2xl lg:leading-8">
                  {item.title}
                </h3>
                <p className="relative font-sans text-base leading-6 text-white/85 lg:text-lg lg:leading-7">
                  {item.description}
                </p>
                <p className="relative font-sans text-sm font-medium leading-5 text-white lg:text-base lg:leading-6">
                  {item.emphasis}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

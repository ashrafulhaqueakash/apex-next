import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CTAButton } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";

const HOME_GROUP_CARDS = [
  {
    id: "build",
    name: "APEX BUILD",
    cta: "DISCOVER BUILD",
    headline: "TURN CONSTRUCTION INTO CULTURE.",
    body: "Construction does not have to disappear behind a screen. BUILD transforms developments under construction into brand experiences and full scale developer showcases.",
    surfaces: ["Full façade mesh", "Construction wraps", "Hoarding", "Developer visualisation", "Brand partnerships"],
    image: "/images/home/property-patners.webp",
  },
  {
    id: "icon",
    name: "APEX ICON",
    cta: "DISCOVER ICON",
    headline: "CONSTRUCTION TO BUILDINGS ITS AT THE PRODUCT GROUPS.",
    body: "ICON transforms existing buildings into temporary brand landmarks. Not advertising placed on architecture. Architecture transformed by the brand.",
    surfaces: ["Full building wraps", "Façade branding", "Architectural integration", "Spectaculars", "3D executions"],
    image: "/images/client-previews/icon-card.jpg",
  },
  {
    id: "above",
    name: "APEX ABOVE",
    cta: "DISCOVER ABOVE",
    headline: "OWN THE VIEW FROM ABOVE.",
    body: "Some of the city’s biggest opportunities are not visible from street level. ABOVE transforms rooftops and horizontal architecture into high impact media for audiences looking down on the city.",
    surfaces: ["Rooftops", "Flight paths", "Helicopter routes", "High rise viewpoints", "Observation destinations"],
    image: "/images/client-previews/above.jpg",
  },
];

const DETAILED_GROUP_CARDS = [
  {
    ...HOME_GROUP_CARDS[0],
    body: "BUILD transforms developments under construction into monumental communication platforms. A construction façade can do more than hide the work behind it. It can showcase the development at full scale, carry a global brand or turn a temporary phase into a city moment.",
    surfaces: ["Construction hoarding", "Scaffolding mesh", "Full façade wraps", "Developer visualisation", "Brand partnerships"],
  },
  {
    ...HOME_GROUP_CARDS[1],
    body: "ICON transforms completed buildings into temporary brand landmarks. Every execution is designed around the architecture itself, creating a relationship between building and brand that conventional formats cannot replicate.",
    surfaces: ["Building wraps", "Premium façade branding", "Architectural integration", "Spectaculars", "3D executions"],
  },
  {
    ...HOME_GROUP_CARDS[2],
    body: "ABOVE unlocks rooftops and horizontal surfaces that are invisible from the street but impossible to miss from the sky. Designed for flight paths, helicopters, observation destinations and the growing number of people experiencing the city from above.",
    surfaces: ["Rooftops", "Flight paths", "Helicopter routes", "High rise viewpoints", "Observation destinations"],
  },
];

const ROUNDED_TOP = "rounded-t-[32px] lg:rounded-t-[40px]";

function GroupCard({ id, name, cta, headline, body, surfaces, image, imageFirst, index }) {
  if (imageFirst) {
    return (
      <div
        id={id}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e5e0d8] bg-[#fbfaf8] shadow-[0_8px_28px_rgba(13,11,12,0.07)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(13,11,12,0.14)]"
      >
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-coal">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="flex flex-1 flex-col p-5 lg:p-6">
          <div className="flex items-center justify-between border-b border-[#e5e0d8] pb-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#f5e9e7] px-3 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {name}
            </span>
            <span className="rounded-full bg-[#f0ede7] px-2.5 py-1 font-sans text-[10px] font-medium tabular-nums tracking-[0.12em] text-coal/60">
              0{index + 1}<span className="px-1 text-coal/30">/</span>03
            </span>
          </div>
          <div className="flex flex-1 flex-col gap-3 pt-4">
            <h3 className="min-h-[3rem] font-display text-lg font-normal leading-6 text-ink lg:text-xl lg:leading-7">{headline}</h3>
            <p className="font-sans text-sm leading-[21px] text-coal/70">{body}</p>
            <div className="border-t border-[#e5e0d8] pt-3">
              <p className="mb-2 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-coal/45">Available surfaces</p>
              <div className="flex flex-wrap gap-1.5">
                {surfaces.map((surface) => (
                  <span
                    key={surface}
                    className="rounded-full border border-[#e8e2d9] bg-white px-2.5 py-1 font-sans text-[10px] leading-4 text-coal/70 shadow-[0_1px_2px_rgba(13,11,12,0.04)]"
                  >
                    {surface}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <CTAButton
            href={`/what-we-do#${id}`}
            className="mt-5 flex w-full items-center justify-between !rounded-lg !border-transparent !px-4 !py-3 !text-xs !font-semibold tracking-[0.12em] shadow-[0_5px_14px_rgba(102,9,9,0.2)]"
          >
            {cta}
            <ArrowRightIcon className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
          </CTAButton>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className="group relative h-[360px] overflow-hidden rounded-xl lg:h-[460px]">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.85) 100%)" }}
      />
      <div className="relative flex h-full flex-col justify-between p-4 lg:p-5">
        <span className="font-display text-[28px] font-light uppercase leading-none tracking-[0.14em] text-white lg:text-[34px]">
          {name}
        </span>
        <div className="flex flex-col gap-3 rounded-lg bg-black/25 p-4 lg:backdrop-blur-md">
          <h3 className="font-display text-xl font-normal leading-7 text-white">{headline}</h3>
          <p className="min-h-[3.75rem] font-sans text-sm leading-5 text-white/80">{body}</p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {surfaces.map((surface) => (
              <span
                key={surface}
                className="rounded-full border border-white/35 px-2.5 py-0.5 font-sans text-xs font-medium text-white/90"
              >
                {surface}
              </span>
            ))}
          </div>
          <CTAButton href={`/what-we-do#${id}`} className="w-full">
            {cta}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

export function ProductGroups({
  id = "services",
  eyebrow = "What we do",
  title = "ONE CITY. THREE WAYS TO OWN IT.",
  lead = "From developments under construction to existing landmarks and rooftops, Apex unlocks the city itself as media.",
  tone = "light",
  footer,
  rounded = true,
  variant = "home",
}) {
  const dark = tone === "dark";
  const groupCards = variant === "detail" ? DETAILED_GROUP_CARDS : HOME_GROUP_CARDS;
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-4 py-10 lg:px-14 lg:py-16 ${dark ? "bg-ink" : "bg-white"} ${
        !dark && rounded ? ROUNDED_TOP : ""
      }`}
    >
      <div className="relative mx-auto flex max-w-[1168px] flex-col gap-8 lg:gap-12">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <Eyebrow tone={dark ? "light" : "dark"}>{eyebrow}</Eyebrow>
          <h2
            className={`font-display text-[28px] font-light leading-9 lg:text-[40px] lg:leading-[52px] ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            {title}
          </h2>
          {lead && (
            <p className={`max-w-[680px] font-sans text-base leading-6 lg:text-lg lg:leading-7 ${dark ? "text-white/70" : "text-coal/70"}`}>
              {lead}
            </p>
          )}
        </Reveal>
        <StaggerGroup className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {groupCards.map((card, index) => (
            <StaggerItem key={card.id}>
              <GroupCard {...card} imageFirst={variant === "home"} index={index} />
            </StaggerItem>
          ))}
        </StaggerGroup>
        {footer && <Reveal className="flex justify-center">{footer}</Reveal>}
      </div>
    </section>
  );
}

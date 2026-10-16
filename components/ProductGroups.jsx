import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CTAButton } from "@/components/ui/Button";

const HOME_GROUP_CARDS = [
  {
    id: "build",
    name: "APEX BUILD",
    cta: "DISCOVER BUILD",
    headline: "TURN CONSTRUCTION INTO CULTURE.",
    body: "Construction does not have to disappear behind a screen. BUILD transforms developments under construction into monumental brand experiences and full scale developer showcases.",
    surfaces: ["Full façade mesh", "Construction wraps", "Hoarding", "Developer visualisation", "Brand partnerships"],
    image: "/images/client-previews/build.jpg",
  },
  {
    id: "icon",
    name: "APEX ICON",
    cta: "DISCOVER ICON",
    headline: "TURN ARCHITECTURE INTO MEDIA.",
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

function GroupCard({ id, name, cta, headline, body, surfaces, image }) {
  return (
    <div id={id} className="group relative h-[460px] overflow-hidden rounded-xl lg:h-[560px]">
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
          {groupCards.map((card) => (
            <StaggerItem key={card.id}>
              <GroupCard {...card} />
            </StaggerItem>
          ))}
        </StaggerGroup>
        {footer && <Reveal className="flex justify-center">{footer}</Reveal>}
      </div>
    </section>
  );
}

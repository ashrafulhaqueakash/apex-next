import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CheckIcon } from "@/components/ui/Icons";
import { CTAButton } from "@/components/ui/Button";

const SPLIT_CARDS = [
  {
    id: "advertisers",
    image: "/images/home/advertisers-card.webp",
    lead: "Go beyond conventional media and put your brand at architectural scale in the places that define the city.",
    audienceLabel: "FOR ADVERTISERS",
    audienceHref: "/advertisers",
    title: "OWN THE LOCATION.",
    points: ["Landmark locations", "Monumental scale", "Exclusive brand presence", "Fully managed execution"],
    cta: "FIND YOUR LANDMARK",
  },
  {
    id: "owners",
    image: "/images/home/owners-card.webp",
    lead: "Your building already has an audience. Apex turns that visibility into a professionally managed commercial asset.",
    audienceLabel: "FOR PROPERTY PARTNERS",
    audienceHref: "/property-partners",
    title: "TURN VISIBILITY INTO VALUE.",
    points: ["New revenue stream", "Zero capital investment", "Fully engineered and permitted", "Complete management"],
    cta: "UNLOCK YOUR PROPERTY",
  },
];

const LOGOS = [
  { src: "/images/logos/dubai-holding.webp", name: "Dubai Holding", h: "h-9 lg:h-10", mode: "screen" },
  { src: "/images/logos/meraas.webp", name: "Meraas", h: "h-6 lg:h-7" },
  { src: "/images/logos/nakheel.webp", name: "Nakheel", h: "h-8 lg:h-9" },
  { src: "/images/logos/dubai-properties.webp", name: "Dubai Properties", h: "h-9 lg:h-10" },
  { src: "/images/logos/meydan.webp", name: "Meydan", h: "h-7 lg:h-8" },
  { src: "/images/logos/arn.webp", name: "ARN", h: "h-7 lg:h-8" },
  { src: "/images/logos/dubai-eye.webp", name: "Dubai Eye 103.8", h: "h-7 lg:h-8" },
];

function PointRow({ children }) {
  return (
    <div className="flex items-start gap-2">
      <CheckIcon className="mt-0.5 h-5 w-5" />
      <p className="font-sans text-base leading-[21px] text-white">{children}</p>
    </div>
  );
}

function SplitCard({ image, lead, audienceLabel, audienceHref, title, points, cta }) {
  return (
    <div className="relative h-[421px] w-full overflow-hidden rounded-lg lg:w-[572px]">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 74%, #000 100%)" }}
      />
      <div className="relative flex h-full flex-col justify-end p-4">
        <div className="flex w-full flex-col gap-3.5 rounded-lg bg-black/20 p-4 lg:w-[368px] lg:backdrop-blur-md">
          <Eyebrow align="left">{audienceLabel}</Eyebrow>
          <h3 className="font-display text-2xl font-light leading-7 text-white">{title}</h3>
          <p className="font-sans text-base leading-6 text-white/85">{lead}</p>
          <div className="flex flex-col gap-1.5">
            {points.map((point) => (
              <PointRow key={point}>{point}</PointRow>
            ))}
          </div>
          <CTAButton href={audienceHref} className="w-full">{cta}</CTAButton>
        </div>
      </div>
    </div>
  );
}

function LogoTrack() {
  return (
    <div className="flex shrink-0 items-center gap-14 pr-14 lg:gap-24 lg:pr-24">
      {LOGOS.map(({ src, name, h, mode }) => (
        <img
          key={name}
          src={src}
          alt={name}
          className={`${h} w-auto max-w-[132px] shrink-0 object-contain opacity-70 lg:max-w-[150px]`}
          style={mode === "screen" ? { mixBlendMode: "screen" } : { filter: "brightness(0) invert(1)" }}
        />
      ))}
    </div>
  );
}

function TrustedByMarquee({ title = "BUILT ON STRONG PARTNERSHIPS." }) {
  return (
    <section className="bg-black px-4 py-6 lg:px-16 lg:py-14">
      <div className="!hidden mx-auto flex flex-col items-center gap-6 lg:w-[1152px] lg:gap-10">
        <Reveal>
          <div className="flex flex-col items-center gap-4">
            <Eyebrow>03 Partners</Eyebrow>
            <h2 className="text-center font-display text-2xl font-light leading-8 text-white lg:text-[40px] lg:leading-[56px]">
              {title}
            </h2>
            <p className="max-w-[760px] text-center font-sans text-base leading-6 text-white/80">
              We bring together property, media, engineering and brands to create Architectural Media at city scale.
            </p>
          </div>
        </Reveal>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
          <div className="marquee-track flex w-max">
            <LogoTrack />
            <LogoTrack />
            <LogoTrack />
            <LogoTrack />
          </div>
        </div>
      </div>
    </section>
  );
}

export function PropertyOwnerSplit() {
  return (
    <>
      <section className="bg-coal">
        <Reveal className="flex flex-col gap-4 p-4 lg:mx-auto lg:w-[1168px] lg:px-0 lg:pb-6 lg:pt-10">
          <Eyebrow align="left">02 Who we are</Eyebrow>
          <h2 className="font-display text-xl font-light leading-7 text-white lg:text-[40px] lg:leading-[56px]">
            THE CITY IS THE MEDIUM.
          </h2>
          <div className="flex max-w-[760px] flex-col gap-2 font-sans text-base leading-6 text-white/80">
            <p>Apex is an Architectural Media company unlocking the commercial power of architecture.</p>
            <p>
              We transform buildings, developments and rooftops into landmark brand experiences, bringing
              together property, engineering, media and creativity under one roof.
            </p>
          </div>
        </Reveal>
        <StaggerGroup className="flex flex-col gap-6 px-4 py-6 lg:flex-row lg:justify-center lg:px-14 lg:pb-10 lg:pt-6">
          {SPLIT_CARDS.map((card) => (
            <StaggerItem key={card.id}>
              <SplitCard {...card} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
      <TrustedByMarquee />
    </>
  );
}

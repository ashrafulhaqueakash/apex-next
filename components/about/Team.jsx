import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";

const TEAM = [
  {
    name: "Yordi Hardenberg",
    role: "CO FOUNDER AND CEO",
    email: "yordi@theapexmediagroup.com",
    linkedin: null,
    photo: "/images/team/yordi.webp",
    ground: "#e6e6e6",
    bio: [
      "Yordi brings more than 15 years of experience in Out of Home media, strategy, commercial development and large format advertising.",
      "He previously co-founded and built an independent OOH specialist in the Netherlands before its acquisition by an international media group.",
      "At Apex, Yordi leads the company’s strategy, growth and development of Architectural Media as a distinct media category.",
    ],
  },
  {
    name: "Robert Doornbos",
    role: "CO FOUNDER AND CCO",
    email: "robert@theapexmediagroup.com",
    linkedin: null,
    photo: "/images/team/robert.webp",
    ground: "#d9d9d9",
    bio: [
      "Robert leads the commercial development of Apex and the relationships that bring the platform to market.",
      "His focus is connecting advertisers, agencies, property owners, developers and strategic partners around opportunities that create value for every side.",
      "At Apex, Robert is responsible for commercial partnerships, market development and turning exceptional architecture into commercially powerful media opportunities.",
    ],
  },
];

function ObfuscatedEmail({ address }) {
  const [user, domain] = address.split("@");
  return (
    <a
      href={`mailto:${address}`}
      className="link-underline font-sans text-[13px] leading-5 text-coal/70 hover:text-ink lg:text-sm"
    >
      {user}@<wbr />
      {domain}
    </a>
  );
}

function TeamCard({ name, role, email, photo, ground, bio, index }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-colors duration-300 hover:border-brand/30">
      <div
        className={`relative flex h-[420px] w-full items-center justify-center overflow-hidden sm:h-[460px] lg:h-[420px] ${ground ? "" : "bg-ivory"}`}
        style={ground ? { backgroundColor: ground } : undefined}
      >
        <img
          src={photo}
          alt={name}
          className="h-full w-full object-contain"
        />
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/70 bg-white/75 px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-ink backdrop-blur-sm">
          Leader 0{index + 1}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6 lg:p-7">
        <div className="flex flex-col gap-4 border-b border-ink/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <p className="font-sans text-[11px] font-medium uppercase leading-4 tracking-[0.2em] text-brand">{role}</p>
            <h3 className="font-display text-2xl font-light leading-8 text-ink lg:text-[30px] lg:leading-9">{name}</h3>
          </div>
          {email && <ObfuscatedEmail address={email} />}
        </div>
        <div className="grid flex-1 gap-4 md:grid-cols-2">
          {bio.map((paragraph, paragraphIndex) => (
            <p
              key={paragraph}
              className={`font-sans text-sm leading-6 text-coal/75 lg:text-[15px] ${
                paragraphIndex === bio.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Team() {
  return (
    <section className="rounded-t-[32px] bg-white px-4 py-12 lg:rounded-t-[40px] lg:px-14 lg:py-20">
      <div className="mx-auto flex max-w-[1168px] flex-col gap-10 lg:gap-14">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <Eyebrow tone="dark">LEADERSHIP</Eyebrow>
          <h2 className="max-w-[760px] font-display text-[28px] font-light leading-9 text-ink lg:text-[40px] lg:leading-[52px]">
            THE PEOPLE BEHIND APEX.
          </h2>
          <p className="max-w-[620px] font-sans text-base leading-6 text-coal/70 lg:text-lg lg:leading-7">
            Apex was founded by entrepreneurs with a shared ambition to build a different kind of media company, one that combines commercial media thinking with the discipline required by architecture.
          </p>
        </Reveal>
        <StaggerGroup className="grid w-full grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-8">
          {TEAM.map((member, index) => (
            <StaggerItem key={member.name} className="h-full">
              <TeamCard {...member} index={index} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

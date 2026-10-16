import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";

const WHAT_WE_DO_STEPS = [
  { name: "DISCOVER", note: "Identify the building, audience and commercial opportunity." },
  { name: "DESIGN", note: "Create the concept around the architecture." },
  { name: "ENGINEER", note: "Engineer the system for the structure and environment." },
  { name: "APPROVE", note: "Manage authority approvals and regulatory compliance." },
  { name: "PRODUCE", note: "Manufacture every element to exact project specification." },
  { name: "INSTALL", note: "Bring the project to life through specialist installation." },
  { name: "ILLUMINATE", note: "Design lighting around the façade and campaign." },
  { name: "MONITOR", note: "Inspect condition and performance throughout the campaign." },
  { name: "REMOVE", note: "Remove professionally and return the building as agreed." },
  { name: "REPURPOSE", note: "Give campaign materials a second life wherever possible." },
];

const PROPERTY_PARTNER_STEPS = [
  { name: "DISCOVER", note: "Assess the building and its Architectural Media potential." },
  { name: "DESIGN", note: "Design the opportunity around the architecture." },
  { name: "ENGINEER", note: "Engineer the installation for the structure and environment." },
  { name: "APPROVE", note: "Secure required authority approvals." },
  { name: "PRODUCE", note: "Manufacture the campaign to exact specification." },
  { name: "INSTALL", note: "Install through specialist teams with minimal disruption." },
  { name: "ILLUMINATE", note: "Bring the façade to life day and night where appropriate." },
  { name: "MONITOR", note: "Inspect and manage throughout the live period." },
  { name: "REMOVE", note: "Remove professionally at campaign end." },
  { name: "REPURPOSE", note: "Give campaign materials a second life wherever possible." },
];

export function ApexProcess({ variant = "what-we-do" }) {
  const steps = variant === "property-partners" ? PROPERTY_PARTNER_STEPS : WHAT_WE_DO_STEPS;
  const description =
    variant === "property-partners"
      ? "The same complete method sits behind every Apex property partnership."
      : "Apex manages the complete lifecycle, from identifying the opportunity to returning the building exactly as agreed.";

  return (
    <section id="process" className="relative overflow-hidden bg-ink">
      <img src="/images/process/bg-4.webp" alt="" className="absolute inset-0 h-full w-full scale-110 object-cover blur-lg" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative mx-auto flex max-w-[1168px] flex-col gap-10 px-4 py-12 lg:gap-14 lg:px-14 lg:py-20">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <Eyebrow>THE APEX METHOD</Eyebrow>
          <h2 className="max-w-[840px] font-display text-[28px] font-light leading-9 text-white lg:text-[40px] lg:leading-[52px]">
            END TO END. AND BACK AGAIN.
          </h2>
          <p className="max-w-[680px] font-sans text-base leading-6 text-white/75 lg:text-lg lg:leading-7">
            {description}
          </p>
        </Reveal>
        <StaggerGroup className="grid grid-cols-1 gap-3 lg:grid-cols-5 lg:gap-4" amount={0.1}>
          {steps.map((step, i) => (
            <StaggerItem key={step.name}>
              <div className="flex h-full flex-col justify-between gap-5 rounded-lg bg-black/20 p-4 lg:backdrop-blur-md transition-colors duration-300 hover:bg-black/35 lg:p-5">
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 font-sans text-xs font-medium tabular-nums text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-sans text-2xl font-light leading-[29px] text-white">{step.name}</span>
                </div>
                <p className="font-sans text-base leading-[19px] text-white/75">{step.note}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

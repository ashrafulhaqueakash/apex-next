import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CheckIcon } from "@/components/ui/Icons";
import { CTAButton } from "@/components/ui/Button";

const POINTS = [
  {
    title: "COMMERCIAL MODEL",
    body: "We assess the media potential and build the commercial opportunity around the property.",
  },
  {
    title: "ENGINEERING AND APPROVALS",
    body: "Structural assessment, system design, load analysis, permits and regulatory compliance are managed before installation.",
  },
  {
    title: "PRODUCTION AND INSTALLATION",
    body: "Premium large format production and specialist installation are planned around the property and its operations.",
  },
  {
    title: "MONITORING AND MANAGEMENT. REMOVAL.",
    body: "The installation is monitored and managed throughout the campaign. At campaign end, Apex manages professional removal and return of the façade as agreed.",
  },
];


export function FullyManaged() {
  return (
    <section className="bg-white px-4 py-12 lg:px-14 lg:py-20">
      <div className="relative mx-auto overflow-hidden rounded-2xl">
        <img src="/images/locations/photo-h.webp" alt="" className="absolute inset-0 h-full w-full scale-110 object-cover blur-lg" />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="absolute inset-0 bg-ink/20" />
        <div className="relative mx-auto flex max-w-[1168px] flex-col gap-9 px-5 py-12 lg:gap-14 lg:px-16 lg:py-20">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <Eyebrow>FULLY MANAGED</Eyebrow>
            <h2 className="max-w-[840px] font-display text-[28px] font-light leading-9 text-white lg:text-[40px] lg:leading-[52px]">
              YOUR BUILDING. OUR RESPONSIBILITY.
            </h2>
            <p className="max-w-[700px] font-sans text-base leading-6 text-white/80 lg:text-lg lg:leading-7">
              Apex manages every stage required to turn architecture into media. One accountable partner from first assessment to final removal.
            </p>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-8">
            {POINTS.map((point) => (
              <StaggerItem key={point.title} className="h-full">
                <div className="flex h-full items-start gap-4 rounded-lg bg-black/25 p-5 lg:backdrop-blur-md lg:p-6">
                  <CheckIcon className="mt-0.5 h-5 w-5" />
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-xl font-light leading-7 text-white">{point.title}</h3>
                    <p className="font-sans text-base leading-6 text-white/70">{point.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="flex justify-center">
            <CTAButton className="w-full !px-8 lg:w-auto">SUBMIT YOUR PROPERTY</CTAButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

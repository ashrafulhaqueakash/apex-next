import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CTAButton } from "@/components/ui/Button";

const FADE_MASK = "linear-gradient(to top, #000 40%, transparent 100%)";

export function AboutHero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-ink">
      <img
        src="/images/locations/photo-f.webp"
        alt=""
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] w-full object-cover object-bottom opacity-70 lg:h-[45%]"
        style={{ maskImage: FADE_MASK, WebkitMaskImage: FADE_MASK }}
      />
      <Reveal className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-4 pb-28 pt-32 text-center lg:gap-8 lg:px-14">
        <Eyebrow>ABOUT</Eyebrow>
        <h1 className="max-w-[900px] font-display text-[36px] font-light leading-[42px] text-white lg:text-[64px] lg:leading-[70px]">
          BUILT TO CHANGE HOW THE CITY IS SEEN.
        </h1>
        <div className="flex max-w-[760px] flex-col gap-3 font-sans text-base leading-6 text-white/75 lg:text-lg lg:leading-7">
          <p>
            The Apex Media Group is a Dubai based Architectural Media company transforming the built environment
            into extraordinary brand opportunities.
          </p>
          <p>
            We combine international media experience with property, engineering and creative execution to turn
            architecture into landmarks.
          </p>
        </div>
        <p className="font-display text-sm font-medium uppercase leading-5 tracking-[0.18em] text-gold">
          BEAUTIFY THE SKYLINE.
        </p>
      </Reveal>
    </section>
  );
}

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function FinalConversion() {
  return (
    <section className="bg-ink px-4 py-14 lg:px-14 lg:py-20">
      <div className="mx-auto flex max-w-[1168px] flex-col gap-8 lg:gap-10">
        <Reveal className="flex flex-col items-start gap-4">
          <Eyebrow align="left">Final Conversion</Eyebrow>
          <h2 className="max-w-[820px] font-display text-[28px] font-light leading-9 text-white lg:text-[40px] lg:leading-[48px]">
            THE NEXT LANDMARK
            <span className="block">COULD BE YOURS.</span>
          </h2>
        </Reveal>

        <Reveal className="grid border-t border-white/15 sm:grid-cols-2">
          <div className="flex flex-col items-start gap-3 border-b border-white/15 py-6 sm:border-b-0 sm:border-r sm:pr-8 lg:py-8">
            <p className="font-sans text-sm font-semibold uppercase leading-5 tracking-[0.12em] text-gold">
              FOR ADVERTISERS
            </p>
            <p className="font-sans text-base leading-6 text-white/65 lg:text-lg lg:leading-7">
              Ready to take your brand beyond conventional media?
            </p>
            <Link
              href="/locations"
              className="group mt-1 inline-flex items-center gap-2 font-sans text-sm font-semibold text-white transition-colors hover:text-gold"
            >
              FIND YOUR LANDMARK
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <Link
            href="/property-partners"
            className="group flex items-center justify-between gap-4 py-6 text-white transition-colors hover:text-gold sm:pl-8 lg:py-8"
          >
            <span className="font-sans text-sm font-semibold uppercase leading-5 tracking-[0.12em]">
              FOR PROPERTY PARTNERS
            </span>
            <ArrowRightIcon className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";

export function PageHero({ image, eyebrow, title, lead, children }) {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-ink">
      <Image src={image} alt="" fill preload sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/45" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 45%, rgba(13,11,12,0.9) 100%)" }}
      />
      <Reveal className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-5 px-4 pb-16 pt-28 text-center lg:gap-7 lg:px-14 lg:pb-24 lg:pt-32">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-[1000px] font-display text-[38px] font-light leading-[42px] text-white lg:text-[64px] lg:leading-[70px]">
          {title}
        </h1>
        {lead && (
          <p className="max-w-[760px] font-sans text-base leading-6 text-white/85 lg:text-xl lg:leading-8">{lead}</p>
        )}
        {children}
      </Reveal>
    </section>
  );
}

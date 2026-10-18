"use client";

import { useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CTAButton } from "@/components/ui/Button";

const STEP_IMAGES = ["/images/process/bg-1.jpg", "/images/process/bg-2.jpg", "/images/process/bg-9.webp", "/images/advertisers/advertisers.webp", "/images/process/bg-5.webp", "/images/process/bg-6.jpg", "/images/process/bg-2.webp", "/images/process/bg-8.jpg"];

const STEPS = [
  { num: "01", title: "DISCOVER", desc: "Find the opportunity. We identify architecture with exceptional media potential." },
  { num: "02", title: "DESIGN", desc: "Create the vision. Every concept is designed around the building, location and brand." },
  { num: "03", title: "ENGINEER", desc: "Make it possible. Every installation is individually engineered around the structure and environment." },
  { num: "04", title: "APPROVE", desc: "Secure the permissions. Apex manages permitting, approvals and regulatory compliance." },
  { num: "05", title: "PRODUCE", desc: "Build at scale. Premium large format production manufactured to exact project specifications." },
  { num: "06", title: "INSTALL", desc: "Bring it to life. Specialist installation designed around the building and its operations." },
  { num: "07", title: "MANAGE", desc: "Keep it performing. Monitoring, maintenance and campaign management throughout the live period." },
  { num: "08", title: "REMOVE AND REPURPOSE", desc: "Complete the lifecycle. Professional removal followed by responsible repurposing of campaign materials wherever possible." },
].map((step, i) => ({ ...step, img: STEP_IMAGES[i % STEP_IMAGES.length] }));

function StepCard({ num, title, desc, img, active, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`Step ${num}: ${title}`}
      aria-pressed={active}
      data-step-card
      className="grid w-[241px] shrink-0 cursor-pointer grid-rows-[50px_19px_85px_262px] gap-[15px] text-left"
    >
      <div
        className={`relative z-10 flex h-[50px] w-[50px] items-center justify-center rounded-[10px] transition-colors duration-300 ${
          active ? "bg-ink" : "border border-[#e4e4e4] bg-white"
        }`}
      >
        <span
          className={`font-display text-2xl font-medium leading-none transition-colors duration-300 ${
            active ? "text-white" : "text-[#c2c2c2]"
          }`}
        >
          {num}
        </span>
      </div>
      <span className="font-display text-base leading-[19px] text-ink">{title}</span>
      <p className="overflow-hidden font-sans text-sm leading-[17px] text-[#626262]">{desc}</p>
      <img src={img} alt="" className="h-[262px] w-full rounded-lg object-cover" />
    </button>
  );
}

export function ProcessCarousel() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const selectStep = (index) => {
    const nextIndex = Math.max(0, Math.min(STEPS.length - 1, index));
    setActive(nextIndex);

    const track = trackRef.current;
    const cards = track?.querySelectorAll("[data-step-card]");
    const firstCard = cards?.[0];
    const selectedCard = cards?.[nextIndex];

    if (track && firstCard && selectedCard) {
      track.scrollTo({
        left: selectedCard.offsetLeft - firstCard.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="rounded-t-[32px] bg-white py-14 lg:rounded-t-[40px] lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-16" style={{ "--gutter": "max(1rem, calc((100% - 1168px) / 2))" }}>
        <div className="px-[var(--gutter)]">
          <Reveal className="flex flex-col gap-4 lg:max-w-[720px]">
            <Eyebrow tone="dark" align="left">How it works</Eyebrow>
            <h2 className="font-display text-[28px] font-light leading-8 text-ink lg:text-[40px] lg:leading-10">
              FROM ARCHITECTURE TO LANDMARK.
            </h2>
            <p className="font-sans text-base leading-6 text-[#626262]">
              Apex manages the complete journey. You bring the building or the brand. We make it happen.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-8">
          <div
            ref={trackRef}
            className="relative flex gap-3 overflow-x-auto pb-2 pl-[var(--gutter)] pr-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-8"
          >
            <div
              className="pointer-events-none absolute top-[25px] h-px w-[1771px] bg-[#e7e7e7] lg:w-[1911px]"
              style={{ left: "calc(var(--gutter) + 25px)" }}
            />
            {STEPS.map((step, i) => (
              <StepCard key={step.num} {...step} active={i === active} onSelect={() => selectStep(i)} />
            ))}
          </div>

          <div className="flex gap-3 px-[var(--gutter)]">
            <button
              type="button"
              onClick={() => selectStep(active - 1)}
              aria-label="Previous step"
              className="btn-round flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#111111]/20 hover:border-[#111111]/50"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <path d="M15 6 9 12l6 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => selectStep(active + 1)}
              aria-label="Next step"
              className="btn-round flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#111111]/20 hover:border-[#111111]/50"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <path d="m9 6 6 6-6 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-[var(--gutter)]">
          <Reveal className="flex flex-col items-center gap-8">
            <h2 className="text-center font-display text-2xl font-light leading-8 text-ink lg:max-w-[1168px] lg:text-[40px] lg:leading-[48px]">
              YOUR BUILDING. A NEW REVENUE STREAM.
            </h2>
            <CTAButton className="!px-8">SUBMIT YOUR PROPERTY</CTAButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

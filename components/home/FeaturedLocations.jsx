import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, OutlineBadge } from "@/components/ui/Badge";
import { RoundNavButton } from "@/components/ui/Button";

const SPECS = [
  ["Area", "1,250 sqm"],
  ["Location", "Business Bay"],
  ["Estimated Monthly Impressions", "5.4M"],
  ["Availability", "Available Q4 2026"],
];

function PinIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
      <path
        d="M13.3337 6.66732C13.3337 9.99598 9.64099 13.4627 8.40099 14.5333C8.28548 14.6202 8.14486 14.6672 8.00033 14.6672C7.85579 14.6672 7.71518 14.6202 7.59966 14.5333C6.35966 13.4627 2.66699 9.99598 2.66699 6.66732C2.66699 5.25283 3.2289 3.89628 4.22909 2.89608C5.22928 1.89589 6.58584 1.33398 8.00033 1.33398C9.41481 1.33398 10.7714 1.89589 11.7716 2.89608C12.7718 3.89628 13.3337 5.25283 13.3337 6.66732Z"
        stroke="#F2EFEA"
        strokeWidth="0.969697"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8.66602C9.10457 8.66602 10 7.77059 10 6.66602C10 5.56145 9.10457 4.66602 8 4.66602C6.89543 4.66602 6 5.56145 6 6.66602C6 7.77059 6.89543 8.66602 8 8.66602Z"
        stroke="#F2EFEA"
        strokeWidth="0.969697"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
      <path
        d="M14.666 11.2807V13.2807C14.6667 13.4664 14.6287 13.6502 14.5543 13.8203C14.4799 13.9904 14.3708 14.1431 14.234 14.2686C14.0972 14.3941 13.9357 14.4897 13.7598 14.5492C13.5839 14.6087 13.3976 14.6308 13.2126 14.614C11.1612 14.3911 9.19064 13.6901 7.4593 12.5674C5.84852 11.5438 4.48286 10.1782 3.4593 8.56738C2.33262 6.82819 1.63147 4.84805 1.41264 2.78738C1.39598 2.60303 1.41789 2.41722 1.47697 2.2418C1.53605 2.06637 1.63102 1.90518 1.75582 1.76846C1.88061 1.63175 2.03251 1.52252 2.20183 1.44773C2.37116 1.37294 2.5542 1.33422 2.7393 1.33405H4.7393C5.06284 1.33086 5.3765 1.44543 5.62181 1.6564C5.86713 1.86737 6.02736 2.16035 6.07264 2.48072C6.15705 3.12076 6.3136 3.7492 6.5393 4.35405C6.629 4.59266 6.64841 4.85199 6.59524 5.1013C6.54207 5.35061 6.41855 5.57946 6.2393 5.76072L5.39264 6.60738C6.34168 8.27641 7.72361 9.65834 9.39264 10.6074L10.2393 9.76072C10.4206 9.58147 10.6494 9.45795 10.8987 9.40478C11.148 9.35161 11.4074 9.37102 11.646 9.46072C12.2508 9.68642 12.8793 9.84297 13.5193 9.92738C13.8431 9.97307 14.1389 10.1362 14.3503 10.3857C14.5617 10.6352 14.6741 10.9538 14.666 11.2807Z"
        stroke="#F2EFEA"
        strokeWidth="0.969697"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactRow({ icon, children }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-oxblood shadow-md">{icon}</div>
      <span className="font-sans text-base leading-5 text-white">{children}</span>
    </div>
  );
}

function ExampleGallery() {
  return (
    <div className="flex w-full flex-col gap-3 lg:w-[610px] lg:shrink-0">
      <div className="flex gap-3">
        <div className="h-[136px] flex-1 overflow-hidden rounded-lg bg-white lg:h-[252px] lg:w-[299px] lg:flex-none">
          <img src="/images/locations/photo-d.webp" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="h-[136px] flex-1 overflow-hidden rounded-lg bg-white lg:h-[252px] lg:w-[299px] lg:flex-none">
          <img src="/images/locations/photo-b.webp" alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="h-[116px] w-full overflow-hidden rounded-lg bg-white lg:h-[252px] lg:w-[610px]">
        <img src="/images/locations/photo-e.webp" alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

function ExampleInfo() {
  return (
    <div className="flex w-full flex-col gap-6 lg:w-[502px]">
      <div className="w-fit">
        <OutlineBadge>Existing Building</OutlineBadge>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="font-display text-2xl font-light leading-6 text-white">Dubai Skyline Tower</h3>
        <div className="flex flex-col gap-3.5">
          {SPECS.map(([label, value]) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="font-display text-base leading-[19px] text-white">{label}</span>
              <span className="font-display text-sm leading-[17px] text-white">{value}</span>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col gap-6 rounded-lg bg-black p-5 lg:w-[502px]">
          <ContactRow icon={<PinIcon />}>Dubai, United Arab Emirates</ContactRow>
          <ContactRow icon={<PhoneIcon />}>+971 12 345 6789</ContactRow>
        </div>
      </div>
      <div className="flex justify-center gap-3 lg:justify-start">
        <RoundNavButton direction="left" dark />
        <RoundNavButton direction="right" dark />
      </div>
    </div>
  );
}

export function FeaturedLocations() {
  return (
    <section className="!hidden relative overflow-hidden bg-coal px-4 py-6 lg:p-16">
      <div className="mx-auto flex flex-col gap-4 lg:w-[1152px] lg:gap-10">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow align="left">Portfolio</Eyebrow>
          <h2 className="font-display text-[28px] font-light leading-7 text-white lg:text-[40px] lg:leading-10">
            Featured Locations
          </h2>
        </Reveal>
        <Reveal className="flex flex-col gap-10 lg:flex-row lg:items-center" delay={0.08}>
          <ExampleGallery />
          <ExampleInfo />
        </Reveal>
      </div>
      <img
        src="/images/decor/cross.svg"
        alt=""
        className="pointer-events-none absolute right-[-42px] top-[494px] hidden h-[265px] w-[252px] lg:block"
      />
    </section>
  );
}

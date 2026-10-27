import Link from "next/link";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { OutlineBadge, SolidBadge } from "@/components/ui/Badge";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { locationGroups } from "@/lib/locations";

function LocationCard({ location, imageFirst, showGroupBadge = true }) {
  const badges = (
    <div className={`flex items-start gap-3 ${showGroupBadge ? "justify-between" : "justify-end"}`}>
      {showGroupBadge && <OutlineBadge>{locationGroups[location.group]?.name}</OutlineBadge>}
      <SolidBadge>{location.status}</SolidBadge>
    </div>
  );

  const details = (
    <div className={`flex flex-col gap-2.5 ${imageFirst ? "bg-[#171515] px-4 py-3.5 lg:gap-3 lg:px-5 lg:py-4" : "rounded-xl border border-white/15 bg-black/45 p-3 shadow-lg backdrop-blur-md lg:gap-3 lg:p-4"}`}>
      <div className="flex flex-col gap-0.5">
        <h3 className="font-display text-[22px] font-light leading-7 text-white lg:text-[28px] lg:leading-8">{location.name}</h3>
        <p className="font-sans text-sm leading-5 text-white/75">{location.district}, {location.city}</p>
      </div>
      <dl className={`grid grid-cols-2 gap-3 py-2.5 lg:py-3 ${imageFirst ? "border-y border-white/15" : "border-y border-white/20"}`}>
        <div className="flex min-w-0 flex-col gap-1">
          <dt className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">Media format</dt>
          <dd className="break-words font-sans text-sm leading-5 text-white">{location.specs.find(([label]) => label === "Format")?.[1]}</dd>
        </div>
        <div className="flex min-w-0 flex-col gap-1">
          <dt className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">Media area</dt>
          <dd className="font-sans text-sm leading-5 text-white">{location.specs.find(([label]) => label === "Media area")?.[1]}</dd>
        </div>
      </dl>
      <span className="flex items-center justify-between font-sans text-xs font-semibold tracking-[0.12em] text-white/90">
        VIEW LOCATION
        <ArrowRightIcon className="h-5 w-5 text-gold transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </div>
  );

  return (
    <Link
      href={`/locations/${location.slug}`}
      className={`group relative overflow-hidden rounded-xl bg-ink shadow-[0_12px_32px_rgba(0,0,0,0.12)] outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 ${
        imageFirst ? "flex h-[480px] flex-col lg:h-[520px]" : "block h-[420px] lg:h-[520px]"
      }`}
    >
      {imageFirst ? (
        <>
          <div className="relative min-h-0 flex-[1.2] overflow-hidden">
            {location.hero ? (
              <img
                src={location.hero}
                alt={location.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#282326] via-[#171515] to-[#090909]">
                <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-white/55">
                  Location photo coming soon
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />
            <div className="absolute inset-x-0 top-0 p-4 lg:p-5">{badges}</div>
          </div>
          {details}
        </>
      ) : (
        <>
          <img
            src={location.hero}
            alt={location.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.16) 0%, rgba(0,0,0,0) 28%, rgba(0,0,0,0.05) 48%, rgba(0,0,0,0.48) 100%)" }}
          />
          <div className="relative flex h-full flex-col justify-between p-4 lg:p-5">
            {badges}
            {details}
          </div>
        </>
      )}
    </Link>
  );
}

export function LocationGrid({ locations, className = "", imageFirst = false, showGroupBadge = true }) {
  return (
    <StaggerGroup className={`grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6 ${className}`} amount={0.1}>
      {locations.map((location) => (
        <StaggerItem key={location.slug}>
          <LocationCard location={location} imageFirst={imageFirst} showGroupBadge={showGroupBadge} />
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

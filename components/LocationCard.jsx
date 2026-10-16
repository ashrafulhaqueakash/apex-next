import Link from "next/link";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { OutlineBadge, SolidBadge } from "@/components/ui/Badge";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { locationGroups } from "@/lib/locations";

function LocationCard({ location }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="group relative block h-[420px] overflow-hidden rounded-xl lg:h-[520px]"
    >
      <img
        src={location.hero}
        alt={location.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 38%, rgba(0,0,0,0.88) 100%)" }}
      />
      <div className="relative flex h-full flex-col justify-between p-4 lg:p-5">
        <div className="flex items-start justify-between gap-3">
          <OutlineBadge>{locationGroups[location.group]?.name}</OutlineBadge>
          <SolidBadge>{location.status}</SolidBadge>
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="font-display text-2xl font-light leading-8 text-white lg:text-[28px]">{location.name}</h3>
          <p className="font-sans text-sm leading-5 text-white/75">{location.district}, {location.city}</p>
          <dl className="mt-3 grid grid-cols-2 gap-3 border-y border-white/20 py-3">
            <div className="flex flex-col gap-1">
              <dt className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">Media format</dt>
              <dd className="font-sans text-sm leading-5 text-white">{location.specs.find(([label]) => label === "Format")?.[1]}</dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">Media area</dt>
              <dd className="font-sans text-sm leading-5 text-white">{location.specs.find(([label]) => label === "Media area")?.[1]}</dd>
            </div>
          </dl>
          <span className="mt-1 flex items-center gap-2 font-sans text-sm font-medium text-gold">
            VIEW LOCATION
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function LocationGrid({ locations, className = "" }) {
  return (
    <StaggerGroup className={`grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6 ${className}`} amount={0.1}>
      {locations.map((location) => (
        <StaggerItem key={location.slug}>
          <LocationCard location={location} />
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

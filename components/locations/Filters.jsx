"use client";

import { locationGroups, availabilityFilters } from "@/lib/locations";

const GROUP_OPTIONS = [
  { id: "all", name: "ALL", blurb: "Explore Vision Tower in Business Bay, Dubai. More landmark locations will be revealed soon." },
  ...Object.entries(locationGroups).map(([id, group]) => ({ id, ...group })),
];

export function GroupFilter({ active, onChange }) {
  return (
    <div className="relative w-full sm:w-auto">
      <label htmlFor="location-group" className="sr-only">
        Filter by location type
      </label>
      <select
        id="location-group"
        value={active}
        onChange={(event) => onChange(event.target.value)}
        className="w-full cursor-pointer appearance-none rounded-full border border-white/20 bg-white/5 py-2.5 pl-5 pr-11 font-sans text-sm font-medium text-white transition-colors duration-300 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 sm:w-auto"
      >
        {GROUP_OPTIONS.map((option) => (
          <option key={option.id} value={option.id} className="bg-ink text-white">
            {option.name}
          </option>
        ))}
      </select>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70">
        <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function AvailabilityFilter({ active, onChange }) {
  return (
    <div className="relative">
      <label htmlFor="availability" className="sr-only">
        Filter by availability
      </label>
      <select
        id="availability"
        value={active}
        onChange={(e) => onChange(e.target.value)}
        className="w-full cursor-pointer appearance-none rounded-full border border-white/20 bg-white/5 py-2.5 pl-5 pr-11 font-sans text-sm font-medium text-white transition-colors duration-300 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 sm:w-auto"
      >
        {availabilityFilters.map((option) => (
          <option key={option.id} value={option.id} className="bg-ink text-white">
            {option.name}
          </option>
        ))}
      </select>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70">
        <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export { GROUP_OPTIONS };

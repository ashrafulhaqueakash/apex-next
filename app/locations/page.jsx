"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { LocationGrid } from "@/components/LocationCard";
import { ContactSection } from "@/components/ContactSection";
import { Reveal } from "@/components/ui/Reveal";
import { GroupFilter, AvailabilityFilter, GROUP_OPTIONS } from "@/components/locations/Filters";
import { locations, availabilityFilters } from "@/lib/locations";

export default function LocationsPage() {
  const [group, setGroup] = useState("all");
  const [availability, setAvailability] = useState("all");

  const filtered = locations.filter(
    (location) =>
      (group === "all" || location.group === group) &&
      (availability === "all" ||
        (availability === "upcoming"
          ? location.availability !== "now" && location.availability !== "enquire"
          : location.availability === availability))
  );

  const groupBlurb = GROUP_OPTIONS.find((g) => g.id === group)?.blurb;
  const availabilityName = availabilityFilters.find((a) => a.id === availability)?.name;

  const clearFilters = () => {
    setGroup("all");
    setAvailability("all");
  };

  return (
    <div className="w-full">
      <PageHero
        image="/images/locations/photo-e.webp"
        eyebrow="LOCATIONS"
        title="A PORTFOLIO OF LANDMARKS."
        lead="Not a network of panels. A curated collection of Architectural Media opportunities across Dubai. Every location is selected for its architecture, visibility, scale and ability to create extraordinary brand presence."
      />

      <section className="bg-ink px-4 py-12 lg:px-14 lg:py-20">
        <div className="mx-auto flex max-w-[1168px] flex-col gap-8 lg:gap-12">
          <Reveal className="flex flex-col items-start gap-4">
            <span className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/[0.07] px-3 py-1 font-sans text-[11px] font-medium uppercase leading-4 tracking-[0.2em] text-white/80">
              LOCATIONS REVEALING SOON
            </span>
            <h2 className="font-display text-[28px] font-light leading-9 text-white lg:text-[40px] lg:leading-[48px]">
              FIND THE RIGHT LANDMARK.
            </h2>
            <p className="max-w-[760px] font-sans text-base leading-6 text-white/65 lg:text-lg lg:leading-7">
              Explore opportunities across developments under construction, completed buildings and rooftops.
            </p>
            <div className="flex w-full flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
              <GroupFilter active={group} onChange={setGroup} />
              <AvailabilityFilter active={availability} onChange={setAvailability} />
              <p className="font-sans text-sm leading-5 text-white/50 sm:ml-auto hidden sm:block">
                {filtered.length} {filtered.length === 1 ? "location" : "locations"}
              </p>
            </div>
            <p className="font-sans text-sm leading-5 text-white/50">
              {group === "all" && availability === "all" ? groupBlurb : `${groupBlurb} ${availabilityName}.`}
            </p>
          </Reveal>

          {filtered.length > 0 ? (
            <LocationGrid key={`${group}-${availability}`} locations={filtered} />
          ) : (
            <Reveal className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-14 text-center">
              <p className="font-display text-xl font-light leading-7 text-white lg:text-2xl">
                Nothing matches that combination.
              </p>
              <p className="max-w-[420px] font-sans text-base leading-6 text-white/60">
                Try a different availability, or talk to us — inventory moves faster than this page does.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="link-underline cursor-pointer font-sans text-base font-medium text-gold"
              >
                Clear filters
              </button>
            </Reveal>
          )}
        </div>
      </section>

      <ContactSection />
    </div>
  );
}

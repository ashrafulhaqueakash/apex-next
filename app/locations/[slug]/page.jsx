import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Eyebrow, OutlineBadge, SolidBadge } from "@/components/ui/Badge";
import { CheckIcon } from "@/components/ui/Icons";
import { CTAButton } from "@/components/ui/Button";
import { LocationSpecs } from "@/components/locations/LocationSpecs";
import { LocationGrid } from "@/components/LocationCard";
import { ContactSection } from "@/components/ContactSection";
import { locations, locationGroups, getLocationBySlug } from "@/lib/locations";

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return {
    title: `${location.name} — The Apex Media Group`,
    description: location.headline,
  };
}

export default async function LocationDetailPage({ params }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const inquirySubject = encodeURIComponent(`Availability & rates — ${location.name}`);
  const inquiryBody = encodeURIComponent(`Hello Apex Media Group,\n\nI'm interested in availability and rates for ${location.name}.\n\n`);
  const inquiryHref = `mailto:info@theapexmediagroup.com?subject=${inquirySubject}&body=${inquiryBody}`;
  const related = locations.filter((l) => l.slug !== location.slug).slice(0, 3);
  const primarySpecs = location.specs.filter(([label]) => ["Format", "Dimensions", "Media area"].includes(label));
  const additionalSpecs = location.specs.filter(([label]) => !["Format", "Dimensions", "Media area"].includes(label));
  const locationDetails = [
    { label: "Availability", value: location.status },
    { label: "Location", value: `${location.district}, ${location.city}` },
    ...(location.mapUrl ? [{ label: "Map", value: "Open in Google Maps", href: location.mapUrl }] : []),
    ...(location.address ? [{ label: "Address", value: location.address }] : []),
    { label: "Why this location", value: location.headline },
  ];

  return (
    <div className="w-full">
      <section className="relative flex min-h-[100dvh] items-end overflow-hidden bg-ink">
        {location.hero ? (
          <img src={location.hero} alt={location.name} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#282326] via-[#171515] to-[#090909]">
            <p className="absolute inset-x-4 bottom-1/3 text-center font-sans text-xs font-medium uppercase tracking-[0.2em] text-white/55">
              Location photo coming soon
            </p>
          </div>
        )}
        <div className="absolute inset-0 bg-black/35" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 40%, rgba(13,11,12,0.92) 100%)" }}
        />
        <Reveal className="relative mx-auto flex w-full max-w-[1168px] flex-col gap-4 px-4 pb-10 pt-28 lg:gap-5 lg:px-14 lg:pb-14 lg:pt-32">
          <Link href="/locations" className="link-underline w-fit font-sans text-sm font-medium text-white/70">
            ← ALL LOCATIONS
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <OutlineBadge>{locationGroups[location.group]?.name}</OutlineBadge>
            <SolidBadge>{location.status}</SolidBadge>
          </div>
          <h1 className="max-w-[900px] font-display text-[36px] font-light leading-[42px] text-white lg:text-[64px] lg:leading-[70px]">
            {location.name}
          </h1>
          <p className="font-sans text-base leading-6 text-white/75 lg:text-lg">
            {location.district}, {location.city}
          </p>
        </Reveal>
      </section>

      <section className="bg-ivory px-4 py-12 lg:px-14 lg:py-20">
        <div className="mx-auto flex max-w-[1168px] flex-col gap-8 lg:gap-12">
          <Reveal className="flex flex-col items-start gap-4">
            <Eyebrow tone="dark" align="left">Property opportunity</Eyebrow>
            <h2 className="font-display text-[28px] font-light leading-9 text-ink lg:text-[40px] lg:leading-[48px]">
              OWN {location.name.toUpperCase()}.
            </h2>
            <p className="max-w-[800px] font-display text-xl font-light leading-7 text-brand lg:text-2xl lg:leading-8">
              {location.headline}
            </p>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <Reveal className="flex flex-col gap-3 border-t border-ink/15 pt-5">
              <h3 className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-brand">The opportunity</h3>
              <p className="font-sans text-base leading-7 text-ink/70 lg:text-lg lg:leading-8">
                {location.context}
              </p>
            </Reveal>

            <Reveal className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1" delay={0.08}>
              {primarySpecs.map(([label, value]) => (
                <div key={label} className="rounded-xl border border-ink/10 bg-white p-4 lg:flex lg:items-center lg:justify-between lg:gap-6 lg:px-5">
                  <h3 className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-brand">
                    {label === "Format" ? "Media format" : label}
                  </h3>
                  <p className="mt-1 font-display text-lg font-light leading-6 text-ink lg:mt-0 lg:text-right">{value}</p>
                </div>
              ))}
            </Reveal>
          </div>

          {additionalSpecs.length > 0 && (
            <Reveal className="grid gap-6 rounded-2xl bg-ink p-5 text-white sm:grid-cols-[1fr_auto] sm:items-center lg:px-7 lg:py-6">
              <div>
                <h3 className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                  Additional specifications
                </h3>
                <div className="mt-2">
                  <LocationSpecs specs={additionalSpecs} />
                </div>
              </div>
              <a href={inquiryHref} className="cta-red w-full rounded-[4px] border border-brand-edge/50 px-4 py-2 text-center font-sans text-base font-medium text-white sm:w-auto">
                REQUEST AVAILABILITY &amp; RATES
              </a>
            </Reveal>
          )}
        </div>
      </section>

      <section className="bg-white px-4 py-12 lg:px-14 lg:py-16">
        <div className="mx-auto flex max-w-[1168px] flex-col gap-6 lg:gap-8">
          <Reveal className="flex flex-col items-start gap-3">
            <Eyebrow tone="dark" align="left">Location details</Eyebrow>
            <p className="max-w-[760px] font-sans text-base leading-6 text-coal/70 lg:text-lg lg:leading-7">
              Confirmed location and façade measurements for this Architectural Media opportunity.
            </p>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {locationDetails.map((detail) => (
              <StaggerItem key={detail.label} className="h-full">
                <article className="flex h-full flex-col gap-3 rounded-xl border border-ink/10 bg-ivory p-5 lg:p-6">
                  <span className="font-sans text-[11px] font-medium uppercase leading-4 tracking-[0.18em] text-brand">
                    {detail.label}
                  </span>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline w-fit font-display text-lg font-light leading-6 text-brand lg:text-xl"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="font-display text-lg font-light leading-6 text-ink lg:text-xl">
                      {detail.value}
                    </p>
                  )}
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="flex flex-col gap-3 border-t border-ink/10 pt-5 sm:flex-row">
            <a href={inquiryHref} className="cta-red w-full rounded-[4px] border border-brand-edge/50 px-4 py-2 text-center font-sans text-base font-medium text-white sm:w-auto">
              REQUEST AVAILABILITY &amp; RATES
            </a>
          </Reveal>
        </div>
      </section>

      {location.mapEmbedUrl && (
        <section className="bg-ink px-4 py-12 lg:px-14 lg:py-16">
          <div className="mx-auto flex max-w-[1168px] flex-col gap-6">
            <Reveal className="flex flex-col items-start gap-3">
              <Eyebrow align="left">Find the location</Eyebrow>
              <h2 className="font-display text-[28px] font-light leading-9 text-white lg:text-[40px] lg:leading-[48px]">
                {location.name.toUpperCase()}, {location.district.toUpperCase()}.
              </h2>
            </Reveal>
            <Reveal className="overflow-hidden rounded-xl border border-white/10">
              <iframe
                title={`Map showing ${location.name}`}
                src={location.mapEmbedUrl}
                className="h-[320px] w-full border-0 lg:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
            {location.mapUrl && (
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline w-fit font-sans text-sm font-medium text-gold"
              >
                OPEN IN GOOGLE MAPS
              </a>
            )}
          </div>
        </section>
      )}

      <section className="bg-ink px-4 pb-12 lg:px-14 lg:pb-16">
        <Reveal className="mx-auto flex max-w-[578px] flex-col gap-3 rounded-xl bg-[#0b0b0b] p-5 text-center lg:p-6">
          <p className="font-sans text-sm font-medium tracking-[0.08em] text-white/75">
            INTERESTED IN {location.name.toUpperCase()}?
          </p>
          <a
            href={inquiryHref}
            className="cta-red flex w-full items-center justify-center gap-2 rounded-[4px] border border-brand-edge/50 px-4 py-3 font-sans text-base font-semibold text-white lg:text-lg"
          >
            REQUEST AVAILABILITY &amp; RATES <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </section>

      {location.audience && (
      <section className="bg-coal px-4 py-12 lg:px-14 lg:py-20">
        <div className="mx-auto flex max-w-[1168px] flex-col gap-9 lg:gap-12">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <Eyebrow>Audience</Eyebrow>
            <h2 className="font-display text-[26px] font-light leading-9 text-white lg:text-[36px] lg:leading-[46px]">
              Who passes this façade.
            </h2>
            <p className="max-w-[640px] font-sans text-base leading-6 text-white/65 lg:text-lg lg:leading-7">
              How many people see this site, how long they see it for, and who they are.
            </p>
          </Reveal>

          <div className="flex flex-col gap-4">
            <Reveal>
              <h3 className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-white/50">Reach</h3>
            </Reveal>
            <Reveal className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
              <div className="rounded-xl bg-oxblood px-6 py-8 text-center lg:py-10">
                <span className="font-display text-[38px] font-light leading-none text-white lg:text-[52px]">
                  {location.audience.impressions}
                </span>
                <p className="mt-2 font-sans text-sm leading-5 text-white/70">Estimated impressions</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-8 text-center lg:py-10">
                <span className="font-display text-[38px] font-light leading-none text-white lg:text-[52px]">
                  {location.audience.dwell.split(" ")[0]}
                </span>
                <p className="mt-2 font-sans text-sm leading-5 text-white/70">
                  {location.audience.dwell.split(" ").slice(1).join(" ")}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-4">
            <Reveal>
              <h3 className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-white/50">Audience profile</h3>
            </Reveal>
            <StaggerGroup className="grid grid-cols-1 gap-3 lg:grid-cols-4 lg:gap-4">
              {location.audience.splits.map((split) => (
                <StaggerItem key={split.label} className="h-full">
                  <div className="flex h-full flex-col gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-5 lg:px-6 lg:py-6">
                    <span className="font-display text-xl font-light leading-7 text-white lg:text-2xl lg:leading-8">
                      {split.value}
                    </span>
                    <span className="font-sans text-sm leading-5 text-white/60">{split.label}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <Reveal>
            <p className="text-center font-sans text-xs leading-5 text-white/35">
              Audience figures are indicative and provided for planning purposes.
            </p>
          </Reveal>
        </div>
      </section>
      )}

      {location.gallery?.length > 0 && (
      <section className="bg-ink px-4 py-12 lg:px-14 lg:py-20">
        <div className="mx-auto flex max-w-[1168px] flex-col gap-8 lg:gap-10">
          <Reveal className="flex flex-col items-start gap-3">
            <Eyebrow align="left">Location Gallery</Eyebrow>
            <h2 className="font-display text-[28px] font-light leading-9 text-white lg:text-[40px] lg:leading-[48px]">
              A CLOSER LOOK AT {location.name.toUpperCase()}.
            </h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
            {location.gallery.map((src, i) => (
              <StaggerItem key={src}>
                <div className="h-[260px] overflow-hidden rounded-xl border border-white/10 bg-coal lg:h-[340px]">
                  <img
                    src={src}
                    alt={`${location.name} — view ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
      )}

      {location.opportunities?.length > 0 && (
      <section className="rounded-t-[32px] bg-white px-4 py-12 lg:rounded-t-[40px] lg:px-14 lg:py-20">
        <div className="mx-auto flex max-w-[1168px] flex-col gap-8 lg:gap-12">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <Eyebrow tone="dark">Campaign opportunities</Eyebrow>
            <h2 className="max-w-[760px] font-display text-[26px] font-light leading-9 text-ink lg:text-[36px] lg:leading-[46px]">
              What this façade is good for.
            </h2>
          </Reveal>
          <StaggerGroup className="mx-auto flex max-w-[820px] flex-col gap-4">
            {location.opportunities.map((item) => (
              <StaggerItem key={item} className="flex items-start gap-3">
                <CheckIcon stroke="#4c0606" className="mt-1 h-5 w-5" />
                <span className="font-sans text-base leading-7 text-coal lg:text-lg">{item}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="flex justify-center">
            <a href={inquiryHref} className="cta-red rounded-[4px] border border-brand-edge/50 px-4 py-2 text-center font-sans text-base font-medium text-white">
              REQUEST AVAILABILITY &amp; RATES
            </a>
          </Reveal>
        </div>
      </section>
      )}

      {related.length > 0 && (
      <section className="bg-ink px-4 py-12 lg:px-14 lg:py-20">
        <div className="mx-auto flex max-w-[1168px] flex-col gap-8 lg:gap-10">
          <Reveal className="flex flex-col items-center gap-3 text-center">
            <Eyebrow>More locations</Eyebrow>
          </Reveal>
          <LocationGrid locations={related} />
        </div>
      </section>
      )}

      <section className="bg-ivory px-4 py-12 lg:px-14 lg:py-16">
        <Reveal className="mx-auto grid max-w-[1168px] gap-6 border-y border-ink/15 py-7 sm:grid-cols-[1fr_auto] sm:items-center lg:gap-12 lg:py-9">
          <div className="flex flex-col items-start gap-4">
            <Eyebrow tone="dark" align="left">Bespoke Search</Eyebrow>
            <h2 className="max-w-[760px] font-display text-[28px] font-light leading-9 text-ink lg:text-[40px] lg:leading-[48px]">
              LOOKING FOR A DIFFERENT PART OF THE CITY?
            </h2>
            <p className="max-w-[680px] font-sans text-base leading-6 text-ink/70 lg:text-lg lg:leading-7">
              Tell us the audience, district or type of impact you want. Apex is not limited to the locations already
              shown in the portfolio.
            </p>
            <p className="font-sans text-sm font-medium leading-5 text-brand">WE’LL FIND THE ARCHITECTURE.</p>
          </div>
          <CTAButton className="w-full !px-8 sm:w-auto">BRIEF APEX</CTAButton>
        </Reveal>
      </section>

      <section className="bg-ink px-4 py-12 lg:px-14 lg:py-16">
        <Reveal className="mx-auto grid max-w-[1168px] gap-6 border-y border-white/15 py-7 sm:grid-cols-[1fr_auto] sm:items-center lg:gap-12 lg:py-9">
          <div className="flex flex-col items-start gap-4">
            <Eyebrow align="left">Closing</Eyebrow>
            <h2 className="max-w-[700px] font-display text-[28px] font-light leading-9 text-white lg:text-[40px] lg:leading-[48px]">
              THE RIGHT BRAND.
              <span className="block text-gold">THE RIGHT BUILDING. ONE LANDMARK.</span>
            </h2>
          </div>
          <CTAButton className="w-full !px-8 sm:w-auto">START THE CONVERSATION</CTAButton>
        </Reveal>
      </section>

      <ContactSection />
    </div>
  );
}

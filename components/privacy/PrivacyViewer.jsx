"use client";

import { useState, useMemo } from "react";
import { PRIVACY_SECTIONS, PRIVACY_PARTS, PRIVACY_METADATA } from "@/lib/privacyData";

export function PrivacyViewer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPart, setSelectedPart] = useState("all");
  const [copiedSection, setCopiedSection] = useState(null);

  // Filter sections by search query and selected part
  const filteredSections = useMemo(() => {
    let list = PRIVACY_SECTIONS;

    if (selectedPart !== "all") {
      list = list.filter((s) => s.part === selectedPart);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((s) => {
        const matchesNumber = s.number.toString().includes(q);
        const matchesTitle = s.title.toLowerCase().includes(q);
        const matchesParagraphs = s.paragraphs?.some((p) => p.toLowerCase().includes(q));
        const matchesCategories = s.categories?.some((c) => c.toLowerCase().includes(q));
        const matchesPurposes = s.purposes?.some((p) => p.toLowerCase().includes(q));
        const matchesRecipients = s.recipients?.some((r) => r.toLowerCase().includes(q));
        const matchesRights = s.rights?.some(
          (r) => r.right.toLowerCase().includes(q) || r.description.toLowerCase().includes(q)
        );
        const matchesParticulars = s.particulars?.some(
          (p) => p.key.toLowerCase().includes(q) || p.value.toLowerCase().includes(q)
        );
        return (
          matchesNumber ||
          matchesTitle ||
          matchesParagraphs ||
          matchesCategories ||
          matchesPurposes ||
          matchesRecipients ||
          matchesRights ||
          matchesParticulars
        );
      });
    }

    return list;
  }, [searchQuery, selectedPart]);

  // Handle copying direct anchor URL
  const handleCopyLink = (sectionId) => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
      navigator.clipboard.writeText(url).then(() => {
        setCopiedSection(sectionId);
        setTimeout(() => setCopiedSection(null), 2200);
      });
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="relative mx-auto max-w-[1280px] px-4 pb-28 lg:px-14">
      {/* Top Controls Toolbar */}
      <div className="mb-10 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#141213]/90 p-4 shadow-xl backdrop-blur-md md:flex-row md:items-center md:justify-between no-print">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-white/40">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search policy (e.g., cookies, consent, Decree-Law, transfers, Section 16)..."
            className="w-full rounded-xl border border-white/10 bg-black/40 py-2.5 pl-10 pr-10 font-sans text-sm text-ivory placeholder-white/35 transition focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-xs text-white/40 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 font-sans text-xs font-medium text-ivory transition hover:border-white/30 hover:bg-white/10"
            title="Print or Save as PDF"
          >
            <svg
              className="h-4 w-4 text-white/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            Print / PDF
          </button>
        </div>
      </div>

      {/* Filter Tabs by Part */}
      <div className="mb-8 flex flex-wrap items-center gap-2 no-print">
        <button
          type="button"
          onClick={() => setSelectedPart("all")}
          className={`rounded-full px-3.5 py-1.5 font-sans text-xs font-medium transition ${
            selectedPart === "all"
              ? "bg-white text-ink font-semibold shadow"
              : "border border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
          }`}
        >
          All Sections (22)
        </button>
        {PRIVACY_PARTS.map((p) => {
          const isSelected = selectedPart === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelectedPart(p.id)}
              className={`rounded-full px-3.5 py-1.5 font-sans text-xs font-medium transition ${
                isSelected
                  ? "bg-gold text-ink font-semibold shadow"
                  : "border border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
              }`}
            >
              {p.title.split(":")[0]} ({p.clauseRange})
            </button>
          );
        })}
      </div>

      {/* Main Layout Grid: Sidebar Navigation + Policy Sections Content */}
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        {/* Sticky Sidebar on Desktop */}
        <aside className="sticky top-24 hidden lg:col-span-4 lg:block no-print">
          <div className="max-h-[calc(100vh-140px)] overflow-y-auto rounded-2xl border border-white/10 bg-[#121011] p-5 shadow-2xl backdrop-blur-md">
            <div className="mb-4 pb-3 border-b border-white/10">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                Table of Contents
              </span>
              <p className="mt-0.5 text-xs text-white/50">22 Policy Sections in 6 Parts</p>
            </div>

            <nav className="flex flex-col gap-6">
              {PRIVACY_PARTS.map((part) => (
                <div key={part.id} className="flex flex-col gap-1.5">
                  <span className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">
                    {part.title}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    {PRIVACY_SECTIONS.filter((s) => s.part === part.id).map((sec) => {
                      return (
                        <a
                          key={sec.id}
                          href={`#${sec.id}`}
                          className="group flex items-start gap-2.5 rounded-lg px-2.5 py-1.5 text-xs text-white/75 transition hover:bg-white/10 hover:text-white"
                        >
                          <span className="font-mono text-[11px] text-white/35 group-hover:text-gold">
                            {sec.number.toString().padStart(2, "0")}
                          </span>
                          <span className="line-clamp-1 flex-1">{sec.title}</span>
                          {sec.highlight && (
                            <span className="h-1.5 w-1.5 rounded-full bg-gold self-center shrink-0" />
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Sections Document Feed */}
        <main className="flex flex-col gap-8 lg:col-span-8">
          {searchQuery && (
            <div className="flex items-center justify-between rounded-xl border border-gold/30 bg-gold/5 px-4 py-3 text-xs text-gold no-print">
              <span>
                Found <strong>{filteredSections.length}</strong> matching section
                {filteredSections.length === 1 ? "" : "s"} for &ldquo;{searchQuery}&rdquo;
              </span>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="underline hover:text-white"
              >
                Reset search
              </button>
            </div>
          )}

          {filteredSections.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#141213] p-12 text-center">
              <span className="text-3xl">&empty;</span>
              <h3 className="mt-3 font-display text-lg text-white">No sections found</h3>
              <p className="mt-1 text-sm text-white/60">
                No policy sections match &ldquo;{searchQuery}&rdquo;. Try another term like
                &ldquo;consent&rdquo;, &ldquo;cookies&rdquo;, &ldquo;rights&rdquo;, or &ldquo;transfer&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedPart("all");
                }}
                className="mt-4 rounded-xl border border-white/20 bg-white/10 px-4 py-2 font-sans text-xs font-medium text-white hover:bg-white/20"
              >
                Show All 22 Sections
              </button>
            </div>
          ) : (
            filteredSections.map((sec) => {
              const isHighlight = sec.highlight;
              return (
                <article
                  key={sec.id}
                  id={sec.id}
                  className={`scroll-mt-28 rounded-2xl border p-6 transition-all duration-300 lg:p-8 ${
                    isHighlight
                      ? "border-brand/60 bg-gradient-to-b from-[#1f0a0c] to-[#120f10] shadow-[0_4px_24px_rgba(102,9,9,0.25)]"
                      : "border-white/10 bg-[#141213] hover:border-white/20"
                  }`}
                >
                  {/* Section Header */}
                  <div className="mb-5 flex flex-wrap items-start justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="flex items-start gap-3.5">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ${
                          isHighlight
                            ? "bg-brand text-white shadow-md shadow-brand/40"
                            : "border border-white/15 bg-white/5 text-gold"
                        }`}
                      >
                        {sec.number.toString().padStart(2, "0")}
                      </span>
                      <div className="flex flex-col">
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="font-display text-xl font-medium tracking-tight text-white lg:text-2xl">
                            {sec.number}. {sec.title}
                          </h2>
                          {sec.badge && (
                            <span
                              className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                                isHighlight
                                  ? "bg-brand-edge/30 text-[#fca5a5] border border-brand-edge/50"
                                  : "bg-white/5 text-gold/90 border border-gold/30"
                              }`}
                            >
                              {sec.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Copy Link Button */}
                    <button
                      type="button"
                      onClick={() => handleCopyLink(sec.id)}
                      className="no-print inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-sans text-[11px] text-white/50 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                      title="Copy link to this section"
                    >
                      {copiedSection === sec.id ? (
                        <>
                          <svg
                            className="h-3.5 w-3.5 text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-green-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <svg
                            className="h-3.5 w-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                          <span>Copy link</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Section Content */}
                  <div className="flex flex-col gap-3.5 font-sans text-sm leading-relaxed text-white/80">
                    {sec.lead && (
                      <p className="font-medium text-white/90">{sec.lead}</p>
                    )}

                    {/* Standard Paragraphs */}
                    {sec.paragraphs?.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}

                    {/* Data Categories Grid (Section 3) */}
                    {sec.categories && (
                      <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {sec.categories.map((cat, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-black/40 p-3"
                          >
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                            <span className="text-xs text-white/85 leading-normal">{cat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Processing Purposes Grid (Section 5) */}
                    {sec.purposes && (
                      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {sec.purposes.map((purpose, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-black/30 p-2.5"
                          >
                            <svg
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-xs text-white/80 leading-normal">{purpose}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Recipients List (Section 12) */}
                    {sec.recipients && (
                      <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {sec.recipients.map((rec, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-black/40 p-3"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-gold/10 font-mono text-[10px] font-bold text-gold">
                              {idx + 1}
                            </span>
                            <span className="text-xs text-white/85 leading-normal">{rec}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Privacy Rights Breakdown (Section 16) */}
                    {sec.rights && (
                      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {sec.rights.map((item) => (
                          <div
                            key={item.right}
                            className="flex flex-col gap-1 rounded-xl border border-white/10 bg-black/40 p-3.5 transition hover:border-gold/30"
                          >
                            <span className="font-sans text-xs font-bold uppercase tracking-wider text-gold">
                              {item.right}
                            </span>
                            <span className="text-xs text-white/75">{item.description}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Corporate Particulars Grid (Section 22) */}
                    {sec.particulars && (
                      <div className="mt-3 flex flex-col gap-2 rounded-xl border border-white/10 bg-black/40 p-4">
                        {sec.particulars.map((item) => (
                          <div
                            key={item.key}
                            className="flex flex-col gap-0.5 border-b border-white/5 py-2 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between"
                          >
                            <span className="font-sans text-xs font-medium text-white/50">
                              {item.key}
                            </span>
                            <span className="font-sans text-xs font-semibold text-ivory sm:text-right">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })
          )}
        </main>
      </div>

      {/* Corporate Privacy Inquiries Notice Box */}
      <section className="mt-16 rounded-2xl border border-white/15 bg-gradient-to-r from-[#171314] via-[#201517] to-[#171314] p-8 text-center sm:p-10 no-print">
        <h3 className="font-display text-xl font-medium text-white sm:text-2xl">
          Questions Regarding Personal Data or Privacy Rights?
        </h3>
        <p className="mx-auto mt-2 max-w-[680px] font-sans text-sm text-white/70">
          Our data protection compliance team is dedicated to handling statutory privacy inquiries,
          access requests, and data-processing queries under UAE Federal Decree-Law No. 45 of 2021.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${PRIVACY_METADATA.contactEmail}?subject=Corporate%20Privacy%20Policy%20Enquiry`}
            className="cta-red inline-flex items-center justify-center rounded-full border border-brand-edge px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg"
          >
            Contact Privacy Compliance Team
          </a>
          <a
            href="tel:+971585227385"
            className="btn-outline btn-outline-ivory inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.14em] text-white"
          >
            <span className="btn-label">+971 58 522 7385</span>
          </a>
        </div>
      </section>
    </div>
  );
}

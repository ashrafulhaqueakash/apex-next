"use client";

import { useState, useMemo } from "react";
import { TERMS_CLAUSES, TERMS_PARTS, TERMS_METADATA } from "@/lib/termsData";

export function TermsViewer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPart, setSelectedPart] = useState("all");
  const [copiedClause, setCopiedClause] = useState(null);

  // Filter clauses by search query and selected part
  const filteredClauses = useMemo(() => {
    let list = TERMS_CLAUSES;

    if (selectedPart !== "all") {
      list = list.filter((c) => c.part === selectedPart);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((c) => {
        const matchesNumber = c.number.toString().includes(q);
        const matchesTitle = c.title.toLowerCase().includes(q);
        const matchesParagraphs = c.paragraphs?.some((p) => p.toLowerCase().includes(q));
        const matchesDefinitions = c.definitions?.some(
          (d) => d.term.toLowerCase().includes(q) || d.definition.toLowerCase().includes(q)
        );
        const matchesParticulars = c.particulars?.some(
          (p) => p.text.toLowerCase().includes(q) || p.key.toLowerCase().includes(q)
        );
        return (
          matchesNumber ||
          matchesTitle ||
          matchesParagraphs ||
          matchesDefinitions ||
          matchesParticulars
        );
      });
    }

    return list;
  }, [searchQuery, selectedPart]);

  // Handle copying direct anchor URL
  const handleCopyLink = (clauseId) => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}${window.location.pathname}#${clauseId}`;
      navigator.clipboard.writeText(url).then(() => {
        setCopiedClause(clauseId);
        setTimeout(() => setCopiedClause(null), 2200);
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
            placeholder="Search clauses (e.g., payment, cancellation, permit, indemnity, Clause 9)..."
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
          All Clauses (27)
        </button>
        {TERMS_PARTS.map((p) => {
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

      {/* Main Layout Grid: Sidebar Navigation + Clause Content */}
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        {/* Sticky Sidebar on Desktop */}
        <aside className="sticky top-24 hidden lg:col-span-4 lg:block no-print">
          <div className="max-h-[calc(100vh-140px)] overflow-y-auto rounded-2xl border border-white/10 bg-[#121011] p-5 shadow-2xl backdrop-blur-md">
            <div className="mb-4 pb-3 border-b border-white/10">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                Table of Contents
              </span>
              <p className="mt-0.5 text-xs text-white/50">27 Clauses in 6 Parts</p>
            </div>

            <nav className="flex flex-col gap-6">
              {TERMS_PARTS.map((part) => (
                <div key={part.id} className="flex flex-col gap-1.5">
                  <span className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">
                    {part.title}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    {TERMS_CLAUSES.filter((c) => c.part === part.id).map((clause) => {
                      return (
                        <a
                          key={clause.id}
                          href={`#${clause.id}`}
                          className="group flex items-start gap-2.5 rounded-lg px-2.5 py-1.5 text-xs text-white/75 transition hover:bg-white/10 hover:text-white"
                        >
                          <span className="font-mono text-[11px] text-white/35 group-hover:text-gold">
                            {clause.number.toString().padStart(2, "0")}
                          </span>
                          <span className="line-clamp-1 flex-1">{clause.title}</span>
                          {clause.highlight && (
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

        {/* Clauses Document Feed */}
        <main className="flex flex-col gap-8 lg:col-span-8">
          {searchQuery && (
            <div className="flex items-center justify-between rounded-xl border border-gold/30 bg-gold/5 px-4 py-3 text-xs text-gold no-print">
              <span>
                Found <strong>{filteredClauses.length}</strong> matching clause
                {filteredClauses.length === 1 ? "" : "s"} for &ldquo;{searchQuery}&rdquo;
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

          {filteredClauses.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#141213] p-12 text-center">
              <span className="text-3xl">&empty;</span>
              <h3 className="mt-3 font-display text-lg text-white">No clauses found</h3>
              <p className="mt-1 text-sm text-white/60">
                No clauses match &ldquo;{searchQuery}&rdquo;. Try another term like
                &ldquo;media&rdquo;, &ldquo;production&rdquo;, &ldquo;payment&rdquo;, or &ldquo;cancel&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedPart("all");
                }}
                className="mt-4 rounded-xl border border-white/20 bg-white/10 px-4 py-2 font-sans text-xs font-medium text-white hover:bg-white/20"
              >
                Show All 27 Clauses
              </button>
            </div>
          ) : (
            filteredClauses.map((clause) => {
              const isHighlight = clause.highlight;
              return (
                <article
                  key={clause.id}
                  id={clause.id}
                  className={`scroll-mt-28 rounded-2xl border p-6 transition-all duration-300 lg:p-8 ${
                    isHighlight
                      ? "border-brand/60 bg-gradient-to-b from-[#1f0a0c] to-[#120f10] shadow-[0_4px_24px_rgba(102,9,9,0.25)]"
                      : "border-white/10 bg-[#141213] hover:border-white/20"
                  }`}
                >
                  {/* Clause Header */}
                  <div className="mb-5 flex flex-wrap items-start justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="flex items-start gap-3.5">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ${
                          isHighlight
                            ? "bg-brand text-white shadow-md shadow-brand/40"
                            : "border border-white/15 bg-white/5 text-gold"
                        }`}
                      >
                        {clause.number.toString().padStart(2, "0")}
                      </span>
                      <div className="flex flex-col">
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="font-display text-xl font-medium tracking-tight text-white lg:text-2xl">
                            {clause.number}. {clause.title}
                          </h2>
                          {clause.badge && (
                            <span
                              className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                                isHighlight
                                  ? "bg-brand-edge/30 text-[#fca5a5] border border-brand-edge/50"
                                  : "bg-white/5 text-gold/90 border border-gold/30"
                              }`}
                            >
                              {clause.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Copy Link Button */}
                    <button
                      type="button"
                      onClick={() => handleCopyLink(clause.id)}
                      className="no-print inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-sans text-[11px] text-white/50 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                      title="Copy link to this clause"
                    >
                      {copiedClause === clause.id ? (
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

                  {/* Clause Content */}
                  <div className="flex flex-col gap-3.5 font-sans text-sm leading-relaxed text-white/80">
                    {clause.lead && (
                      <p className="font-medium text-white/90">{clause.lead}</p>
                    )}

                    {/* Standard Paragraphs */}
                    {clause.paragraphs?.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}

                    {/* Definitions (Clause 2) */}
                    {clause.definitions && (
                      <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {clause.definitions.map((item) => (
                          <div
                            key={item.term}
                            className="flex flex-col gap-1 rounded-xl border border-white/5 bg-black/40 p-3.5"
                          >
                            <span className="font-sans text-xs font-bold uppercase tracking-wider text-gold">
                              &ldquo;{item.term}&rdquo;
                            </span>
                            <span className="text-xs text-white/75">{item.definition}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Booking Confirmation Particulars (Clause 26) */}
                    {clause.particulars && (
                      <div className="mt-3 flex flex-col gap-2 rounded-xl border border-white/10 bg-black/40 p-4">
                        {clause.particulars.map((item) => (
                          <div
                            key={item.key}
                            className="flex items-start gap-3 border-b border-white/5 py-2 last:border-b-0"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gold/15 font-mono text-xs font-bold text-gold">
                              {item.key}
                            </span>
                            <span className="text-xs leading-relaxed text-white/80">
                              {item.text}
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

      {/* Corporate Inquiries Notice Box */}
      <section className="mt-16 rounded-2xl border border-white/15 bg-gradient-to-r from-[#171314] via-[#201517] to-[#171314] p-8 text-center sm:p-10 no-print">
        <h3 className="font-display text-xl font-medium text-white sm:text-2xl">
          Questions Regarding Booking Confirmations or Contracting?
        </h3>
        <p className="mx-auto mt-2 max-w-[680px] font-sans text-sm text-white/70">
          Our team is available to assist agencies, advertisers and property partners with bespoke
          schedules, technical matrices, and commercial confirmation agreements.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${TERMS_METADATA.contactEmail}?subject=General%20Terms%20%26%20Conditions%20Inquiry`}
            className="cta-red inline-flex items-center justify-center rounded-full border border-brand-edge px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg"
          >
            Contact Legal &amp; Commercial Team
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

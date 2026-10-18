import { Reveal } from "@/components/ui/Reveal";

const HIGHLIGHTS = [
  {
    clause: "Clause 5",
    anchor: "#clause-5",
    tag: "Production Advance",
    title: "100% Production Advance Policy",
    desc: "100% of all agreed Production Costs must be paid in full in advance in cleared funds before any production activities commence or commitments are incurred.",
  },
  {
    clause: "Clause 6",
    anchor: "#clause-6",
    tag: "Media Terms",
    title: "14-Day Media Fee Settlement",
    desc: "Media Fees shall be paid strictly no later than fourteen (14) calendar days after the verified Campaign Start Date, supported by activation evidence.",
  },
  {
    clause: "Clause 9",
    anchor: "#clause-9",
    tag: "Binding Reservation",
    title: "100% Client Cancellation Commitment",
    desc: "Bookings are binding upon confirmation with no unilateral cancellation for convenience. Governed in accordance with UAE Federal Decree-Law No. 25 of 2025.",
  },
];

export function TermsHighlights() {
  return (
    <section className="relative z-10 mx-auto -mt-6 max-w-[1280px] px-4 pb-12 lg:px-14">
      <Reveal className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {HIGHLIGHTS.map((h) => (
          <a
            key={h.clause}
            href={h.anchor}
            className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#141213] p-6 transition-all duration-300 hover:border-gold/40 hover:bg-[#1a1719] hover:shadow-[0_12px_32px_rgba(0,0,0,0.45)]"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                  {h.clause} &bull; {h.tag}
                </span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-gold">
                  &rarr;
                </span>
              </div>
              <h3 className="font-display text-lg font-medium text-white group-hover:text-gold transition-colors">
                {h.title}
              </h3>
              <p className="font-sans text-xs leading-relaxed text-white/70">
                {h.desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-medium text-white/50 group-hover:text-white/80">
              Read clause terms &rarr;
            </div>
          </a>
        ))}
      </Reveal>
    </section>
  );
}

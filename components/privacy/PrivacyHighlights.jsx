import { Reveal } from "@/components/ui/Reveal";

const HIGHLIGHTS = [
  {
    section: "Section 6",
    anchor: "#section-6",
    tag: "Lawful Framework",
    title: "UAE Decree-Law No. 45/2021",
    desc: "Personal data processing adheres strictly to lawful statutory grounds and exceptions established by UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection.",
  },
  {
    section: "Section 8",
    anchor: "#section-8",
    tag: "Operational Scope",
    title: "Permits & Architectural Delivery",
    desc: "Coordination across APEX BUILD, ICON & ABOVE exchanges contact data with property owners, engineers, and municipal authorities solely for safe site access, production, and permits.",
  },
  {
    section: "Section 16",
    anchor: "#section-16",
    tag: "Data Subject Rights",
    title: "Access, Rectification & Erasure",
    desc: "Exercise rights of access, correction, restriction, consent withdrawal or erasure via our dedicated point of contact at info@theapexmediagroup.com.",
  },
];

export function PrivacyHighlights() {
  return (
    <section className="relative z-10 mx-auto -mt-6 max-w-[1280px] px-4 pb-12 lg:px-14">
      <Reveal className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {HIGHLIGHTS.map((h) => (
          <a
            key={h.section}
            href={h.anchor}
            className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#141213] p-6 transition-all duration-300 hover:border-gold/40 hover:bg-[#1a1719] hover:shadow-[0_12px_32px_rgba(0,0,0,0.45)]"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                  {h.section} &bull; {h.tag}
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
              Read section details &rarr;
            </div>
          </a>
        ))}
      </Reveal>
    </section>
  );
}

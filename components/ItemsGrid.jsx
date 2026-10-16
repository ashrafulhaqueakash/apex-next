import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Badge";

const COLS = { 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5" };

export function ItemsGrid({ eyebrow, title, lead, items, tone = "light" }) {
  const dark = tone === "dark";
  const colClass = COLS[items.length] ?? "lg:grid-cols-3";

  return (
    <section className={`px-4 py-12 lg:px-14 lg:py-20 ${dark ? "bg-ink" : "bg-white rounded-t-[32px] lg:rounded-t-[40px]"}`}>
      <div className="mx-auto flex max-w-[1168px] flex-col gap-9 lg:gap-14">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <Eyebrow tone={dark ? "light" : "dark"}>{eyebrow}</Eyebrow>
          <h2
            className={`max-w-[880px] font-display text-[28px] font-light leading-9 lg:text-[40px] lg:leading-[52px] ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            {title}
          </h2>
          {lead && (
            <p className={`max-w-[700px] font-sans text-base leading-6 lg:text-lg lg:leading-7 ${dark ? "text-white/70" : "text-coal/70"}`}>
              {lead}
            </p>
          )}
        </Reveal>
        <StaggerGroup className={`grid grid-cols-1 gap-4 ${colClass} lg:gap-x-6 lg:gap-y-6`}>
          {items.map((item, i) => (
            <StaggerItem key={item.title} className="h-full">
              <div
                className={`flex h-full flex-col gap-2.5 rounded-xl border p-5 transition-colors duration-300 lg:p-6 ${
                  dark
                    ? "border-white/10 bg-white/[0.03] hover:border-gold/40 hover:bg-white/[0.05]"
                    : "border-ink/[0.07] bg-ink/[0.025] hover:border-ink/15 hover:bg-ink/[0.04]"
                }`}
              >
                <span className={`font-sans text-xs font-medium tabular-nums ${dark ? "text-gold" : "text-oxblood"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={`font-display text-xl font-light leading-7 lg:text-2xl lg:leading-8 ${dark ? "text-white" : "text-ink"}`}>
                  {item.title}
                </h3>
                <p className={`font-sans text-base leading-6 ${dark ? "text-white/70" : "text-coal/70"}`}>{item.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

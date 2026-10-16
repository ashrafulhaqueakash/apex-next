export function OutlineBadge({ children }) {
  return (
    <span className="rounded-full border border-white/35 bg-black/30 px-2.5 py-0.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm">
      {children}
    </span>
  );
}

export function SolidBadge({ children }) {
  return (
    <span className="rounded-full border border-white/35 bg-black/30 px-2.5 py-0.5 font-sans text-xs font-medium text-white backdrop-blur-sm">
      {children}
    </span>
  );
}

export function Eyebrow({ children, className = "", tone = "light", align = "center" }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-3 py-1 font-sans text-[11px] font-medium uppercase leading-4 tracking-[0.2em] ${
        align === "center" ? "self-center" : "self-start"
      } ${tone === "dark" ? "border-ink/15 bg-ink/[0.04] text-ink/65" : "border-white/20 bg-white/[0.07] text-white/80"} ${className}`}
    >
      {children}
    </span>
  );
}

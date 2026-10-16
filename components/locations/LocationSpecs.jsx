export function LocationSpecs({ specs }) {
  return (
    <dl className="flex flex-col">
      {specs.map(([label, value], i) => (
        <div key={label} className={`flex items-baseline justify-between gap-6 py-3.5 ${i === 0 ? "" : "border-t border-white/10"}`}>
          <dt className="font-sans text-sm leading-5 text-white/55">{label}</dt>
          <dd className="text-right font-display text-base leading-6 text-white">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

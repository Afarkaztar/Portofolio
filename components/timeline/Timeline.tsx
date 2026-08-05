type TimelineItem = {
  label: string;
  description: string;
};

export function CareerTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l border-border pl-6">
      {items.map((item, i) => (
        <li key={item.label} className="mb-8 last:mb-0">
          <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent" />
          <p className="font-mono text-xs text-text-secondary">{String(i + 1).padStart(2, "0")}</p>
          <h3 className="mb-1 text-base font-semibold text-text-primary">{item.label}</h3>
          <p className="text-sm text-text-secondary">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}

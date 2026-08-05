import { LucideIcon } from "lucide-react";

export default function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-card border border-border bg-background-secondary p-5">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-surface text-accent">
        <Icon size={18} />
      </div>
      <p className="mb-1 font-mono text-xs uppercase tracking-wide text-text-secondary">{label}</p>
      <p className="text-sm font-medium text-text-primary">{value}</p>
    </div>
  );
}

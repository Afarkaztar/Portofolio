import { ReactNode } from "react";

const tones: Record<string, string> = {
  neutral: "bg-surface text-text-secondary border-border",
  accent: "bg-accent/10 text-accent border-accent/30",
  success: "bg-success/10 text-success border-success/30",
  warning: "bg-warning/10 text-warning border-warning/30",
};

export default function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "accent" | "success" | "warning";
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-mono ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

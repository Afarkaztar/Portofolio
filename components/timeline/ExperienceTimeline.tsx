import { Experience } from "@/data/experience";

export default function ExperienceTimeline({ items }: { items: Experience[] }) {
  return (
    <ol className="relative border-l border-border pl-6 md:pl-8">
      {items.map((exp) => (
        <li key={`${exp.organization}-${exp.role}`} className="mb-12 last:mb-0">
          <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent" />
          <div className="rounded-card border border-border bg-background-secondary p-6">
            <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-text-primary">{exp.role}</h3>
              <span className="font-mono text-xs text-text-secondary">{exp.duration}</span>
            </div>
            <p className="mb-3 text-sm font-medium text-accent">{exp.organization}</p>
            <p className="mb-4 text-sm leading-relaxed text-text-secondary">{exp.description}</p>

            {exp.achievements.length > 0 && (
              <ul className="mb-4 space-y-1.5">
                {exp.achievements.map((a) => (
                  <li key={a} className="flex gap-2 text-sm text-text-secondary">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    {a}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((t) => (
                <span key={t} className="rounded-md bg-surface px-2 py-1 font-mono text-xs text-text-secondary">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

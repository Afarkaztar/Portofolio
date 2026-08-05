import { technologies } from "@/data/technologies";

const levelDot: Record<string, string> = {
  Beginner: "bg-text-secondary",
  Intermediate: "bg-accent",
  Advanced: "bg-success",
};

export default function TechStack() {
  return (
    <section className="section-y border-b border-border">
      <div className="container-content">
        <p className="mb-2 font-mono text-sm text-accent">02 · Toolbox</p>
        <h2 className="mb-10 text-2xl font-bold text-text-primary sm:text-3xl">Tech Stack</h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((group) => (
            <div key={group.category}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wide text-text-secondary">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((tech) => (
                  <li key={tech.name} className="flex items-center justify-between border-b border-border/60 pb-3">
                    <span className="text-sm text-text-primary">{tech.name}</span>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-text-secondary">
                      <span className={`h-1.5 w-1.5 rounded-full ${levelDot[tech.level]}`} />
                      {tech.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

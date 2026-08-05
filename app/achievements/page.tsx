import type { Metadata } from "next";
import { Award, ExternalLink } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { achievements, Achievement } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Competitions, certifications, leadership roles, and awards.",
};

const categories: Achievement["category"][] = ["Competition", "Certification", "Leadership", "Awards"];

export default function AchievementsPage() {
  return (
    <section className="section-y">
      <div className="container-content">
        <p className="mb-2 font-mono text-sm text-accent">Recognition</p>
        <h1 className="mb-4 text-3xl font-bold text-text-primary sm:text-4xl">Achievements</h1>
        <p className="mb-12 max-w-xl text-text-secondary">
          Competitions, certifications, and leadership roles earned along the way.
        </p>

        <div className="space-y-12">
          {categories.map((category) => {
            const items = achievements.filter((a) => a.category === category);
            if (items.length === 0) return null;

            return (
              <div key={category}>
                <h2 className="mb-5 font-mono text-sm uppercase tracking-wide text-text-secondary">
                  {category}
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {items.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-card border border-border bg-background-secondary p-5"
                    >
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-surface text-accent">
                          <Award size={16} />
                        </div>
                        {item.credentialLink && (
                          <a
                            href={item.credentialLink}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View credential"
                            className="text-text-secondary hover:text-text-primary"
                          >
                            <ExternalLink size={15} />
                          </a>
                        )}
                      </div>
                      <h3 className="mb-1 text-base font-semibold text-text-primary">{item.title}</h3>
                      <p className="mb-1 text-sm text-accent">{item.organization}</p>
                      <p className="mb-3 font-mono text-xs text-text-secondary">{item.date}</p>
                      <p className="text-sm leading-relaxed text-text-secondary">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

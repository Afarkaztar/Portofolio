"use client";

import { useState } from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects, Project } from "@/data/projects";

const categories: Array<Project["category"] | "All"> = [
  "All",
  "Security",
  "Networking",
  "Infrastructure",
  "Automation",
  "Web",
  "Cloud",
];

export default function ProjectsGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
              active === cat
                ? "border-accent bg-accent/10 text-accent"
                : "border-border bg-surface text-text-secondary hover:text-text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-text-secondary">No projects in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

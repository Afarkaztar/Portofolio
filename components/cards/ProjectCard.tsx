import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import Badge from "@/components/ui/Badge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-card border border-border bg-background-secondary p-6 transition-colors hover:border-accent/50">
      <div className="mb-4 flex items-start justify-between">
        <Badge tone="accent">{project.category}</Badge>
        <div className="flex items-center gap-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="rounded-md p-1.5 text-text-secondary hover:text-text-primary"
            >
              <Github size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
              className="rounded-md p-1.5 text-text-secondary hover:text-text-primary"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <h3 className="mb-2 font-sans text-lg font-semibold text-text-primary">{project.title}</h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-text-secondary">{project.description}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="rounded-md bg-surface px-2 py-1 font-mono text-xs text-text-secondary">
            {tech}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex items-center gap-1 text-sm font-medium text-accent"
      >
        View details
        <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </div>
  );
}

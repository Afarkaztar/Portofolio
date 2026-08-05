import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const sections: Array<[string, string]> = [
    ["Overview", project.overview],
    ["Problem", project.problem],
    ["Solution", project.solution],
    ["Lessons Learned", project.lessonsLearned],
    ["Future Improvements", project.futureImprovements],
  ];

  return (
    <article className="section-y">
      <div className="container-content max-w-3xl">
        <Link href="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary">
          <ArrowLeft size={15} />
          Back to projects
        </Link>

        <Badge tone="accent">{project.category}</Badge>
        <h1 className="mb-4 mt-4 text-3xl font-bold text-text-primary sm:text-4xl">{project.title}</h1>
        <p className="mb-6 text-lg text-text-secondary">{project.description}</p>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-md bg-surface px-2.5 py-1 font-mono text-xs text-text-secondary">
              {tech}
            </span>
          ))}
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {project.github && (
            <Button href={project.github} external variant="secondary" icon={<Github size={16} />}>
              Source Code
            </Button>
          )}
          {project.demo && (
            <Button href={project.demo} external variant="secondary" icon={<ExternalLink size={16} />}>
              Live Demo
            </Button>
          )}
        </div>

        <div className="space-y-8 border-t border-border pt-10">
          {sections.map(([heading, text]) => (
            <div key={heading}>
              <h2 className="mb-2 text-lg font-semibold text-text-primary">{heading}</h2>
              <p className="leading-relaxed text-text-secondary">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

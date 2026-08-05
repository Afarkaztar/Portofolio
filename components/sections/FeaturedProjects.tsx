import { ArrowUpRight } from "lucide-react";
import ProjectCard from "@/components/cards/ProjectCard";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="section-y border-b border-border">
      <div className="container-content">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 font-mono text-sm text-accent">01 · Work</p>
            <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">Featured Projects</h2>
          </div>
          <Button href="/projects" variant="ghost" icon={<ArrowUpRight size={16} />} className="hidden sm:inline-flex">
            View all
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <Button href="/projects" variant="secondary" icon={<ArrowUpRight size={16} />} className="w-full">
            View all projects
          </Button>
        </div>
      </div>
    </section>
  );
}

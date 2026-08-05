import type { Metadata } from "next";
import ProjectsGrid from "./ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of engineering projects across security, networking, infrastructure, and the web.",
};

export default function ProjectsPage() {
  return (
    <section className="section-y">
      <div className="container-content">
        <p className="mb-2 font-mono text-sm text-accent">Work</p>
        <h1 className="mb-4 text-3xl font-bold text-text-primary sm:text-4xl">Projects</h1>
        <p className="mb-10 max-w-xl text-text-secondary">
          Real work across security, networking, infrastructure, automation, and the web — built to learn, not just to demo.
        </p>
        <ProjectsGrid />
      </div>
    </section>
  );
}

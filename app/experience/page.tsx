import type { Metadata } from "next";
import ExperienceTimeline from "@/components/timeline/ExperienceTimeline";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional and academic experience across infrastructure, security, and engineering.",
};

export default function ExperiencePage() {
  return (
    <section className="section-y">
      <div className="container-content max-w-3xl">
        <p className="mb-2 font-mono text-sm text-accent">Track Record</p>
        <h1 className="mb-4 text-3xl font-bold text-text-primary sm:text-4xl">Experience</h1>
        <p className="mb-12 text-text-secondary">
          Academic, internship, and competition experience that has shaped how I approach engineering problems.
        </p>
        <ExperienceTimeline items={experience} />
      </div>
    </section>
  );
}

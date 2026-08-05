import type { Metadata } from "next";
import { CareerTimeline } from "@/components/timeline/Timeline";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: profile.aboutSummary,
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-content py-16 md:py-20">
          <p className="mb-2 font-mono text-sm text-accent">About</p>
          <h1 className="text-balance mb-4 max-w-2xl text-3xl font-bold text-text-primary sm:text-4xl">
            About Me
          </h1>
          <p className="max-w-2xl text-lg text-text-secondary">{profile.aboutSummary}</p>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-content grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="mb-6 text-xl font-bold text-text-primary">Professional Biography</h2>
            <div className="space-y-5">
              {profile.bio.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-xl font-bold text-text-primary">Career Timeline</h2>
            <CareerTimeline items={profile.careerTimeline} />
          </div>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-content">
          <h2 className="mb-8 text-xl font-bold text-text-primary">Core Values</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profile.coreValues.map((value) => (
              <div key={value.title} className="rounded-card border border-border bg-background-secondary p-5">
                <h3 className="mb-2 text-sm font-semibold text-text-primary">{value.title}</h3>
                <p className="text-sm text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-content">
          <h2 className="mb-6 text-xl font-bold text-text-primary">Current Interests</h2>
          <div className="flex flex-wrap gap-2">
            {profile.currentInterests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-border bg-surface px-4 py-2 font-mono text-sm text-text-secondary"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

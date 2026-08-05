import type { Metadata } from "next";
import WriteupCard from "@/components/cards/WriteupCard";
import { getAllContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writeups",
  description: "Technical writeups on CTF challenges, vulnerabilities, and Linux/networking deep dives.",
};

export default function WriteupsPage() {
  const writeups = getAllContent("writeups");

  return (
    <section className="section-y">
      <div className="container-content">
        <p className="mb-2 font-mono text-sm text-accent">Documentation</p>
        <h1 className="mb-4 text-3xl font-bold text-text-primary sm:text-4xl">Writeups</h1>
        <p className="mb-10 max-w-xl text-text-secondary">
          Technical documentation from CTF challenges and security research — web, Linux, networking, and more.
        </p>

        {writeups.length === 0 ? (
          <p className="text-text-secondary">No writeups published yet — check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {writeups.map((w) => (
              <WriteupCard key={w.slug} writeup={w} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

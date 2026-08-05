import type { Metadata } from "next";
import BlogCard from "@/components/cards/BlogCard";
import { getAllContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "A learning journal on Linux, networking, cloud, career, and university life.",
};

export default function BlogPage() {
  const posts = getAllContent("blog");

  return (
    <section className="section-y">
      <div className="container-content">
        <p className="mb-2 font-mono text-sm text-accent">Journal</p>
        <h1 className="mb-4 text-3xl font-bold text-text-primary sm:text-4xl">Blog</h1>
        <p className="mb-10 max-w-xl text-text-secondary">
          A learning journal — notes on Linux, networking, cloud, career, internships, and university life.
        </p>

        {posts.length === 0 ? (
          <p className="text-text-secondary">No posts published yet — check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

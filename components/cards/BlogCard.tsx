import Link from "next/link";
import { Clock } from "lucide-react";
import Badge from "@/components/ui/Badge";

export type BlogMeta = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
};

export default function BlogCard({ post }: { post: BlogMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-card border border-border bg-background-secondary p-6 transition-colors hover:border-accent/50"
    >
      <div className="mb-3 flex items-center justify-between">
        <Badge tone="neutral">{post.category}</Badge>
        <span className="flex items-center gap-1 text-xs text-text-secondary">
          <Clock size={13} />
          {post.readingTime}
        </span>
      </div>
      <h3 className="mb-2 font-sans text-base font-semibold text-text-primary group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">{post.excerpt}</p>
      <p className="font-mono text-xs text-text-secondary">{post.date}</p>
    </Link>
  );
}

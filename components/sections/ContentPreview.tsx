import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import WriteupCard from "@/components/cards/WriteupCard";
import BlogCard from "@/components/cards/BlogCard";
import { ContentMeta } from "@/lib/content";

export default function ContentPreview({
  index,
  eyebrow,
  title,
  items,
  viewAllHref,
  type,
}: {
  index: string;
  eyebrow: string;
  title: string;
  items: ContentMeta[];
  viewAllHref: string;
  type: "writeup" | "blog";
}) {
  if (items.length === 0) return null;

  return (
    <section className="section-y border-b border-border">
      <div className="container-content">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 font-mono text-sm text-accent">
              {index} · {eyebrow}
            </p>
            <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">{title}</h2>
          </div>
          <Button href={viewAllHref} variant="ghost" icon={<ArrowUpRight size={16} />} className="hidden sm:inline-flex">
            View all
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) =>
            type === "writeup" ? (
              <WriteupCard key={item.slug} writeup={item} />
            ) : (
              <BlogCard key={item.slug} post={item} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

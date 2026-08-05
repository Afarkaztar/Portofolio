import Link from "next/link";
import { Clock } from "lucide-react";
import Badge from "@/components/ui/Badge";

export type WriteupMeta = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
};

export default function WriteupCard({ writeup }: { writeup: WriteupMeta }) {
  return (
    <Link
      href={`/writeups/${writeup.slug}`}
      className="group flex flex-col rounded-card border border-border bg-background-secondary p-6 transition-colors hover:border-accent/50"
    >
      <div className="mb-3 flex items-center justify-between">
        <Badge tone="accent">{writeup.category}</Badge>
        <span className="flex items-center gap-1 text-xs text-text-secondary">
          <Clock size={13} />
          {writeup.readingTime}
        </span>
      </div>
      <h3 className="mb-2 font-sans text-base font-semibold text-text-primary group-hover:text-accent">
        {writeup.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">{writeup.excerpt}</p>
      <p className="font-mono text-xs text-text-secondary">{writeup.date}</p>
    </Link>
  );
}

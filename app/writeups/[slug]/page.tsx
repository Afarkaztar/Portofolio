import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { getAllSlugs, getContentSource } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";

export function generateStaticParams() {
  return getAllSlugs("writeups").map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const source = getContentSource("writeups", params.slug);
  if (!source) return {};
  return {
    title: source.meta.title,
    description: source.meta.excerpt,
  };
}

export default function WriteupDetailPage({ params }: { params: { slug: string } }) {
  const source = getContentSource("writeups", params.slug);
  if (!source) notFound();

  const components = useMDXComponents({});

  return (
    <article className="section-y">
      <div className="container-content max-w-2xl">
        <Link href="/writeups" className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary">
          <ArrowLeft size={15} />
          Back to writeups
        </Link>

        <Badge tone="accent">{source.meta.category}</Badge>
        <h1 className="mb-4 mt-4 text-3xl font-bold text-text-primary sm:text-4xl">{source.meta.title}</h1>
        <div className="mb-10 flex items-center gap-4 font-mono text-xs text-text-secondary">
          <span>{source.meta.date}</span>
          <span className="flex items-center gap-1">
            <Clock size={13} />
            {source.readingTime}
          </span>
        </div>

        <div className="prose-content">
          <MDXRemote source={source.content} components={components} />
        </div>
      </div>
    </article>
  );
}

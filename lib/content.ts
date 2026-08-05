import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type ContentMeta = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
};

function getContentDir(type: "blog" | "writeups") {
  return path.join(process.cwd(), "content", type);
}

export function getAllContent(type: "blog" | "writeups"): ContentMeta[] {
  const dir = getContentDir(type);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const items = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title ?? slug,
      category: data.category ?? "General",
      date: data.date ?? "",
      readingTime: stats.text,
      excerpt: data.excerpt ?? "",
    };
  });

  return items.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getContentSource(type: "blog" | "writeups", slug: string) {
  const filePath = path.join(getContentDir(type), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  return { meta: data, content, readingTime: stats.text };
}

export function getAllSlugs(type: "blog" | "writeups") {
  const dir = getContentDir(type);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

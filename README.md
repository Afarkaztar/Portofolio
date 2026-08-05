# Afarik Rakas Berdi — Portfolio

A performance-focused engineering portfolio built with Next.js (App Router), TypeScript, TailwindCSS, and MDX. Designed to feel like Vercel/Linear/Stripe rather than a generic portfolio template.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Content:** MDX (blog posts & writeups) via `gray-matter` + `next-mdx-remote`
- **Animation:** Framer Motion (installed, ready to use for scroll-based reveals)
- **Icons:** Lucide
- **Deployment target:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

> **Note:** The build fetches `Inter` and `JetBrains Mono` from Google Fonts at build time via `next/font/google`. This requires internet access during `npm run build`. If you're building in a fully offline/sandboxed environment, temporarily swap the font imports for system fonts.

## Project Structure

```
app/                  Route segments (App Router)
  about/               About page
  projects/            Projects list + [slug] detail pages
  experience/          Experience timeline page
  achievements/        Achievements page
  writeups/            Writeups list + [slug] MDX detail pages
  blog/                Blog list + [slug] MDX detail pages
  contact/             Contact page
  layout.tsx           Root layout, fonts, global SEO metadata
  sitemap.ts           Dynamic sitemap.xml
  robots.ts            Dynamic robots.txt

components/
  ui/                  Button, Badge
  cards/               ProjectCard, WriteupCard, BlogCard, InfoCard
  sections/            Hero, StatusCards, FeaturedProjects, TechStack, ContentPreview, ContactCTA
  timeline/            CareerTimeline, ExperienceTimeline
  navbar/               Navbar (sticky, auto-hide on scroll)
  footer/              Footer

content/
  blog/                Blog posts as .mdx files (frontmatter: title, category, date, excerpt)
  writeups/            Writeups as .mdx files (same frontmatter shape)

data/                  All editable content lives here as typed TypeScript objects
  profile.ts           Name, bio, career timeline, core values
  projects.ts          Project entries (edit or add new projects here)
  experience.ts        Work/academic experience entries
  certifications.ts    Achievements & certifications
  technologies.ts      Tech stack grid, grouped by category
  social.ts            Email, GitHub, LinkedIn, Instagram, resume path

lib/content.ts          MDX reading utilities (getAllContent, getContentSource, getAllSlugs)
mdx-components.tsx       Custom styled elements for rendered MDX content
```

## Editing Content

Almost everything on the site is data-driven — you generally don't need to touch component code:

- **Profile / bio / hero copy:** edit `data/profile.ts`
- **Projects:** add/edit objects in `data/projects.ts` (each gets an automatic detail page at `/projects/[slug]`)
- **Experience:** edit `data/experience.ts`
- **Achievements/certifications:** edit `data/certifications.ts`
- **Tech stack:** edit `data/technologies.ts`
- **Social links & resume:** edit `data/social.ts`
- **Blog posts:** add a new `.mdx` file to `content/blog/` with frontmatter:
  ```md
  ---
  title: "Post Title"
  category: "Linux"
  date: "2026-05-01"
  excerpt: "One or two sentence summary."
  ---
  Content here...
  ```
- **Writeups:** same pattern, in `content/writeups/`

## Before Deploying

1. Replace `public/profile-placeholder.svg` with a real portrait (`.jpg`/`.png`, referenced in `components/sections/Hero.tsx`).
2. Add your real resume PDF at `public/resume/Afarik-Rakas-Berdi-Resume.pdf` (or update the path in `data/social.ts`).
3. Replace `public/favicon.png`, `apple-touch-icon.png`, `icon-512.png`, and `og-image.png` with real branded assets (current ones are simple placeholder generated graphics).
4. Update `siteUrl` in `app/layout.tsx` and `app/sitemap.ts` / `app/robots.ts` to your real production domain.
5. Update all placeholder links/emails in `data/social.ts` and `data/projects.ts` (GitHub/demo URLs).
6. Add Umami analytics (or your preferred privacy-friendly analytics) script if desired — none is wired in by default.

## Performance & SEO

- Static generation (SSG) for all routes, including project/writeup/blog detail pages via `generateStaticParams`.
- Per-page `metadata` exports (title templates, descriptions, Open Graph).
- `Person` schema.org JSON-LD in the root layout.
- Dynamic `sitemap.xml` and `robots.txt` generated from live data.
- No unnecessary client-side JavaScript — only Navbar and the Projects filter are client components.

## License

Personal project — feel free to fork the structure for your own portfolio, but please swap out the content in `data/` and `content/` first.

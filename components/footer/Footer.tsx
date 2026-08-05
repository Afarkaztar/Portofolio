import Link from "next/link";
import { profile } from "@/data/profile";
import { social } from "@/data/social";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-content flex flex-col items-center justify-between gap-4 py-8 text-sm text-text-secondary md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
          <span>Built with</span>
          <span className="font-mono text-text-primary">Next.js</span>
          <span>·</span>
          <span className="font-mono text-text-primary">TailwindCSS</span>
          <span>·</span>
          <span className="font-mono text-text-primary">TypeScript</span>
          <span>·</span>
          <span>Deployed on</span>
          <Link href="https://vercel.com" target="_blank" className="font-mono text-text-primary hover:text-accent">
            Vercel
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <a href={social.github} target="_blank" rel="noreferrer" className="hover:text-text-primary">
            GitHub
          </a>
          <a href={social.linkedin} target="_blank" rel="noreferrer" className="hover:text-text-primary">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

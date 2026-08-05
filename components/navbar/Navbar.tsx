"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Menu, X, FileDown } from "lucide-react";
import { profile } from "@/data/profile";
import { social } from "@/data/social";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/writeups", label: "Writeups" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y > lastY.current && y > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`border-b transition-colors ${
          scrolled ? "bg-background/80 backdrop-blur-md border-border" : "bg-transparent border-transparent"
        }`}
      >
        <div className="container-content flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface font-mono text-sm font-bold text-accent"
            aria-label={`${profile.fullName} — home`}
          >
            {profile.initials}
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.slice(0, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-md p-2 text-text-secondary transition-colors hover:text-text-primary hover:bg-surface"
            >
              <Github size={18} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-md p-2 text-text-secondary transition-colors hover:text-text-primary hover:bg-surface"
            >
              <Linkedin size={18} />
            </a>
            <Link
              href={social.resume}
              className="ml-2 inline-flex items-center gap-2 rounded-button border border-border bg-surface px-3.5 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent"
            >
              <FileDown size={16} />
              Resume
            </Link>
          </div>

          <button
            className="md:hidden rounded-md p-2 text-text-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-b border-border bg-background">
          <nav className="container-content flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-text-secondary hover:text-text-primary hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <a href={social.github} target="_blank" rel="noreferrer" className="rounded-md p-2 text-text-secondary hover:text-text-primary">
                <Github size={18} />
              </a>
              <a href={social.linkedin} target="_blank" rel="noreferrer" className="rounded-md p-2 text-text-secondary hover:text-text-primary">
                <Linkedin size={18} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

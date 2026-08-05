import type { Metadata } from "next";
import { Mail, Github, Linkedin, Instagram, FileDown } from "lucide-react";
import { social } from "@/data/social";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for internships, collaborations, competitions, or engineering opportunities.",
};

const channels = [
  { icon: Mail, label: "Email", value: social.email, href: `mailto:${social.email}` },
  { icon: Github, label: "GitHub", value: "Afarkaztar", href: social.github },
  { icon: Linkedin, label: "LinkedIn", value: "Afarik Rakas Berdi", href: social.linkedin },
  { icon: Instagram, label: "Instagram", value: "Afrknz_", href: social.instagram },
];

export default function ContactPage() {
  return (
    <section className="section-y">
      <div className="container-content max-w-2xl">
        <p className="mb-2 font-mono text-sm text-accent">Get in Touch</p>
        <h1 className="mb-4 text-3xl font-bold text-text-primary sm:text-4xl">Contact</h1>
        <p className="mb-12 text-text-secondary">
          Open to internships, collaborations, competitions, and full-time opportunities in security and
          infrastructure engineering. Professional inquiries only — reach me through any of the channels below.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-4 rounded-card border border-border bg-background-secondary p-5 transition-colors hover:border-accent/50"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-surface text-accent">
                <channel.icon size={18} />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-text-secondary">{channel.label}</p>
                <p className="text-sm font-medium text-text-primary">{channel.value}</p>
              </div>
            </a>
          ))}
        </div>

        <a
          href={social.resume}
          className="mt-6 flex items-center gap-4 rounded-card border border-border bg-background-secondary p-5 transition-colors hover:border-accent/50"
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-surface text-accent">
            <FileDown size={18} />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-text-secondary">Resume</p>
            <p className="text-sm font-medium text-text-primary">Download {profile.fullName}&apos;s resume (PDF)</p>
          </div>
        </a>
      </div>
    </section>
  );
}

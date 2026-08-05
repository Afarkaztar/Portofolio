import Image from "next/image";
import { ArrowUpRight, FileDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { profile } from "@/data/profile";
import { social } from "@/data/social";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div className="container-content relative grid grid-cols-1 items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fadeUp">
          <p className="mb-4 font-mono text-sm text-accent">Hello,</p>
        <h1 className="text-balance mb-4 max-w-2xl text-3xl font-bold text-text-primary sm:text-4xl">
          {profile.fullName}
          <span className="ml-2 text-lg font-normal text-text-secondary align-middle">
            A.K.A Karyzrus
          </span>
        </h1>
          <p className="mb-2 text-lg text-text-secondary">{profile.role}</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {profile.specializations.map((s) => (
              <Badge key={s} tone="neutral">
                {s}
              </Badge>
            ))}
          </div>
          <p className="mb-8 max-w-xl text-balance text-base leading-relaxed text-text-secondary">
            {profile.shortIntro}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/projects" icon={<ArrowUpRight size={16} />}>
              View Projects
            </Button>
            <Button href={social.resume} variant="secondary" icon={<FileDown size={16} />}>
              Download Resume
            </Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="absolute inset-0 rounded-card border border-border bg-surface" />
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-card">
            <Image
              src="/profile-placeholder.svg"
              alt={profile.fullName}
              fill
              sizes="(max-width: 768px) 320px, 384px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

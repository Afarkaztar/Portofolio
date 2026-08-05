import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="section-y">
      <div className="container-content flex flex-col items-center rounded-card border border-border bg-background-secondary px-6 py-16 text-center">
        <h2 className="text-balance mb-3 max-w-2xl text-2xl font-bold text-text-primary sm:text-3xl">
          Let&apos;s Build Something Together
        </h2>
        <p className="mb-8 max-w-md text-sm text-text-secondary">
          Open to internships, collaborations, competitions, and full-time engineering opportunities.
        </p>
        <Button href="/contact" icon={<ArrowUpRight size={16} />}>
          Get in Touch
        </Button>
      </div>
    </section>
  );
}

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: "Security" | "Networking" | "Infrastructure" | "Automation" | "Web" | "Cloud";
  technologies: string[];
  featured: boolean;
  github?: string;
  demo?: string;
  overview: string;
  problem: string;
  solution: string;
  lessonsLearned: string;
  futureImprovements: string;
};

export const projects: Project[] = [
  {
    slug: "polri-ctf-finalist",
    title: "POLRI CTF Finalist",
    description:
      "Finalist run in a national CTF competition organized by POLRI, solving challenges across web exploitation, forensics, and network security.",
    category: "Security",
    technologies: ["Burp Suite", "Wireshark", "Python", "Linux"],
    featured: true,
    github: "https://github.com/Afarkaztar/CTF-Writeup-/tree/main/POLRICTF%202026",
    overview:
      "Competed as a finalist in a national Capture The Flag competition hosted by POLRI, working through timed challenges spanning web exploitation, digital forensics, and network analysis.",
    problem:
      "Qualifying and final rounds required solving unfamiliar, time-boxed challenges under pressure, with limited information and no prior access to the target systems.",
    solution:
      "Broke challenges into web, forensics, and network categories, prioritized quick wins to secure points early, and used a structured methodology (recon, enumeration, exploitation, documentation) for each flag.",
    lessonsLearned:
      "Learned to manage time under competition pressure and to document findings clearly enough that a teammate could pick up where I left off.",
    futureImprovements: "Build a personal CTF toolkit to speed up recon and enumeration in future competitions.",
  },
  {
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    description:
      "This website — a performance-focused portfolio built with Next.js, TypeScript, and Tailwind, designed to present projects and writeups professionally.",
    category: "Web",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "MDX"],
    featured: true,
    github: "https://github.com/Afarkaztar/portfolio",
    demo: "https://Karyzrus-porto.vercel.app",
    overview:
      "A personal portfolio site built to present projects, experience, and technical writeups with a clean, engineering-first design rather than a generic template.",
    problem:
      "Most portfolio templates prioritize visual flourish over content and load performance, and don't scale well as more projects and writeups are added.",
    solution:
      "Built with Next.js App Router and MDX so writeups and blog posts are version-controlled content, with TailwindCSS for a consistent design system and static generation for performance.",
    lessonsLearned:
      "Structuring content as data (TypeScript objects and MDX) rather than hardcoded markup makes the site far easier to maintain and extend.",
    futureImprovements: "Add a search index across writeups and blog posts, and automated Lighthouse CI checks.",
  },
  {
    slug: "digiinnovate",
    title: "DigiInnovate",
    description:
      "A team hackathon project focused on digital innovation, covering system design, backend implementation, and deployment under a tight timeline.",
    category: "Web",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    featured: true,
    github: "https://afarkaztar.github.io/DigiInnovate.github.io/",
    overview:
      "A hackathon submission buislt with a small team to address a digital innovation theme, covering everything from system design to a working deployed demo.",
    problem:
      "The team had roughly 48 hours to design, build, and deploy a functioning product with a limited feature set that still felt complete.",
    solution:
      "Scoped an MVP early, split work by layer (frontend, backend, infrastructure), and used Docker to keep environments consistent across the team and the deployment target.",
    lessonsLearned: "Ruthless scoping under a deadline matters more than technical sophistication.",
    futureImprovements: "Harden the authentication flow and add automated tests before any further development.",
  },
  {
    slug: "personal-homelab",
    title: "Personal Homelab",
    description:
      "A self-hosted homelab running on repurposed hardware, used to practice Linux administration, networking, and self-hosted services.",
    category: "Infrastructure",
    technologies: ["Proxmox", "Ubuntu Server", "Docker", "Nginx", "VLANs"],
    featured: true,
    overview:
      "A home lab environment built on repurposed hardware to practice virtualization, Linux server administration, and network segmentation in a low-stakes environment.",
    problem:
      "Needed a realistic environment to practice server administration, networking, and self-hosting without risking production systems or paying for cloud resources.",
    solution:
      "Set up Proxmox as a hypervisor, segmented the network with VLANs, and deployed several self-hosted services behind an Nginx reverse proxy with basic monitoring.",
    lessonsLearned: "Hands-on infrastructure work surfaces failure modes that tutorials rarely cover.",
    futureImprovements: "Add centralized logging and set up automated backups with off-site replication.",
  },
  {
    slug: "vps-infrastructure-deployment",
    title: "Infrastructure Deployment using VPS",
    description:
      "Provisioning and hardening a production-style VPS to host web services, with a focus on security baseline and automated deployment.",
    category: "Cloud",
    technologies: ["Linux", "Nginx", "Certbot", "Bash", "UFW"],
    featured: false,
    overview:
      "Provisioned and configured a virtual private server to host web services, applying a security baseline suitable for a small production workload.",
    problem: "Needed a repeatable, secure way to deploy and manage a public-facing server without a managed platform.",
    solution:
      "Wrote provisioning scripts to configure the firewall, SSH hardening, automatic TLS certificates, and a reverse proxy, so a fresh server could be brought to a known-good state quickly.",
    lessonsLearned: "Automating the security baseline early prevents configuration drift later.",
    futureImprovements: "Convert the provisioning scripts into an Ansible playbook for full idempotency.",
  },
  {
    slug: "cybersecurity-writeups",
    title: "Cybersecurity Writeups",
    description:
      "An ongoing collection of technical writeups covering CTF challenges, vulnerabilities, and Linux/networking deep dives.",
    category: "Security",
    technologies: ["Linux", "Python", "Burp Suite"],
    featured: false,
    github: "https://github.com/afarkaztar/CTF-Writeup-",
    overview:
      "A growing archive of writeups documenting how I approached and solved CTF challenges and security research, published on this site's Writeups section.",
    problem: "Knowledge gained from solving challenges tends to be forgotten if it isn't written down.",
    solution:
      "Adopted a consistent writeup format (recon, vulnerability, exploitation, remediation) and published each one publicly for both personal reference and community value.",
    lessonsLearned: "Writing a challenge up clearly is often harder than solving it, and forces a deeper understanding.",
    futureImprovements: "Tag writeups by technique so patterns across challenges become easier to find.",
  },
];

export type Experience = {
  organization: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    organization: "IPB University",
    role: "Computer Engineering Student",
    duration: "2023 — Present",
    description:
      "Pursuing a B.Sc. in Computer Engineering with coursework and independent projects centered on networking, cybersecurity, and systems.",
    achievements: [
      "Maintained a project-driven learning track alongside coursework, including a self-hosted homelab",
      "Represented the university in national-level CTF competitions",
    ],
    technologies: ["Linux", "Python", "Networking", "C"],
  },
  {
    organization: "PT Qwords",
    role: "Infrastructure / System Administration Intern",
    duration: "2024",
    description:
      "Supported infrastructure and system administration operations, including server monitoring, provisioning, and troubleshooting for hosting environments.",
    achievements: [
      "Assisted in provisioning and configuring Linux servers for hosting workloads",
      "Documented internal runbooks for common infrastructure tasks",
    ],
    technologies: ["Linux", "Nginx", "cPanel", "Bash"],
  },
  {
    organization: "Competition & Committee Experience",
    role: "Participant / Committee Member",
    duration: "2022 — Present",
    description:
      "Participated in CTF competitions and hackathons, and took on committee roles in technical student organizations.",
    achievements: [
      "Finalist, POLRI CTF",
      "Contributed as a committee member organizing technical workshops",
    ],
    technologies: ["CTF", "Leadership", "Event Coordination"],
  },
];

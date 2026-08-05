export type Achievement = {
  title: string;
  organization: string;
  date: string;
  category: "Competition" | "Certification" | "Leadership" | "Awards";
  description: string;
  credentialLink?: string;
};

export const achievements: Achievement[] = [
  {
    title: "POLRI CTF Finalist",
    organization: "Indonesian National Police (POLRI)",
    date: "2024",
    category: "Competition",
    description:
      "Reached the finalist round of a national Capture The Flag competition, solving web exploitation, forensics, and network security challenges.",
  },
  {
    title: "Cisco Certified Network Associate (CCNA) — In Progress",
    organization: "Cisco Networking Academy",
    date: "2024",
    category: "Certification",
    description: "Completed core coursework on routing, switching, and network fundamentals through Cisco Networking Academy.",
    credentialLink: "https://www.credly.com/",
  },
  {
    title: "Hackathon Participant — DigiInnovate",
    organization: "DigiInnovate",
    date: "2024",
    category: "Competition",
    description: "Built and deployed a full-stack product within a 48-hour hackathon as part of a small team.",
  },
  {
    title: "Technical Committee Lead",
    organization: "Student Technical Organization",
    date: "2023 — 2024",
    category: "Leadership",
    description: "Led the technical committee organizing workshops on Linux and networking fundamentals for fellow students.",
  },
];

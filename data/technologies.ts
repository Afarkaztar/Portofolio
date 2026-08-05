export type Technology = {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
};

export type TechCategory = {
  category: string;
  items: Technology[];
};

export const technologies: TechCategory[] = [
  {
    category: "Networking",
    items: [
      { name: "Cisco IOS", level: "Intermediate" },
      { name: "TCP/IP", level: "Advanced" },
      { name: "VLAN / Routing", level: "Intermediate" },
      { name: "Wireshark", level: "Intermediate" },
    ],
  },
  {
    category: "Cloud",
    items: [
      { name: "AWS", level: "Intermediate" },
      { name: "Google Cloud", level: "Beginner" },
      { name: "Cloudflare", level: "Intermediate" },
      { name: "Terraform", level: "Beginner" },
    ],
  },
  {
    category: "Security",
    items: [
      { name: "Burp Suite", level: "Intermediate" },
      { name: "Nmap", level: "Advanced" },
      { name: "Metasploit", level: "Intermediate" },
      { name: "OWASP Top 10", level: "Intermediate" },
    ],
  },
  {
    category: "Linux",
    items: [
      { name: "Ubuntu Server", level: "Advanced" },
      { name: "Bash", level: "Advanced" },
      { name: "Systemd", level: "Intermediate" },
      { name: "Nginx", level: "Intermediate" },
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "Python", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Bash Scripting", level: "Intermediate" },
      { name: "SQL", level: "Beginner" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", level: "Intermediate" },
      { name: "Git / GitHub", level: "Advanced" },
      { name: "CI/CD", level: "Beginner" },
      { name: "Ansible", level: "Beginner" },
    ],
  },
];

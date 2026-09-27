// Edit this file to update the site's copy, projects, and contact links.
// Nothing else in the project needs to change for routine content edits.

export const profile = {
  name: "Isaiah Abraham",
  role: "Senior Full-Stack Engineer",
  tagline: "Building the systems money and motion run on.",
  summary:
    "I'm a senior full-stack engineer with a background in Mechatronics Engineering, specializing in fintech platforms, SaaS products, and the payment and tracking infrastructure underneath them. Based in Imo State, Nigeria, currently building Traxx and taking on select freelance work through AI Tech Solutions.",
  location: "Imo State, Nigeria",
  email: "abrahamisaiah129@gmail.com",
  github: "https://github.com/abrahamisaiah129",
  linkedin: "https://linkedin.com/in/abrahamisaiah",
  education:
    "B.Eng. in Mechatronics Engineering (Software Option), Federal University of Technology Owerri",
};

export type Project = {
  name: string;
  role: string;
  summary: string;
  detail: string;
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: "Traxx",
    role: "Founding developer",
    summary:
      "A fleet management and delivery-tracking SaaS for Nigerian logistics businesses.",
    detail:
      "I work across the fleet manager dashboard, the rider progressive web app, and the customer tracking portal — the three surfaces that have to agree on where a delivery actually is in real time. Firestore security rules carry the access-control logic, so the frontend stays focused on flow and state. Live GPS runs on Mapbox, checkout on Paystack, and current work includes rebuilding email verification and password reset on Firebase OTP.",
    stack: ["Next.js", "Firebase", "Firestore", "Mapbox", "Paystack"],
  },
  {
    name: "WayaBank",
    role: "Contract frontend engineer, WayaLinks",
    summary:
      "A Nigerian digital banking product under the WayaLinks ecosystem.",
    detail:
      "Sole frontend engineer on a 20-person team, shipping four production fintech products — WayaBank, WayaGram, WayaQuick, and CrowdHelpMe — in four months. Rebuilt the marketing site's hero around floating transaction cards, reworked navbar and feature-card interactions, integrated Zoho SalesIQ and Meta Pixel, restructured the Git repositories, and optimized page-load times platform-wide.",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "ISQDF — Save the Girl Child",
    role: "Freelance developer, AI Tech Solutions",
    summary:
      "A donation and program platform for the Imo Striker Queens Development Foundation, a women's football and mentorship charity.",
    detail:
      "Built the full site from a component library up — carousel, program and impact sections, a sponsor marquee, blog — with a Paystack donation flow backed by MongoDB Atlas. Design leans on a red primary, pill-shaped buttons, and glass panels, deployed on Vercel.",
    stack: ["React", "Tailwind CSS", "MongoDB Atlas", "Paystack", "Vercel"],
    link: "https://isqdf.vercel.app",
  },
];

export type Role = {
  title: string;
  org: string;
  detail: string;
};

export const experience: Role[] = [
  {
    title: "Senior Full Stack Developer & Product Manager",
    org: "DDSA",
    detail:
      "Directed a seven-person development team to ship an MVP for a complex financial product in twelve weeks, owning architecture, API design, database modeling, and deployment end to end.",
  },
];

export type PublicProject = {
  name: string;
  description: string;
  repo: string;
  demo?: string;
};

export const publicProjects: PublicProject[] = [
  {
    name: "CreaNote",
    description: "AI-powered note-taking application.",
    repo: "https://github.com/abrahamisaiah129/creanote",
    demo: "https://creanote-five.vercel.app",
  },
  {
    name: "Flier Templating Generator",
    description: "Web-based utility for generating design fliers and templates.",
    repo: "https://github.com/abrahamisaiah129/flier-templating-generator",
    demo: "https://flier-templating-generator.vercel.app",
  },
  {
    name: "Resilient API Gateway Shield",
    description: "Distributed idempotency engine for fault-tolerant API gateways.",
    repo: "https://github.com/abrahamisaiah129/Resilient-API-Gateway-Shield-Distributed-Idempotency-Engine",
  },
  {
    name: "House of God Church Admin",
    description: "Administrative portal for managing church operations.",
    repo: "https://github.com/abrahamisaiah129/house-of-god-church-admin",
  },
  {
    name: "Mima",
    description: "Official web presence and landing platform for Mima.",
    repo: "https://github.com/abrahamisaiah129/mima-official",
    demo: "https://mimaclient-bn51nzjli-isaiahs-projects-67393298.vercel.app",
  },
  {
    name: "Golf & Football Web App",
    description: "Full-stack sports web application.",
    repo: "https://github.com/abrahamisaiah129/GOLFANDFOOTBALLWEBAPP",
  },
];

export const skills = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Paystack & payment integrations",
  "Mapbox & live GPS tracking",
  "Tailwind CSS",
];

// Edit this file to update the site's copy, projects, and contact links.
// Nothing else in the project needs to change for routine content edits.

export const profile = {
  name: "Isaiah Abraham",
  role: "Senior Full-Stack Engineer",
  tagline: "Building the systems money and motion run on.",
  summary:
    "I build production software for fintech, logistics, and mission-driven organizations — mostly on the MERN stack, mostly the part where real payments, real riders, or real donors have to trust it works. Based in Imo State, Nigeria, currently working with Traxx and taking on select freelance builds under AI Tech Solutions.",
  location: "Imo State, Nigeria",
  // TODO: replace with your real contact details before publishing
  email: "isaiah@example.com",
  github: "https://github.com/abrahamisaiah129",
  linkedin: "https://linkedin.com/in/your-linkedin-handle",
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
    role: "Full-stack engineer",
    summary:
      "A fleet management and delivery tracking platform for Nigerian logistics businesses.",
    detail:
      "I work across the fleet manager dashboard, the rider progressive web app, and the customer tracking portal — the three surfaces that have to agree on where a delivery actually is in real time. Firestore security rules carry the access-control logic, so the frontend stays focused on flow and state. Current work includes rebuilding email verification and password reset on Firebase OTP, and wiring Mapbox directly into the rider app.",
    stack: ["React", "Firebase", "Firestore", "Mapbox", "Paystack"],
  },
  {
    name: "WayaBank",
    role: "React frontend engineer",
    summary:
      "A Nigerian digital banking product under the WayaLinks group.",
    detail:
      "Rebuilt the marketing site's hero section around floating transaction cards, reworked navbar scroll behavior and feature-card interactions, and integrated Zoho SalesIQ chat and Meta Pixel. Also refactored the shared SiteContext provider used across WayaBank's sibling products, WayaGram and WayaQuick.",
    stack: ["React", "TypeScript", "Zoho SalesIQ", "Meta Pixel"],
  },
  {
    name: "ISQDF — Save the Girl Child",
    role: "Freelance developer, AI Tech Solutions",
    summary:
      "A donation and program site for the Imo Striker Queens Development Foundation, a women's football NGO.",
    detail:
      "Built the full site from a component library up — carousel, program and impact sections, a sponsor marquee, blog — with a Paystack donation flow backed by MongoDB Atlas. Design leans on a red primary, pill-shaped buttons, and glass panels, deployed on Vercel.",
    stack: ["React", "Tailwind CSS", "MongoDB Atlas", "Paystack", "Vercel"],
  },
];

export const skills = [
  "React",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Next.js",
  "Paystack & payment integrations",
  "Tailwind CSS",
];

// Edit this file to update the site's copy, projects, and contact links.
// Nothing else in the project needs to change for routine content edits.

export const profile = {
  name: "Isaiah Abraham",
  role: "Senior Full-Stack Engineer",
  tagline: "Building the systems money and motion run on.",
  summary:
    "I'm a senior full-stack engineer with a background in Mechatronics Engineering, specializing in fintech platforms, SaaS products, and the payment and tracking infrastructure underneath them. Based in Nigeria (GMT+1), currently building Traxx and taking on select freelance work through AI Tech Solutions.",
  location: "Nigeria (GMT+1)",
  email: "abrahamisaiah129@gmail.com",
  phone: "0913 226 0101",
  // Note: the CV lists github.com/abrahamisaiah, but the working repos and
  // this site itself live under github.com/abrahamisaiah129 — confirm which
  // one should be public before treating this as final.
  github: "https://github.com/abrahamisaiah129",
  linkedin: "https://linkedin.com/in/abrahamisaiah",
  avatar: "https://avatars.githubusercontent.com/u/96689032?v=4",
  education:
    "B.Eng. in Mechatronics Engineering, Federal University of Technology, Owerri (Second Class Honours, 2025). Certificate in Full Stack Web Development, Greenvalue Computer College (2020).",
};

export type Project = {
  name: string;
  role: string;
  dates: string;
  summary: string;
  detail: string;
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: "Traxx",
    role: "Founding developer",
    dates: "Sep 2026 – Present",
    summary:
      "A fleet management and delivery-tracking SaaS for Nigerian logistics businesses.",
    detail:
      "Joined pre-launch as founding developer. Driving full application reconstruction across the fleet manager dashboard, rider PWA, customer tracking portal, and admin console on Next.js and Firebase — Firestore, Cloud Functions, Storage, and FCM. Implementing Firebase Auth with OTP-based email verification and password reset, live GPS rider tracking on Mapbox, and hosted checkout on Paystack.",
    stack: ["Next.js", "Firebase", "Firestore", "Mapbox", "Paystack"],
  },
  {
    name: "WayaBank",
    role: "Contract frontend engineer, WayaLinks",
    dates: "Feb 2026 – May 2026",
    summary:
      "A Nigerian fintech ecosystem reporting over 1M connections and 1,000+ active business customers.",
    detail:
      "Sole frontend engineer on a ~20-person cross-functional team, designing, building, and shipping four production sites — WayaBank (digital banking), WayaGram (social commerce), WayaQuick (payments), and WayaLinks (merchant tools) — in a four-month window. Restructured the Git repository end-to-end, cutting page-load times across all four products. Built a custom support chatbot from scratch, including its knowledge base, and integrated Zoho CRM, Freshchat, HubSpot, and Meta Pixel across the ecosystem.",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "SCSS"],
  },
  {
    name: "ISQDF — Save the Girl Child",
    role: "Freelance developer, AI Tech Solutions",
    dates: "",
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
  dates: string;
  detail: string;
};

export const experience: Role[] = [
  {
    title: "Senior Full Stack Developer & Product Manager",
    org: "DDSA (Digital Sales Agent)",
    dates: "Aug 2025 – Feb 2026",
    detail:
      "Joined at product inception as the sole engineer, personally owning full-stack delivery while directing a seven-person development team with no dedicated PM support. Shipped an MVP for a complex financial product in twelve weeks, owning architecture, API design, database modeling, and deployment end to end.",
  },
  {
    title: "Junior Software Engineer & Operations Manager",
    org: "Softcity Group",
    dates: "Oct 2023 – Mar 2024",
    detail:
      "Cut average page load time from 5s to 3s by optimizing backend queries and frontend rendering. Led development of an internal payroll system with secure file upload and role-based access. Held dual responsibility as Facility Manager and Frontend Engineer; named Best Intern 2024.",
  },
  {
    title: "Junior Frontend Developer",
    org: "Morerich Global",
    dates: "Jan 2020 – Aug 2023 · part-time while completing FUTO",
    detail:
      "Built and maintained responsive UI components and integrated third-party APIs for real-time business data, within a five-person cross-functional team running regular code reviews and agile sprints.",
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

export type ClientProject = {
  name: string;
  category: string;
  stack: string;
  description: string;
};

// Client work without public repos — listed by name only, per the CV.
export const clientProjects: ClientProject[] = [
  {
    name: "Suredez",
    category: "Logistics",
    stack: "PHP, MongoDB, Tailwind CSS",
    description: "Real-time parcel tracking dashboard with reliable backend data delivery.",
  },
  {
    name: "DKT Nigeria",
    category: "HealthTech",
    stack: "React, Node.js, MongoDB",
    description: "Refactored frontend and backend architecture, improving page load times by 35%.",
  },
  {
    name: "CleonHR",
    category: "Payroll / HR",
    stack: "React, Node.js, Tailwind CSS",
    description: "Responsive UI and authentication system used by an estimated 50 HR/admin staff weekly.",
  },
  {
    name: "Robbiesmatt",
    category: "Real Estate",
    stack: "MERN",
    description: "Authentication, cart functionality, and admin dashboard.",
  },
  {
    name: "Whytecleon",
    category: "Frontend overhaul",
    stack: "HTML5, CSS3, JavaScript",
    description: "Led a complete frontend overhaul for visual consistency and improved UX.",
  },
];

export const skills = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "PHP & Laravel",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Paystack & payment integrations",
  "Mapbox & live GPS tracking",
  "Tailwind CSS",
];

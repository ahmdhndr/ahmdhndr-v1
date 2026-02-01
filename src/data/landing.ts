import { SiGithub, SiLinkedin } from "react-icons/si";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  // { id: "articles", label: "Articles" },
];

const socialLinks = [
  {
    link: "https://github.com/ahmdhndr/",
    title: "Github",
    icon: SiGithub,
  },
  {
    link: "https://id.linkedin.com/in/ahmdhndr/",
    title: "Linkedin",
    icon: SiLinkedin,
  },
];

const experiences = [
  {
    id: 1,
    labelRange: "2023 to present",
    timeRange: "Dec 2023 - Present",
    officeSite: "https://neuronworks.co.id/",
    officeName: "Neuronworks Indonesia",
    labelRole: "Junior programmer at Neuronworks Indonesia",
    role: "Junior Programmer",
    jobDesc:
      "Developed and maintained enterprise web applications for major ICT and mobile telecommunications clients. Promoted from outsourced talent to internal team member in Jan 2026. Involved in requirements analysis, debugging, and feature enhancements to support stable, business-critical systems.",
    stacks: ["PHP", "JQuery", "Bootstrap", "Nest JS"],
  },
];

const projects = [
  {
    id: 1,
    thumbnailSrc: "/assets/images/projects/starter-kit.png",
    site: "https://demo-nextjs-starter-shadcn.vercel.app",
    name: "Next.js Starter Kit",
    description:
      "Powered by TypeScript, Tailwind CSS, and shadcn/ui, with Husky and Commitlint set up for automatic linting and formatting on commit. It also includes ready-to-use GitHub Actions workflows that you can customize as needed.",
    stacks: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Husky",
      "Github Actions",
      "ESLint",
      "Prettier",
      "Commitlint",
    ],
  },
];

export { navLinks, socialLinks, experiences, projects };

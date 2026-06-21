export interface Tech {
  name: string;
  slug: string;
  color: string;
}

export interface TechCategory {
  label: string;
  description: string;
  items: Tech[];
}

export const techCategories: TechCategory[] = [
  {
    label: "Frontend",
    description: "Interfaces that feel fast and look intentional.",
    items: [
      { name: "Next.js", slug: "nextdotjs", color: "000000" },
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "Vue.js", slug: "vuedotjs", color: "4FC08D" },
      { name: "GSAP", slug: "greensock", color: "88CE02" },
      { name: "HTML5", slug: "html5", color: "E34F26" },
    ],
  },
  {
    label: "Backend",
    description: "Services that stay fast and predictable under load.",
    items: [
      { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
      { name: "Spring Boot", slug: "springboot", color: "6DB33F" },
      { name: "PHP", slug: "php", color: "777BB4" },
      { name: "Laravel", slug: "laravel", color: "FF2D20" },
      { name: "Express", slug: "express", color: "000000" },
      { name: "NestJS", slug: "nestjs", color: "E0234E" },
    ],
  },
  {
    label: "Mobile & Design",
    description: "Native-feel apps and the design systems behind them.",
    items: [
      { name: "React Native", slug: "react", color: "61DAFB" },
      { name: "Expo", slug: "expo", color: "000020" },
      { name: "Flutter", slug: "flutter", color: "02569B" },
      { name: "Figma", slug: "figma", color: "F24E1E" },
      { name: "Framer Motion", slug: "framer", color: "0055FF" },
    ],
  },
  {
    label: "Data",
    description: "Schemas and stores built to survive real production load.",
    items: [
      { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
      { name: "MySQL", slug: "mysql", color: "4479A1" },
      { name: "MongoDB", slug: "mongodb", color: "47A248" },
      { name: "Redis", slug: "redis", color: "FF4438" },
      { name: "Firebase", slug: "firebase", color: "DD2C00" },
    ],
  },
  {
    label: "Infrastructure",
    description: "Pipelines and platforms that ship and stay up.",
    items: [
      { name: "AWS", slug: "amazonaws", color: "232F3E" },
      { name: "Docker", slug: "docker", color: "2496ED" },
      { name: "Vercel", slug: "vercel", color: "000000" },
      { name: "GitHub Actions", slug: "githubactions", color: "2088FF" },
      { name: "Nginx", slug: "nginx", color: "009639" },
      { name: "Git", slug: "git", color: "F05032" },
    ],
  },
];

export const allTechs: Tech[] = techCategories.flatMap((c) => c.items);
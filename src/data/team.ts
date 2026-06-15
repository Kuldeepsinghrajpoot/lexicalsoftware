export interface SkillRating {
  name: string;
  level: number; // 0-100
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  experience: string;
  email: string;
  cloudinaryId?: string;
  localImage?: string;
  bio: string;
  resumeUrl?: string;
  skills: SkillRating[];
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

export const team: TeamMember[] = [
  {
    slug: "ayush-gupta",
    name: "Ayush Gupta",
    role: "Full Stack Developer",
    experience: "3+ years",
    email: "ayush@lexicalsoftware.dev",
    cloudinaryId: "", // e.g. "team/ayush-gupta"
    localImage: "/images/team/ayush-gupta.jpeg",
    resumeUrl: "/resumes/ayush-gupta.pdf",
    bio: "Builds end-to-end web applications with a focus on clean architecture and developer experience.",
    skills: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "React", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "AWS", level: 65 },
    ],
    social: {
      linkedin: "https://linkedin.com/",
    },
  },
  {
    slug: "kuldeep-singh-rajpoot",
    name: "Kuldeep Singh Rajpoot",
    role: "Backend Developer",
    experience: "3+ years",
    email: "kuldeep@lexicalsoftware.dev",
    cloudinaryId: "", // e.g. "team/kuldeep-singh-rajpoot"
    resumeUrl: "/resumes/kuldeep-singh-rajpoot.pdf",
    bio: "Specializes in scalable backend systems, API design, and database performance.",
    skills: [
      { name: "Java", level: 80 },
      { name: "Spring Boot", level: 85 },
      { name: "React", level: 60 },
      { name: "MySQL", level: 85 },
      { name: "AWS", level: 70 },
    ],
    social: {
      linkedin: "https://linkedin.com/",
    },
  },
  {
    slug: "utkarsh-saxena",
    name: "Utkarsh Saxena",
    role: "Frontend Developer",
    experience: "2+ years",
    email: "utkarsh@lexicalsoftware.dev",
    cloudinaryId: "", // e.g. "team/utkarsh-saxena"
    resumeUrl: "/resumes/utkarsh-saxena.pdf",
    bio: "Crafts interactive, accessible interfaces with React and modern CSS.",
    skills: [
      { name: "Java", level: 65 },
      { name: "Spring Boot", level: 55 },
      { name: "React", level: 88 },
      { name: "MySQL", level: 65 },
      { name: "AWS", level: 60 },
    ],
    social: {
      linkedin: "https://linkedin.com/",
    },
  },
  {
    slug: "nikhil-rajpoot",
    name: "Nikhil Rajpoot",
    role: "UI/UX Designer",
    experience: "2+ years",
    email: "nikhil@lexicalsoftware.dev",
    cloudinaryId: "", // e.g. "team/nikhil-rajpoot"
    resumeUrl: "/resumes/nikhil-rajpoot.pdf",
    bio: "Designs clean, user-friendly interfaces and translates ideas into polished, ready-to-build UI.",
    skills: [
      { name: "Figma", level: 90 },
      { name: "UI Design", level: 88 },
      { name: "UX Research", level: 75 },
      { name: "Tailwind CSS", level: 70 },
      { name: "Prototyping", level: 85 },
    ],
    social: {
      linkedin: "https://linkedin.com/",
    },
  },
];

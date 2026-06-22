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
  availability: "available" | "busy" | "on-leave";
  quote: string;
  currentlyBuilding: string;
  funFacts: string[];
  skills: SkillRating[];
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

export const team: TeamMember[] = [
  {
    slug: "kuldeep-singh-rajpoot",
    name: "Kuldeep Singh Rajpoot",
    role: "Developer",
    experience: "2+ years",
    email: "kuldeepsinghrajpoot40@gmail.com",
    cloudinaryId: "",
    resumeUrl: "/resumes/kuldeep-singh-rajpoot.pdf",
    bio: "Specializes in scalable backend systems, API design, and database performance.",
    availability: "available",
    quote: "First, solve the problem. Then, write the code.",
    currentlyBuilding: "Microservices architecture with Spring Boot and Kafka",
    funFacts: [
      "Debugs best at midnight",
      "Can write SQL queries faster than most people Google them",
      "Once fixed a production bug in under 3 minutes",
    ],
    skills: [
      { name: "Java", level: 80 },
      { name: "Spring Boot", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "AWS", level: 70 },
      { name: "Docker", level: 65 },
      { name: "Git", level: 80 },
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/kuldeepsinghrajpoot",
    },
  },
  {
    slug: "ayush-gupta",
    name: "Ayush Gupta",
    role: "Developer",
    experience: "2+ years",
    email: "ayushguptajan22@gmail.com",
    cloudinaryId: "",
    //localImage: "/images/team/ayush-gupta.jpeg",
    resumeUrl: "/resumes/ayush-gupta.pdf",
    bio: "Builds end-to-end web applications with a focus on clean architecture and developer experience.",
    availability: "available",
    quote: "Make it work, make it right, make it fast — in that order.",
    currentlyBuilding: "Full-stack SaaS platform with Next.js and Spring Boot",
    funFacts: [
      "Tea over coffee, always",
      "Has strong opinions about folder structure",
      "Reads changelogs for fun",
    ],
    skills: [
      { name: "React", level: 85 },
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "Next.js", level: 78 },
      { name: "MySQL", level: 75 },
      { name: "AWS", level: 65 },
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/ayush-gupta-b986a0225",
    },
  },
  {
    slug: "utkarsh-saxena",
    name: "Utkarsh Saxena",
    role: "Developer",
    experience: "2+ years",
    email: "utkarshsaxena19dec@gmail.com",
    cloudinaryId: "",
    resumeUrl: "/resumes/utkarsh-saxena.pdf",
    bio: "Crafts interactive, accessible interfaces with React and modern CSS.",
    availability: "available",
    quote: "Good UI is invisible — users just feel it.",
    currentlyBuilding: "Component design system with React and Tailwind CSS",
    funFacts: [
      "Pixel-perfect or nothing",
      "Judges websites before reading their content",
      "Animates everything, including grocery lists",
    ],
    skills: [
      { name: "React", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 88 },
      { name: "Git", level: 75 },
    ],
    social: {
      linkedin: "",
    },
  },
  {
    slug: "nikhil-rajpoot",
    name: "Nikhil Rajpoot",
    role: "Tester",
    experience: "2+ years",
    email: "nikhilrajpoot103@gmail.com",
    cloudinaryId: "",
    resumeUrl: "/resumes/nikhil-rajpoot.pdf",
    bio: "Designs clean, user-friendly interfaces and translates ideas into polished, ready-to-build UI.",
    availability: "available",
    quote: "If it's not tested, it's broken — you just don't know it yet.",
    currentlyBuilding: "UI component library in Figma with full test coverage specs",
    funFacts: [
      "Finds bugs in apps while using them for fun",
      "Designs UI in his head before opening Figma",
      "Believes every click should feel satisfying",
    ],
    skills: [
      { name: "Figma", level: 90 },
      { name: "Manual Testing", level: 88 },
      { name: "Postman", level: 75 },
      { name: "Jira", level: 78 },
      { name: "UI Design", level: 88 },
      { name: "Prototyping", level: 85 },
    ],
    social: {
      linkedin: "",
    },
  },
  {
    slug: "neeraj-singh",
    name: "Neeraj Singh",
    role: "UI/UX Designer",
    experience: "1+ years",
    email: "neerajsinghvarma2002@gmail.com",
    cloudinaryId: "",
    resumeUrl: "/resumes/neeraj-singh.pdf",
    bio: "Creates intuitive, visually compelling designs that bridge the gap between user needs and business goals.",
    availability: "available",
    quote: "Design is not just what it looks like — design is how it works.",
    currentlyBuilding: "Mobile-first design system with accessibility at its core",
    funFacts: [
      "Redesigns apps in his head while using them",
      "Believes whitespace is a design element, not empty space",
      "Can spot bad kerning from across the room",
    ],
    skills: [
      { name: "Figma", level: 88 },
      { name: "UI Design", level: 85 },
      { name: "UX Research", level: 78 },
      { name: "Prototyping", level: 82 },
      { name: "Wireframing", level: 85 },
      { name: "Adobe XD", level: 72 },
    ],
    social: {
      linkedin: "",
    },
  },
];
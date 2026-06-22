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
    slug: "kuldeep-singh-rajpoot",
    name: "Kuldeep Singh Rajpoot",
    role: "Developer",
    experience: "2+ years",
    email: "kuldeepsinghrajpoot40@gmail.com",
    cloudinaryId: "", // e.g. "team/kuldeep-singh-rajpoot"
    //localImage: "/images/team/ayush-gupta.jpeg",
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
      linkedin: "https://www.linkedin.com/in/kuldeepsinghrajpoot",
    },
  },
  {
    slug: "ayush-gupta",
    name: "Ayush Gupta",
    role: "Developer",
    experience: "2+ years",
    email: "ayushguptajan22@gmail.com",
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
      linkedin: "https://www.linkedin.com/in/ayush-gupta-b986a0225",
    },
  },
  {
    slug: "utkarsh-saxena",
    name: "Utkarsh Saxena",
    role: "Developer",
    experience: "2+ years",
    email: "utkarshsaxena19dec@gmail.com",
    cloudinaryId: "", // e.g. "team/utkarsh-saxena"
    //localImage: "/images/team/ayush-gupta.jpeg",
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
      linkedin: "",
    },
  },
  {
    slug: "nikhil-rajpoot",
    name: "Nikhil Rajpoot",
    role: "Tester",
    experience: "2+ years",
    email: "nikhilrajpoot103@gmail.com",
    cloudinaryId: "", // e.g. "team/nikhil-rajpoot"
    //localImage: "/images/team/ayush-gupta.jpeg",
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
      linkedin: "",
    },
  },
];

export interface JobOpening {
  slug: string;
  title: string;
  type: "Full-time" | "Part-time" | "Freelance" | "Internship";
  location: string;
  department: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
}

// Add new roles here. When this array is empty, the careers page shows a
// "no openings right now" state with a general application option.
export const jobOpenings: JobOpening[] = [];

// Roles shown in the application form's "Role" dropdown, independent of
// jobOpenings above. Update this list as the kinds of roles you'd consider
// change \u2014 it doesn't need to match active job postings.
export const applicationRoles: string[] = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Java / Spring Boot Developer",
  "React Native Developer",
  "UI/UX Designer",
  "DevOps / Cloud Engineer",
  "QA / Testing",
  "Frontend Developer Intern",
  "Backend Developer Intern",
  "UI/UX Design Intern",
  "General Application",
];

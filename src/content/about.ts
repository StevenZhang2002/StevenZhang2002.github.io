export type AboutContent = {
  name: string;
  avatarText?: string;
  avatarUrl?: string;
  subtitle: string;
  blurb: string;
  location: string;
  stack: string[];
  currently: string;
  badges: string[];
  educationRecords: { school: string; degree: string; period: string }[];
  resumeUrl?: string;
  contactEmail?: string;
};

export const aboutContent: AboutContent = {
  name: "Zhang Bowen(Steven)",
  avatarUrl: "/缩减_bowen.jpg",
  subtitle:
    "Frontend / Full-stack developer. Building clean UI and useful tools.",
  blurb:
    "I build performant and accessible interfaces with a focus on developer experience. I enjoy shipping pragmatic solutions and polishing details.",
  location: "Beijing, China",
  stack: ["React", "TypeScript", "Node.js", "Vite"],
  currently: "Open to opportunities / Freelancing",
  badges: ["React", "TypeScript", "Node.js", "Vite"],
  educationRecords: [
    { school: "University XYZ", degree: "B.S. Computer Science", period: "2017–2021" },
    { school: "University ABC", degree: "M.S. Software Engineering", period: "2021–2023" },
  ],
  resumeUrl: "/resume.pdf",
  contactEmail: "you@example.com",
};
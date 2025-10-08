export type AboutContent = {
  name: string;
  avatarText?: string;
  avatarUrl?: string;
  subtitle: string;
  blurb: string;
  location: string;
  stack: string[];
  currentTags: { text: string; tone?: "success" | "info" | "warning" | "danger" | "neutral" }[];
  badges: string[];
  educationRecords: { school: string; degree: string; period: string; logoUrl?: string }[];
  resumeUrl?: string;
  contactEmail?: string;
};

export const aboutContent: AboutContent = {
  name: "Zhang Bowen(Steven)",
  avatarUrl: "/缩减_bowen.jpg",
  subtitle:
    "Motivated Backend developer. Building clean UI and useful tools.",
  blurb:
    "I build performant and accessible interfaces with a focus on developer experience. I enjoy shipping pragmatic solutions and polishing details.",
  location: "City, Country",
  stack: ["React", "TypeScript", "Node.js", "Vite"],
  currentTags: [
    { text: "Open to opportunities", tone: "success" },
    { text: "Freelancing", tone: "info" },
  ],
  badges: ["React", "TypeScript", "Node.js", "Vite"],
  educationRecords: [
    { school: "National University of Singapore", degree: "M.Tech. Software Engineering", period: "2024–2025", logoUrl: "/ucd-logo.png" },
    { school: "Beijing University of Technology", degree: "B.ENG. Software Engineering", period: "2020–2024" },
    { school: "University College Dublin", degree: "B.ENG. Software Engineering", period: "2020–2024" },
  ],
  resumeUrl: "/resume.pdf",
  contactEmail: "you@example.com",
};
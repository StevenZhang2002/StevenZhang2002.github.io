type Project = {
  title: string;
  tech: string[];
  description: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Awesome Project",
    tech: ["React", "Vite", "TypeScript"],
    description: "A delightful UI with blazing-fast build.",
    link: "https://github.com/USERNAME/awesome-project",
  },
  {
    title: "API Tooling",
    tech: ["Node.js", "Express"],
    description: "Developer-friendly APIs and integrations.",
    link: "https://github.com/USERNAME/api-tooling",
  },
];

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="grid">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p className="tags">{p.tech.join(" · ")}</p>
            {p.link && (
              <p>
                <a href={p.link} target="_blank" rel="noreferrer">
                  View on GitHub →
                </a>
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
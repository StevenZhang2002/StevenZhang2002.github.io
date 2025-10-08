import { aboutContent } from "../content/about";
export default function About() {
  return (
    <section>
      <div className="about-hero">
        {aboutContent.avatarUrl ? (
          <img
            className="about-avatar"
            src={aboutContent.avatarUrl}
            alt={aboutContent.name}
          />
        ) : (
          <div className="about-avatar" aria-hidden="true">
            {aboutContent.name.slice(0, 2)}
          </div>
        )}
        <div>
          <h1 className="about-title">Hi, I’m {aboutContent.name} 👋</h1>
          <p className="about-subtitle">{aboutContent.subtitle}</p>
          <div className="about-actions">
            {aboutContent.resumeUrl && (
              <a className="btn" href={aboutContent.resumeUrl} download>
                Download Resume
              </a>
            )}
            {aboutContent.contactEmail && (
              <a className="btn secondary" href={`mailto:${aboutContent.contactEmail}`}>
                Contact Me
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="about-split">
        <article className="section">
          <h2>About</h2>
          <p>{aboutContent.blurb}</p>
          <div className="kv">
            <span>Location</span>
            <span>{aboutContent.location}</span>
            <span>Stack</span>
            <span>{aboutContent.stack.join(" · ")}</span>
            <span>Currently</span>
            <span>{aboutContent.currently}</span>
          </div>
          <div className="badges">
            {aboutContent.badges.map((b) => (
              <span key={b} className="badge">
                {b}
              </span>
            ))}
          </div>
        </article>

        <aside className="section">
          <h2>Education Records</h2>
          <ul className="edu-list">
            {aboutContent.educationRecords.map((rec) => (
              <li key={`${rec.school}-${rec.period}`}>
                <div className="edu-header">
                  <strong>{rec.school}</strong>
                  <span className="edu-period">{rec.period}</span>
                </div>
                <div className="edu-degree">{rec.degree}</div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
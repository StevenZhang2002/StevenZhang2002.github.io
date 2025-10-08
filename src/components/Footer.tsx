export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} Your Name · All rights reserved.</p>
        <div className="social">
          <a href="https://github.com/USERNAME" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/USERNAME" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:you@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
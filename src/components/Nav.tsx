import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="header">
      <div className="container nav">
        <a className="brand" href="#/">
          <span className="brand-logo">👨‍💻</span>
          <span className="brand-name">Your Name</span>
        </a>
        <nav className="nav-links">
          <NavLink to="/" end>
            About
          </NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
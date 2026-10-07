"use client";
import { useEffect, useState } from "react";
import { resumeUrl } from "@/lib/data";

const SECTIONS = ["about", "skills", "projects", "education", "certs", "coding", "connect"];

export default function Nav() {
  const [active, setActive] = useState("about");
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "light");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  function toggleTheme() {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
    try {
      localStorage.setItem("pm-theme", next);
    } catch (e) {}
  }

  return (
    <nav className="nav" aria-label="Main">
      <a href="#top" className="brand">
        Priyanshi<span className="grad-text">.</span>
      </a>
      <ul className="nav-links">
        <li><a href="#about" className={active === "about" ? "active" : ""}>About</a></li>
        <li><a href="#skills" className={active === "skills" ? "active" : ""}>Skills</a></li>
        <li><a href="#projects" className={active === "projects" ? "active" : ""}>Projects</a></li>
        <li><a href="#education" className={active === "education" ? "active" : ""}>Education</a></li>
        <li><a href="#certs" className={active === "certs" ? "active" : ""}>Certificates</a></li>
        <li><a href="#coding" className={active === "coding" ? "active" : ""}>Coding</a></li>
        <li><a href="#connect" className={active === "connect" ? "active" : ""}>Connect</a></li>
        <li>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn"
            title="View Interview Resume on OneDrive"
          >
            Resume{" "}
            <svg
              className="nav-ext-ico"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </li>
      </ul>
      <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle light and dark theme">
        <svg className="ico-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
        <svg className="ico-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z" />
        </svg>
      </button>
    </nav>
  );
}

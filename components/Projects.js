"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";
import { projects } from "@/lib/data";

function Tilt({ children }) {
  function onMove(e) {
    const el = e.currentTarget;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    const b = el.getBoundingClientRect();
    const px = (e.clientX - b.left) / b.width - 0.5;
    const py = (e.clientY - b.top) / b.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * 9}deg) rotateX(${-py * 9}deg) translateY(-6px)`;
  }
  function onLeave(e) {
    e.currentTarget.style.transform = "";
  }
  return (
    <div onMouseMove={onMove} onMouseLeave={onLeave} style={{ transition: "transform .3s ease-out" }}>
      {children}
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker"><i />Selected work</span>
          <h2>
            Things I&apos;ve <span className="serif grad-text">built</span>
          </h2>
          <p>
            Tap a project to see the problem, the solution, the challenges I
            ran into, and the tech behind it.
          </p>
        </Reveal>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <Tilt>
                <button
                  className={`proj spot c-${p.accent}`}
                  onClick={() => setActive(p)}
                  onMouseMove={(e) => {
                    const b = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mx", e.clientX - b.left + "px");
                    e.currentTarget.style.setProperty("--my", e.clientY - b.top + "px");
                  }}
                >
                  <div className={`proj-art art-${p.accent}`}>
                    <span className="orb o1" />
                    <span className="orb o2" />
                    <span className="orb o3" />
                    <span className="proj-num">{p.num}</span>
                    {!p.link && <span className="no-link-pill">No live link</span>}
                    <svg className="big s" viewBox="0 0 24 24">
                      <use href={`#i-${p.icon}`} />
                    </svg>
                  </div>
                  <div className="proj-body">
                    <span className="role-pill">{p.role}</span>
                    <h3>{p.title}</h3>
                    <p>{p.about || p.problem}</p>
                    <div className="ptags">
                      {p.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <span className="proj-cta">
                      View details{" "}
                      <span className="go">
                        <svg viewBox="0 0 24 24">
                          <use href="#i-arrow" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </button>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

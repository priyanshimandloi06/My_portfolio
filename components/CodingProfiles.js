"use client";
import Reveal from "./Reveal";
import { codingProfiles } from "@/lib/data";

export default function CodingProfiles() {
  return (
    <section id="coding">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker"><i />Practice</span>
          <h2>
            Where I <span className="serif grad-text">solve</span>
          </h2>
          <p>My coding profiles — tap either one to see my activity.</p>
        </Reveal>
        <div className="coding-grid">
          {codingProfiles.map((c, i) => (
            <Reveal
              key={c.name}
              delay={i * 0.08}
              as="a"
              className={`coding-card spot c-${c.accent}`}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={(e) => {
                const b = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", e.clientX - b.left + "px");
                e.currentTarget.style.setProperty("--my", e.clientY - b.top + "px");
              }}
            >
              <div className="coding-badge">
                <svg viewBox="0 0 24 24">
                  <use href={`#i-${c.icon}`} />
                </svg>
              </div>
              <div>
                <h3>{c.name}</h3>
                <p>
                  {c.handle}
                  <svg viewBox="0 0 24 24">
                    <use href="#i-arrow" />
                  </svg>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

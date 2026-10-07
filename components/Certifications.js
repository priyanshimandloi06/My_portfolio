"use client";
import Reveal from "./Reveal";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certs">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker"><i />Certifications</span>
          <h2>
            Proof of <span className="serif grad-text">practice</span>
          </h2>
          <p>Tap any card to open the certificate.</p>
        </Reveal>
        <div className="cert-grid">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05} as="a" className={`cert spot c-${c.accent}`} href={c.link} target="_blank" rel="noopener noreferrer"
              onMouseMove={(e) => {
                const b = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", e.clientX - b.left + "px");
                e.currentTarget.style.setProperty("--my", e.clientY - b.top + "px");
              }}
            >
              <div>
                <div className="issuer">{c.issuer}</div>
                <div className="cname">{c.name}</div>
              </div>
              <div className="open">
                View certificate
                <span className="arrow">
                  <svg viewBox="0 0 24 24">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

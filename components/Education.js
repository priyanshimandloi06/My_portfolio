"use client";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { education } from "@/lib/data";

export default function Education() {
  const tlRef = useRef(null);
  const fillRef = useRef(null);
  const [onFlags, setOnFlags] = useState(education.map(() => false));

  useEffect(() => {
    function onScroll() {
      const tl = tlRef.current;
      const fill = fillRef.current;
      if (!tl || !fill) return;
      const vh = window.innerHeight;
      const r = tl.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh * 0.62 - r.top) / r.height));
      fill.style.height = p * 100 + "%";
      const items = tl.querySelectorAll(".tl-item");
      setOnFlags(
        Array.from(items).map((it) => it.getBoundingClientRect().top < vh * 0.62)
      );
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="education">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker"><i />Background</span>
          <h2>
            Where I&apos;ve <span className="serif grad-text">learned</span>
          </h2>
          <p>My academic path so far, plus hands-on experience from my internship.</p>
        </Reveal>
        <div className="edu-grid">
          <Reveal className="timeline" as="div">
            <div className="timeline" ref={tlRef}>
              <div className="tl-line">
                <div className="tl-fill" ref={fillRef} />
              </div>
              {education.map((e, i) => (
                <div key={e.title} className={`tl-item${onFlags[i] ? " on" : ""}`}>
                  <span className="tl-dot" />
                  <div className={`tl-card spot c-${e.accent}`}>
                    <div className="tl-top">
                      <span className="tl-year">{e.year}</span>
                      <span className="score">{e.score}</span>
                    </div>
                    <h3>{e.title}</h3>
                    <p>{e.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="side-stack">
            <Reveal delay={0.1} className="info-card spot c-peri">
              <div className="sk-ico">
                <svg viewBox="0 0 24 24">
                  <use href="#i-brief" />
                </svg>
              </div>
              <span className="tag">Internship</span>
              <h3>Frontend Web Development</h3>
              <p>ApexPlanet Software Pvt. Ltd. Worked with HTML and CSS.</p>
            </Reveal>
            <Reveal delay={0.18} className="info-card spot c-pink">
              <div className="sk-ico">
                <svg viewBox="0 0 24 24">
                  <use href="#i-flag" />
                </svg>
              </div>
              <span className="tag">Leadership</span>
              <h3>Led three projects</h3>
              <p>Team Leader and Developer on KrishiConnect and the College Event Management System, and a core contributor on Inspectra.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import Reveal from "./Reveal";
import { connectLinks } from "@/lib/data";

export default function Connect() {
  return (
    <section id="connect">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker"><i />Let&apos;s talk</span>
          <h2>
            Let&apos;s <span className="serif grad-text">connect</span>
          </h2>
          <p>The easiest ways to reach me or see more of my work.</p>
        </Reveal>
        <div className="cn-grid">
          <Reveal as="a" delay={0} className="cn spot c-pink" href={connectLinks.github} target="_blank" rel="noopener noreferrer"
            onMouseMove={(e) => {
              const b = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mx", e.clientX - b.left + "px");
              e.currentTarget.style.setProperty("--my", e.clientY - b.top + "px");
            }}
          >
            <div className="sk-ico">
              <svg viewBox="0 0 24 24"><use href="#i-github" /></svg>
            </div>
            <h3>GitHub</h3>
            <p>github.com/priyanshimandloi06</p>
            <span className="go-mini">
              Open profile <svg viewBox="0 0 24 24"><use href="#i-arrow" /></svg>
            </span>
          </Reveal>

          <Reveal as="a" delay={0.06} className="cn spot c-peri" href={connectLinks.linkedin} target="_blank" rel="noopener noreferrer"
            onMouseMove={(e) => {
              const b = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mx", e.clientX - b.left + "px");
              e.currentTarget.style.setProperty("--my", e.clientY - b.top + "px");
            }}
          >
            <div className="sk-ico">
              <svg viewBox="0 0 24 24"><use href="#i-linkedin" /></svg>
            </div>
            <h3>LinkedIn</h3>
            <p>Priyanshi Mandloi</p>
            <span className="go-mini">
              Open profile <svg viewBox="0 0 24 24"><use href="#i-arrow" /></svg>
            </span>
          </Reveal>

          <Reveal delay={0.12} className="cn static c-mint">
            <div className="sk-ico">
              <svg viewBox="0 0 24 24"><use href="#i-mail" /></svg>
            </div>
            <h3>Email</h3>
            <p>{connectLinks.email}</p>
          </Reveal>

          <Reveal delay={0.18} className="cn static c-amber">
            <div className="sk-ico">
              <svg viewBox="0 0 24 24"><use href="#i-phone" /></svg>
            </div>
            <h3>Phone</h3>
            <p>{connectLinks.phone}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

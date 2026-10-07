"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { roles, bio } from "@/lib/data";

const chipData = [
  { cls: "fc1", depth: 16, color: "pink", label: "Python" },
  { cls: "fc2", depth: -14, color: "mint", label: "AIML" },
  { cls: "fc3", depth: 12, color: "amber", label: "Public Speaker" },
  { cls: "fc4", depth: -18, color: "peri", label: "Team Leader" },
];

function useTypewriter(words) {
  const [text, setText] = useState("");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setText(words[0]);
      return;
    }
    let r = 0;
    let c = 0;
    let deleting = false;
    let timeoutId;

    function tick() {
      const w = words[r];
      setText(w.slice(0, c));
      let d = deleting ? 40 : 85;
      if (!deleting && c === w.length) {
        d = 1600;
        deleting = true;
      } else if (deleting && c === 0) {
        deleting = false;
        r = (r + 1) % words.length;
        d = 320;
      } else {
        c += deleting ? -1 : 1;
      }
      timeoutId = setTimeout(tick, d);
    }
    tick();
    return () => clearTimeout(timeoutId);
  }, [words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);
  const heroRef = useRef(null);
  const stageRef = useRef(null);
  const [offsets, setOffsets] = useState(chipData.map(() => ({ x: 0, y: 0 })));

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    const hero = heroRef.current;
    const stage = stageRef.current;
    if (!hero || !stage) return;

    function onMove(e) {
      const b = stage.getBoundingClientRect();
      const px = (e.clientX - (b.left + b.width / 2)) / b.width;
      const py = (e.clientY - (b.top + b.height / 2)) / b.height;
      setOffsets(chipData.map((c) => ({ x: px * c.depth * 2, y: py * c.depth * 2 })));
    }
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero" id="about" ref={heroRef}>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <motion.span
            className="hello"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="wave">👋</span> Hello, I&apos;m
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
          >
            Priyanshi <span className="serif grad-text">Mandloi</span>
          </motion.h1>

          <motion.div
            className="roleline"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
          >
            I&apos;m <span className="typed">{typed}</span>
            <span className="caret" />
          </motion.div>

          <motion.p
            className="hero-bio"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
          >
            {bio}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32 }}
          >
            <a href="#projects" className="btn btn-primary">
              See my projects{" "}
              <svg viewBox="0 0 24 24">
                <use href="#i-arrow" />
              </svg>
            </a>
            <a href="#connect" className="btn btn-ghost">
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          className="photo-stage"
          id="stage"
          ref={stageRef}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <div className="photo-ring">
            <div className="photo-inner">
              <img src="/profile.jpg" alt="Portrait of Priyanshi Mandloi" />
            </div>
          </div>
          {chipData.map((c, i) => (
            <div
              key={c.cls}
              className={`fc-wrap ${c.cls}`}
              style={{ transform: `translate(${offsets[i].x}px, ${offsets[i].y}px)`, transition: "transform .25s ease-out" }}
            >
              <div className="float-chip" style={{ "--c": `var(--${c.color})` }}>
                <i />
                {c.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

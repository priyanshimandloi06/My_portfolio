"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

function SkillCard({ group, index }) {
  return (
    <Reveal
      as="div"
      delay={index * 0.07}
      className={`sk spot c-${group.accent} ${group.span}`}
      onMouseMove={(e) => {
        const b = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", e.clientX - b.left + "px");
        e.currentTarget.style.setProperty("--my", e.clientY - b.top + "px");
      }}
    >
      <div className="sk-head">
        <div className="sk-ico">
          <svg viewBox="0 0 24 24">
            <use href={`#i-${group.icon}`} />
          </svg>
        </div>
        <h3>{group.title}</h3>
      </div>
      <div className="chips">
        {group.chips.map((chip, i) => (
          <motion.span
            key={chip}
            className="chip"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.15 + i * 0.06, ease: [0.2, 0.9, 0.3, 1.3] }}
          >
            {chip}
          </motion.span>
        ))}
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker"><i />What I work with</span>
          <h2>
            The toolkit I <span className="serif grad-text">build</span> with
          </h2>
          <p>
            Programming fundamentals, web development, data tools, design, and
            the leadership skills I bring to every team.
          </p>
        </Reveal>
        <div className="bento">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

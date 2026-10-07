"use client";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  const viewRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const first = closeRef.current;
        const last = viewRef.current || closeRef.current;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className="m-box"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mTitle"
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ duration: 0.3, ease: [0.2, 0.9, 0.3, 1.1] }}
          >
            <button className="modal-close" ref={closeRef} onClick={onClose} aria-label="Close">
              &times;
            </button>
            <div className="m-head">
              <div className={`m-badge art-${project.accent}`}>
                <svg className="s" viewBox="0 0 24 24">
                  <use href={`#i-${project.icon}`} />
                </svg>
              </div>
              <div>
                <div className="m-role">{project.role}</div>
                <h3 id="mTitle">{project.title}</h3>
              </div>
            </div>
            <div className="m-scroll">
              {project.about && (
                <div className="m-sec">
                  <h4>About</h4>
                  <p>{project.about}</p>
                </div>
              )}
              {project.problem && (
                <div className="m-sec">
                  <h4>Problem</h4>
                  <p>{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div className="m-sec">
                  <h4>Solution</h4>
                  <p>{project.solution}</p>
                </div>
              )}
              {project.extra && (
                <div className="m-sec">
                  <h4>{project.extra.label}</h4>
                  {project.extra.points ? (
                    <ul>
                      {project.extra.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{project.extra.text}</p>
                  )}
                </div>
              )}
              <div className="m-sec">
                <h4>Technologies used</h4>
                <div className="m-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="m-foot">
              {project.link ? (
                <a className="btn btn-primary" ref={viewRef} href={project.link} target="_blank" rel="noopener noreferrer">
                  View project{" "}
                  <svg viewBox="0 0 24 24">
                    <use href="#i-arrow" />
                  </svg>
                </a>
              ) : (
                <div className="no-link" ref={viewRef} tabIndex={0}>
                  No live link available yet
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

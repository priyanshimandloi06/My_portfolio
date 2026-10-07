"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(document.documentElement.scrollTop > 700);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a href="#top" className={`to-top${show ? " show" : ""}`} aria-label="Back to top">
      <svg viewBox="0 0 24 24">
        <use href="#i-arrow" />
      </svg>
    </a>
  );
}

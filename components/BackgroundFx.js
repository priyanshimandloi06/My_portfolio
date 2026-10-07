"use client";
import { useEffect, useRef } from "react";

export default function BackgroundFx() {
  const glowRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    const g = glowRef.current;
    if (!g) return;
    let tx = 0, ty = 0, x = 0, y = 0, raf;

    function onMove(e) {
      tx = e.clientX;
      ty = e.clientY;
      g.style.opacity = 1;
    }
    function loop() {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      g.style.transform = `translate(${x}px,${y}px)`;
      raf = requestAnimationFrame(loop);
    }
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />
      <div className="grid-fx" />
      <div className="glow" ref={glowRef} />
    </div>
  );
}

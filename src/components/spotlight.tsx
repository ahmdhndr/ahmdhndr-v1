"use client";

import { useEffect, useRef } from "react";

export default function Spotlight() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { left, top } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      // Update CSS variables directly on the DOM node
      containerRef.current.style.setProperty("--x", `${x}px`);
      containerRef.current.style.setProperty("--y", `${y}px`);
    };

    // Attach to window so it tracks even if the mouse moves fast
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-300"
      style={{
        background: `radial-gradient(
          550px circle at var(--x, 0px) var(--y, 0px),
          rgba(225, 178, 13, 0.07),
          transparent 70%
        )`,
      }}
    />
  );
}

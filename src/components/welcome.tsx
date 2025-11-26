"use client";

import { JSX, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FONT_WEIGHTS = {
  subtitle: { min: 200, max: 400, default: 200 },
  title: { min: 400, max: 900, default: 400 },
};

type FontType = keyof typeof FONT_WEIGHTS;

const renderText = (
  text: string,
  className: string,
  baseWeight = 400
): JSX.Element[] => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{
        fontVariationSettings: `'wght' ${baseWeight}`,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container: HTMLElement | null, type: FontType) => {
  if (!container) return () => {};

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (
    letter: gsap.TweenTarget,
    weight: number,
    duration = 0.25
  ) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: lf, width: wd } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (lf - left + wd / 2));
      const intensity = Math.exp(-(distance ** 2) / 2000);

      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () =>
    letters.forEach((letter) => animateLetter(letter, base, 0.3));

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    const titleCleanup = setupTextHover(titleRef.current, "title");
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      titleCleanup();
      subtitleCleanup();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Achmad Hendarsyah!",
          "text-3xl font-georama",
          200
        )}
      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText(
          "Web Developer",
          "text-5xl md:text-7xl lg:text-9xl italic font-georama"
        )}
      </h1>

      <div className="small-screen">
        <p>
          Currently this portfolio is designed for Desktop/Tablet screens only.
        </p>
      </div>
    </section>
  );
};

export default Welcome;

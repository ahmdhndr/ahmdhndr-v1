"use client";

import { useEffect } from "react";

export function useTocHighlighter() {
  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("a[data-tocitem]")
    );

    if (!links.length) return;

    const items = links
      .map((link) => {
        const id = link.getAttribute("href")?.slice(1);
        const heading = id ? document.getElementById(id) : null;
        if (!heading) return null;

        return { id, link, heading };
      })
      .filter(Boolean) as {
      id: string;
      link: HTMLAnchorElement;
      heading: HTMLElement;
    }[];

    const clear = () => {
      items.forEach((i) => i.link.classList.remove("active"));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        // get all visible headings
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (!visible.length) return;

        const id = visible[0].target.id;
        const item = items.find((i) => i.id === id);
        if (!item) return;

        clear();
        item.link.classList.add("active");
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0,
      }
    );

    items.forEach((i) => observer.observe(i.heading));

    return () => observer.disconnect();
  }, []);
}

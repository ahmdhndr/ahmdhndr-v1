"use client";

import Link from "next/link";

import { navLinks } from "@/data/landing";
import { useActiveSection } from "@/hooks/use-active-section";

export default function NavSection() {
  const activeSection = useActiveSection(navLinks.map((link) => link.id));

  return (
    <nav className="hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;

          return (
            <li key={link.id}>
              <Link
                href={`#${link.id}`}
                // onClick={(e) => handleClick(e, link.id)}
                className="group flex items-center py-3"
              >
                {/* indicator */}
                <span
                  className={`mr-4 h-px transition-all ${isActive ? "bg-secondary-200 w-16" : "w-8 bg-slate-600"} group-hover:bg-secondary-200 group-hover:w-16`}
                />

                {/* label */}
                <span
                  className={`text-xs font-bold tracking-widest uppercase ${isActive ? "text-secondary-200" : "text-slate-500"} group-hover:text-secondary-200`}
                >
                  {link.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

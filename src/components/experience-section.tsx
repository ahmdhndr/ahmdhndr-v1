import Link from "next/link";

import { MdArrowOutward } from "react-icons/md";

import { experiences } from "@/data/landing";

import ButtonComponent from "./button-component";
import SectionPlaceholder from "./section-placeholder";

export default function ExperienceSection() {
  return (
    <SectionPlaceholder
      id="experience"
      label="Work experience"
      title={"Experience"}
    >
      <ol className="group/list space-y-12">
        {experiences.map((experience) => (
          <li key={experience.id}>
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!">
              <div className="lg:group-hover:bg-primary-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(225, 178, 13, 1)] absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:drop-shadow-lg" />
              <header
                className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2"
                aria-label={experience.labelRange}
              >
                {experience.timeRange}
              </header>

              <div className="z-10 sm:col-span-6">
                <h3 className="leading-snug font-medium text-slate-200">
                  <div>
                    <Link
                      href={experience.officeSite}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={`${experience.labelRole} (opens in a new tab)`}
                      className="hover:text-secondary-200 focus-visible:text-secondary-200 group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>{experience.role} &middot;</span>
                      <span className="ml-1 inline-block">
                        {experience.officeName}{" "}
                        <MdArrowOutward className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none" />{" "}
                      </span>
                    </Link>
                  </div>
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-normal">
                  {experience.jobDesc}
                </p>

                {/* Stacks */}
                {experience.stacks.length > 0 && (
                  <ul
                    className="mt-2 flex flex-wrap gap-1.5 space-y-2"
                    aria-label="Technologies used"
                  >
                    {experience.stacks.map((stack) => (
                      <li key={stack}>
                        <div className="bg-secondary-200/10 text-secondary-200 flex items-center rounded-full px-3 py-1 text-xs leading-5 font-medium">
                          {stack}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>

      {/* Full Resume link */}
      <ButtonComponent
        link="/resume.pdf"
        action="View"
        label="Résumé"
        isExternalLink
      />
    </SectionPlaceholder>
  );
}

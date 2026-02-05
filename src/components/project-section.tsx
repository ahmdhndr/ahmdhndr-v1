import Image from "next/image";
import Link from "next/link";

import { MdArrowOutward } from "react-icons/md";

import { projects } from "@/data/landing";

import ButtonComponent from "./button-component";
import SectionPlaceholder from "./section-placeholder";

export default function ProjectSection() {
  return (
    <SectionPlaceholder
      id="projects"
      label="Selected projects"
      title={"Projects"}
    >
      <ol className="group/list space-y-12">
        {projects.map((project) => (
          <li key={project.id}>
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!">
              <div className="lg:group-hover:bg-primary-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(225, 178, 13, 1)] absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:drop-shadow-lg" />

              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3 className="leading-snug font-medium text-slate-200">
                  <div>
                    <Link
                      href={project.site}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={`${project.name} (opens in a new tab)`}
                      className="hover:text-secondary-200 focus-visible:text-secondary-200 group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      {/* <span>{project.role} &middot;</span> */}
                      <span className="inline-block">
                        {project.name}{" "}
                        <MdArrowOutward className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none" />{" "}
                      </span>
                    </Link>
                  </div>
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-normal">
                  {project.description}
                </p>

                {/* Stacks */}
                {project.stacks.length > 0 && (
                  <ul
                    className="mt-2 flex flex-wrap gap-1.5 space-y-2"
                    aria-label="Technologies used"
                  >
                    {project.stacks.map((stack) => (
                      <li key={stack}>
                        <div className="bg-secondary-200/10 text-secondary-200 flex items-center rounded-full px-3 py-1 text-xs leading-5 font-medium capitalize">
                          {stack}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {project.thumbnailSrc && (
                <Image
                  src={project.thumbnailSrc}
                  alt={`${project.name} hero section`}
                  width={200}
                  height={48}
                  className="border-secondary-200/10 group-hover:border-secondary-200/30 aspect-video rounded border-2 object-cover transition sm:order-1 sm:col-span-2 sm:translate-y-1"
                />
              )}
            </div>
          </li>
        ))}
      </ol>

      {/* Full Resume link */}
      <ButtonComponent link="/projects" action="View" label="All Projects" />
    </SectionPlaceholder>
  );
}

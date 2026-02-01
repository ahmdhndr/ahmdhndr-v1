import Link from "next/link";

import SectionPlaceholder from "./section-placeholder";

export default function AboutSection() {
  return (
    <SectionPlaceholder id="about" label="About me" title={"About"}>
      <div className="space-y-4">
        <p>
          Junior-level role with over two years of experience specializing in
          the development and maintenance of enterprise-scale web applications.
        </p>

        <p>
          Currently, I am a Junior Programmer at{" "}
          <Link
            href="https://www.neuronworks.co.id/"
            className="hover:text-secondary-200 focus-visible:text-secondary-200 font-medium text-slate-200"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Neuronworks Indonesia (opens in a new tab)"
          >
            Neuronworks Indonesia
          </Link>
          . My daily work involves a strategic balance: delivering rapid
          business features on legacy stacks (PHP Zend, CI3) while architecting
          migrations to high-performance environments like{" "}
          <Link
            href="https://go.dev/"
            className="hover:text-secondary-200 focus-visible:text-secondary-200 font-medium text-slate-200"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Go programming language (opens in a new tab)"
          >
            Go
          </Link>{" "}
          and{" "}
          <Link
            href="https://nestjs.com/"
            className="hover:text-secondary-200 focus-visible:text-secondary-200 font-medium text-slate-200"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Nest JS framework (opens in a new tab)"
          >
            NestJS
          </Link>
          .
        </p>

        <p>
          My experience in the ICT industry has shaped my approach to
          engineering, focusing on building resilient systems that can handle
          massive data loads and complex logic without sacrificing user
          experience. I enjoy the challenge of making &quot;old&quot; systems
          perform like new ones.
        </p>

        <p>
          Outside of work, I stay sharp by reading and journaling, or
          you&apos;ll find me on the field playing football, badminton, or
          occasionally volleyball. I find that the discipline of sports
          translates perfectly to the persistence needed in software debugging.
        </p>
      </div>
    </SectionPlaceholder>
  );
}

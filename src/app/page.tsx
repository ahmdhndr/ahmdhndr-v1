import Link from "next/link";

import AboutSection from "@/components/about-section";
import ArticleSection from "@/components/article-section";
import ExperienceSection from "@/components/experience-section";
import MediaSocialSection from "@/components/media-social-section";
import NavSection from "@/components/nav-section";
import ProjectSection from "@/components/project-section";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-secondary-200 text-5xl font-bold tracking-tight md:text-4xl">
            <Link href="/">Achmad Hendarsyah</Link>
          </h1>

          <h2 className="mt-3 font-mono text-xl font-medium tracking-normal text-slate-200 md:text-lg">
            Junior Software Engineer
          </h2>

          <p className="mt-4 max-w-xs leading-normal">
            I am passionate about web development and exploring modern
            technologies.
          </p>

          <NavSection />
        </div>

        {/* media social link */}
        <MediaSocialSection />
      </header>

      {/* main content */}
      <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <ArticleSection />

        {/* Footer */}
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
          <p>
            &copy; 2026 &middot; Achmad Hendarsyah
            {/* <Link */}
            {/*   href="https://brittanychiang.com/" */}
            {/*   rel="noopener noreferrer" */}
            {/*   target="_blank" */}
            {/*   aria-label="Brittany Chiang's website (opens in a new tab)" */}
            {/*   className="hover:text-secondary-200 focus-visible:text-secondary-200 group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200" */}
            {/* > */}
            {/*   Brittany Chiang */}
            {/* </Link> */}
          </p>
        </footer>
      </main>
    </div>
  );
}

import Link from "next/link";

import MediaSocialSection from "@/components/media-social-section";
import PostSection from "@/components/post-section";

export default function PostPage() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-secondary-200 text-3xl font-bold tracking-tight md:text-4xl">
            <Link href="/">Achmad Hendarsyah</Link>
          </h1>

          <h2 className="mt-3 font-mono text-xl font-medium tracking-normal text-slate-200 md:text-lg">
            A Public Notebook
          </h2>

          <p className="mt-4 max-w-xs leading-normal">
            This is where I document my process-less about
            &ldquo;teaching&rdquo; and more about thinking out loud.
          </p>
        </div>

        {/* media social link */}
        <MediaSocialSection />
      </header>

      {/* main content */}
      <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
        <PostSection />

        {/* Footer */}
        <footer className="pb-16 text-left text-sm text-slate-500 sm:pb-0 lg:text-right">
          <p>&copy; 2026 &middot; Achmad Hendarsyah</p>
        </footer>
      </main>
    </div>
  );
}

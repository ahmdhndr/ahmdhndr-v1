import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="prose dark:prose-invert mx-auto">
        <section className="mx-auto my-4 flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold text-balance md:text-3xl">
            Next.js Starter
          </h1>
          <p className="text-muted-foreground my-0 w-full max-w-lg">
            A basic starter for Next.js with Tailwind CSS, Shadcn
            (initialization) and Typescript. <br />
            Start by editing{" "}
            <code className="font-geist bg-primary-150 rounded px-1 py-0.5 font-semibold">
              src/app/page.tsx
            </code>
            .
          </p>
          <p>
            See{" "}
            <Link
              href={"https://github.com/ahmdhndr/nextjs-starter-shadcn"}
              target="_blank"
              className="text-secondary-100"
            >
              Github Repo
            </Link>{" "}
            for further information.
          </p>
        </section>
      </div>
    </div>
  );
}

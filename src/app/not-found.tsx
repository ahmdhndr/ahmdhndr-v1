import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <h1 className="my-0 text-5xl font-extrabold tracking-tight md:text-7xl lg:text-9xl">
        404
      </h1>
      <Separator className="mx-auto my-2 w-24" />
      <h2 className="my-0 text-xl font-semibold md:text-3xl">Page not found</h2>
      <Link href={"/"}>
        <Button className="my-4">Back to home</Button>
      </Link>
    </div>
  );
}

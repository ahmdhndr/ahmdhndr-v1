import ButtonComponent from "@/components/button-component";
import { Separator } from "@/components/ui/separator";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-4 inline-block text-5xl font-extrabold tracking-tight md:text-7xl lg:text-9xl">
        Coming Soon
      </h1>
      <Separator className="mx-auto mt-4 mb-2 max-w-xs" />
      <h2 className="my-0 text-xl font-semibold md:text-3xl">
        Page is still under development
      </h2>
      {/* <p className="mx-auto max-w-80 text-sm tracking-normal md:text-base"> */}
      {/*   This page is still under development. Please check back regularly. */}
      {/* </p> */}
      <ButtonComponent action="Back" label="to home" link="/" />
    </div>
  );
}

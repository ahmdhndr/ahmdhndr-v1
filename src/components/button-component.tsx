import Link from "next/link";

import { MdArrowOutward } from "react-icons/md";

type ButtonComponentProps = {
  link: string;
  label: string;
  action: string;
  isExternalLink?: boolean;
};

export default function ButtonComponent({
  link,
  label,
  action,
  isExternalLink = false,
}: ButtonComponentProps) {
  return (
    <div className="mt-12">
      <Link
        href={link}
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noopener noreferrer" : undefined}
        aria-label={
          isExternalLink
            ? `${action} ${label} (opens in a new tab)`
            : `${action} ${label}`
        }
        className="hover:text-secondary-200 focus-visible:text-secondary-200 group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200"
      >
        <span>
          {action}{" "}
          <span className="inline-block">
            {label}
            <MdArrowOutward className="ml-1 inline-block size-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none" />
          </span>
        </span>
      </Link>
    </div>
  );
}

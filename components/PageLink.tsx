"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { pages, type PageKey } from "@/lib/content";

type PageLinkProps = {
  page: PageKey;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

/**
 * Link to another page of the site. Pages that are not built yet keep their
 * real URL in the markup but do not navigate; flip `ready` in lib/content.ts
 * when a page exists and every link to it starts working.
 */
export default function PageLink({ page, className, children, onClick }: PageLinkProps) {
  const target = pages[page];

  if (target.ready) {
    return (
      <Link href={target.href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  function stay(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    onClick?.();
  }

  return (
    <a href={target.href} className={className} onClick={stay} data-page-pending="">
      {children}
    </a>
  );
}

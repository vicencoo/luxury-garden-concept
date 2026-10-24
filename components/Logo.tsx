type LogoProps = {
  className?: string;
};

/** The brand mark from the Instagram profile: a wide olive crown over a forked trunk. */
export function TreeMark({ className = "" }: LogoProps) {
  return (
    <svg viewBox="0 0 48 40" fill="currentColor" aria-hidden="true" className={className}>
      <ellipse cx="13" cy="13" rx="10" ry="5.5" />
      <ellipse cx="35" cy="12" rx="10.5" ry="5.5" />
      <ellipse cx="24" cy="7.5" rx="11" ry="6" />
      <ellipse cx="24" cy="16" rx="8" ry="4" />
      <ellipse cx="7" cy="19" rx="5" ry="2.8" />
      <ellipse cx="41" cy="18.5" rx="5" ry="2.8" />
      <path d="M22 39c.8-4.6.6-9-1.6-12.6-1.6-2.6-4.6-4.4-8.4-5.6 4.4.2 7.6 1.4 9.8 3.4l.4-4.4h3.4l.4 4.4c2.2-2 5.4-3.2 9.8-3.4-3.8 1.2-6.8 3-8.4 5.6-2.2 3.6-2.4 8-1.6 12.6h7.2v1h-18.4v-1Z" />
    </svg>
  );
}

/** Wordmark: tree mark with the stacked serif name, as on the Instagram profile. */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <TreeMark className="h-8 w-9 shrink-0" />
      <span className="flex flex-col font-serif text-[1.08rem] leading-[1.02] tracking-[0.2em]">
        <span>LUXURY</span>
        <span>GARDEN</span>
      </span>
    </span>
  );
}

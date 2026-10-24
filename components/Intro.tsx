import { TreeMark } from "./Logo";

/**
 * Opening curtain: the gold mark on brand green, lifting after a moment.
 * Pure CSS, so it always clears, with or without JavaScript.
 */
export default function Intro() {
  return (
    <div aria-hidden="true" className="intro grain fixed inset-0 z-[100] grid place-items-center bg-forest">
      <div className="intro-mark relative z-10 flex flex-col items-center text-brass">
        <TreeMark className="h-14 w-16" />
        <span className="mt-4 font-serif text-xl tracking-[0.3em] text-white/90">LUXURY GARDEN</span>
        <span className="intro-line mt-4 h-px w-24 bg-gradient-to-r from-transparent via-brass to-transparent" />
      </div>
    </div>
  );
}

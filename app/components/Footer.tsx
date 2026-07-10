"use client";
import { IconCopyright, IconArrowNarrowUp } from "@tabler/icons-react";

export default function Footer() {
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="flex justify-between border-t border-border-strong py-6 text-xs font-mono tracking-wider text-text-muted">
      <div className="flex items-center gap-2">
        <IconCopyright className="text-text-muted" stroke={1} />
        <p>Lisa Lillhannus</p>
      </div>

      <p className="invisible md:visible">Stockholm, Sweden</p>

      <button
        onClick={scrollToTop}
        className="group relative flex items-center gap-2"
      >
        <span className="relative pb-0.5">Back to top</span>
        <IconArrowNarrowUp stroke={1} />
        <span className="absolute left-0 bottom-0 h-px w-full bg-current origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </button>
    </footer>
  );
}

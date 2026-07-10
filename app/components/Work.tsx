"use client";

import { useState, useRef, useEffect } from "react";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const rail = useRef<HTMLDivElement>(null);
  const [prog, setProg] = useState(0);
  const drag = useRef({ down: false, sx: 0, sl: 0, moved: 0 });
  const movedRef = useRef(0);

  const allTags = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => p.tags))),
  ];

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  const onScroll = () => {
    const el = rail.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProg(max > 0 ? el.scrollLeft / max : 0);
  };

  useEffect(() => {
    onScroll();
  }, [filtered]);

  const down = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = rail.current;
    if (!el) return;
    drag.current = { down: true, sx: e.clientX, sl: el.scrollLeft, moved: 0 };
    movedRef.current = 0;
    el.style.scrollBehavior = "auto";
    el.style.cursor = "grabbing";
  };

  const move = (e: Event) => {
    if (!drag.current.down) return;
    const pointerEvent = e as PointerEvent;
    const el = rail.current;
    if (!el) return;

    const dx = pointerEvent.clientX - drag.current.sx;
    drag.current.moved = Math.max(drag.current.moved, Math.abs(dx));
    movedRef.current = drag.current.moved;
    el.scrollLeft = drag.current.sl - dx;
  };

  const up = () => {
    const el = rail.current;
    if (!el) return;
    drag.current.down = false;
    el.style.cursor = "grab";
    el.style.scrollBehavior = "";
  };

  useEffect(() => {
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  const nudge = (dir: number) => {
    const el = rail.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.74), behavior: "smooth" });
  };

  return (
    <section id="work" className="mt-30 md:mt-60">
      <div className="flex gap-2 items-center mb-4">
        <p className="font-mono text-terracotta text-sm tracking-widest font-semibold">
          (01)
        </p>
        <h2 className="font-serif text-2xl md:text-5xl">Selected work</h2>
      </div>

      <div className="relative w-full overflow-visible">
        <div
          ref={rail}
          onScroll={onScroll}
          onPointerDown={down}
          className="flex gap-5 overflow-x-auto no-scrollbar px-4 py-2 select-none snap-x snap-mandatory"
        >
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              data-cursor="hover"
              project={project}
              movedRef={movedRef}
            />
          ))}
          <div className="shrink-0 w-20" />
        </div>

        {/* Progress + pilar längst ner */}
        <div className="flex items-center gap-5 mt-6">
          <div className="flex-1 h-0.5 bg-border-strong rounded-xs overflow-hidden">
            <div
              className="h-full bg-terracotta rounded-xs transition-[width] duration-120 ease-linear"
              style={{ width: `${28 + prog * 72}%` }}
            />
          </div>
          <span className="mono text-[11px] text-text-muted tracking-[.08em]">
            DRAG / SWIPE
          </span>
          <div className="flex gap-2">
            {[-1, 1].map((d) => (
              <button
                key={d}
                onClick={() => nudge(d)}
                aria-label={d < 0 ? "Previous" : "Next"}
                className="w-11 h-11 rounded-full grid place-items-center bg-surface border border-border-strong text-text-muted active:scale-95 transition-transform"
              >
                {d < 0 ? "←" : "→"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

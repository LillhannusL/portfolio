"use client";
import { useState, useEffect } from "react";
import { skills } from "../data";
import { iconMap } from "./IconMap";

export default function Skills() {
  const [hovLabel, setHovLabel] = useState<string | null>(null);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mq.matches);
    const listener = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  return (
    <section id="skills" className="mt-10 md:mt-40">
      <h3 className="font-serif text-xl tracking-wider mb-4 md:mb-10 md:text-4xl">
        The Toolkit
      </h3>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {skills.map((skill) => {
          const isOpen = hovLabel === skill.label;
          const Icon = iconMap[skill.icon];

          return (
            <button
              key={skill.label}
              onMouseEnter={() => {
                if (canHover) setHovLabel(skill.label);
              }}
              onMouseLeave={() => {
                if (canHover)
                  setHovLabel((v) => (v === skill.label ? null : v));
              }}
              onClick={() =>
                setHovLabel((v) => (v === skill.label ? null : skill.label))
              }
              className={`relative overflow-hidden ${isOpen ? "bg-surface-2" : "bg-surface"} border ${isOpen ? "border-text-muted" : "border-text-muted/40"} px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out md:px-8 md:py-4`}
            >
              <div className="flex items-center gap-3">
                {/* <span className="grid items-center w-5 h-6 rounded-lg bg-terracotta/20 md:w-8 md:h-8">
									{skill.icon}
								</span> */}
                {Icon && <Icon className="h-5 w-5 text-terracotta " />}
                <h4 className="text-sm tracking-wider text-bold text-center md:text-lg ">
                  {skill.label}
                </h4>
              </div>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-400 ease-(--ease) ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} `}
              >
                <div className="overflow-hidden">
                  <p className="mono text-[11.5px] text-(--text-soft) mt-3 mb-3 mx-0 leading-[1.4]">
                    {skill.note}
                  </p>
                  <div className="h-1 rounded-[3px] bg-(--border-hairline) overflow-hidden">
                    <div
                      className="h-full bg-(--accent-terracotta) rounded-[3px] transition-[width] duration-600 ease-(--ease) delay-50"
                      style={{ width: isOpen ? `${skill.level}%` : "0%" }}
                    />
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

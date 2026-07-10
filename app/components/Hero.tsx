"use client";

import {
  IconArrowNarrowDownDashed,
  IconArrowUpRight,
} from "@tabler/icons-react";
import Image from "next/image";
import profile from "@/public/other/profile.png";

export default function Hero() {
  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="mt-20 md:mt-40 grid grid-cols-1 items-center justify-center md:grid-cols-2"
    >
      <div>
        <div className="flex items-center md:mb-10">
          <hr className="bg-transparent border-bottom border-terracotta h-0.5 w-6" />
          <p className="font-mono uppercase text-text-muted text-xs tracking-widest px-2 md:px-6">
            Frontend Developer &middot; Stockholm, SE
          </p>
        </div>

        <h1 className="font-serif text-5xl my-5 tracking-wide md:text-9xl md:mb-10">
          Lisa Lillhannus
        </h1>

        <p className="font-sans text-text-soft leading-sm mb-2 text-lg md:text-xl">
          Frontend developer with a background in light design.
        </p>

        <p className="font-sans text-text-muted max-w-125 leading-sm mb-8 md:text-lg">
          Just like lighting a stage, frontend development is all about guiding
          the user. Only now I'm using code instead of a spotlight. I'm looking
          for a place where I can bring my visual eye to the table while
          continuing to learn to write smarter code..
        </p>

        {/* Buttons  */}
        <div className="flex gap-4 md:gap-20 md:mt-20">
          <button
            className="flex items-center gap-2 mx-auto bg-terracotta text-accent-ink rounded-full px-6 py-1 text-md font-semibold md:mx-0"
            onClick={() => scrollTo("work")}
          >
            View work
            <IconArrowNarrowDownDashed stroke={2} />
          </button>
          <button
            className="flex gap-2 border border-text-muted text-text-primary rounded-full px-6 py-3 text-md font-semibold"
            onClick={() => scrollTo("contact")}
          >
            Get in touch
          </button>
        </div>
      </div>
      <div className="relative w-50 h-50 mt-10 mx-auto md:ml-20 md:w-100 md:h-100">
        <Image
          src={profile}
          alt="Lisa Lillhannus"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}

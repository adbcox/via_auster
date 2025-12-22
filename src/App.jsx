import React from "react";

// Hero image is served from /public. Swap the file and/or path when you have the final asset.
const HERO_SRC = "/hero.png";

function IconButton({ label }) {
  return (
    <a
      href="#"
      className="group grid h-8 w-8 place-items-center rounded-full border border-neutral-300 text-[10px] font-semibold tracking-widest text-neutral-500 transition hover:border-neutral-400 hover:text-neutral-700"
      aria-label={label}
      title={label}
    >
      <span className="leading-none">{label}</span>
    </a>
  );
}

function LeftRail() {
  return (
    <aside className="absolute left-0 top-0 z-20 flex h-full w-[84px] flex-col items-center justify-between py-8">
      {/* Top mark (VA) */}
      <div className="flex flex-col items-center gap-4">
        <div className="grid h-10 w-10 place-items-center">
          <span className="text-[22px] font-semibold tracking-tight text-[#1F4E8C]">VA</span>
        </div>
        <div className="h-24 w-px bg-neutral-300" />
      </div>

      {/* Social */}
      <div className="flex flex-col items-center gap-3">
        <IconButton label="IN" />
        <IconButton label="IG" />
        <IconButton label="X" />
        <IconButton label="GH" />
      </div>

      {/* Bottom spacer line */}
      <div className="flex flex-col items-center gap-4">
        <div className="h-24 w-px bg-neutral-300" />
      </div>
    </aside>
  );
}

function RightRail() {
  return (
    <aside className="absolute right-0 top-0 z-20 h-full w-[140px]">
      {/* Vertical guide lines (Abbey-style) */}
      <div className="absolute right-8 top-0 h-full w-[84px]">
        <div className="absolute left-0 top-0 h-full w-px bg-neutral-300" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-neutral-300" />
        <div className="absolute right-0 top-0 h-full w-px bg-neutral-300" />
      </div>

      {/* Top menu aligned between the guides */}
      <nav className="absolute right-8 top-10 flex w-[84px] items-start justify-between text-[12px] tracking-[0.18em] uppercase text-neutral-500">
        <a className="hover:text-neutral-800" href="#">Home</a>
        <a className="hover:text-neutral-800" href="#">About</a>
        <a className="hover:text-neutral-800" href="#">Work</a>
      </nav>

      {/* Bottom rotated links (footer nav moved to right spine) */}
      <div className="absolute right-8 bottom-10 flex w-[84px] items-end justify-between">
        <a
          href="#"
          className="origin-bottom-left -rotate-90 whitespace-nowrap text-[11px] tracking-[0.18em] uppercase text-neutral-500 hover:text-neutral-800"
        >
          About
        </a>
        <a
          href="#"
          className="origin-bottom-left -rotate-90 whitespace-nowrap text-[11px] tracking-[0.18em] uppercase text-neutral-500 hover:text-neutral-800"
        >
          Contact
        </a>
        <span className="origin-bottom-left -rotate-90 whitespace-nowrap text-[11px] tracking-[0.18em] uppercase text-neutral-400">
          TBD
        </span>
      </div>
    </aside>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f4ef] text-neutral-900">
      {/* Hero (single screen) */}
      <section className="relative mx-auto min-h-screen max-w-[1320px] px-6">
        <LeftRail />
        <RightRail />

        {/* Center content column */}
        <div className="mx-auto flex min-h-screen max-w-[980px] flex-col items-center justify-center gap-6 pt-10">
          {/* Keep the top header *off* the page per your note (no extra header line). */}

          <header className="text-center">
            <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-500">Via Auster</div>
          </header>

          {/* Narrative hero lines */}
          <div className="text-center">
            <h1 className="text-[38px] leading-[1.05] tracking-tight md:text-[52px]">
              Design, Engineering, and Intentional<br className="hidden md:block" />
              Craft
            </h1>
            <p className="mx-auto mt-4 max-w-[720px] text-[14px] leading-6 text-neutral-600 md:text-[15px]">
              Via Auster is a studio focused on clarity, durability, and quiet excellence — across physical products, digital
              systems, and built environments.
            </p>
          </div>

          {/* Hero image (replaces the “weird video frame”) */}
          <figure className="mt-6 w-full max-w-[820px]">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <img
                src={HERO_SRC}
                alt="Hero"
                className="block h-[360px] w-full object-cover md:h-[420px]"
                loading="eager"
              />
            </div>
          </figure>

          {/* Bottom buttons (keep simple for now) */}
          <div className="mt-2 flex items-center gap-3">
            <a
              href="#"
              className="rounded-full border border-neutral-300 px-5 py-2 text-[12px] tracking-[0.18em] uppercase text-neutral-700 hover:border-neutral-400"
            >
              Contact
            </a>
            <a
              href="#"
              className="rounded-full bg-neutral-900 px-5 py-2 text-[12px] tracking-[0.18em] uppercase text-neutral-100 hover:bg-neutral-800"
            >
              About
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";

const socials = [
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "Instagram", href: "#", icon: "ig" },
  { label: "X", href: "#", icon: "x" },
  { label: "GitHub", href: "#", icon: "gh" },
];

const rightNav = [
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
  { label: "TBD", href: "#tbd" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Global page frame */}
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="relative min-h-screen py-10">
          {/* LEFT RAIL */}
          <aside className="absolute left-0 top-0 h-full w-[72px]">
            <div className="flex h-full flex-col items-center justify-between py-10">
              {/* top mark */}
              <div className="flex flex-col items-center gap-3">
                <div className="h-8 w-[2px] bg-neutral-200" />
                <div className="h-8 w-8 rounded-full border border-neutral-200" />
                <div className="h-10 w-[2px] bg-neutral-200" />
              </div>

              {/* social stack */}
              <div className="flex flex-col items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-[11px] uppercase tracking-wider text-neutral-600 hover:border-neutral-400 hover:text-neutral-900"
                    aria-label={s.label}
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* bottom spacer / line */}
              <div className="h-16 w-[2px] bg-neutral-200" />
            </div>
          </aside>

          {/* RIGHT RAIL (Abbey style) */}
          <aside className="absolute right-0 top-0 h-full w-[110px]">
            <div className="relative flex h-full flex-col items-center justify-between py-10">
              {/* triple vertical lines (visual guides) */}
              <div className="absolute right-[24px] top-[40px] h-[calc(100%-80px)] w-[40px]">
                <span className="absolute right-0 top-0 h-full w-[2px] bg-neutral-200" />
                <span className="absolute right-[14px] top-0 h-full w-[2px] bg-neutral-200" />
                <span className="absolute right-[28px] top-0 h-full w-[2px] bg-neutral-200" />
              </div>

              <div />

              {/* rotated nav at bottom, NOT stacked letters */}
              <nav className="relative z-10 flex flex-col items-center gap-8 pb-2">
                {rightNav.map((n) => (
                  <a
                    key={n.label}
                    href={n.href}
                    className="text-[11px] tracking-[0.22em] text-neutral-600 hover:text-neutral-900"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)", // reads bottom->top like Abbey examples
                    }}
                  >
                    {n.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* TOP NAV (centered, subdued) */}
          <header className="mx-auto flex max-w-[980px] items-center justify-center pt-6">
            <nav className="flex items-center gap-10 text-[12px] tracking-[0.22em] text-neutral-600">
              <a className="hover:text-neutral-900" href="#platform">
                PLATFORM
              </a>
              <a className="hover:text-neutral-900" href="#solutions">
                SOLUTIONS
              </a>
              <a className="hover:text-neutral-900" href="#resources">
                RESOURCES
              </a>
            </nav>
          </header>

          {/* CENTER HERO */}
          <main className="mx-auto flex max-w-[980px] flex-col items-center justify-center pt-16">
            {/* minimal brand identity */}
            <div className="text-center">
              <div className="text-[12px] tracking-[0.22em] text-neutral-500">
                VIA AUSTER
              </div>
              <h1 className="mt-4 text-[28px] font-medium tracking-tight">
                Executive industrial systems.
              </h1>
              <p className="mx-auto mt-4 max-w-[560px] text-[14px] leading-7 text-neutral-600">
                Confidence, not hype. Trust and competence first.
              </p>
            </div>

            {/* CENTER IMAGE PLACEHOLDER (this is the “weird video thing” replacement) */}
            <div className="mt-10 w-full">
              <div className="mx-auto aspect-[16/9] w-full max-w-[820px] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
                {/* If you have an image file later, replace this block with <img ... /> */}
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <div className="text-[11px] tracking-[0.22em] text-neutral-500">
                      HERO VISUAL
                    </div>
                    <div className="mt-2 text-[13px] text-neutral-600">
                      Placeholder until the factory image is dropped in
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* minimal CTA row (optional but helps balance like the reference pages) */}
            <div className="mt-10 flex items-center gap-3">
              <a
                href="#contact"
                className="rounded-full border border-neutral-300 px-5 py-2 text-[12px] tracking-[0.18em] text-neutral-700 hover:border-neutral-500 hover:text-neutral-900"
              >
                CONTACT
              </a>
              <a
                href="#about"
                className="rounded-full bg-neutral-900 px-5 py-2 text-[12px] tracking-[0.18em] text-white hover:bg-neutral-800"
              >
                ABOUT
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

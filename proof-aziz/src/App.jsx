import React from "react";

const HERO_SRC = "/hero.png";

function RailIcon({ label }) {
  return (
    <a
      href="#"
      className="grid h-8 w-8 place-items-center rounded-full border border-black/20 text-[10px] tracking-[0.2em] text-black/70 transition hover:border-black/40 hover:text-black"
      aria-label={label}
      title={label}
    >
      {label}
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-[100svh] bg-[var(--via-bg)] text-[var(--via-ink)] overflow-hidden">
      {/* Top nav */}
      <header className="pointer-events-none fixed left-0 right-0 top-0 z-20">
        <nav className="pointer-events-auto mx-auto flex w-full max-w-6xl items-center justify-center gap-10 px-6 py-6 text-[11px] tracking-[0.28em] uppercase text-black/70">
          <a className="hover:text-black" href="#">Home</a>
          <a className="hover:text-black" href="#">About</a>
          <a className="hover:text-black" href="#">Works</a>
        </nav>
      </header>

      {/* Left rail */}
      <aside className="fixed left-6 top-1/2 z-20 hidden -translate-y-1/2 lg:flex flex-col items-center gap-4">
        <div className="h-16 w-px bg-black/20" />
        <RailIcon label="IG" />
        <RailIcon label="IN" />
        <RailIcon label="X" />
        <div className="h-16 w-px bg-black/20" />
      </aside>

      {/* Hero */}
      <main className="mx-auto flex min-h-[100svh] max-w-6xl items-center justify-center px-6 pt-24 pb-16">
        <section className="w-full">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
            <p className="mb-6 text-[11px] tracking-[0.32em] uppercase text-black/60">
              Via Auster
            </p>

            <h1 className="font-light leading-[0.98] tracking-[-0.02em] text-[clamp(38px,6vw,76px)]">
              Technology Enablement
              <br />
              Platform
            </h1>

            {/* Center image (the ONLY graphic) */}
            <div className="relative mt-10 flex w-full justify-center">
              <img
                src={HERO_SRC}
                alt="Center visual"
                className="h-auto w-[min(560px,86vw)] max-h-[42svh] object-contain"
                draggable="false"
              />
            </div>

            <p className="mt-10 max-w-2xl text-[15px] leading-7 text-black/70">
              Replace <code className="rounded bg-black/5 px-1 py-0.5">public/hero.png</code> with
              your image, or change <code className="rounded bg-black/5 px-1 py-0.5">HERO_SRC</code>{" "}
              in <code className="rounded bg-black/5 px-1 py-0.5">src/App.jsx</code>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

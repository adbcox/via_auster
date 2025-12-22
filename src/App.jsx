import { useMemo, useState } from "react";

const NAV = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "CONTACT", href: "#contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const signals = useMemo(
    () => [
      { k: "STATUS", v: "ACTIVE" },
      { k: "SIGNAL", v: "CLEAN" },
      { k: "BUILD", v: "READY" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* LEFT RAIL (kept) */}
      <aside className="fixed left-0 top-0 h-screen w-16 border-r border-neutral-200 bg-white">
        <div className="flex h-full flex-col items-center justify-between py-6">
          <div className="flex flex-col items-center gap-5">
            <div className="h-9 w-9 rounded-full border border-neutral-300" />
            <div className="h-6 w-[1px] bg-neutral-200" />
            <div className="flex flex-col items-center gap-4 text-[10px] tracking-[0.2em] text-neutral-500">
              <a href="#home" className="rotate-180 [writing-mode:vertical-rl] hover:text-neutral-900">
                VIA
              </a>
              <a href="#work" className="rotate-180 [writing-mode:vertical-rl] hover:text-neutral-900">
                WORK
              </a>
              <a href="#contact" className="rotate-180 [writing-mode:vertical-rl] hover:text-neutral-900">
                CONTACT
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="h-6 w-[1px] bg-neutral-200" />
            <div className="text-[10px] tracking-[0.2em] text-neutral-400 rotate-180 [writing-mode:vertical-rl]">
              2025
            </div>
          </div>
        </div>
      </aside>

      {/* RIGHT RAIL (3 VERTICAL LINES + SIGNALS) */}
      <aside className="fixed right-0 top-0 h-screen w-16 border-l border-neutral-200 bg-white">
        <div className="flex h-full flex-col items-center justify-between py-6">
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="group flex flex-col items-center justify-center gap-2 rounded-md px-2 py-3 hover:bg-neutral-50"
          >
            {/* three VERTICAL lines */}
            <div className="flex items-center gap-1">
              <span className="h-10 w-[3px] rounded-full bg-neutral-800 opacity-90 group-hover:opacity-100" />
              <span className="h-10 w-[3px] rounded-full bg-neutral-800 opacity-60 group-hover:opacity-90" />
              <span className="h-10 w-[3px] rounded-full bg-neutral-800 opacity-35 group-hover:opacity-75" />
            </div>
            <div className="text-[10px] tracking-[0.2em] text-neutral-500">MENU</div>
          </button>

          <div className="flex flex-col items-center gap-3">
            <div className="h-6 w-[1px] bg-neutral-200" />
            <div className="flex flex-col items-center gap-3">
              {signals.map((s) => (
                <div key={s.k} className="flex flex-col items-center gap-1">
                  <div className="text-[9px] tracking-[0.22em] text-neutral-400">{s.k}</div>
                  <div className="text-[10px] tracking-[0.18em] text-neutral-700">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <div className="mx-auto max-w-6xl px-6">
        {/* give space for fixed rails */}
        <div className="pl-16 pr-16">
          {/* TOP BAR: brand left, NAV centered */}
          <header id="home" className="relative pt-10">
            <div className="flex items-center justify-between">
              <div className="text-[12px] tracking-[0.35em] text-neutral-500">
                VIA AUSTER
              </div>

              {/* Centered nav */}
              <nav className="absolute left-1/2 -translate-x-1/2">
                <ul className="flex items-center gap-8 text-[11px] tracking-[0.24em] text-neutral-500">
                  {NAV.map((item) => (
                    <li key={item.label}>
                      <a className="hover:text-neutral-900" href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* small spacer (keeps symmetry) */}
              <div className="w-[92px]" />
            </div>

            {/* Menu panel (minimal) */}
            {menuOpen && (
              <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="text-[11px] tracking-[0.22em] text-neutral-500">
                  NAVIGATION
                </div>
                <div className="mt-3 grid gap-2 text-[14px]">
                  <a className="hover:underline" href="#about" onClick={() => setMenuOpen(false)}>
                    About
                  </a>
                  <a className="hover:underline" href="#work" onClick={() => setMenuOpen(false)}>
                    Work
                  </a>
                  <a className="hover:underline" href="#contact" onClick={() => setMenuOpen(false)}>
                    Contact
                  </a>
                </div>
              </div>
            )}
          </header>

          {/* HERO */}
          <main className="pt-16 pb-20">
            <div className="grid gap-10">
              {/* industrial image well (center focus) */}
              <section className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                {/* replace this with your industrial image later */}
                <div className="aspect-[16/7] w-full">
                  <div className="h-full w-full bg-gradient-to-br from-neutral-100 via-white to-neutral-200" />
                </div>

                {/* subtle “tech edge” hint without being loud */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-6 top-6 h-10 w-10 rounded-full border border-neutral-300/70" />
                  <div className="absolute right-8 bottom-8 h-16 w-16 rounded-full border border-neutral-300/50" />
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-neutral-200/60" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center px-6">
                  <div className="max-w-3xl text-center">
                    {/* double-stack logo feel */}
                    <div className="text-[12px] tracking-[0.35em] text-neutral-500">
                      VIA AUSTER
                    </div>
                    <h1 className="mt-6 text-[44px] leading-[1.05] tracking-[-0.02em] text-neutral-900 md:text-[58px]">
                      Design, Engineering,
                      <br />
                      and Intentional Craft
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-7 text-neutral-600">
                      A studio focused on clarity, durability, and quiet excellence — across
                      physical products, digital systems, and built environments.
                    </p>

                    {/* underline-style cues instead of a footer */}
                    <div className="mt-10 flex items-center justify-center gap-10">
                      {NAV.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="group text-[11px] tracking-[0.24em] text-neutral-600 hover:text-neutral-900"
                        >
                          <span className="inline-block pb-2">{item.label}</span>
                          <span className="block h-px w-0 bg-neutral-300 transition-all group-hover:w-full" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* ABOUT / WORK / CONTACT anchors (no footer) */}
              <section id="about" className="pt-6">
                <div className="grid gap-3">
                  <div className="text-[11px] tracking-[0.24em] text-neutral-500">ABOUT</div>
                  <p className="max-w-3xl text-[14px] leading-7 text-neutral-700">
                    Minimal, durable, and precise. We build systems that hold up — visually,
                    structurally, and operationally.
                  </p>
                </div>
              </section>

              <section id="work" className="pt-6">
                <div className="grid gap-4">
                  <div className="text-[11px] tracking-[0.24em] text-neutral-500">WORK</div>
                  <div className="grid gap-4 md:grid-cols-3">
                    {["Industrial", "Digital", "Built"].map((label) => (
                      <div key={label} className="rounded-2xl border border-neutral-200 p-5">
                        <div className="text-[12px] tracking-[0.22em] text-neutral-600">
                          {label.toUpperCase()}
                        </div>
                        <div className="mt-3 text-[13px] leading-6 text-neutral-700">
                          Placeholder block — we’ll swap in real case studies and imagery.
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="contact" className="pt-6">
                <div className="grid gap-3">
                  <div className="text-[11px] tracking-[0.24em] text-neutral-500">CONTACT</div>
                  <p className="text-[14px] leading-7 text-neutral-700">
                    Add your preferred contact method here (email, form, or Calendly link).
                  </p>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

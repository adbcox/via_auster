import React from "react";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700">
      {children}
    </span>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-10 border-b border-neutral-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl border border-neutral-200 bg-white shadow-sm" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">Via Auster</div>
              <div className="text-xs text-neutral-500">Minimal white template</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-neutral-700 md:flex">
            <a className="hover:text-neutral-900" href="#work">Work</a>
            <a className="hover:text-neutral-900" href="#about">About</a>
            <a className="hover:text-neutral-900" href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm hover:bg-neutral-50"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4">
        <section className="py-16 md:py-24">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="mb-4 flex flex-wrap gap-2">
                <Pill>Clean</Pill>
                <Pill>Fast</Pill>
                <Pill>Tailwind</Pill>
                <Pill>Vite</Pill>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                A minimal, all‑white landing page you can build on.
              </h1>

              <p className="mt-5 text-base leading-relaxed text-neutral-600">
                This starter is intentionally simple: a crisp layout, subtle borders,
                quiet typography, and a section structure you can iterate on quickly.
                Replace the placeholder copy and components as you refine the Via Auster brand.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
                  href="#work"
                >
                  View sections
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm hover:bg-neutral-50"
                  href="#about"
                >
                  What this includes
                </a>
              </div>
            </div>

            <div className="w-full max-w-md">
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold">Quick checklist</div>
                <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-neutral-900" />
                    <span>Runs in Codespaces / cloud-only workflows</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-neutral-900" />
                    <span>Netlify-ready build output: <code className="rounded bg-neutral-50 px-1">dist</code></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-neutral-900" />
                    <span>Node pinned via <code className="rounded bg-neutral-50 px-1">netlify.toml</code></span>
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-xs text-neutral-600">
                  Tip: Once deployed, swap these sections with your real brand blocks and keep the structure.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-neutral-100 py-14">
          <h2 className="text-xl font-semibold tracking-tight">Work</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
            Replace these with the first 3–6 “proof” items: product snapshots, devices, R&D notes,
            or anything that builds credibility fast.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Concept → Prototype", "Design System", "Launch Readiness"].map((t) => (
              <div key={t} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold">{t}</div>
                <div className="mt-2 text-sm text-neutral-600">
                  Short, specific description. One sentence is enough.
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="border-t border-neutral-100 py-14">
          <h2 className="text-xl font-semibold tracking-tight">About</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">Minimal by design</div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Everything here is “quiet”: white background, soft borders, readable spacing,
                and a few reusable components. You can add color later without reworking layout.
              </p>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">Cloud-first workflow</div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                No local build required. You can edit files in GitHub web editor, Codespaces, or a tablet —
                and let Netlify build from GitHub on every push.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-neutral-100 py-14">
          <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
            Replace this with your real call-to-action. For now, it’s a simple placeholder.
          </p>

          <div className="mt-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold">Ready to iterate?</div>
                <div className="mt-1 text-sm text-neutral-600">
                  Update copy, sections, and styling — deploy automatically.
                </div>
              </div>
              <a
                className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Replace this button with your real contact flow (email, form, or scheduling).");
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-neutral-100 py-10 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Via Auster. Built with Vite + React + Tailwind.
        </footer>
      </main>
    </div>
  );
}

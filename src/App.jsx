import { useMemo } from "react";

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
  >
    {children}
  </a>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm">
    {children}
  </span>
);

const Card = ({ title, children }) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
    <div className="text-base font-semibold text-neutral-900">{title}</div>
    <div className="mt-2 text-sm leading-6 text-neutral-600">{children}</div>
  </div>
);

const Step = ({ n, title, children }) => (
  <div className="flex gap-4">
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-sm font-semibold text-neutral-900 shadow-sm">
      {n}
    </div>
    <div>
      <div className="text-sm font-semibold text-neutral-900">{title}</div>
      <div className="mt-1 text-sm leading-6 text-neutral-600">{children}</div>
    </div>
  </div>
);

const FAQ = ({ q, a }) => (
  <details className="group rounded-2xl border border-neutral-200 bg-white px-6 py-4 shadow-sm">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
      <span className="text-sm font-semibold text-neutral-900">{q}</span>
      <span className="text-neutral-500 transition group-open:rotate-45">+</span>
    </summary>
    <div className="mt-3 text-sm leading-6 text-neutral-600">{a}</div>
  </details>
);

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-sm">
              <span className="text-sm font-semibold tracking-tight">VA</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">Via Auster</div>
              <div className="text-xs text-neutral-500">Minimal • Precise • Calm</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="#product">Product</NavLink>
            <NavLink href="#how">How it works</NavLink>
            <NavLink href="#principles">Principles</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50"
            >
              Contact
            </a>
            <a
              href="#get-started"
              className="inline-flex items-center rounded-xl bg-neutral-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800"
            >
              Get started
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Pill>All‑white, minimal UI</Pill>
                <Pill>Tailwind + Vite</Pill>
                <Pill>Deploy-ready on Netlify</Pill>
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                Calm product pages that feel expensive.
              </h1>
              <p className="mt-4 text-base leading-7 text-neutral-600">
                Via Auster is a minimal, typography-forward layout built for clarity: a sharp message,
                structured sections, and zero clutter. Edit the copy, swap imagery, and publish.
              </p>

              <div className="mt-6 flex flex-wrap gap-3" id="get-started">
                <a
                  href="#product"
                  className="inline-flex items-center rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800"
                >
                  View layout
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50"
                >
                  Make it yours
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <Card title="Fast">
                  Vite build, clean dependencies, and a small component surface area.
                </Card>
                <Card title="Modular">
                  Sections are reusable. Add, remove, or reorder without breaking layout.
                </Card>
                <Card title="Brandable">
                  Neutral palette, crisp spacing, and easy type hierarchy—swap logo + copy.
                </Card>
              </div>
            </div>

            {/* Preview block */}
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-neutral-900">Homepage preview</div>
                <div className="text-xs text-neutral-500">Replace this with your hero image</div>
              </div>

              <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-5">
                <div className="h-44 rounded-xl bg-neutral-100" />
                <div className="mt-4">
                  <div className="h-3 w-3/4 rounded bg-neutral-200" />
                  <div className="mt-2 h-3 w-2/3 rounded bg-neutral-200" />
                  <div className="mt-4 flex gap-2">
                    <div className="h-9 w-28 rounded-xl bg-neutral-900" />
                    <div className="h-9 w-28 rounded-xl border border-neutral-200 bg-white" />
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-xl border border-neutral-200 bg-white" />
                    <div className="h-16 rounded-xl border border-neutral-200 bg-white" />
                    <div className="h-16 rounded-xl border border-neutral-200 bg-white" />
                  </div>
                </div>
              </div>

              <div className="mt-4 text-xs leading-5 text-neutral-600">
                Tip: keep your hero image high-contrast and mostly white/neutral to match the system.
              </div>
            </div>
          </div>
        </section>

        {/* Product */}
        <section id="product" className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">What this homepage includes</h2>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                A clean, conversion-ready structure you can iterate on quickly.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card title="Hero">
              Clear headline, subtext, CTAs, and a neutral preview block you can replace with a photo/render.
            </Card>
            <Card title="Feature grid">
              Three short cards for speed, modularity, and brand—swap for your own claims.
            </Card>
            <Card title="How it works">
              Simple 3-step narrative that explains your product without buzzwords.
            </Card>
            <Card title="FAQ + footer">
              Lightweight FAQ accordion and a calm footer for contact + legal.
            </Card>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Keep the copy simple. This structure is designed to read well on a phone.
                </p>

                <div className="mt-8 grid gap-6">
                  <Step n="1" title="Edit your copy">
                    Open <span className="font-mono text-[0.85em]">src/App.jsx</span> and replace text.
                  </Step>
                  <Step n="2" title="Swap imagery">
                    Replace the preview block with an image, screenshot, or product render.
                  </Step>
                  <Step n="3" title="Deploy">
                    Push to GitHub. Netlify builds with Node 20 and publishes <span className="font-mono text-[0.85em]">dist</span>.
                  </Step>
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="text-sm font-semibold text-neutral-900">What to change first</div>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-neutral-600">
                  <li>
                    <span className="font-semibold text-neutral-900">Brand:</span> logo (top-left), name, tagline.
                  </li>
                  <li>
                    <span className="font-semibold text-neutral-900">Hero:</span> headline, subtext, CTAs.
                  </li>
                  <li>
                    <span className="font-semibold text-neutral-900">Sections:</span> keep 4–6 blocks max.
                  </li>
                  <li>
                    <span className="font-semibold text-neutral-900">Links:</span> connect Contact / Get started.
                  </li>
                </ul>

                <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-xs leading-5 text-neutral-600">
                  If you want a single-page marketing site, keep everything in App.jsx. If you want multiple
                  pages later, we can add React Router and a /pages structure.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section id="principles" className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold tracking-tight">Design principles</h2>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                This template stays intentionally quiet so your content carries the weight.
              </p>
            </div>
            <div className="grid gap-4 lg:col-span-2 md:grid-cols-2">
              <Card title="Whitespace first">
                Let the layout breathe. Use fewer elements, larger margins, and consistent rhythm.
              </Card>
              <Card title="Type hierarchy">
                1 headline, 1 supporting paragraph, short labels. Avoid long blocks of text.
              </Card>
              <Card title="Neutral palette">
                Start with white + neutrals. Add one accent later if needed (links, CTA).
              </Card>
              <Card title="Consistency">
                Rounded corners, light borders, subtle shadows—repeat the same visual rules.
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            Quick answers so you can keep moving.
          </p>

          <div className="mt-6 grid gap-3">
            <FAQ
              q="Do I need to run anything locally?"
              a="No. You can edit directly in GitHub (web) or Codespaces. Netlify builds in the cloud from GitHub."
            />
            <FAQ
              q="Where do I change the homepage?"
              a="Edit src/App.jsx. Most of the site is intentionally in one file to keep it simple."
            />
            <FAQ
              q="What Node version does Netlify use?"
              a="This repo pins Node 20.19.0 via netlify.toml so Vite builds reliably."
            />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Ready to move forward?</h2>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Tell me what you want on the Via Auster homepage (sections + copy), and I’ll format it cleanly.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50"
                >
                  Email placeholder
                </a>
                <a
                  href="#product"
                  className="inline-flex items-center rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800"
                >
                  Back to top
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-10 border-t border-neutral-200 pt-6 text-sm text-neutral-500">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>© {year} Via Auster. All rights reserved.</div>
              <div className="flex gap-4">
                <a className="hover:text-neutral-700" href="#faq">FAQ</a>
                <a className="hover:text-neutral-700" href="#contact">Contact</a>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

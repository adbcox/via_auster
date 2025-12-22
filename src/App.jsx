export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      
      {/* Header */}
      <header className="px-8 py-6 flex justify-between items-center border-b border-neutral-200">
        <div className="text-xl font-light tracking-wide">
          VIA AUSTER
        </div>
        <nav className="space-x-6 text-sm uppercase tracking-widest text-neutral-500">
          <a href="#" className="hover:text-black">About</a>
          <a href="#" className="hover:text-black">Work</a>
          <a href="#" className="hover:text-black">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Design, Engineering, and Intentional Craft
          </h1>
          <p className="text-neutral-500 text-lg leading-relaxed">
            Via Auster is a studio focused on clarity, durability, and quiet excellence —
            across physical products, digital systems, and built environments.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-6 text-xs text-neutral-400 border-t border-neutral-200">
        © {new Date().getFullYear()} Via Auster
      </footer>
    </div>
  );
}

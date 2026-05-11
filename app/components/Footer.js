export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-900 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-slate-700">
          © {year} Saurabh Rane. All rights reserved.
        </span>
        <span className="font-mono text-xs text-slate-700">
          Mumbai, India · Open to remote
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs text-slate-600">
            Available for opportunities
          </span>
        </div>
      </div>
    </footer>
  );
}

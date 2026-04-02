// ─── Navbar ─────────────────────────────────────────────
import { useState,useEffect } from "react";

export default function Navbar({ nav , navIds }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#08090f]/90 border-b border-white/10 backdrop-blur-md" : "bg-transparent border-b border-transparent"}`}>
      <div className="flex justify-between items-center h-16 px-6 md:px-20 max-w-6xl mx-auto">
        <span className="font-bebas text-2xl text-[#eceaf5] tracking-widest">Arthur Dauneau</span>
        <ul className="hidden md:flex gap-8">
          {nav.map((label, i) => (
            <li key={label}>
              <a href={`#${navIds[i]}`} className="text-white/50 hover:text-[#eceaf5] text-sm tracking-wider">{label}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden flex flex-col gap-1" onClick={() => setOpen(!open)}>
          <span className={`w-6 h-[2px] bg-white transition-transform ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`w-6 h-[2px] bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[2px] bg-white transition-transform ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#08090f]/95 border-b border-white/10">
          {nav.map((label, i) => (
            <a key={label} href={`#${navIds[i]}`} className="block py-3 px-6 text-white/70 hover:text-[#eceaf5] border-b border-white/5" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
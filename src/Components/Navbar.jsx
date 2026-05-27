// ─── Navbar ─────────────────────────────────────────────
import { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar({ navIds }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { i18n, t } = useTranslation();

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
          {navIds.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="text-white/50 hover:text-[#eceaf5] text-sm tracking-wider capitalize">{t(`nav.${id}`)}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden flex flex-col gap-1" onClick={() => setOpen(!open)}>
          <span className={`w-6 h-[2px] bg-white transition-transform ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`w-6 h-[2px] bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[2px] bg-white transition-transform ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
        <div className="flex gap-3">
          <label></label>
          <button onClick={() => i18n.changeLanguage("fr")} className={`px-3 py-1 rounded text-sm transition ${i18n.language === 'fr' ? 'bg-[#eceaf5] text-[#08090f]' : 'text-white/50 hover:text-white'}`}>FR</button>
          <button onClick={() => i18n.changeLanguage("en")} className={`px-3 py-1 rounded text-sm transition ${i18n.language === 'en' ? 'bg-[#eceaf5] text-[#08090f]' : 'text-white/50 hover:text-white'}`}>EN</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-[#08090f]/95 border-b border-white/10">
          {navIds.map((id) => (
            <a key={id} href={`#${id}`} className="block py-3 px-6 text-white/70 hover:text-[#eceaf5] border-b border-white/5 capitalize" onClick={() => setOpen(false)}>
              {t(`nav.${id}`)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
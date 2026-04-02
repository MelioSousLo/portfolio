// ─── Hero ─────────────────────────────────────────────
export default function Hero({ onShoot }) {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-6xl mx-auto pt-16">
      <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Étudiant en informatique — 1ère année de bachelor</p>
      <h1 className="font-bebas text-[clamp(3rem,10vw,6rem)] text-[#eceaf5] leading-tight mb-6">Arthur<br />Dauneau</h1>
      <p className="text-sm text-white/60 max-w-lg mb-8">Passionné par le développement et la résolution de problèmes. En première année d'informatique, je construis mes compétences projet après projet.</p>
      <div className="flex flex-wrap gap-4 mb-6">
        <a href="#projets" className="bg-[#eceaf5] text-[#08090f] px-6 py-3 rounded-sm font-semibold text-sm hover:shadow-lg transition">Voir mes projets</a>
        <a href="/cv-arthur-dauneau.pdf" download className="border border-white/15 px-6 py-3 text-white/70 rounded-sm text-sm hover:text-[#eceaf5] hover:border-white/30 transition">Télécharger mon CV</a>
      </div>
      <div className="flex gap-6 items-center">
        <a href="https://github.com/MelioSousLo" className="text-xs text-white/40 hover:text-white transition">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/arthur-dauneau-b574323a3/" className="text-xs text-white/40 hover:text-white transition">LinkedIn ↗</a>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────


export default function Projects({ project }) {
  return (
    <section id="projets" className="px-6 md:px-20 max-w-6xl mx-auto py-24">
      <h2 className="text-xs text-white/40 uppercase tracking-widest mb-12">Projets</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {project.map(p => (
          <a key={p.title} href={p.link} className="block border border-white/10 bg-white/5 p-6 rounded hover:bg-white/10 hover:border-white/20 transition">
            <div className="flex justify-between mb-2">
              <h3 className="font-bebas text-xl text-[#d8d6e8]">{p.title}</h3>
              <span className="text-xs text-white/40">{p.year}</span>
            </div>
            <p className="text-sm text-white/60 mb-3">{p.desc}</p>
            <div className="flex gap-2 flex-wrap mb-2">
              {p.tags.map(tag => <span key={tag} className="text-xs text-white/50 border border-white/10 px-2 py-0.5 rounded">{tag}</span>)}
            </div>
            <span className="text-xs text-white/40 hover:text-white transition">Voir le projet →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
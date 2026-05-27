// ─── Skills ─────────────────────────────────────────────
import { useTranslation } from "react-i18next";

export default function Skills({ skills , skill_lvl }) {
  const { t } = useTranslation();
  return (
    <section id="competences" className="px-6 md:px-20 max-w-6xl mx-auto py-24">
      <h2 className="text-xs text-white/40 uppercase tracking-widest mb-12">{t('competences.title')}</h2>
      <div className="grid gap-12 md:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-bebas text-lg text-[#d8d6e8] mb-4">{group.category}</h3>
            <ul className="space-y-3">
              {group.items.map(item => (
                <li key={item}>
                  <div className="flex justify-between mb-1 text-sm text-white/60">
                    <span>{item}</span>
                    <span>{skill_lvl[item]}%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded">
                    <div className="h-1 bg-gradient-to-r from-purple-400 to-indigo-200 rounded" style={{ width: `${skill_lvl[item]}%` }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
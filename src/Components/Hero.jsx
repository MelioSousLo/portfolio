// ─── Hero ─────────────────────────────────────────────
import { useTranslation } from "react-i18next";

export default function Hero({ onShoot }) {
  const { t } = useTranslation();
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-6xl mx-auto pt-16">
      <p className="text-xs text-white/40 uppercase tracking-widest mb-4">{t('hero.subtitle')}</p>
      <h1 className="font-bebas text-[clamp(3rem,10vw,6rem)] text-[#eceaf5] leading-tight mb-6">{t('hero.title1')}<br />{t('hero.title2')}</h1>
      <p className="text-sm text-white/60 max-w-lg mb-8">{t('hero.description')}</p>
      <div className="flex flex-wrap gap-4 mb-6">
        <a href="#projets" className="bg-[#eceaf5] text-[#08090f] px-6 py-3 rounded-sm font-semibold text-sm hover:shadow-lg transition">{t('hero.projects_btn')}</a>
        <a href="/cv-arthur-dauneau.pdf" download className="border border-white/15 px-6 py-3 text-white/70 rounded-sm text-sm hover:text-[#eceaf5] hover:border-white/30 transition">{t('hero.cv_btn')}</a>
      </div>
      <div className="flex gap-6 items-center">
        <a href="https://github.com/MelioSousLo" className="text-xs text-white/40 hover:text-white transition">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/arthur-dauneau-b574323a3/" className="text-xs text-white/40 hover:text-white transition">LinkedIn ↗</a>
      </div>
    </section>
  );
}

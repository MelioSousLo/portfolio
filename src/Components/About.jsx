import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="px-6 md:px-20 max-w-6xl mx-auto py-24 space-y-6">
      <h2 className="text-xs text-white/40 uppercase tracking-widest mb-12">{t('about.title')}</h2>

      <p>
        {t('about.p1')}
      </p>

      <p>
        {t('about.p2')}
      </p>

      <p>
        {t('about.p3')}
      </p>

      <p>
        {t('about.p4')}
      </p>
    </section>
  );
}
// Expérience
import { useTranslation } from "react-i18next";

export default function Experiences({experiences}) {
  const { t } = useTranslation();

    return (
    <section id="experiences" className="px-6 md:px-20 max-w-6xl mx-auto py-24">
        <h2 className="text-xs text-white/40 uppercase tracking-widest mb-12">{t('experiences.title')}</h2>
        <div className="space-y-12">
        {experiences.map(exp => (
            <div key={exp.org} className="grid md:grid-cols-[150px_1fr] gap-6">
            <p className="text-xs text-white/40">{exp.period}</p>
            <div>
                <h3 className="font-bebas text-lg text-[#d8d6e8] mb-1">{exp.org}</h3>
                <p className="text-sm text-white/50 mb-2">{exp.role}</p>
                <p className="text-sm text-white/60">{t(`experiences.${exp.descKey}`)}</p>
            </div>
            </div>
        ))}
        </div>
    </section>
    );
}
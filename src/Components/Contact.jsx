// ─── Contact ─────────────────────────────────────────────
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
        alert(t('contact.required'));
        return;
    }
    setLoading(true);
    emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setSent(true);
    })
    .catch(() => {
      alert(t('contact.error'));
    })
    .finally(() => {
      setLoading(false);
    });
  };

    return (
    <section id="contact" className="px-6 md:px-20 max-w-6xl mx-auto py-24">
    <h2 className="text-xs text-white/40 uppercase tracking-widest mb-12">{t('contact.title')}</h2>
    {sent ? (
        <div className="p-6 border border-white/10 bg-white/5 rounded text-center">
        <h3 className="font-bebas text-2xl text-[#d8d6e8] mb-2">{t('contact.success_title')}</h3>
        <p className="text-sm text-white/50">{t('contact.success_msg')}</p>
        </div>
    ) : (
        <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
            <h3 className="font-bebas text-2xl text-[#eceaf5] mb-2">{t('contact.heading')}</h3>
            <p className="text-sm text-white/60">{t('contact.description')}</p>
        </div>
        <div className="space-y-4">
            <input type="text" placeholder={t('contact.name')} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full p-3 bg-white/5 border border-white/10 rounded text-white/70 text-sm focus:border-white/30 outline-none" />
            <input type="email" placeholder={t('contact.email')} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full p-3 bg-white/5 border border-white/10 rounded text-white/70 text-sm focus:border-white/30 outline-none" />
            <textarea rows={5} placeholder={t('contact.message')} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full p-3 bg-white/5 border border-white/10 rounded text-white/70 text-sm focus:border-white/30 outline-none" />
            <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-[#eceaf5] text-[#08090f] px-6 py-3 rounded-sm font-semibold text-sm hover:shadow-lg transition disabled:opacity-50"
                >
                {loading ? t('contact.sending') : t('contact.send')}
            </button>
        </div>
        </div>
    )}
    </section>
    );
    }
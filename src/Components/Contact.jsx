// ─── Contact ─────────────────────────────────────────────
import { useState } from "react";

export default function Contact() {
    

    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    return (
    <section id="contact" className="px-6 md:px-20 max-w-6xl mx-auto py-24">
    <h2 className="text-xs text-white/40 uppercase tracking-widest mb-12">Contact</h2>
    {sent ? (
        <div className="p-6 border border-white/10 bg-white/5 rounded text-center">
        <h3 className="font-bebas text-2xl text-[#d8d6e8] mb-2">Message envoyé</h3>
        <p className="text-sm text-white/50">Je te répondrai dès que possible.</p>
        </div>
    ) : (
        <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
            <h3 className="font-bebas text-2xl text-[#eceaf5] mb-2">Travaillons ensemble</h3>
            <p className="text-sm text-white/60">Tu veux me proposer un projet ou simplement échanger ? N'hésite pas à m'écrire.</p>
        </div>
        <div className="space-y-4">
            <input type="text" placeholder="Ton nom" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full p-3 bg-white/5 border border-white/10 rounded text-white/70 text-sm focus:border-white/30 outline-none" />
            <input type="email" placeholder="Ton email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full p-3 bg-white/5 border border-white/10 rounded text-white/70 text-sm focus:border-white/30 outline-none" />
            <textarea rows={5} placeholder="Ton message..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full p-3 bg-white/5 border border-white/10 rounded text-white/70 text-sm focus:border-white/30 outline-none" />
            <button onClick={() => setSent(true)} className="w-full bg-[#eceaf5] text-[#08090f] px-6 py-3 rounded-sm font-semibold text-sm hover:shadow-lg transition">Envoyer le message</button>
        </div>
        </div>
    )}
    </section>
    );
    }
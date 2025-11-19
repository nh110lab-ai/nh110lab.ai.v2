"use client";

import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HomePage() {
  const { scrollYProgress } = useScroll();

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">

      {/* ─────────────────────────────── */}
      {/* TOP PROGRESS BAR */}
      {/* ─────────────────────────────── */}
      <motion.div
        style={{ width: progressWidth }}
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 z-[100]"
      />

      {/* ─────────────────────────────── */}
      {/* NAVBAR */}
      {/* ─────────────────────────────── */}
      <header className="sticky top-0 backdrop-blur-xl border-b border-slate-200/60 bg-white/80 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-400 to-violet-500 shadow-lg shadow-blue-300/40" />
            <div className="leading-tight">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase">
                NH110LAB.AI
              </p>
              <p className="text-[10px] text-slate-500 tracking-[0.18em] uppercase">
                Intelligence & systems
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm">
            {[
              ["Vision", "#vision"],
              ["Produits IA", "#produits"],
              ["Architecture", "#archi"],
              ["Cas Clients", "#cas"],
              ["Offres", "#offres"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ─────────────────────────────── */}
      {/* HERO — OPENAI A3 STYLE */}
      {/* ─────────────────────────────── */}
      <section
        id="vision"
        className="relative overflow-hidden border-b border-slate-200/60"
      >
        {/* subtle sci-fi gradients */}
        <motion.div
          className="absolute inset-0 opacity-[0.5]"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(56,189,248,0.22), transparent 60%), radial-gradient(circle at 80% 60%, rgba(139,92,246,0.22), transparent 60%), #ffffff",
              "radial-gradient(circle at 30% 25%, rgba(139,92,246,0.25), transparent 60%), radial-gradient(circle at 75% 70%, rgba(56,189,248,0.25), transparent 60%), #ffffff",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-28">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-semibold leading-tight max-w-3xl"
          >
            Un système IA{" "}
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              clair, puissant et évolutif
            </span>
            , conçu pour ressembler à une grande structure — même si vous êtes une équipe de 1 à 5.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-slate-600 max-w-xl text-lg"
          >
            Une architecture IA propre, modulaire, contrôlée : front premium, agents disciplinés,
            workflows fiables, perception haut de gamme. Sans bullshit, sans bazar.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <a
              href="#offres"
              className="rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-semibold hover:bg-slate-700 transition-all shadow-xl"
            >
              Voir les offres
            </a>
            <a
              href="#cas"
              className="rounded-full px-6 py-3 text-sm font-semibold bg-white border border-slate-200 hover:border-slate-400 transition"
            >
              Cas clients →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────── */}
      {/* SECTION — PRODUITS IA */}
      {/* ─────────────────────────────── */}
      <section id="produits" className="py-24 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            produits ia
          </p>
          <h2 className="mt-2 text-3xl font-semibold max-w-2xl">
            Des briques IA sérieuses, scalables et interconnectées.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Agent qualification",
                text: "Filtre, résume, classe les demandes — ton maîtrisé, actions propres.",
              },
              {
                title: "Agent support",
                text: "Répond, prépare, escalade quand nécessaire. Pas de freestyle.",
              },
              {
                title: "Agent ops & automatisation",
                text: "Relances, CRM, documents, signaux — tout ce qui fait gagner du temps.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-slate-600 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── */}
      {/* ARCHITECTURE — STYLE OPENAI */}
      {/* ─────────────────────────────── */}
      <section id="archi" className="py-24 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            architecture système
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl font-semibold">
            Une architecture claire : front → IA → automatisation → monitoring.
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              ["Frontend premium", "Interface propre, rapide, crédible."],
              ["IA structurée", "Prompts + règles + garde-fous, testable."],
              ["Workflows", "Actions réelles : CRM, docs, messages."],
              ["Monitoring", "Contrôle, logs, escalade propre."],
            ].map(([title, text]) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="font-semibold">{title}</p>
                <p className="text-sm text-slate-600 mt-2">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── */}
      {/* CAS CLIENTS */}
      {/* ─────────────────────────────── */}
      <section id="cas" className="py-24 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            cas clients
          </p>
          <h2 className="mt-2 text-3xl font-semibold max-w-3xl">
            Des systèmes IA concrets qui créent immédiatement une perception très pro.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              ["Créateurs", "Qualification, DM, deals structurés en un seul OS."],
              ["E-commerce", "Support IA, suivi colis, réponses propres."],
              ["Restaurants / lieux", "Réservations, no-show, centralisation."],
            ].map(([label, text]) => (
              <motion.div
                key={label}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                  {label}
                </p>
                <p className="mt-4 text-slate-700 text-sm">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── */}
      {/* OFFRES */}
      {/* ─────────────────────────────── */}
      <section id="offres" className="py-24 border-b border-slate-200/60">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            offres
          </p>
          <h2 className="mt-2 text-3xl font-semibold max-w-2xl">
            Un pilote IA sérieux. Un mode run pour continuer à scaler.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <h3 className="text-lg font-semibold">Pilote IA</h3>
              <p className="text-blue-500 mt-1 text-sm">1 500 – 3 500 €</p>
              <ul className="text-slate-600 mt-4 space-y-2 text-sm">
                <li>• Cas d’usage prioritaire</li>
                <li>• Prototype vrai, testé par vos clients</li>
                <li>• Connexions claires aux outils critiques</li>
                <li>• Documentation & transfert</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <h3 className="text-lg font-semibold">Mode run</h3>
              <p className="text-violet-500 mt-1 text-sm">Sur mesure</p>
              <ul className="text-slate-600 mt-4 space-y-2 text-sm">
                <li>• Nouveaux cas d’usage progressifs</li>
                <li>• Optimisation continue</li>
                <li>• Suivi métriques & qualité</li>
                <li>• Support prioritaire structuré</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── */}
      {/* CONTACT */}
      {/* ─────────────────────────────── */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            contact
          </p>
          <h2 className="mt-2 text-3xl font-semibold">
            Décrivez votre contexte. Je conçois le système autour.
          </h2>

          <form className="mt-10 space-y-6 text-sm">
            <div>
              <label className="text-slate-600 text-xs">Nom / structure</label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-800"
                placeholder="Votre nom / structure"
              />
            </div>

            <div>
              <label className="text-slate-600 text-xs">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-800"
                placeholder="vous@entreprise.com"
              />
            </div>

            <div>
              <label className="text-slate-600 text-xs">Votre situation</label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-800"
                placeholder="Ce qui prend du temps, votre ton, les résultats attendus…"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-semibold hover:bg-slate-700 transition shadow-lg"
            >
              Envoyer
            </button>
          </form>

          <p className="mt-6 text-[11px] text-slate-500">Réponse sous 24–48h.</p>
        </div>
      </section>
    </div>
  );
}

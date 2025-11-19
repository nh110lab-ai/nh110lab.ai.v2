"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const PROJECT_TYPES = [
  { id: "site_light", label: "Site + IA légère", base: 2000 },
  { id: "agent", label: "Agent IA dédié", base: 2500 },
  { id: "auto", label: "Automatisation", base: 1800 },
  { id: "mix", label: "Mix complet", base: 3200 },
];

const DELAYS = [
  { id: "rush", label: "Le plus vite possible", multiplier: 1.2 },
  { id: "normal", label: "2–4 semaines", multiplier: 1 },
  { id: "flex", label: "Flexible", multiplier: 0.9 },
];

export function DevisExpress() {
  const [projectType, setProjectType] = useState("site_light");
  const [delay, setDelay] = useState("normal");

  const estimation = useMemo(() => {
    const p = PROJECT_TYPES.find((p) => p.id === projectType)!;
    const d = DELAYS.find((d) => d.id === delay)!;
    return Math.round((p.base * d.multiplier) / 10) * 10;
  }, [projectType, delay]);

  return (
    <section
      id="devis"
      className="py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-2xl"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Devis express
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mt-1">
                Obtiens une estimation réaliste en quelques secondes.
              </h2>
              <p className="text-sm text-slate-400 mt-2 max-w-xl">
                Choisis ton type de projet et ton timing. Je te renvoie ensuite une proposition claire et actionnable.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-xs text-emerald-300 bg-emerald-300/10 border border-emerald-300/30 px-3 py-1 rounded-full">
              ⚡ï¸ Réponse détaillée sous 24–48h
            </span>
          </div>

          <div className="space-y-3 mb-6">
            <p className="text-xs font-medium text-slate-300 uppercase tracking-[0.15em]">
              1 · Type de projet
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROJECT_TYPES.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setProjectType(p.id)}
                  className={
                    "text-left px-4 py-3 rounded-2xl border text-sm transition-all bg-white/0 hover:bg-white/5" +
                    (projectType === p.id
                      ? " border-white/60 bg-white/10 shadow-lg shadow-black/40"
                      : " border-white/10")
                  }
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-50">{p.label}</span>
                    <span className="text-xs text-slate-400">
                      ~ {p.base.toLocaleString('fr-FR')} €
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <p className="text-xs font-medium text-slate-300 uppercase tracking-[0.15em]">
              2 · Délai souhaité
            </p>
            <div className="flex flex-wrap gap-2">
              {DELAYS.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setDelay(d.id)}
                  className={
                    "px-4 py-2 rounded-full border text-xs md:text-sm transition-all" +
                    (delay === d.id
                      ? " border-white/60 bg-white/10 shadow-lg shadow-black/40"
                      : " border-white/10 bg-white/0 hover:bg-white/5")
                  }
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <motion.div
              key={estimation}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-xs text-slate-400 uppercase tracking-[0.15em]">
                Estimation
              </p>
              <p className="text-3xl md:text-4xl font-semibold text-white mt-1">
                ~ {estimation.toLocaleString('fr-FR')} €
              </p>
              <p className="text-sm text-slate-400 mt-1 max-w-md">
                Montant indicatif pour un pilote IA concret, ajusté selon tes cas d’usage et tes outils actuels.
              </p>
            </motion.div>

            <div className="flex flex-col gap-2 md:items-end">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-slate-950 text-sm font-medium shadow-lg shadow-black/40 hover:shadow-black/60 transition-shadow"
              >
                Recevoir une proposition détaillée
              </a>
              <a
                href="#contact"
                className="text-xs text-slate-300 hover:text-white"
              >
                Ou décrire un cas spécifique →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

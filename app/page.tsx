"use client";

import { motion } from "framer-motion";
import { DevisExpress } from "./components/DevisExpress";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-md bg-white/90" />
            <span className="text-sm font-semibold tracking-[0.2em] uppercase">
              NH110Lab
            </span>
          </div>
          <nav className="hidden gap-6 text-xs md:flex">
            <a href="#hero">Accueil</a>
            <a href="#build">Ce qu'on construit</a>
            <a href="#method">Méthode</a>
            <a href="#cases">Cas concrets</a>
            <a href="#devis">Devis express</a>
            <a href="#contact">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium hover:bg-white hover:text-slate-950"
          >
            Parler d'un projet
          </a>
        </div>
      </header>

      <section id="hero" className="relative overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#22d3ee22,_transparent_60%),radial-gradient(circle_at_bottom,_#0ea5e922,_transparent_60%)]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-xl"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Labo d'IA appliquée
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Le labo qui transforme tes idées
              <br />
              en agents IA opérationnels.
            </h1>
            <p className="mt-4 text-sm text-slate-300 md:text-base">
              NH110Lab conçoit, teste et déploie des agents IA sur mesure pour tes équipes,
              tes clients et tes process.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40"
              >
                Parler d'un projet
              </a>
              <a href="#devis" className="text-xs text-slate-200 hover:text-white">
                Devis express →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <DevisExpress />

      <section id="contact" className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Contact
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Tu as un cas d'usage en tête ?
          </h2>

          <form className="mt-8 space-y-4">
            <div>
              <input
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none"
                placeholder="Nom"
              />
            </div>
            <div>
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none"
                placeholder="Email"
              />
            </div>
            <div>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none"
                placeholder="Décris ton besoin IA"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40"
            >
              Envoyer ma demande
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

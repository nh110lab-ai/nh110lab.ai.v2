"use client";

import { motion } from "framer-motion";
import { DevisExpress } from "./components/DevisExpress";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const sectionTransition = { duration: 0.6, ease: "easeOut" };

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function SectionTitle({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "text-center max-w-2xl mx-auto"
          : "text-left max-w-3xl"
      }
    >
      <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold md:text-3xl text-slate-50">
        {title}
      </h2>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* BACKGROUND GLOBAL ANIMÉ */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* blobs */}
        <motion.div
          className="absolute -top-32 -left-40 h-[420px] w-[420px] rounded-full bg-sky-500/25 blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-32 h-[420px] w-[420px] rounded-full bg-emerald-400/20 blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* grille */}
        <div className="absolute inset-0 opacity-[0.22] [background-image:radial-gradient(circle_at_1px_1px,#1f293780,transparent_0)] [background-size:22px_22px]" />
        {/* halo central */}
        <div className="absolute inset-x-0 top-32 h-72 bg-radial from-sky-500/25 via-transparent to-transparent blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 rounded-2xl bg-gradient-to-br from-sky-400 via-emerald-300 to-violet-400">
              <motion.div
                className="absolute inset-0 rounded-2xl bg-black/40"
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-slate-100">
                NH110LAB.AI
              </span>
              <span className="text-[10px] text-slate-400">
                Studio IA & automatisation pour petites structures ambitieuses
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-[11px] md:flex">
            <a href="#hero" className="hover:text-slate-200">
              Vision
            </a>
            <a href="#system" className="hover:text-slate-200">
              Système
            </a>
            <a href="#roadmap" className="hover:text-slate-200">
              Méthode
            </a>
            <a href="#cas-clients" className="hover:text-slate-200">
              Cas clients
            </a>
            <a href="#usage" className="hover:text-slate-200">
              Cas d&apos;usage
            </a>
            <a href="#offres" className="hover:text-slate-200">
              Offres
            </a>
            <a href="#faq" className="hover:text-slate-200">
              FAQ
            </a>
          </nav>

          <a
            href="#devis"
            className="rounded-full border border-white/20 bg-white text-[11px] font-medium text-slate-950 px-3 py-1.5 hover:bg-slate-900 hover:text-slate-50 hover:border-white/40 transition-colors"
          >
            Devis express
          </a>
        </div>

        {/* barre de statut (bandeau) */}
        <div className="border-t border-white/10 bg-slate-900/80">
          <div className="mx-auto flex max-w-6xl items-center gap-4 overflow-hidden px-4 py-2 text-[10px] text-slate-300">
            <span className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-2 py-0.5 text-[9px] text-emerald-100">
              Ouvert à 3 nouveaux projets Q1
            </span>
            <div className="relative flex-1 overflow-hidden">
              <motion.div
                className="flex gap-8 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span>⚡ Pilotes IA livrés en 2–4 semaines</span>
                <span>🤖 Agents IA sur votre ton & vos règles</span>
                <span>🔁 Workflows reliés à vos outils existants</span>
                <span>📊 Vision claire de ce que l&apos;IA fait… et ne fait pas</span>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative border-b border-white/10 overflow-hidden"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-16 md:flex-row md:items-center">
          {/* Colonne texte */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-slate-300"
            >
              Studio IA & automatisation
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-[2.4rem] font-semibold leading-tight md:text-[3.1rem]"
            >
              Un système IA complet
              <span className="block bg-gradient-to-r from-sky-300 via-emerald-300 to-violet-300 bg-clip-text text-transparent">
                pour faire paraître votre structure plus grande qu&apos;elle ne
                l&apos;est.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-sm text-slate-300 md:text-[15px]"
            >
              NH110LAB.ai assemble un front ultra propre, des agents IA alignés
              à votre ton, et des automatisations bien câblées. Le résultat :
              une expérience “grosse boîte” sans perdre votre agilité.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href="#devis"
                className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/50 transition-shadow"
              >
                Devis express en ~30s
              </a>
              <a
                href="#cas-clients"
                className="text-xs text-slate-200 hover:text-white"
              >
                Voir des systèmes concrets →
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-6 grid max-w-md grid-cols-3 gap-3 text-[11px]"
            >
              <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.18em]">
                  Time to value
                </p>
                <p className="mt-1 text-sm text-slate-50">2–4 semaines</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.18em]">
                  Focus
                </p>
                <p className="mt-1 text-sm text-slate-50">
                  petites équipes, créateurs, TPE
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.18em]">
                  Stack
                </p>
                <p className="mt-1 text-sm text-slate-50">
                  OpenAI, Claude, n8n, Notion, Make…
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Colonne droite très animée */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative flex-1"
          >
            {/* anneau animé */}
            <motion.div
              className="pointer-events-none absolute -top-8 -right-10 h-40 w-40 rounded-full border border-sky-300/30"
              animate={{ rotate: [0, 25, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute -bottom-10 -left-8 h-36 w-36 rounded-full border border-violet-300/20"
              animate={{ rotate: [0, -20, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/90 p-5 backdrop-blur-2xl shadow-[0_0_80px_rgba(56,189,248,0.35)]"
            >
              <div className="mb-4 flex items-center justify-between text-[11px] text-slate-300">
                <span>NH110LAB / Operating System</span>
                <span className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-[10px] text-emerald-200">
                  Modulaire & concret
                </span>
              </div>

              <div className="grid gap-4 text-[11px] md:grid-cols-2">
                <div className="space-y-1.5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Front
                  </p>
                  <p className="text-slate-200">
                    Sites, mini-apps, back-office minimalistes pour exposer
                    l&apos;IA de façon claire & premium.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Agents IA
                  </p>
                  <p className="text-slate-200">
                    Agents spécialisés (support, sales, ops) qui respectent vos
                    règles, votre ton et vos contraintes.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 text-[11px] md:grid-cols-3">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3"
                >
                  <p className="text-slate-400">Automatisation</p>
                  <p className="mt-1 text-slate-200">
                    n8n / Make / Zapier / APIs pour relier vos outils.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3"
                >
                  <p className="text-slate-400">Monitoring</p>
                  <p className="mt-1 text-slate-200">
                    Vue claire : où l&apos;IA aide, où l&apos;humain garde la main.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3"
                >
                  <p className="text-slate-400">Évolutif</p>
                  <p className="mt-1 text-slate-200">
                    On commence petit, on élargit cas d&apos;usage par cas d&apos;usage.
                  </p>
                </motion.div>
              </div>

              {/* bande du bas */}
              <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/10 pt-3 text-[10px] text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  100% aligné à votre stack existante
                </span>
                <span className="h-3 w-[1px] bg-slate-600/60 hidden sm:block" />
                <span>Pas de bullshit IA, uniquement des cas d&apos;usage concrets.</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION : BANDE TRUST / PROFILS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={sectionTransition}
        className="border-b border-white/10 bg-slate-950/70"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-slate-300 max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Pensé pour
            </p>
            <p className="mt-2">
              Créateurs, studios, agences, TPE, boutiques en ligne, lieux
              physiques… Toute structure qui veut une présence et un système
              dignes d&apos;une “grosse boîte” sans gérer une armée d&apos;outils.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-[11px] text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              🔹 Créateurs & infopreneurs
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              🔹 Studios / agences
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              🔹 E-commerce & SaaS
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              🔹 Lieux physiques & services
            </span>
          </div>
        </div>
      </motion.section>

      {/* SYSTÈME */}
      <motion.section
        id="system"
        className="border-b border-white/10 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={sectionTransition}
      >
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            eyebrow="Architecture"
            title="Un système pensé comme une grande boîte, dimensionné pour la vôtre."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Couche front",
                desc: "Sites, mini-apps, back-office minimalistes pour exposer l'IA de façon claire et premium.",
              },
              {
                title: "Couche IA",
                desc: "Prompts structurés, mémoire, règles métier explicites et modèles ajustés à votre budget.",
              },
              {
                title: "Couche automatisation",
                desc: "Workflows reliés à vos outils (CRM, Notion, mails, messageries, fichiers, calendriers…).",
              },
            ].map((b) => (
              <motion.div
                key={b.title}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                <h3 className="text-sm font-semibold">{b.title}</h3>
                <p className="mt-2 text-xs text-slate-300">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* petite carte “stack” */}
          <div className="mt-8 grid gap-4 md:grid-cols-[1.4fr,1fr]">
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-5"
            >
              <p className="text-[11px] uppercase tracking-[0.25em] text-sky-300">
                Stack IA & tooling
              </p>
              <p className="mt-2 text-sm text-slate-50">
                On utilise des briques stables & reconnues : OpenAI, Claude,
                Gemini, n8n, Make, Notion, Airtable, Slack, etc. Pas
                d&apos;expérimentations obscures : vous gardez la main.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-200">
                <span className="rounded-full border border-white/10 px-3 py-1">
                  OpenAI / Claude
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  n8n / Make / Zapier
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Notion / Airtable
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Slack / Discord / e-mail
                </span>
              </div>
            </motion.div>

            <div className="space-y-2 text-[11px] text-slate-300">
              <p>🎯 Objectif : un système utile dès le pilote, pas une démo.</p>
              <p>
                🧩 On part de vos outils actuels, on ajoute les briques IA & les
                automatismes nécessaires.
              </p>
              <p>
                🧱 Le tout documenté proprement pour que vous puissiez le faire
                vivre.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* MÉTHODE / ROADMAP */}
      <motion.section
        id="roadmap"
        className="border-b border-white/10 py-16 bg-slate-950/80"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={sectionTransition}
      >
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            eyebrow="Méthode"
            title="Un process simple, sans jargon, pour passer de “idée floue” à système IA concret."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-4 text-xs">
            {[
              {
                step: "01",
                title: "Contexte & friction",
                text: "On clarifie où vous perdez du temps, ce qui vous énerve, ce que vous aimeriez déléguer au système.",
              },
              {
                step: "02",
                title: "Design du système",
                text: "On découpe en briques IA + automatisation + front, avec un pilote hyper ciblé.",
              },
              {
                step: "03",
                title: "Construction & tests",
                text: "On connecte les outils, on câble les prompts, on teste en réel sur un périmètre limité.",
              },
              {
                step: "04",
                title: "Run & évolutions",
                text: "On observe, on ajuste, on ajoute des cas d’usage si le système délivre de la valeur.",
              },
            ].map((s) => (
              <motion.div
                key={s.step}
                whileHover={{ y: -4, scale: 1.01 }}
                className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div>
                  <p className="text-[10px] font-mono text-slate-500">
                    Étape {s.step}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">
                    {s.title}
                  </p>
                  <p className="mt-2 text-[11px] text-slate-300">{s.text}</p>
                </div>
                <div className="mt-3 h-[1px] bg-gradient-to-r from-sky-500/60 via-emerald-400/40 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* DEVIS EXPRESS */}
      <section id="devis" className="border-b border-white/10">
        <DevisExpress />
      </section>

      {/* CAS CLIENTS */}
      <motion.section
        id="cas-clients"
        className="border-b border-white/10 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={sectionTransition}
      >
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            eyebrow="Cas clients (anonymisés)"
            title="Des contextes très différents, une même logique : temps gagné & image renforcée."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3 text-xs">
            {[
              {
                label: "Créateur / infopreneur",
                text: "Tri des DM, préparation de réponses pour les marques, suivi des deals dans un pipeline ultra simple.",
                impact:
                  "Moins de charge mentale, plus de réactivité avec les sponsors.",
              },
              {
                label: "Boutique en ligne",
                text: "Support client IA pour les questions simples, suivi colis automatisé, escalade des cas sensibles vers l’humain.",
                impact:
                  "Moins de tickets répétitifs, meilleure satisfaction, équipe concentrée sur les cas à enjeu.",
              },
              {
                label: "Restaurant / lieu physique",
                text: "Agent de réservation connecté aux messageries & Google, centralisation des demandes, relances automatiques.",
                impact:
                  "Réduction des no-show, expérience plus fluide côté client & équipe.",
              },
            ].map((c) => (
              <motion.div
                key={c.label}
                whileHover={{ y: -4, scale: 1.01 }}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    {c.label}
                  </p>
                  <p className="mt-3 text-slate-100">{c.text}</p>
                </div>
                <p className="mt-4 text-[11px] text-slate-400">{c.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CAS D'USAGE */}
      <motion.section
        id="usage"
        className="border-b border-white/10 py-16 bg-slate-950/85"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={sectionTransition}
      >
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            eyebrow="Cas d’usage typiques"
            title="Des briques IA & automation qui se branchent sur votre réalité."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 text-xs">
            {[
              {
                title: "Avant-vente & qualification",
                items: [
                  "Agent IA sur votre site / Notion pour filtrer les leads.",
                  "Synthèse automatique des demandes entrantes.",
                  "Suggestions de next-step (call, doc, offre).",
                ],
              },
              {
                title: "Support & back-office",
                items: [
                  "Réponses IA aux questions récurrentes (FAQ, procédures).",
                  "Préparation de brouillons d’e-mails pour votre équipe.",
                  "Routage vers la bonne personne quand c’est sensible.",
                ],
              },
              {
                title: "Ops & automatisation",
                items: [
                  "Mise à jour CRM à partir de mails / formulaires.",
                  "Relances intelligentes sur les demandes dormantes.",
                  "Alertes sur les signaux faibles importants.",
                ],
              },
              {
                title: "Image & perception",
                items: [
                  "Front minimaliste & rapide qui inspire confiance.",
                  "Messages cohérents, ton maîtrisé sur tous les canaux.",
                  "Impression de “grosse boîte” sans l’usine à gaz.",
                ],
              },
            ].map((u) => (
              <motion.div
                key={u.title}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  {u.title}
                </h3>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  {u.items.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* OFFRES */}
      <motion.section
        id="offres"
        className="border-b border-white/10 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={sectionTransition}
      >
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            eyebrow="Offres"
            title="Un pilote clair pour tester, un mode run pour faire mûrir le système."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 text-xs">
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] p-5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              <h3 className="text-sm font-semibold text-slate-50">
                Pilote IA complet
              </h3>
              <p className="mt-2 text-sm text-sky-300">1 500 – 3 500 €</p>
              <ul className="mt-3 space-y-1.5 text-slate-300">
                <li>• 1–2 cas d’usage ciblés</li>
                <li>• Prototype IA + front livrable & testable</li>
                <li>• Connexion aux outils critiques</li>
                <li>• Session de prise en main</li>
              </ul>
              <a
                href="#contact"
                className="mt-4 inline-flex text-xs text-slate-200 hover:text-white"
              >
                Démarrer un pilote →
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] p-5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              <h3 className="text-sm font-semibold text-slate-50">
                Run & évolutions
              </h3>
              <p className="mt-2 text-sm text-emerald-300">Sur mesure</p>
              <ul className="mt-3 space-y-1.5 text-slate-300">
                <li>• Ajout progressif de nouveaux cas d’usage</li>
                <li>• Optimisation continue des prompts & flux</li>
                <li>• Suivi des métriques & ajustements</li>
                <li>• Support prioritaire</li>
              </ul>
              <a
                href="#contact"
                className="mt-4 inline-flex text-xs text-slate-200 hover:text-white"
              >
                Construire un mode run →
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        id="faq"
        className="border-b border-white/10 py-16 bg-slate-950/80"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={sectionTransition}
      >
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle
            eyebrow="FAQ"
            title="Quelques réponses rapides avant de m’écrire."
            align="center"
          />

          <div className="mt-8 space-y-4 text-sm text-slate-200">
            {[
              {
                q: "Combien de temps pour avoir quelque chose de concret ?",
                a: "En général 2 à 4 semaines pour un pilote clair, utilisable en réel par vos équipes ou vos clients.",
              },
              {
                q: "Est-ce réservé aux “grosses boîtes” ?",
                a: "Non. Le studio est pensé pour les indépendants, TPE, studios, petites équipes qui veulent un niveau de système digne d’une structure plus grosse.",
              },
              {
                q: "Est-ce que je garde la main sur la stack ?",
                a: "Oui. Vous gardez les accès, la doc, la structure. Vous pouvez continuer seul ou en mode run ensemble.",
              },
              {
                q: "Comment se passe le premier contact ?",
                a: "Vous m’envoyez un contexte via le formulaire. On cale un call de 30 minutes, puis je reviens avec un plan et un chiffrage simple.",
              },
            ].map((item) => (
              <motion.div
                key={item.q}
                whileHover={{ y: -2 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
              >
                <p className="font-medium">{item.q}</p>
                <p className="mt-2 text-xs text-slate-300">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={sectionTransition}
      >
        <div className="mx-auto max-w-3xl px-4">
          <SectionTitle
            eyebrow="Contact & brief"
            title="Décrivez votre contexte en quelques lignes, je m’occupe du reste."
            align="center"
          />
          <p className="mt-3 text-center text-sm text-slate-300">
            Qui vous êtes, ce qui vous prend du temps, ce que vous voudriez
            déléguer à un système IA bien pensé. Pas besoin d’être “tech”.
          </p>

          <form className="mt-8 space-y-4">
            <div>
              <label className="text-xs text-slate-300">
                Nom / structure
              </label>
              <input
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-white/40"
                placeholder="Votre nom et/ou celui de votre structure"
              />
            </div>
            <div>
              <label className="text-xs text-slate-300">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-white/40"
                placeholder="vous@entreprise.com"
              />
            </div>
            <div>
              <label className="text-xs text-slate-300">
                Votre situation actuelle
              </label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-white/40"
                placeholder="Quels canaux ? (site, Insta, mails…) Qu'est-ce qui vous prend le plus de temps ? Quel serait un résultat “wouah” pour vous ?"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/50"
            >
              Envoyer
            </button>
          </form>

          <p className="mt-4 text-center text-[11px] text-slate-500">
            Réponse sous 24–48h. Pas de séquence automatique, pas de spam.
          </p>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-[11px] text-slate-500">
            <p>NH110LAB.ai — Studio IA & automatisation premium.</p>
            <p className="mt-2">
              © {new Date().getFullYear()} NH110LAB.ai — Tous droits réservés.
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

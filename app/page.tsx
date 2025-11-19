"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DevisExpress } from "./components/DevisExpress";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const sectionTransition = { duration: 0.6, ease: "easeOut" };

export default function HomePage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [introDone, setIntroDone] = useState(false);

  // Intro animée
  useEffect(() => {
    const timer = setTimeout(() => setIntroDone(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Auto light / dark + scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const current = doc.scrollTop;
      const progress = total > 0 ? current / total : 0;
      setScrollProgress(progress);

      const y = window.scrollY;
      const h = window.innerHeight;

      // découpes plus fines pour varier le thème
      if (y < h * 0.7) {
        setTheme("dark");
      } else if (y < h * 1.7) {
        setTheme("light");
      } else if (y < h * 2.8) {
        setTheme("dark");
      } else if (y < h * 3.8) {
        setTheme("light");
      } else if (y < h * 5) {
        setTheme("dark");
      } else {
        setTheme("dark");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-700 ${
        isDark ? "bg-slate-950 text-slate-50" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Background plasma 2025 */}
      <BackgroundPlasma />

      {/* Intro OS */}
      <AnimatePresence>
        {!introDone && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950 text-slate-50"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut", delay: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center gap-4"
            >
              <div className="relative flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 via-sky-400 to-amber-300">
                  <motion.div
                    className="h-full w-full bg-[radial-gradient(circle_at_30%_0,rgba(255,255,255,0.55)_0,transparent_52%)]"
                    animate={{ rotate: [0, 18, -14, 0] }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[11px] font-semibold tracking-[0.26em] uppercase">
                    NH110LAB.AI
                  </span>
                  <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-slate-400">
                    Studio IA &amp; automatisation
                  </span>
                </div>
              </div>
              <motion.div
                className="h-0.5 w-40 overflow-hidden rounded-full bg-slate-800"
                animate={{ width: ["2rem", "12rem", "8rem"] }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <div className="h-full w-full bg-gradient-to-r from-pink-400 via-sky-400 to-amber-300" />
              </motion.div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                Booting IA Studio Operating System…
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-1 bg-transparent">
        <div
          className="h-full origin-left bg-gradient-to-r from-pink-500 via-sky-400 to-amber-300 transition-transform duration-150"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-700 ${
          isDark
            ? "border-white/10 bg-slate-950/80 text-slate-100"
            : "border-slate-200/70 bg-white/85 text-slate-900"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 via-sky-400 to-amber-300 shadow-[0_0_18px_rgba(251,113,133,0.45)]">
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0,rgba(255,255,255,0.5)_0,transparent_55%)]"
                animate={{ rotate: [0, 10, -8, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[11px] font-semibold tracking-[0.26em] uppercase">
                NH110LAB.AI
              </span>
              <span className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Studio IA &amp; systèmes créatifs
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-[11px] md:flex">
            {[
              ["Vision", "#hero"],
              ["Système", "#system"],
              ["Cas clients", "#cases"],
              ["Cas d’usage", "#usage"],
              ["Impact", "#impact"],
              ["Offres", "#offres"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={`transition-colors ${
                  isDark
                    ? "text-slate-300 hover:text-slate-50"
                    : "text-slate-700 hover:text-slate-950"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-1 rounded-full border border-white/15 bg-black/20 px-2 py-1 text-[10px] md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
              <span>{isDark ? "Mode Deep" : "Mode Clear"}</span>
            </div>
            <a
              href="#contact"
              className={`hidden rounded-full px-3.5 py-1.5 text-[11px] font-medium transition-all md:inline-flex ${
                isDark
                  ? "border border-white/20 bg-white/10 text-slate-50 hover:bg-white hover:text-slate-950"
                  : "border border-slate-900/10 bg-slate-900 text-slate-50 hover:bg-slate-700"
              }`}
            >
              Démarrer un projet
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO */}
        <section
          id="hero"
          className="relative overflow-hidden border-b border-white/10"
        >
          <motion.div
            className="pointer-events-none absolute -left-20 top-24 h-48 w-48 rounded-full bg-pink-500/25 blur-3xl"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-sky-400/25 blur-3xl"
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-4 pb-20 pt-16 md:flex-row md:items-center md:pt-24">
            {/* Colonne texte */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-xl"
            >
              <motion.p
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-slate-200"
              >
                Studio IA &amp; automation produit
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-5 text-[2.5rem] font-semibold leading-tight md:text-[3.2rem]"
              >
                Un{" "}
                <span className="bg-gradient-to-r from-pink-300 via-sky-300 to-amber-200 bg-clip-text text-transparent">
                  système IA vivant
                </span>{" "}
                qui donne l’impression d’une grosse structure, même si vous êtes
                une petite équipe.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-sm text-slate-300 md:text-[15px]"
              >
                NH110LAB.ai conçoit un OS sur mesure : front ultra lisible,
                agents IA disciplinés et automatisations propres. But final :
                que chaque contact avec votre marque déclenche un{" "}
                <span className="font-semibold text-pink-300">« ok, c’est extrêmement carré ».</span>
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#devis"
                  className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-pink-500/35 transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-pink-400/60"
                >
                  Devis express en 30s
                </a>
                <a
                  href="#cases"
                  className="text-xs text-slate-200 hover:text-white"
                >
                  Voir des systèmes en situation →
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-6 flex flex-wrap gap-2 text-[11px] text-slate-200"
              >
                <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1">
                  ⚡ Pilote IA en 2–4 semaines
                </span>
                <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1">
                  🤖 Agents IA sales, support &amp; ops
                </span>
                <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1">
                  🧠 Système documenté, pas boîte noire
                </span>
              </motion.div>
            </motion.div>

            {/* Colonne droite : OS créatif */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="relative flex-1"
            >
              <motion.div
                animate={{ y: [-10, 8, -10] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl border border-white/15 bg-slate-950/80 p-5 backdrop-blur-2xl shadow-[0_24px_90px_rgba(15,23,42,0.95)]"
              >
                <div className="mb-4 flex items-center justify-between text-[11px] text-slate-200">
                  <span>NH110LAB / Creative IA OS</span>
                  <span className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-[10px] text-emerald-200">
                    Modulaire &amp; concret
                  </span>
                </div>

                <div className="grid gap-4 text-[11px] md:grid-cols-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      Surface
                    </p>
                    <p className="mt-2 text-slate-200">
                      Sites &amp; mini-apps qui respirent la confiance, même
                      pour une structure de 1–3 personnes.
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      Agents IA
                    </p>
                    <p className="mt-2 text-slate-200">
                      IA encadrée par vos règles métier, votre ton et des garde-fous
                      clairs, pas un chatbot freestyle.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 text-[11px] md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-slate-300">Automatisation</p>
                    <p className="mt-1 text-slate-100">
                      Make / n8n / APIs pour relier CRM, facturation, DM, drive
                      sans transformer votre boîte en usine à gaz.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-slate-300">Monitoring</p>
                    <p className="mt-1 text-slate-100">
                      On trace ce que fait l’IA, ce qu’elle ne doit pas faire, et quand
                      remettre un humain dans la boucle.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-slate-300">Évolution</p>
                    <p className="mt-1 text-slate-100">
                      On démarre par un pilote, puis on déroule cas d’usage par cas
                      d’usage, sans brûler l’équipe.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-[1.1fr,0.9fr]">
                  <div className="space-y-3 rounded-2xl border border-white/10 bg-slate-950/85 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      Vue synthèse
                    </p>
                    <div className="space-y-2 text-[11px] text-slate-200">
                      <div className="flex items-center justify-between">
                        <span>Temps de tri manuel</span>
                        <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] text-emerald-200">
                          -40 à -60%
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Tickets gérés par l’IA</span>
                        <span className="text-sky-300">60–80%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Réponse moyenne</span>
                        <span className="text-pink-300">~ 1 minute</span>
                      </div>
                    </div>
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-2/3 bg-gradient-to-r from-pink-400 via-sky-400 to-amber-300" />
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <img
                      src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200"
                      alt="Interface IA & automatisations"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SYSTÈME */}
        <motion.section
          id="system"
          className="border-b border-white/10 bg-slate-950/90 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={sectionTransition}
        >
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
              NH110LAB / Système IA
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Pensé comme un OS de grande boîte,
              <br />
              dimensionné pour votre taille réelle.
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-4 text-xs">
              {[
                {
                  title: "Couche front",
                  desc: "Site, portail client, mini-dashboard : la surface qui donne le ton dès les 10 premières secondes.",
                },
                {
                  title: "Couche IA",
                  desc: "Prompts structurés, règles métier explicites, logs, tests d’échec, pas un simple chatbot branché à l’arrache.",
                },
                {
                  title: "Couche automatisation",
                  desc: "Orchestration des mails, CRM, DM, docs, agendas, facturation. L’IA enclenche des vraies actions.",
                },
                {
                  title: "Couche monitoring",
                  desc: "Ce que l’IA fait, ce qu’elle ne doit pas faire, quand escalader, où ça bloque. Tout est visible.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-30 bg-[radial-gradient(circle_at_0%_0%,rgba(244,114,182,0.6),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.6),transparent_55%)] transition-opacity" />
                  <h3 className="text-[0.8rem] font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.75rem] text-slate-200">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CAS CLIENTS */}
        <motion.section
          id="cases"
          className="border-b border-white/10 bg-slate-950/95 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={sectionTransition}
        >
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
              Cas clients (anonymisés)
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Trois contextes, trois systèmes IA,
              <br />
              un même objectif : image renforcée &amp; temps gagné.
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3 text-xs">
              {[
                {
                  label: "Créateur / infopreneur",
                  text: "Tri intelligent des DM, réponses préparées pour les marques, suivi des deals dans un seul OS Notion + CRM.",
                },
                {
                  label: "Boutique en ligne",
                  text: "Support IA pour les questions simples, suivi colis automatisé, escalade des cas sensibles vers l’équipe.",
                },
                {
                  label: "Lieu physique / restaurant",
                  text: "Agent de réservation connecté aux messageries & Google, centralisation et relances automatiques des no-show.",
                },
              ].map((c) => (
                <motion.div
                  key={c.label}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      {c.label}
                    </p>
                    <p className="mt-3 text-[0.8rem] text-slate-200">{c.text}</p>
                  </div>
                  <p className="mt-4 text-[11px] text-slate-500">
                    Résultat : moins de charge mentale, plus de répondant, une
                    impression de “grosse équipe” même quand ils sont 2–3.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CAS D’USAGE */}
        <motion.section
          id="usage"
          className="border-b border-white/10 bg-slate-950 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={sectionTransition}
        >
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
              Cas d’usage typiques
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Des briques concrètes, branchées sur vos outils existants.
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2 text-xs">
              {[
                {
                  title: "Avant-vente & qualification",
                  items: [
                    "Agent IA sur votre site / Notion pour filtrer les leads.",
                    "Synthèse automatique des demandes entrantes.",
                    "Suggestion de next step clair (call, doc, offre).",
                  ],
                },
                {
                  title: "Support & back-office",
                  items: [
                    "Réponses IA aux questions récurrentes (FAQ, procédures…).",
                    "Brouillons d’e-mails préparés pour votre équipe.",
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
                    "Effet “grosse boîte bien organisée” sans l’armada.",
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
                  <ul className="mt-3 space-y-1.5 text-[0.78rem] text-slate-300">
                    {u.items.map((i) => (
                      <li key={i}>• {i}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* IMPACT */}
        <motion.section
          id="impact"
          className="border-b border-white/10 bg-slate-950 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={sectionTransition}
        >
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
              Impact attendu
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Des chiffres qui ressemblent à une grosse boîte,
              <br />
              sans la lourdeur de la grosse boîte.
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-4 text-xs">
              {[
                {
                  label: "Temps gagné sur l’opérationnel",
                  value: "-30 à -60%",
                },
                {
                  label: "Tickets gérés 100% par l’IA",
                  value: "60–80%",
                },
                {
                  label: "Délai moyen de réponse",
                  value: "~ 1 min",
                },
                {
                  label: "Perception côté clients",
                  value: "“c’est devenu très, très carré”",
                },
              ].map((m) => (
                <motion.div
                  key={m.label}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-pink-400 via-sky-400 to-amber-300" />
                  <p className="text-[0.8rem] text-slate-300">{m.label}</p>
                  <p className="mt-3 text-[0.9rem] font-semibold text-slate-50">
                    {m.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* DEVIS EXPRESS */}
        <section
          id="devis"
          className="border-b border-white/10 bg-slate-950 py-16"
        >
          <div className="mx-auto max-w-6xl px-4">
            <DevisExpress />
          </div>
        </section>

        {/* OFFRES */}
        <motion.section
          id="offres"
          className="border-b border-white/10 bg-slate-950 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={sectionTransition}
        >
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
              Offres
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Un pilote IA net. Un mode run pour faire mûrir le système.
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 text-xs">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  Pilote IA complet
                </h3>
                <p className="mt-2 text-sm text-sky-300">1 500 – 3 500 €</p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>• 1–2 cas d’usage ciblés à fort levier</li>
                  <li>• Prototype IA + front testable par vos clients</li>
                  <li>• Connexion aux outils critiques (CRM, inbox, docs…)</li>
                  <li>• Session de prise en main &amp; documentation</li>
                </ul>
                <a
                  href="#contact"
                  className="mt-4 inline-flex text-xs text-slate-200 hover:text-white"
                >
                  Démarrer un pilote →
                </a>
              </motion.div>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  Run &amp; évolutions
                </h3>
                <p className="mt-2 text-sm text-emerald-300">Sur mesure</p>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>• Ajout progressif de nouveaux cas d’usage</li>
                  <li>• Optimisation continue des prompts &amp; workflows</li>
                  <li>• Suivi des métriques &amp; ajustements</li>
                  <li>• Support prioritaire pour faire grandir le système</li>
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

        {/* CONTACT */}
        <motion.section
          id="contact"
          className="bg-slate-950 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={sectionTransition}
        >
          <div className="mx-auto max-w-3xl px-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
              Contact &amp; brief
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Décrivez votre contexte. Je conçois le système IA autour.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Quelques lignes suffisent : qui vous êtes, ce qui vous prend du
              temps, ce que vous voudriez déléguer à un système IA bien pensé.
            </p>

            <form className="mt-8 space-y-4 text-sm">
              <div>
                <label className="text-xs text-slate-300">Nom / structure</label>
                <input
                  className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-white/40"
                  placeholder="Votre nom et/ou celui de votre structure"
                />
              </div>
              <div>
                <label className="text-xs text-slate-300">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-white/40"
                  placeholder="vous@entreprise.com"
                />
              </div>
              <div>
                <label className="text-xs text-slate-300">
                  Votre situation actuelle
                </label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-white/40"
                  placeholder="Canaux, frictions, tâches qui vous épuisent, idée de résultat “waouh” pour vous…"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-pink-500/35 hover:shadow-pink-400/60"
              >
                Envoyer
              </button>
            </form>

            <p className="mt-4 text-[11px] text-slate-500">
              Réponse sous 24–48h. Pas de séquence automatique, pas de spam.
            </p>

            <div className="mt-10 border-t border-white/10 pt-6 text-[11px] text-slate-500">
              <p>NH110LAB.ai — Studio IA &amp; automatisation créative.</p>
              <p className="mt-2">
                © {new Date().getFullYear()} NH110LAB.ai — Tous droits
                réservés.
              </p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

/**
 * Background plasma 2025 — gradients fluides multicolores
 */
function BackgroundPlasma() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Dégradé plasma principal */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(244,114,182,0.35), transparent 60%), radial-gradient(circle at 80% 40%, rgba(56,189,248,0.35), transparent 60%), radial-gradient(circle at 50% 85%, rgba(251,191,36,0.35), transparent 60%), #020617",
            "radial-gradient(circle at 15% 35%, rgba(56,189,248,0.35), transparent 60%), radial-gradient(circle at 85% 60%, rgba(244,114,182,0.35), transparent 60%), radial-gradient(circle at 45% 80%, rgba(253,224,71,0.35), transparent 60%), #020617",
            "radial-gradient(circle at 30% 25%, rgba(251,113,133,0.35), transparent 60%), radial-gradient(circle at 75% 70%, rgba(59,130,246,0.35), transparent 60%), radial-gradient(circle at 40% 90%, rgba(251,191,36,0.35), transparent 60%), #020617",
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbes plasma */}
      {[
        { size: 420, color: "from-pink-500/30 to-purple-500/20", x: "8%", y: "18%" },
        { size: 520, color: "from-sky-400/30 to-blue-500/20", x: "68%", y: "58%" },
        { size: 360, color: "from-amber-400/35 to-orange-500/20", x: "28%", y: "78%" },
      ].map((o, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl bg-gradient-to-br ${o.color}`}
          style={{
            width: o.size,
            height: o.size,
            left: o.x,
            top: o.y,
          }}
          animate={{
            scale: [1, 1.25, 1],
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 14 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Texture grain */}
      <motion.div
        className="absolute inset-0 opacity-[0.18] mix-blend-soft-light"
        style={{
          background:
            "url('https://grainy-gradients.vercel.app/noise.svg') repeat",
        }}
        animate={{
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

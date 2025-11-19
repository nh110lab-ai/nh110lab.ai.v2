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
      {/* ÉCRAN D’INTRO ANIMÉ */}
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
                <div className="h-10 w-10 overflow-hidden rounded-2xl bg-gradient-to-br from-sky-400 via-emerald-300 to-violet-400">
                  <motion.div
                    className="h-full w-full bg-[radial-gradient(circle_at_30%_0,rgba(255,255,255,0.5)_0,transparent_50%)]"
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
                    Studio IA & automatisation
                  </span>
                </div>
              </div>
              <motion.div
                className="h-0.5 w-40 overflow-hidden rounded-full bg-slate-800"
                animate={{ width: ["2rem", "12rem", "8rem"] }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <div className="h-full w-full bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400" />
              </motion.div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                Booting IA Operating System…
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACKGROUND GLOBAL ANIMÉ */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* couche dégradé */}
        <motion.div
          className="absolute inset-0 opacity-90"
          animate={{
            background:
              scrollProgress < 0.5
                ? [
                    "radial-gradient(circle at 0% 0%, #020617, #020617)",
                    "radial-gradient(circle at 100% 0%, #0f172a, #020617)",
                  ]
                : [
                    "radial-gradient(circle at 0% 0%, #e0f2fe, #f9fafb)",
                    "radial-gradient(circle at 100% 100%, #e5e7eb, #f9fafb)",
                  ],
          }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
        {/* grille */}
        <div className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_1px_1px,#64748b66,transparent_0)] [background-size:22px_22px]" />
        {/* halo tournant */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-[40%] border border-white/10 bg-gradient-to-br from-sky-500/18 via-transparent to-violet-500/18 blur-3xl"
          style={{ rotate: scrollProgress * 70 - 35 }}
        />
        {/* bandes diagonales */}
        <motion.div
          className="absolute inset-x-[-35%] top-[30%] h-40 bg-gradient-to-r from-sky-400/15 via-transparent to-violet-500/20 blur-3xl"
          animate={{ x: ["-8%", "10%", "-8%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* BARRE DE PROGRESSION SCROLL */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-1 bg-transparent">
        <div
          className="h-full origin-left bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400 transition-transform duration-150"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      {/* NAVBAR */}
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-700 ${
          isDark
            ? "border-white/10 bg-slate-950/80 text-slate-100"
            : "border-slate-200/70 bg-white/80 text-slate-900"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-2xl bg-gradient-to-br from-sky-400 via-emerald-300 to-violet-400">
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0,rgba(255,255,255,0.45)_0,transparent_50%)]"
                animate={{ rotate: [0, 10, -8, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[11px] font-semibold tracking-[0.26em] uppercase">
                NH110LAB.AI
              </span>
              <span className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Studio IA & automatisation produit
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-[11px] md:flex">
            {[
              ["Vision", "#hero"],
              ["Manifesto", "#manifesto"],
              ["Système", "#system"],
              ["Playbook", "#playbook"],
              ["Impact", "#impact"],
              ["Cas clients", "#cas-clients"],
              ["Cas d’usage", "#usage"],
              ["Lab", "#lab"],
              ["Stack", "#stack"],
              ["Roadmap 90j", "#roadmap"],
              ["Offres", "#offres"],
              ["FAQ", "#faq"],
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
            {/* Indicateur mode */}
            <div className="hidden items-center gap-1 rounded-full border px-2 py-1 text-[10px] md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{isDark ? "Mode Deep" : "Mode Clear"}</span>
            </div>
            <a
              href="#contact"
              className={`hidden rounded-full px-3.5 py-1.5 text-[11px] font-medium transition-all md:inline-flex ${
                isDark
                  ? "border border-white/15 bg-white/5 text-slate-50 hover:bg-white hover:text-slate-950"
                  : "border border-slate-900/10 bg-slate-900 text-slate-50 hover:bg-slate-700"
              }`}
            >
              Démarrer un projet
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section
          id="hero"
          className="relative overflow-hidden border-b border-white/10"
        >
          {/* orbites supplémentaires */}
          <motion.div
            className="pointer-events-none absolute -left-20 top-20 h-48 w-48 rounded-full bg-sky-500/25 blur-3xl"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -right-24 bottom-10 h-60 w-60 rounded-full bg-emerald-400/25 blur-3xl"
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
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-slate-300"
              >
                Studio IA & automatisation produit
                <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-300" />
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-5 text-[2.7rem] font-semibold leading-tight md:text-[3.4rem]"
              >
                Construire un{" "}
                <span className="block bg-gradient-to-r from-sky-300 via-emerald-300 to-violet-300 bg-clip-text text-transparent">
                  système IA qui fait très sérieux
                </span>{" "}
                même si vous êtes seul ou en petite équipe.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-sm text-slate-300 md:text-[15px]"
              >
                NH110LAB.ai assemble un front ultra lisible, des agents IA
                disciplinés et des automatisations propres. Objectif : que
                chaque interaction avec votre marque déclenche un{" "}
                <span className="font-semibold text-sky-300">
                  “ok, c’est carré”.
                </span>
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#devis"
                  className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-sky-500/50"
                >
                  Devis express en 30s
                </a>
                <a
                  href="#cas-clients"
                  className="text-xs text-slate-200 hover:text-white"
                >
                  Voir des systèmes en situation →
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-6 flex flex-wrap gap-2 text-[11px] text-slate-300"
              >
                <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1">
                  ⚡ Pilote IA en 2–4 semaines
                </span>
                <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1">
                  🤖 Agents IA sales, support & ops
                </span>
                <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1">
                  🔁 Workflows connectés à vos outils
                </span>
              </motion.div>

              {/* ticker */}
              <motion.div
                variants={fadeUp}
                className="mt-8 overflow-hidden rounded-full border border-white/10 bg-black/30 text-[10px] text-slate-300"
              >
                <motion.div
                  className="flex gap-10 whitespace-nowrap px-4 py-2"
                  animate={{ x: ["0%", "-50%", "0%"] }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                >
                  <span>Notion & knowledge interne</span>
                  <span>CRM & pipe commercial</span>
                  <span>Inbox & DM centralisés</span>
                  <span>Reporting temps réel</span>
                  <span>Front minimaliste mais sérieux</span>
                  <span>Agents IA qui respectent vos règles</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Colonne droite : "OS vivant" + image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="relative flex-1"
            >
              <motion.div
                animate={{ y: [-10, 8, -10] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl border border-white/12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-5 backdrop-blur-2xl shadow-[0_22px_80px_rgba(15,23,42,0.9)]"
              >
                <div className="mb-4 flex items-center justify-between text-[11px] text-slate-300">
                  <span>NH110LAB / Operating System</span>
                  <span className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-[10px] text-emerald-200">
                    Modulaire & concret
                  </span>
                </div>

                <div className="grid gap-4 text-[11px] md:grid-cols-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      Front
                    </p>
                    <p className="mt-2 text-slate-200">
                      Sites & mini-apps ultra lisibles, pensés pour inspirer
                      confiance en 5 secondes.
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      Agents IA
                    </p>
                    <p className="mt-2 text-slate-200">
                      Support, sales & back-office qui respectent votre ton, vos
                      limites et vos priorités.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 text-[11px] md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-slate-400">Automatisation</p>
                    <p className="mt-1 text-slate-200">
                      n8n / Make / Zapier / APIs pour relier CRM, facturation,
                      messaging, drive.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-slate-400">Monitoring</p>
                    <p className="mt-1 text-slate-200">
                      Où l’IA aide, où l’humain garde la main, où ça bloque.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-slate-400">Évolutif</p>
                    <p className="mt-1 text-slate-200">
                      On part d’un pilote clair puis on déploie cas d’usage par
                      cas d’usage.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-[1.1fr,0.9fr]">
                  <div className="space-y-3 rounded-2xl border border-white/10 bg-slate-900/80 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      Vue d’ensemble
                    </p>
                    <div className="space-y-2 text-[11px] text-slate-200">
                      <div className="flex items-center justify-between">
                        <span>Leads triés par l’IA</span>
                        <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] text-emerald-200">
                          -63% de tri manuel
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Tickets support auto-traités</span>
                        <span className="text-emerald-300">72%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Temps moyen de réponse</span>
                        <span className="text-sky-300">~ 1 min</span>
                      </div>
                    </div>
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-3/4 bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400" />
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

              {/* orbes flottants */}
              <motion.div
                className="pointer-events-none absolute -right-4 -top-6 h-16 w-16 rounded-full border border-sky-400/50 bg-sky-400/20"
                animate={{ y: [-4, 6, -4], x: [0, 4, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="pointer-events-none absolute -left-3 bottom-8 h-10 w-10 rounded-full border border-emerald-300/40 bg-emerald-300/20"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </section>

        {/* MANIFESTO */}
        <motion.section
          id="manifesto"
          className="border-b border-white/10 bg-slate-950 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={sectionTransition}
        >
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
              Manifesto
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              L’IA ne doit pas juste répondre.
              <br />
              Elle doit faire{" "}
              <span className="text-sky-300">gagner du sérieux</span> à votre
              marque.
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-[1.4fr,0.9fr]">
              <div className="space-y-4 text-sm text-slate-300">
                <p>
                  On ne construit pas des jouets IA. On construit des{" "}
                  <span className="font-semibold">systèmes</span> : des pièces
                  qui s’emboîtent, qui se surveillent, et qui se branchent à
                  votre organisation réelle.
                </p>
                <p>
                  Pas de promesse floue, pas de dashboard que personne n’ouvre.
                  Juste :
                </p>
                <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                  <li>• Des flux qui vous enlèvent du bruit opérationnel.</li>
                  <li>
                    • Une présence en ligne qui fait “grosse boîte” sans perdre
                    votre personnalité.
                  </li>
                  <li>
                    • Des agents IA qui s’excusent, escaladent et respectent vos
                    règles quand il faut.
                  </li>
                </ul>
              </div>

              <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-slate-200">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Ce que vous obtenez
                </p>
                <p>
                  • Un système documenté, pas une boîte noire.
                  <br />
                  • Une stack que vous possédez (Notion, CRM, automatisations).
                  <br />• Un front qui donne envie de travailler avec vous.
                </p>
                <p className="pt-2 text-[10px] text-slate-400">
                  Le but : qu’un prospect se dise en 10 secondes :{" "}
                  <span className="italic text-sky-300">
                    “Ils sont petits… mais organisés comme une grosse
                    structure.”
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ARCHITECTURE */}
        <motion.section
          id="system"
          className="border-b border-white/10 bg-slate-950 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={sectionTransition}
        >
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
              Architecture
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Un système pensé comme une grande boîte,
              <br />
              dimensionné pour votre taille réelle.
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Couche front",
                  desc: "Site, portail client, mini-back-office : la surface visible qui donne le ton.",
                },
                {
                  title: "Couche IA",
                  desc: "Prompts structurés, règles métier explicites, garde-fous, journalisation.",
                },
                {
                  title: "Couche automatisation",
                  desc: "Orchestration des emails, CRM, DM, docs, agendas, facturation…",
                },
              ].map((b) => (
                <motion.div
                  key={b.title}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-br from-sky-500/25 to-transparent blur-2xl" />
                  <h3 className="text-sm font-semibold">{b.title}</h3>
                  <p className="mt-2 text-xs text-slate-300">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* PLAYBOOK CLAIR */}
        <motion.section
          id="playbook"
          className="border-b border-slate-200/70 bg-slate-50 py-16 text-slate-900 transition-colors duration-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Playbook
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Comment on lance un système IA NH110LAB
              <br />
              sans transformer votre boîte en usine à gaz.
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-[1.3fr,0.9fr]">
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Radiographie rapide",
                    text: "On cartographie vos canaux (site, réseaux, mail, CRM), vos frictions et les tâches qui vous épuisent.",
                  },
                  {
                    step: "02",
                    title: "Pilote ultra ciblé",
                    text: "On choisit 1–2 cas d’usage qui combinent impact + faisabilité, et on livre un pilote testable par l’équipe.",
                  },
                  {
                    step: "03",
                    title: "Run & amplification",
                    text: "On suit ce qui fonctionne, on durcit ce qui doit l’être, puis on étend aux autres cas d’usage.",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.step}
                    whileHover={{ x: 4 }}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="mt-1 h-7 w-7 shrink-0 rounded-full bg-slate-900 text-center text-[11px] leading-7 text-slate-50">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
                        {item.title}
                      </p>
                      <p className="mt-2 text-[13px] text-slate-700">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                  Ce que voient vos clients
                </p>
                <ul className="space-y-2 text-sm text-slate-800">
                  <li>• Un site clair, qui ne fait pas “template générique”.</li>
                  <li>• Un agent IA qui répond vite, dans votre ton.</li>
                  <li>• Des réponses cohérentes quel que soit le canal.</li>
                </ul>
                <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-slate-500">
                  Ce que vous voyez en interne
                </p>
                <ul className="space-y-2 text-sm text-slate-800">
                  <li>• Moins de copier-coller et de tri dans les inbox.</li>
                  <li>• Un historique propre des échanges & décisions.</li>
                  <li>• Un système que vous pouvez faire évoluer.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* IMPACT / CHIFFRES */}
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
              sans l’armada de process.
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-4">
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
                  label: "Qualité perçue par vos clients",
                  value: "“beaucoup plus carré”",
                },
              ].map((m) => (
                <motion.div
                  key={m.label}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400" />
                  <p className="text-xs text-slate-400">{m.label}</p>
                  <p className="mt-3 text-sm font-semibold text-slate-50">
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

        {/* CAS CLIENTS */}
        <motion.section
          id="cas-clients"
          className="border-b border-white/10 bg-slate-950 py-16"
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
              une même logique : temps gagné & image renforcée.
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  label: "Créateur / infopreneur",
                  text: "Tri intelligent des DM, réponses préparées pour les marques, suivi des deals dans un seul tableau Notion + CRM.",
                },
                {
                  label: "Boutique en ligne",
                  text: "Support client IA pour les questions simples, suivi colis automatisé, escalade des cas sensibles vers l’équipe.",
                },
                {
                  label: "Restaurant / lieu physique",
                  text: "Agent de réservation connecté aux messageries & Google, centralisation des demandes, relance automatique des no-show.",
                },
              ].map((c) => (
                <motion.div
                  key={c.label}
                  whileHover={{ y: -4 }}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      {c.label}
                    </p>
                    <p className="mt-3 text-xs text-slate-200">{c.text}</p>
                  </div>
                  <p className="mt-4 text-[11px] text-slate-500">
                    Résultat : moins de charge mentale, plus de répondant, image
                    beaucoup plus solide.
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

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Avant-vente & qualification",
                  items: [
                    "Agent IA sur votre site / Notion pour filtrer les leads.",
                    "Synthèse automatique des demandes entrantes.",
                    "Proposition de next-step (call, doc, offre).",
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
                  <h3 className="text-sm font-semibold">{u.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                    {u.items.map((i) => (
                      <li key={i}>• {i}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* LAB / IMAGES */}
        <motion.section
          id="lab"
          className="border-b border-white/10 bg-slate-950 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
        >
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
              NH110LAB / Lab
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Un studio qui teste en continu,
              <br />
              avant d’implanter chez vous.
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-[1.1fr,0.9fr]">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <img
                    src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Workspace IA"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <img
                    src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Dashboard et graphes"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-300">
                <p>
                  Avant de déployer une nouvelle brique IA chez vous, on la
                  teste dans le Lab : prompts, règles, scénarios d’échec,
                  escalade vers l’humain.
                </p>
                <p className="text-xs text-slate-400">
                  Le but : vous livrer une version déjà “endurcie” par des
                  scénarios stressants, pas un simple proof of concept fragile.
                </p>
                <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                  <li>• Tests de ton & de style d’écriture.</li>
                  <li>• Tests de limites : ce que l’IA ne doit pas faire.</li>
                  <li>
                    • Tests de charge : comment le système tient quand ça
                    explose.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* STACK */}
        <motion.section
          id="stack"
          className="border-b border-white/10 bg-slate-950 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
        >
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
              Stack & opérations
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Une stack de grande boîte,
              <br />
              sans la lourdeur de la grande boîte.
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  Briques fréquentes
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] text-slate-200">
                  {[
                    "Notion",
                    "Airtable",
                    "HubSpot",
                    "Pipedrive",
                    "Stripe",
                    "Make / n8n",
                    "Slack",
                    "Gmail / GSuite",
                    "API custom",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-300">
                  On ne vous impose pas un outil “magique” : on se branche sur
                  l’existant, on simplifie, puis on ajoute les briques IA là où
                  ça fait vraiment la différence.
                </p>
              </div>

              <div className="space-y-3 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/95 p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  Indicateurs que l’on regarde
                </p>
                <ul className="space-y-2 text-xs text-slate-200">
                  <li>• Temps gagné sur des tâches répétitives.</li>
                  <li>• Délai moyen de réponse par canal.</li>
                  <li>• Part des demandes gérées 100% par l’IA.</li>
                  <li>• Accélération entre premier contact et closing.</li>
                </ul>
                <div className="mt-3 h-28 overflow-hidden rounded-xl border border-white/10 bg-slate-900/80 p-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Sentiment “grosse boîte”
                  </p>
                  <motion.div
                    className="mt-3 h-2 w-full rounded-full bg-slate-800"
                    initial={{ scaleX: 0.3, originX: 0 }}
                    whileInView={{ scaleX: 0.9 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                  />
                  <p className="mt-2 text-[11px] text-slate-400">
                    On cherche cet effet “ah ok, c’est carré” dès les 10
                    premières secondes sur votre site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ROADMAP 90 JOURS */}
        <motion.section
          id="roadmap"
          className="border-b border-white/10 bg-slate-950 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
        >
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
              Roadmap 90 jours
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Un trimestre pour installer un système IA qui tient la route.
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Jours 0–30",
                  subtitle: "Fondations & pilote",
                  text: "Cartographie, choix des cas d’usage, design du système, pilote IA + front livrable.",
                },
                {
                  title: "Jours 30–60",
                  subtitle: "Run & durcissement",
                  text: "Monitoring, ajustements, garde-fous, documentation, stabilisation des flux critiques.",
                },
                {
                  title: "Jours 60–90",
                  subtitle: "Extension & industrialisation",
                  text: "Ajout de nouveaux cas d’usage, optimisation des prompts, automatisations avancées.",
                },
              ].map((r) => (
                <motion.div
                  key={r.title}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
                    {r.title}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-50">
                    {r.subtitle}
                  </p>
                  <p className="mt-2 text-xs text-slate-300">{r.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

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
              Un pilote IA clair. Un mode run pour faire mûrir le système.
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-sm font-semibold">Pilote IA complet</h3>
                <p className="mt-2 text-sm text-sky-300">1 500 – 3 500 €</p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
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
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-sm font-semibold">Run & évolutions</h3>
                <p className="mt-2 text-sm text-emerald-300">Sur mesure</p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
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
          className="border-b border-white/10 bg-slate-950 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={sectionTransition}
        >
          <div className="mx-auto max-w-4xl px-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
              FAQ
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Quelques réponses rapides avant de m’écrire.
            </h2>

            <div className="mt-8 space-y-4 text-sm text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <p className="font-medium">
                  Combien de temps pour avoir quelque chose de concret ?
                </p>
                <p className="mt-2 text-xs text-slate-300">
                  En général 2 à 4 semaines pour un pilote clair, utilisable en
                  réel par vos équipes ou vos clients.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <p className="font-medium">
                  Est-ce réservé aux “grosses boîtes” ?
                </p>
                <p className="mt-2 text-xs text-slate-300">
                  Non. Le studio est pensé pour les indépendants, TPE, petites
                  équipes qui veulent un niveau de système digne d’une structure
                  beaucoup plus grande.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <p className="font-medium">
                  Est-ce que je garde la main sur la stack ?
                </p>
                <p className="mt-2 text-xs text-slate-300">
                  Oui. Vous gardez les accès, la doc, la structure. Vous pouvez
                  continuer seul ou en mode run avec moi.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <p className="font-medium">
                  Comment se passe le premier contact ?
                </p>
                <p className="mt-2 text-xs text-slate-300">
                  Vous m’envoyez un contexte via le formulaire. On cale un call
                  de 30 minutes pour clarifier, puis je reviens avec un plan et
                  un chiffrage.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          className={`py-16 ${
            theme === "light" ? "bg-slate-50 text-slate-900" : "bg-slate-950"
          } transition-colors duration-700`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={sectionTransition}
        >
          <div className="mx-auto max-w-3xl px-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
              Contact & brief
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Décrivez votre contexte. Je m’occupe du reste.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Quelques lignes suffisent : qui vous êtes, ce qui vous prend du
              temps, ce que vous voudriez déléguer à un système IA bien pensé.
            </p>

            <form className="mt-8 space-y-4">
              <div>
                <label className="text-xs text-slate-300">
                  Nom / structure
                </label>
                <input
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-white/40"
                  placeholder="Votre nom et/ou celui de votre structure"
                />
              </div>
              <div>
                <label className="text-xs text-slate-300">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-white/40"
                  placeholder="vous@entreprise.com"
                />
              </div>
              <div>
                <label className="text-xs text-slate-300">
                  Votre situation actuelle
                </label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-white/40"
                  placeholder="Quels canaux ? (site, Insta, mails…) Qu'est-ce qui vous prend le plus de temps ? Quel serait un résultat “waouh” pour vous ?"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/50"
              >
                Envoyer
              </button>
            </form>

            <p className="mt-4 text-[11px] text-slate-500">
              Réponse sous 24–48h. Pas de séquence automatique, pas de spam.
            </p>

            <div className="mt-10 border-t border-white/10 pt-6 text-[11px] text-slate-500">
              <p>NH110LAB.ai — Studio IA & automatisation premium.</p>
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

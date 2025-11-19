"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DevisExpress } from "./components/DevisExpress";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const [isBooted, setIsBooted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Barre de progression top
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Parallax léger sur le hero
  const heroTranslateY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  // Loader sci-fi
  useEffect(() => {
    const timer = setTimeout(() => setIsBooted(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  // Thème auto (prefers-color-scheme) + possibilité de toggle
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);

    const handler = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const bgBase = isDark ? "bg-slate-950 text-slate-50" : "bg-white text-slate-900";
  const cardBorder = isDark ? "border-slate-700/70" : "border-slate-200/70";
  const cardBg = isDark ? "bg-slate-900/70" : "bg-white";
  const subText = isDark ? "text-slate-300" : "text-slate-600";
  const sectionBorder = isDark ? "border-slate-800/80" : "border-slate-200/80";

  return (
    <div className={`min-h-screen ${bgBase} font-sans antialiased`}>
      {/* TOP PROGRESS BAR */}
      <motion.div
        style={{ width: progressWidth }}
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 z-[100]"
      />

      {/* BACKGROUND SCI-FI SOFT */}
      <BackgroundSciFi isDark={isDark} />

      {/* LOADER SCI-FI OPENAI STYLE */}
      {!isBooted && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950 text-slate-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-5"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-300 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0,rgba(255,255,255,0.55),transparent_55%)]"
                  animate={{ rotate: [0, 20, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <div className="leading-tight">
                <p className="text-[11px] font-semibold tracking-[0.25em] uppercase">
                  NH110LAB.AI
                </p>
                <p className="text-[10px] text-slate-400 tracking-[0.22em] uppercase">
                  IA Studio Operating System
                </p>
              </div>
            </div>
            <div className="w-48 h-[3px] rounded-full bg-slate-800 overflow-hidden">
              <motion.div
                className="h-full w-1/2 bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300"
                animate={{ x: ["-50%", "120%"] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-slate-500">
              Initialisation du système IA…
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* NAVBAR */}
      <header
        className={`sticky top-0 backdrop-blur-xl z-50 border-b ${sectionBorder} ${
          isDark ? "bg-slate-950/80" : "bg-white/80"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-400 to-violet-500 shadow-lg shadow-blue-300/40" />
            <div className="leading-tight">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase">
                NH110LAB.AI
              </p>
              <p className="text-[10px] text-slate-500 tracking-[0.18em] uppercase">
                Studio IA &amp; systèmes
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm">
            {[
              ["Vision", "#vision"],
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
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={() => setIsDark((prev) => !prev)}
              className={`hidden md:inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] border ${
                isDark
                  ? "border-slate-600/70 bg-slate-900 text-slate-100"
                  : "border-slate-200 bg-white text-slate-700"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isDark ? "bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]" : "bg-slate-700"
                }`}
              />
              <span>{isDark ? "Mode Deep" : "Mode Clear"}</span>
            </button>
            <a
              href="#contact"
              className="hidden md:inline-flex rounded-full bg-slate-900 text-white px-4 py-2 text-xs font-semibold hover:bg-slate-700 transition-all shadow-sm"
            >
              Démarrer un projet
            </a>
          </div>
        </div>
      </header>

      {/* CONTENU */}
      <main className="relative z-10">
        {/* HERO — Vision / OS IA */}
        <section
          id="vision"
          className={`relative overflow-hidden border-b ${sectionBorder}`}
        >
          <motion.div
            style={{ y: heroTranslateY }}
            className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 md:pt-28 flex flex-col lg:flex-row gap-12 lg:items-center"
          >
            <div className="flex-1 max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-[11px] uppercase tracking-[0.25em] text-slate-500"
              >
                Studio IA &amp; automatisation produit
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-4 text-4xl md:text-5xl font-semibold leading-tight"
              >
                Un système IA{" "}
                <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                  clair, crédible et suivi
                </span>{" "}
                qui donne l’impression d’une grosse structure, même si vous êtes
                1–5 dans l’équipe.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className={`mt-5 text-base ${subText}`}
              >
                Front premium, agents IA disciplinés, workflows d’automatisation
                solides. Tout est pensé comme un OS : lisible, documenté et
                vraiment utile au quotidien.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="mt-7 flex flex-wrap gap-3"
              >
                <a
                  href="#offres"
                  className="rounded-full bg-slate-900 text-white px-5 py-2.5 text-xs font-semibold hover:bg-slate-700 shadow-md"
                >
                  Voir les offres
                </a>
                <a
                  href="#cas-clients"
                  className="text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                >
                  Explorer des systèmes réels →
                </a>
              </motion.div>
              <div className="mt-6 flex flex-wrap gap-2 text-[11px]">
                <span className="rounded-full border px-3 py-1 border-slate-300/80 dark:border-slate-600/80">
                  ⚡ Pilote IA en 2–4 semaines
                </span>
                <span className="rounded-full border px-3 py-1 border-slate-300/80 dark:border-slate-600/80">
                  🤖 Sales, support &amp; ops alignés
                </span>
                <span className="rounded-full border px-3 py-1 border-slate-300/80 dark:border-slate-600/80">
                  🧠 Système documenté, pas boîte noire
                </span>
              </div>
            </div>

            {/* Colonne droite : "OS IA" */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex-1"
            >
              <div
                className={`rounded-3xl border ${cardBorder} ${
                  isDark ? "bg-slate-900/80" : "bg-slate-50"
                } shadow-[0_24px_80px_rgba(15,23,42,0.15)] p-5 md:p-6`}
              >
                <div className="flex items-center justify-between text-[11px]">
                  <span className={subText}>NH110LAB / Operating System</span>
                  <span className="rounded-full border border-blue-400/50 text-[10px] px-3 py-1 text-blue-500 bg-blue-50/60 dark:bg-blue-500/10 dark:text-blue-200">
                    Modulaire &amp; concret
                  </span>
                </div>
                <div className="mt-4 grid gap-4 text-xs md:grid-cols-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                      Surface
                    </p>
                    <p className={`mt-2 ${subText}`}>
                      Site &amp; mini-apps ultra lisibles qui donnent envie de
                      travailler avec vous en moins de 10 secondes.
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                      Agents IA
                    </p>
                    <p className={`mt-2 ${subText}`}>
                      IA encadrée par vos règles métier, votre ton, vos limites.
                      Pas un chatbot freestyle branché à la va-vite.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-3 text-xs">
                  <div className={`rounded-2xl border ${cardBorder} ${cardBg} p-3`}>
                    <p className="text-slate-500 text-[11px]">Automatisation</p>
                    <p className={`mt-1 ${subText}`}>
                      Make / n8n / Zapier / APIs : relier CRM, facturation,
                      inbox, DM, docs, sans générer d’usine à gaz.
                    </p>
                  </div>
                  <div className={`rounded-2xl border ${cardBorder} ${cardBg} p-3`}>
                    <p className="text-slate-500 text-[11px]">Monitoring</p>
                    <p className={`mt-1 ${subText}`}>
                      Ce que fait l’IA, ce qu’elle ne doit pas faire, quand
                      escalader. Tout est suivi.
                    </p>
                  </div>
                  <div className={`rounded-2xl border ${cardBorder} ${cardBg} p-3`}>
                    <p className="text-slate-500 text-[11px]">Évolution</p>
                    <p className={`mt-1 ${subText}`}>
                      On part d’un pilote, on étend cas d’usage par cas d’usage
                      sans saturer l’équipe.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-[1.1fr,0.9fr] text-xs">
                  <div className={`rounded-2xl border ${cardBorder} ${cardBg} p-3`}>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                      Vue synthèse
                    </p>
                    <div className={`mt-3 space-y-2 ${subText}`}>
                      <div className="flex items-center justify-between">
                        <span>Temps de tri manuel</span>
                        <span className="rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200 px-2 py-0.5 text-[10px]">
                          -30 à -60%
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Tickets gérés par l’IA</span>
                        <span className="text-blue-500 dark:text-blue-300">60–80%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Délai moyen de réponse</span>
                        <span className="text-violet-500 dark:text-violet-300">
                          ~ 1 minute
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300" />
                    </div>
                  </div>
                  <div className={`rounded-2xl border ${cardBorder} ${cardBg} overflow-hidden`}>
                    <img
                      src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200"
                      alt="Interface IA & automatisations"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* MANIFESTO */}
        <section
          id="manifesto"
          className={`py-20 border-b ${sectionBorder}`}
        >
          <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-[1.5fr,1fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                Manifesto
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
                L’IA ne doit pas juste répondre.
                <br />
                Elle doit augmenter le{" "}
                <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                  niveau de sérieux perçu
                </span>{" "}
                de votre marque.
              </h2>
              <p className={`mt-5 text-sm ${subText}`}>
                On ne construit pas des gadgets. On construit des systèmes : des
                briques qui s’emboîtent, se surveillent, se branchent sur votre
                organisation réelle.
              </p>
              <ul className={`mt-4 text-sm space-y-2 ${subText}`}>
                <li>• Moins de bruit opérationnel dans vos canaux.</li>
                <li>
                  • Une présence en ligne qui fait “grosse boîte” sans perdre
                  votre personnalité.
                </li>
                <li>
                  • Des agents IA qui s’excusent, escaladent, respectent vos
                  règles quand il faut.
                </li>
              </ul>
            </div>
            <div
              className={`rounded-2xl border ${cardBorder} ${cardBg} p-4 text-sm`}
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                Ce que vous obtenez
              </p>
              <ul className={`mt-3 space-y-2 ${subText}`}>
                <li>• Un système documenté, pas une boîte noire.</li>
                <li>• Une stack que vous possédez (Notion, CRM, automatisations).</li>
                <li>• Un front qui donne envie de travailler avec vous.</li>
              </ul>
              <p className="mt-4 text-[11px] text-slate-500">
                Objectif : qu’un prospect se dise en moins de 10 secondes :{" "}
                <span className="italic">
                  “Ils sont petits… mais organisés comme une grosse structure.”
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE / SYSTEME */}
        <section
          id="system"
          className={`py-20 border-b ${sectionBorder}`}
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Architecture
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold max-w-2xl">
              Un système pensé comme une grande boîte, dimensionné pour votre
              taille réelle.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3 text-sm">
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
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`rounded-2xl border ${cardBorder} ${cardBg} p-5`}
                >
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className={`mt-2 text-xs ${subText}`}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PLAYBOOK */}
        <section
          id="playbook"
          className={`py-20 border-b ${sectionBorder}`}
        >
          <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-[1.4fr,1fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                Playbook
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
                Comment on lance un système IA NH110LAB sans transformer votre
                boîte en usine à gaz.
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  {
                    step: "01",
                    title: "Radiographie rapide",
                    text: "Cartographie des canaux (site, réseaux, mail, CRM), des frictions, des tâches qui vous épuisent.",
                  },
                  {
                    step: "02",
                    title: "Pilote ciblé",
                    text: "On choisit 1–2 cas d’usage impactants & faisables, et on livre un pilote testable.",
                  },
                  {
                    step: "03",
                    title: "Run & amplification",
                    text: "On suit, durcit ce qui doit l’être, puis on étend aux autres cas d’usage.",
                  },
                ].map((s) => (
                  <motion.div
                    key={s.step}
                    whileHover={{ x: 4 }}
                    className={`flex gap-4 rounded-2xl border ${cardBorder} ${cardBg} p-4`}
                  >
                    <div className="mt-1 h-7 w-7 rounded-full bg-slate-900 text-white text-[11px] flex items-center justify-center">
                      {s.step}
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                        {s.title}
                      </p>
                      <p className={`mt-1 text-[13px] ${subText}`}>{s.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div
              className={`rounded-2xl border ${cardBorder} ${cardBg} p-4 text-sm`}
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                Ce que voient vos clients
              </p>
              <ul className={`mt-3 space-y-2 ${subText}`}>
                <li>• Un site clair, qui ne fait pas “template générique”.</li>
                <li>• Un agent IA qui répond vite, dans votre ton.</li>
                <li>• Des réponses cohérentes sur tous les canaux.</li>
              </ul>
              <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-slate-500">
                Ce que vous voyez en interne
              </p>
              <ul className={`mt-3 space-y-2 ${subText}`}>
                <li>• Moins de copier-coller et de tri dans les inbox.</li>
                <li>• Un historique propre des échanges & décisions.</li>
                <li>• Un système que vous pouvez faire évoluer.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section
          id="impact"
          className={`py-20 border-b ${sectionBorder}`}
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Impact attendu
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
              Des chiffres qui ressemblent à une grosse boîte, sans l’armada de
              process.
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
                  value: "“c’est devenu très carré”",
                },
              ].map((m) => (
                <motion.div
                  key={m.label}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`relative rounded-2xl border ${cardBorder} ${cardBg} p-4`}
                >
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300" />
                  <p className={`mt-2 text-[0.8rem] ${subText}`}>{m.label}</p>
                  <p className="mt-3 text-[0.95rem] font-semibold">{m.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DEVIS EXPRESS */}
        <section
          id="devis"
          className={`py-20 border-b ${sectionBorder}`}
        >
          <div className="mx-auto max-w-6xl px-6">
            <DevisExpress />
          </div>
        </section>

        {/* CAS CLIENTS */}
        <section
          id="cas-clients"
          className={`py-20 border-b ${sectionBorder}`}
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Cas clients (anonymisés)
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
              Trois contextes, trois systèmes IA, une même logique : temps
              gagné & image renforcée.
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3 text-sm">
              {[
                {
                  label: "Créateur / infopreneur",
                  text: "Tri intelligent des DM, réponses préparées pour les marques, suivi des deals dans un seul OS Notion + CRM.",
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
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`rounded-2xl border ${cardBorder} ${cardBg} p-5 flex flex-col justify-between`}
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                      {c.label}
                    </p>
                    <p className={`mt-3 text-xs ${subText}`}>{c.text}</p>
                  </div>
                  <p className="mt-4 text-[11px] text-slate-500">
                    Résultat : charge mentale réduite, répondant plus fort,
                    impression de “grosse équipe” même à 2–3.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CAS D'USAGE */}
        <section
          id="usage"
          className={`py-20 border-b ${sectionBorder}`}
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Cas d’usage typiques
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
              Des briques concrètes, branchées sur vos outils existants.
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2 text-xs">
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
                    "Effet “grosse boîte” sans la lourdeur.",
                  ],
                },
              ].map((u) => (
                <motion.div
                  key={u.title}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`rounded-2xl border ${cardBorder} ${cardBg} p-5`}
                >
                  <h3 className="text-sm font-semibold">{u.title}</h3>
                  <ul className={`mt-3 space-y-1.5 ${subText}`}>
                    {u.items.map((i) => (
                      <li key={i}>• {i}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LAB */}
        <section
          id="lab"
          className={`py-20 border-b ${sectionBorder}`}
        >
          <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                NH110LAB / Lab
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
                Un studio qui teste en continu avant d’implanter chez vous.
              </h2>
              <p className={`mt-4 text-sm ${subText}`}>
                Avant de déployer une nouvelle brique IA chez vous, elle passe
                par le Lab : prompts, règles, scénarios d’échec, escalade vers
                l’humain.
              </p>
              <ul className={`mt-4 space-y-2 text-xs ${subText}`}>
                <li>• Tests de ton & style d’écriture.</li>
                <li>• Tests de limites : ce que l’IA ne doit pas faire.</li>
                <li>
                  • Tests de charge : comment le système tient quand ça explose.
                </li>
              </ul>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className={`rounded-2xl border ${cardBorder} ${cardBg} overflow-hidden`}>
                <img
                  src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Workspace IA"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className={`rounded-2xl border ${cardBorder} ${cardBg} overflow-hidden`}>
                <img
                  src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Dashboard et graphes"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* STACK */}
        <section
          id="stack"
          className={`py-20 border-b ${sectionBorder}`}
        >
          <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
            <div
              className={`rounded-2xl border ${cardBorder} ${cardBg} p-5 text-sm`}
            >
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                Stack & opérations
              </p>
              <h3 className="mt-3 text-lg font-semibold">
                Une stack de grande boîte, sans la lourdeur de la grande boîte.
              </h3>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                {[
                  "Notion",
                  "Airtable",
                  "HubSpot",
                  "Pipedrive",
                  "Stripe",
                  "Make / n8n",
                  "Slack",
                  "GSuite",
                  "API custom",
                ].map((t) => (
                  <span
                    key={t}
                    className={`rounded-full border ${cardBorder} px-3 py-1`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className={`mt-4 text-xs ${subText}`}>
                On ne vous impose pas un outil “magique” : on se branche sur
                l’existant, on simplifie, puis on ajoute les briques IA là où
                ça fait vraiment la différence.
              </p>
            </div>
            <div
              className={`rounded-2xl border ${cardBorder} ${cardBg} p-5 text-xs`}
            >
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                Indicateurs suivis
              </p>
              <ul className={`mt-3 space-y-2 ${subText}`}>
                <li>• Temps gagné sur les tâches répétitives.</li>
                <li>• Délai moyen de réponse par canal.</li>
                <li>• Part des demandes gérées 100% par l’IA.</li>
                <li>• Accélération du cycle entre premier contact et closing.</li>
              </ul>
              <div className="mt-4 h-24 rounded-xl border border-dashed border-slate-400/40 flex items-center justify-center text-[11px] text-slate-500">
                Slot “vision 3D” / data-vis :
                <br />
                vous pourrez y brancher un canvas 3D ou des graphes avancés.
              </div>
            </div>
          </div>
        </section>

        {/* ROADMAP 90 JOURS */}
        <section
          id="roadmap"
          className={`py-20 border-b ${sectionBorder}`}
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Roadmap 90 jours
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
              Un trimestre pour installer un système IA qui tient la route.
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3 text-xs">
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
                  className={`rounded-2xl border ${cardBorder} ${cardBg} p-5`}
                >
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    {r.title}
                  </p>
                  <p className="mt-2 text-sm font-semibold">{r.subtitle}</p>
                  <p className={`mt-2 text-xs ${subText}`}>{r.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OFFRES */}
        <section
          id="offres"
          className={`py-20 border-b ${sectionBorder}`}
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Offres
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
              Un pilote IA clair. Un mode run pour faire mûrir le système.
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 text-xs">
              <motion.div
                whileHover={{ y: -4 }}
                className={`rounded-2xl border ${cardBorder} ${cardBg} p-5`}
              >
                <h3 className="text-sm font-semibold">Pilote IA complet</h3>
                <p className="mt-2 text-sm text-blue-500">1 500 – 3 500 €</p>
                <ul className={`mt-3 space-y-1.5 ${subText}`}>
                  <li>• 1–2 cas d’usage ciblés à fort levier.</li>
                  <li>• Prototype IA + front testable par vos clients.</li>
                  <li>• Connexion aux outils critiques (CRM, inbox, docs…).</li>
                  <li>• Session de prise en main & documentation.</li>
                </ul>
                <a
                  href="#contact"
                  className="mt-4 inline-flex text-[11px] text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                >
                  Démarrer un pilote →
                </a>
              </motion.div>
              <motion.div
                whileHover={{ y: -4 }}
                className={`rounded-2xl border ${cardBorder} ${cardBg} p-5`}
              >
                <h3 className="text-sm font-semibold">Run & évolutions</h3>
                <p className="mt-2 text-sm text-violet-500">Sur mesure</p>
                <ul className={`mt-3 space-y-1.5 ${subText}`}>
                  <li>• Ajout progressif de nouveaux cas d’usage.</li>
                  <li>• Optimisation continue des prompts & flux.</li>
                  <li>• Suivi des métriques & ajustements.</li>
                  <li>• Support prioritaire pour faire grandir le système.</li>
                </ul>
                <a
                  href="#contact"
                  className="mt-4 inline-flex text-[11px] text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                >
                  Construire un mode run →
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className={`py-20 border-b ${sectionBorder}`}
        >
          <div className="mx-auto max-w-4xl px-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              FAQ
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
              Quelques réponses rapides avant de m’écrire.
            </h2>

            <div className="mt-8 space-y-4 text-sm">
              {[
                {
                  q: "Combien de temps pour avoir quelque chose de concret ?",
                  a: "En général 2 à 4 semaines pour un pilote clair, utilisable en réel par vos équipes ou vos clients.",
                },
                {
                  q: "Est-ce réservé aux “grosses boîtes” ?",
                  a: "Non. Le studio est pensé pour les indépendants, TPE, petites équipes qui veulent un niveau de système digne d’une structure beaucoup plus grande.",
                },
                {
                  q: "Est-ce que je garde la main sur la stack ?",
                  a: "Oui. Vous gardez les accès, la doc, la structure. Vous pouvez continuer seul ou en mode run avec moi.",
                },
                {
                  q: "Comment se passe le premier contact ?",
                  a: "Vous m’envoyez un contexte via le formulaire. On cale un call de 30 minutes pour clarifier, puis je reviens avec un plan et un chiffrage.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className={`rounded-2xl border ${cardBorder} ${cardBg} p-4`}
                >
                  <p className="font-medium">{item.q}</p>
                  <p className={`mt-2 text-xs ${subText}`}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Contact & brief
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
              Décrivez votre contexte. Je m’occupe du reste.
            </h2>
            <p className={`mt-3 text-sm ${subText}`}>
              Quelques lignes suffisent : qui vous êtes, ce qui vous prend du
              temps, ce que vous voudriez déléguer à un système IA bien pensé.
            </p>

            <form className="mt-8 space-y-4 text-sm">
              <div>
                <label className="text-xs text-slate-600 dark:text-slate-300">
                  Nom / structure
                </label>
                <input
                  className={`mt-1 w-full rounded-lg border px-3 py-2 outline-none ${
                    isDark
                      ? "border-slate-700 bg-slate-900 text-slate-100"
                      : "border-slate-300 bg-white text-slate-900"
                  }`}
                  placeholder="Votre nom et/ou celui de votre structure"
                />
              </div>
              <div>
                <label className="text-xs text-slate-600 dark:text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  className={`mt-1 w-full rounded-lg border px-3 py-2 outline-none ${
                    isDark
                      ? "border-slate-700 bg-slate-900 text-slate-100"
                      : "border-slate-300 bg-white text-slate-900"
                  }`}
                  placeholder="vous@entreprise.com"
                />
              </div>
              <div>
                <label className="text-xs text-slate-600 dark:text-slate-300">
                  Votre situation actuelle
                </label>
                <textarea
                  rows={4}
                  className={`mt-1 w-full rounded-lg border px-3 py-2 outline-none ${
                    isDark
                      ? "border-slate-700 bg-slate-900 text-slate-100"
                      : "border-slate-300 bg-white text-slate-900"
                  }`}
                  placeholder="Canaux, frictions, tâches qui vous épuisent, idée de résultat “waouh” pour vous…"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-slate-900 text-white px-5 py-2.5 text-xs font-semibold hover:bg-slate-700 shadow-md"
              >
                Envoyer
              </button>
            </form>

            <p className="mt-4 text-[11px] text-slate-500">
              Réponse sous 24–48h. Pas de séquence automatique, pas de spam.
            </p>

            <div className="mt-10 border-t border-slate-200/60 dark:border-slate-800 pt-6 text-[11px] text-slate-500">
              <p>NH110LAB.ai — Studio IA & automatisation premium.</p>
              <p className="mt-2">
                © {new Date().getFullYear()} NH110LAB.ai — Tous droits réservés.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/**
 * Background sci-fi soft (clair / dark)
 */
function BackgroundSciFi({ isDark }: { isDark: boolean }) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isDark
            ? [
                "radial-gradient(circle at 20% 20%, rgba(56,189,248,0.18), transparent 60%), radial-gradient(circle at 80% 60%, rgba(129,140,248,0.25), transparent 60%), #020617",
                "radial-gradient(circle at 25% 25%, rgba(129,140,248,0.25), transparent 60%), radial-gradient(circle at 75% 70%, rgba(56,189,248,0.22), transparent 60%), #020617",
              ]
            : [
                "radial-gradient(circle at 20% 20%, rgba(56,189,248,0.15), transparent 60%), radial-gradient(circle at 80% 60%, rgba(139,92,246,0.15), transparent 60%), #ffffff",
                "radial-gradient(circle at 25% 25%, rgba(139,92,246,0.18), transparent 60%), radial-gradient(circle at 75% 70%, rgba(56,189,248,0.18), transparent 60%), #ffffff",
              ],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.2] mix-blend-soft-light"
        style={{
          background:
            "url('https://grainy-gradients.vercel.app/noise.svg') repeat",
        }}
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

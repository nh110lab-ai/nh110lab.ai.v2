"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DevisExpress } from "./components/DevisExpress";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const sectionTransition = { duration: 0.6, ease: "easeOut" };

export default function HomePage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const current = doc.scrollTop;
      const progress = total > 0 ? current / total : 0;

      setScrollProgress(progress);

      // alternance auto clair / sombre selon la hauteur scrollée
      if (progress < 0.33) {
        setTheme("dark");
      } else if (progress < 0.66) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className={`min-h-screen transition-colors duration-700 ${
        theme === "dark"
          ? "bg-slate-950 text-slate-50"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Barre de progression scroll */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full origin-left bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400 transition-transform duration-150"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      {/* NAVBAR */}
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-700 ${
          theme === "dark"
            ? "border-white/10 bg-slate-950/80 text-slate-100"
            : "border-slate-200/70 bg-white/80 text-slate-900"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-2xl bg-gradient-to-br from-sky-400 via-emerald-300 to-violet-400">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0,rgba(255,255,255,0.35)_0,transparent_45%)]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[11px] font-semibold tracking-[0.26em] uppercase">
                NH110LAB.AI
              </span>
              <span className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Studio IA & automatisation
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-[11px] md:flex">
            {[
              ["Vision", "#hero"],
              ["Système", "#system"],
              ["Playbook", "#playbook"],
              ["Cas clients", "#cas-clients"],
              ["Cas d’usage", "#usage"],
              ["Offres", "#offres"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={`transition-colors ${
                  theme === "dark"
                    ? "text-slate-300 hover:text-slate-50"
                    : "text-slate-700 hover:text-slate-950"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className={`rounded-full px-3.5 py-1.5 text-[11px] font-medium transition-all ${
              theme === "dark"
                ? "border border-white/15 bg-white/5 text-slate-50 hover:bg-white hover:text-slate-950"
                : "border border-slate-900/10 bg-slate-900 text-slate-50 hover:bg-slate-700"
            }`}
          >
            Démarrer un projet
          </a>
        </div>
      </header>

      {/* HERO avec background “vivant” */}
      <section
        id="hero"
        className="relative overflow-hidden border-b border-white/10"
      >
        {/* décor : blobs + grille + orbes */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full bg-emerald-400/15 blur-3xl animate-[ping_5s_ease-in-out_infinite]" />
          <div className="absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl mix-blend-screen" />
          <div className="absolute inset-0 opacity-[0.22] [background-image:radial-gradient(circle_at_1px_1px,#64748b80,transparent_0)] [background-size:22px_22px]" />
        </div>

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
              className="mt-5 text-[2.4rem] font-semibold leading-tight md:text-[3.1rem]"
            >
              Construire un
              <span className="block bg-gradient-to-r from-sky-300 via-emerald-300 to-violet-300 bg-clip-text text-transparent">
                système IA qui fait “grosse boîte”
              </span>
              sans perdre la vitesse d’une petite équipe.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-sm text-slate-300 md:text-[15px]"
            >
              NH110LAB.ai assemble trois couches : un front ultra lisible, des
              agents IA bien encadrés et des automatisations propres. Objectif :
              moins d’opérations manuelles, plus de répondant, et une impression
              très “premium” dès le premier contact.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href="#devis"
                className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition-shadow hover:shadow-sky-500/50"
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
                🔁 Workflows reliés à vos outils
              </span>
            </motion.div>

            {/* mini “ticker” */}
            <motion.div
              variants={fadeUp}
              className="mt-8 overflow-hidden rounded-full border border-white/10 bg-black/30 text-[10px] text-slate-300"
            >
              <div className="flex animate-[marquee_18s_linear_infinite] gap-10 whitespace-nowrap px-4 py-2 [--gap:2.5rem]">
                <span>Notion &amp; knowledge interne</span>
                <span>CRM &amp; pipe commercial</span>
                <span>Inbox &amp; DM centralisés</span>
                <span>Reporting temps réel</span>
                <span>Front minimaliste mais sérieux</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Colonne droite : “système vivant” */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative flex-1"
          >
            <motion.div
              animate={{ y: [-8, 6, -8] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-900/95 p-5 backdrop-blur-2xl shadow-[0_20px_70px_rgba(15,23,42,0.8)]"
            >
              <div className="mb-4 flex items-center justify-between text-[11px] text-slate-300">
                <span>NH110LAB / Operating System</span>
                <span className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-[10px] text-emerald-200">
                  Modulaire &amp; concret
                </span>
              </div>

              <div className="grid gap-4 text-[11px] md:grid-cols-2">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Front
                  </p>
                  <p className="mt-2 text-slate-200">
                    Sites &amp; mini-apps ultra lisibles, pensés pour inspirer
                    confiance en 5 secondes.
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Agents IA
                  </p>
                  <p className="mt-2 text-slate-200">
                    Agents spécialisés (support, sales, back-office) qui
                    respectent vos règles, votre ton, vos limites.
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
                    Observabilité : où l’IA aide, où l’humain garde la main, où
                    ça bloque.
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

              {/* “fausse interface” + image */}
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
                  />
                </div>
              </div>
            </motion.div>

            {/* petits orbes flottants */}
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

      {/* SECTION SYSTÈME */}
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
          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
            Architecture
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Un système pensé comme une grande boîte,
            <br />
            dimensionné pour votre taille actuelle.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Couche front",
                desc: "Site, mini-portail client, back-office : la surface visible qui donne le ton.",
              },
              {
                title: "Couche IA",
                desc: "Prompts structurés, règles métier explicites, garde-fous, journalisation.",
              },
              {
                title: "Couche automatisation",
                desc: "Orchestration des e-mails, CRM, DM, docs, agendas, facturation…",
              },
            ].map((b) => (
              <motion.div
                key={b.title}
                whileHover={{ y: -4, scale: 1.01 }}
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

      {/* PLAYBOOK / MODE CLAIR */}
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
              <div
                key={c.label}
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
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CAS D'USAGE */}
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
              <div
                key={u.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-sm font-semibold">{u.title}</h3>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  {u.items.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
              </div>
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
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
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
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
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
            </div>
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
                équipes qui veulent un niveau de système digne d’une plus grosse
                structure.
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
                Vous m’envoyez un contexte via le formulaire. On cale un call de
                30 minutes pour clarifier, puis je reviens avec un plan et un
                chiffrage.
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
              © {new Date().getFullYear()} NH110LAB.ai — Tous droits réservés.
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

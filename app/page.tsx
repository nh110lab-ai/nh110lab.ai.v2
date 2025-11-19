"use client";

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
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="relative h-7 w-7 rounded-xl bg-gradient-to-br from-sky-400 via-emerald-300 to-violet-400">
              <div className="absolute inset-0 rounded-xl bg-black/40" />
            </div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-200">
              NH110LAB.AI
            </span>
          </div>
          <nav className="hidden gap-6 text-[11px] md:flex">
            <a href="#hero" className="hover:text-slate-200">
              Vision
            </a>
            <a href="#system" className="hover:text-slate-200">
              Système
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
            href="#contact"
            className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-medium hover:bg-white hover:text-slate-950 transition-colors"
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
        {/* décor : blobs + grille */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-sky-500/25 blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl animate-[ping_4s_ease-in-out_infinite]" />
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,#1f293780,transparent_0)] [background-size:24px_24px]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 md:flex-row md:items-center">
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
              Studio IA &amp; automatisation
              <span className="h-1 w-1 rounded-full bg-emerald-300" />
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-[2.2rem] font-semibold leading-tight md:text-[3rem]"
            >
              Un système complet
              <span className="block bg-gradient-to-r from-sky-300 via-emerald-300 to-violet-300 bg-clip-text text-transparent">
                sites, agents IA &amp; automatisations
              </span>
              conçu pour les petites structures qui pensent comme des grandes.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-sm text-slate-300 md:text-base"
            >
              NH110LAB.ai combine un front ultra propre, des agents IA alignés à
              votre ton et des automatisations bien câblées. Objectif : gagner
              du temps, donner une impression “grosse boîte” et rester simple à
              piloter.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href="#devis"
                className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/50 transition-shadow"
              >
                Devis express en 30s
              </a>
              <a
                href="#cas-clients"
                className="text-xs text-slate-200 hover:text-white"
              >
                Voir des cas concrets →
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap gap-2 text-[11px] text-slate-300"
            >
              <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1">
                ⚡ Prototypes en 2–4 semaines
              </span>
              <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1">
                🤖 Agents IA sur mesure
              </span>
              <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1">
                🔁 Workflows automatisés
              </span>
            </motion.div>
          </motion.div>

          {/* Colonne droite : “carte système” flottante */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative flex-1"
          >
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/90 p-5 backdrop-blur-2xl shadow-2xl"
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
                    Sites &amp; interfaces ultra minimalistes, optimisés pour
                    la perception de sérieux et la clarté.
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Agents IA
                  </p>
                  <p className="mt-2 text-slate-200">
                    Agents spécialisés (support, sales, back-office) qui
                    respectent vos règles et votre ton.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 text-[11px] md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="text-slate-400">Automatisation</p>
                  <p className="mt-1 text-slate-200">
                    n8n / Make / Zapier / APIs pour relier vos outils.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="text-slate-400">Monitoring</p>
                  <p className="mt-1 text-slate-200">
                    Suivi clair : où l&apos;IA aide, où l&apos;humain garde la
                    main.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="text-slate-400">Évolutif</p>
                  <p className="mt-1 text-slate-200">
                    On commence petit, on élargit cas d&apos;usage par cas
                    d&apos;usage.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
            Architecture
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Un système pensé comme une grande boîte,
            <br />
            mais dimensionné pour vous.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Couche front",
                desc: "Sites, mini-apps, back-office minimalistes pour exposer l'IA de façon claire et premium.",
              },
              {
                title: "Couche IA",
                desc: "Prompts structurés, règles métier explicites, modèles adaptés au contexte et au budget.",
              },
              {
                title: "Couche automatisation",
                desc: "Workflows pour orchestrer e-mails, CRM, DM, formulaires, fichiers, agendas…",
              },
            ].map((b) => (
              <motion.div
                key={b.title}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-sm font-semibold">{b.title}</h3>
                <p className="mt-2 text-xs text-slate-300">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* DEVIS EXPRESS */}
      <DevisExpress />

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
          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
            Cas clients (anonymisés)
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Trois contextes, trois systèmes IA,
            <br />
            une même logique : temps gagné &amp; image renforcée.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                label: "Créateur / infopreneur",
                text: "Tri intelligent des DM, préparation des réponses aux marques, suivi des opportunités sponsorisées dans un seul tableau.",
              },
              {
                label: "Boutique en ligne",
                text: "Support client IA pour questions simples, suivi colis automatisé, escalade des cas sensibles vers l'humain.",
              },
              {
                label: "Restaurant / lieu physique",
                text: "Agent de réservation connecté aux messageries et Google, centralisation des demandes et rappel automatique des no-show.",
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
                  plus pro.
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CAS D'USAGE */}
      <motion.section
        id="usage"
        className="border-b border-white/10 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={sectionTransition}
      >
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
            Cas d&apos;usage typiques
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
                  "Préparation de brouillons d'e-mails pour votre équipe.",
                  "Routage vers la bonne personne quand c'est sensible.",
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
                  "Impression de “grosse boîte” sans l'usine à gaz.",
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
        className="border-b border-white/10 py-16"
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
                <li>• 1–2 cas d&apos;usage ciblés</li>
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
                <li>• Ajout progressif de nouveaux cas d&apos;usage</li>
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
        className="border-b border-white/10 py-16"
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
            Quelques réponses rapides avant de m&apos;écrire.
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
                équipes qui veulent un niveau de système digne d&apos;une plus
                grosse structure.
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
                Vous m&apos;envoyez un contexte via le formulaire. On cale un
                call de 30 minutes pour clarifier, puis je reviens avec un plan
                et un chiffrage.
              </p>
            </div>
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
          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
            Contact & brief
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Décrivez votre contexte. Je m&apos;occupe du reste.
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
  );
}

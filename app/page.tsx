"use client";

import { motion } from "framer-motion";
import { DevisExpress } from "./components/DevisExpress";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-lg bg-gradient-to-br from-sky-400 to-emerald-300" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-200">
              NH110LAB.ai
            </span>
          </div>
          <nav className="hidden gap-6 text-xs md:flex">
            <a href="#hero" className="hover:text-slate-200">
              Services
            </a>
            <a href="#devis" className="hover:text-slate-200">
              Devis
            </a>
            <a href="#cas-clients" className="hover:text-slate-200">
              Cas clients
            </a>
            <a href="#cas-usage" className="hover:text-slate-200">
              Cas d&apos;usage
            </a>
            <a href="#offres" className="hover:text-slate-200">
              Offres
            </a>
            <a href="#faq" className="hover:text-slate-200">
              FAQ
            </a>
            <a href="#contact" className="hover:text-slate-200">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium hover:bg-white hover:text-slate-950 transition-colors"
          >
            Démarrer un projet
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative overflow-hidden border-b border-white/5"
      >
        {/* Background animé */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute top-40 -right-10 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#22d3ee22,_transparent_60%),radial-gradient(circle_at_bottom,_#0ea5e922,_transparent_60%)]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Studio IA &amp; automatisation premium
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Des expériences digitales
              <span className="block text-sky-300">
                ultra-premium propulsées par l&apos;IA.
              </span>
            </h1>
            <p className="mt-4 text-sm text-slate-300 md:text-base">
              Votre système complet : agents IA, automatisations, sites rapides
              et front minimaliste. Pensé pour créateurs, petites structures et
              marques digitales qui veulent des résultats visibles, pas un
              énième jouet IA.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#devis"
                className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-shadow"
              >
                Devis express en 30s
              </a>
              <a
                href="#cas-clients"
                className="text-xs text-slate-200 hover:text-white"
              >
                Voir les cas clients →
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                ⚡ Prototypes rapides
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                🤖 Agents IA dédiés
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                🔁 Automatisation concrète
              </span>
            </div>
          </motion.div>

          {/* Carte système / focus / process */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative flex-1"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-300">
                <span>NH110LAB / System</span>
                <span className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-[10px] text-emerald-200">
                  Concret &amp; déployable
                </span>
              </div>

              <div className="grid gap-4 text-xs md:grid-cols-2">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Focus
                  </p>
                  <p className="mt-2 text-slate-200">
                    Agents IA + automatisations + front. Construits sur mesure
                    selon vos outils, vos flux et votre tempo.
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Process
                  </p>
                  <ul className="mt-2 space-y-1 text-slate-200">
                    <li>1. Diagnostic express (30 min)</li>
                    <li>2. Prototype IA + front</li>
                    <li>3. Mise en production</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 grid gap-3 text-[11px] md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="text-slate-400">Sites &amp; front</p>
                  <p className="mt-1 text-slate-200">
                    Interfaces rapides, élégantes, branchées à vos outils.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="text-slate-400">Agents IA</p>
                  <p className="mt-1 text-slate-200">
                    Des agents spécialisés alignés avec votre ton &amp; vos
                    règles.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="text-slate-400">Automatisation</p>
                  <p className="mt-1 text-slate-200">
                    Connexions entre tous vos outils pour supprimer le
                    répétitif.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CE QUE JE CONSTRUIS */}
      <motion.section
        id="services"
        className="border-b border-white/5 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Ce que je construis
              </p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                Des briques IA concrètes, utiles
                <br />
                et prêtes à l&apos;emploi.
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Sites & expériences front",
                points: [
                  "Sites ultra rapides, minimalistes et premium",
                  "Mobile-first, focus conversion",
                  "Connexion CRM / Notion / calendriers",
                ],
              },
              {
                title: "Agents IA intelligents",
                points: [
                  "Agents commerciaux, support, qualification",
                  "Alignés sur votre ton & vos règles",
                  "Toujours branchés à vos données",
                ],
              },
              {
                title: "Automatisation & workflows",
                points: [
                  "n8n / Make / Zapier / intégrations custom",
                  "Relances, tri, routage, reporting",
                  "Alertes intelligentes au bon moment",
                ],
              },
            ].map((block) => (
              <motion.div
                key={block.title}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.6)]"
              >
                <h3 className="text-sm font-semibold">{block.title}</h3>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  {block.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
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
        className="border-t border-b border-white/5 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Cas clients
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            3 contextes différents, même logique :
            <br />
            clarté + IA utile.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                label: "Indépendant",
                quote:
                  "Avant : plusieurs heures par jour dans les mails. Maintenant, un agent IA filtre et prépare les réponses : je ne garde que l'essentiel.",
                author: "Consultant solo",
              },
              {
                label: "Restauration",
                quote:
                  "Les réservations arrivent de partout. L'IA centralise, répond aux questions simples et ne nous alerte que quand c'est nécessaire.",
                author: "Gérant de restaurant",
              },
              {
                label: "E-commerce",
                quote:
                  "Le support client est transformé : l'IA gère le simple et récurrent, on garde l'humain sur le sensible. Le taux de réponse a doublé.",
                author: "Boutique en ligne",
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
                  <p className="mt-3 text-xs text-slate-200">{c.quote}</p>
                </div>
                <p className="mt-4 text-[11px] text-slate-400">— {c.author}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CAS D'USAGE */}
      <motion.section
        id="cas-usage"
        className="border-b border-white/5 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Cas d&apos;usage
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Des exemples concrets qui transforment le quotidien.
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Créateur / Influenceur",
                items: [
                  "Tri automatique des DM (fans / pro / spam)",
                  "Préparation des réponses pour les marques",
                  "Tableau centralisé des opportunités",
                ],
              },
              {
                title: "Freelance / Consultant",
                items: [
                  "Agent de qualification des leads",
                  "Relances automatisées & priorisées",
                  "Résumé instantané des demandes entrantes",
                ],
              },
              {
                title: "E-commerce",
                items: [
                  "Support IA + suivi colis automatisé",
                  "Emails post-achat optimisés",
                  "Retour client semi-automatisé",
                ],
              },
              {
                title: "Restauration / Local",
                items: [
                  "Agent de réservation multi-canaux",
                  "Réponses FAQ instantanées (horaires, menu…)",
                  "Centralisation Messenger / Insta / Google",
                ],
              },
            ].map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-sm font-semibold">{block.title}</h3>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  {block.items.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* STACK & MÉTHODE */}
      <motion.section
        id="stack"
        className="border-b border-white/5 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Stack &amp; méthode
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Tech minimaliste, robuste, documentée
            <br />
            et simple à maintenir.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "IA & langage",
                points: [
                  "Prompts structurés & versionnés",
                  "Règles métier explicites",
                  "Suivi des interactions & logs",
                ],
              },
              {
                title: "Automatisation",
                points: [
                  "n8n, Make, Zapier & intégrations custom",
                  "Scénarios intelligents et monitorés",
                  "Alertes & rapports digestes",
                ],
              },
              {
                title: "Front & UI",
                points: [
                  "Interfaces légères & premium",
                  "Animations sobres mais luxueuses",
                  "Responsive par défaut",
                ],
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-sm font-semibold">{b.title}</h3>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  {b.points.map((p) => (
                    <li key={p}>• {p}</li>
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
        className="border-b border-white/5 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Offres
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Un pilote pour démarrer.
            <br />
            Un mode run pour faire grandir le système.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-sm font-semibold">Pilote IA concret</h3>
              <p className="mt-2 text-sm text-sky-300">1 500 – 3 500 €</p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                <li>• 1–2 cas d&apos;usage ciblés</li>
                <li>• Prototype IA livrable &amp; testable</li>
                <li>• Documentation simple</li>
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
              <h3 className="text-sm font-semibold">Run &amp; évolutions</h3>
              <p className="mt-2 text-sm text-emerald-300">Sur mesure</p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                <li>• Amélioration continue des agents &amp; workflows</li>
                <li>• Ajout de nouveaux cas d&apos;usage</li>
                <li>• Suivi, métriques, optimisation</li>
                <li>• Support prioritaire</li>
              </ul>
              <a
                href="#contact"
                className="mt-4 inline-flex text-xs text-slate-200 hover:text-white"
              >
                Parler du mode run →
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        id="faq"
        className="border-b border-white/5 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            FAQ
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Quelques réponses rapides.
          </h2>

          <div className="mt-8 space-y-4 text-sm text-slate-200">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <p className="font-medium">
                Combien de temps prend un pilote complet ?
              </p>
              <p className="mt-2 text-xs text-slate-300">
                En général entre 2 et 4 semaines pour quelque chose de concret
                et testable par vos équipes ou vos clients.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <p className="font-medium">
                Est-ce que vous travaillez avec des petites structures ?
              </p>
              <p className="mt-2 text-xs text-slate-300">
                Oui, c&apos;est même le cœur du studio : créateurs, freelances,
                boutiques en ligne, restaurants, TPE.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <p className="font-medium">Est-ce que je garde la main ?</p>
              <p className="mt-2 text-xs text-slate-300">
                Toujours. Vous avez la doc, les accès, et la possibilité de
                continuer seul si vous le souhaitez.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <p className="font-medium">Proposez-vous un suivi ?</p>
              <p className="mt-2 text-xs text-slate-300">
                Oui, c&apos;est le rôle du mode Run : on améliore, on étend, on
                monitore dans la durée.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Contact &amp; brief
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Décrivez votre besoin.
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Quelques lignes suffisent. Je reviens vers vous avec une proposition
            claire, sans jargon ni roman de consultant.
          </p>

          <form className="mt-8 space-y-4">
            <div>
              <label className="text-xs text-slate-300">
                Nom / Structure
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
              <label className="text-xs text-slate-300">Votre projet</label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-white/40"
                placeholder="Contexte, objectifs, outils actuels, ce que vous aimeriez automatiser ou confier à un agent IA..."
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40"
            >
              Envoyer
            </button>
          </form>

          <p className="mt-4 text-xs text-slate-500">
            Réponse sous 24–48h. Pas de spam, pas de séquence automatique.
          </p>

          <div className="mt-10 border-t border-white/5 pt-6 text-[11px] text-slate-500">
            <p>NH110LAB.ai — Studio IA &amp; automatisation premium.</p>
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

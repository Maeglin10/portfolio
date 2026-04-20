export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-zinc-300">
      <p className="text-xs text-zinc-500 mb-2">Dernière mise à jour : 19 avril 2026</p>
      <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
        Politique de Confidentialité
      </h1>
      <p className="text-zinc-400 text-sm mb-10 leading-relaxed">
        La présente Politique de Confidentialité décrit la manière dont Aevia collecte, utilise,
        conserve et protège vos données personnelles conformément au Règlement Général sur la
        Protection des Données (RGPD — Règlement UE 2016/679) et à la loi française Informatique
        et Libertés.
      </p>

      {/* ── 1. Responsable du traitement ─────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          1. Responsable du traitement
        </h2>
        <p className="mb-3 text-sm leading-relaxed">
          Le responsable du traitement de vos données personnelles est :
        </p>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm space-y-1">
          <p><span className="text-white font-semibold">Aevia</span> — entreprise individuelle (auto-entrepreneur)</p>
          <p><span className="text-zinc-400">Représentant légal :</span> Valentin Milliand</p>
          <p><span className="text-zinc-400">Pays d'établissement :</span> France</p>
          <p>
            <span className="text-zinc-400">Contact :</span>{" "}
            <a href="mailto:hello@aevia.io" className="text-violet-400 hover:text-violet-300 transition-colors">
              hello@aevia.io
            </a>
          </p>
          <p>
            <span className="text-zinc-400">Contact DPO / Vie privée :</span>{" "}
            <a href="mailto:privacy@aevia.io" className="text-violet-400 hover:text-violet-300 transition-colors">
              privacy@aevia.io
            </a>
          </p>
        </div>
      </section>

      {/* ── 2. Produits concernés ────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          2. Produits concernés par cette politique
        </h2>
        <p className="text-sm leading-relaxed mb-4">
          La présente politique s'applique à l'ensemble des produits et services commercialisés
          sous la marque Aevia :
        </p>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="text-violet-400 font-bold shrink-0">Aevia Inbox</span>
            <span className="text-zinc-400">
              (app.aevia.io) — CRM multi-canal B2B. Centralise les conversations WhatsApp,
              Instagram, Messenger et email pour les entreprises. Abonnement mensuel (59 €, 159 €
              ou 499 €/mois).
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-fuchsia-400 font-bold shrink-0">AeviaLaunch</span>
            <span className="text-zinc-400">
              (launch.aevia.io) — Générateur de sites web assisté par IA. Crée des sites web
              professionnels à partir de données de formulaire. Paiement unique (599 €, 899 € ou
              1 499 €) + maintenance optionnelle 59 €/mois.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-400 font-bold shrink-0">AeviaSecurity</span>
            <span className="text-zinc-400">
              (security.aevia.io) — Plateforme d'audit de sécurité automatisé. Analyse SSL, DNS,
              performances et failles de sécurité de sites web. Offre gratuite + abonnements 29 €
              ou 89 €/mois.
            </span>
          </li>
        </ul>
      </section>

      {/* ── 3. Données collectées ────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          3. Données personnelles collectées
        </h2>

        <h3 className="text-base font-semibold text-white mb-2 mt-5">3.1 Données de compte et d'identification</h3>
        <p className="text-sm leading-relaxed mb-3">
          Lors de la création d'un compte sur l'un de nos services, nous collectons :
        </p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-4 ml-2">
          <li>Nom et prénom</li>
          <li>Adresse email professionnelle</li>
          <li>Nom de l'entreprise</li>
          <li>Numéro de téléphone (optionnel)</li>
          <li>Mot de passe (stocké sous forme de hash bcrypt, jamais en clair)</li>
          <li>Adresse IP de connexion et informations de navigateur (User-Agent)</li>
        </ul>

        <h3 className="text-base font-semibold text-white mb-2 mt-5">3.2 Données de conversations et de clients finaux (Aevia Inbox)</h3>
        <p className="text-sm leading-relaxed mb-3">
          Dans le cadre d'Aevia Inbox, nos clients (les entreprises abonnées) nous transmettent
          des données relatives à leurs propres clients finaux. Ces données incluent notamment :
        </p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-3 ml-2">
          <li>Noms et identifiants des contacts (WhatsApp, Instagram, email)</li>
          <li>Contenu des conversations (textes, médias, pièces jointes)</li>
          <li>Historique des échanges et horodatages</li>
          <li>Métadonnées de livraison et de lecture des messages</li>
          <li>Données analytiques (volumes de messages, taux de réponse)</li>
        </ul>
        <p className="text-sm leading-relaxed text-zinc-400 bg-zinc-900/40 border border-zinc-800 rounded-lg p-4">
          <strong className="text-zinc-300">Note importante :</strong> Pour ces données, Aevia agit en
          qualité de <strong className="text-zinc-300">sous-traitant</strong> au sens du RGPD. Le client
          abonné demeure responsable du traitement vis-à-vis de ses propres clients finaux. Un
          accord de traitement des données (DPA) est disponible sur demande à{" "}
          <a href="mailto:privacy@aevia.io" className="text-violet-400 hover:text-violet-300 transition-colors">
            privacy@aevia.io
          </a>.
        </p>

        <h3 className="text-base font-semibold text-white mb-2 mt-5">3.3 Données d'audit (AeviaSecurity)</h3>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-4 ml-2">
          <li>URL et noms de domaine soumis à l'analyse</li>
          <li>Résultats des audits SSL, DNS, sécurité et performances</li>
          <li>Historique des audits effectués</li>
        </ul>

        <h3 className="text-base font-semibold text-white mb-2 mt-5">3.4 Données de génération de site (AeviaLaunch)</h3>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-4 ml-2">
          <li>Informations saisies dans le formulaire de création (secteur d'activité, description, charte graphique, textes)</li>
          <li>Contenu généré par l'IA à partir de ces informations</li>
          <li>Fichiers uploadés (logos, images)</li>
        </ul>

        <h3 className="text-base font-semibold text-white mb-2 mt-5">3.5 Données de paiement</h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          Les paiements sont traités exclusivement par <strong className="text-zinc-300">Stripe</strong>.
          Aevia ne collecte ni ne stocke jamais vos coordonnées bancaires. Nous ne conservons que les
          références de transaction Stripe, l'historique des abonnements et les montants facturés.
        </p>

        <h3 className="text-base font-semibold text-white mb-2 mt-5">3.6 Données de navigation et logs</h3>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-4 ml-2">
          <li>Adresse IP (pseudonymisée)</li>
          <li>Pages visitées, durée de session</li>
          <li>Logs techniques (erreurs, performances)</li>
          <li>Statistiques d'usage agrégées via Plausible Analytics</li>
        </ul>
      </section>

      {/* ── 4. Bases légales ────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          4. Bases légales des traitements (RGPD Art. 6)
        </h2>
        <div className="space-y-4 text-sm">
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5">
            <p className="font-semibold text-white mb-1">Art. 6.1.b — Exécution du contrat</p>
            <p className="text-zinc-400 leading-relaxed">
              Traitement des données de compte, des abonnements, de la facturation et de la
              fourniture des services (Inbox, Launch, Security). Sans ces données, nous ne pouvons
              pas vous fournir les services souscrits.
            </p>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5">
            <p className="font-semibold text-white mb-1">Art. 6.1.c — Obligation légale</p>
            <p className="text-zinc-400 leading-relaxed">
              Conservation des données de facturation (10 ans conformément au Code de commerce
              français), lutte contre la fraude, obligations fiscales.
            </p>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5">
            <p className="font-semibold text-white mb-1">Art. 6.1.f — Intérêt légitime</p>
            <p className="text-zinc-400 leading-relaxed">
              Amélioration de nos services, sécurité technique de nos infrastructures,
              détection de comportements abusifs, statistiques d'usage agrégées.
            </p>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5">
            <p className="font-semibold text-white mb-1">Art. 6.1.a — Consentement</p>
            <p className="text-zinc-400 leading-relaxed">
              Envoi de communications marketing et newsletters. Vous pouvez retirer votre
              consentement à tout moment via le lien de désinscription présent dans chaque email.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Durées de conservation ────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          5. Durées de conservation des données
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="text-left py-3 pr-4 text-white font-semibold">Catégorie de données</th>
                <th className="text-left py-3 text-white font-semibold">Durée de conservation</th>
              </tr>
            </thead>
            <tbody className="text-zinc-400">
              <tr className="border-b border-zinc-800/60">
                <td className="py-3 pr-4">Données de compte (actif)</td>
                <td className="py-3">Durée de la relation contractuelle</td>
              </tr>
              <tr className="border-b border-zinc-800/60">
                <td className="py-3 pr-4">Données de compte (après résiliation)</td>
                <td className="py-3">3 ans (prescription commerciale)</td>
              </tr>
              <tr className="border-b border-zinc-800/60">
                <td className="py-3 pr-4">Données de facturation et contrats</td>
                <td className="py-3">10 ans (obligation légale)</td>
              </tr>
              <tr className="border-b border-zinc-800/60">
                <td className="py-3 pr-4">Conversations Inbox</td>
                <td className="py-3">Durée de l'abonnement + 6 mois</td>
              </tr>
              <tr className="border-b border-zinc-800/60">
                <td className="py-3 pr-4">Résultats d'audits AeviaSecurity</td>
                <td className="py-3">12 mois à compter de l'audit</td>
              </tr>
              <tr className="border-b border-zinc-800/60">
                <td className="py-3 pr-4">Données de site généré (AeviaLaunch)</td>
                <td className="py-3">Livraison + 6 mois (support)</td>
              </tr>
              <tr className="border-b border-zinc-800/60">
                <td className="py-3 pr-4">Logs techniques</td>
                <td className="py-3">90 jours</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Données de prospection (consentement)</td>
                <td className="py-3">3 ans à compter du dernier contact</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 6. Destinataires et sous-traitants ──────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          6. Destinataires des données et sous-traitants
        </h2>
        <p className="text-sm leading-relaxed mb-5 text-zinc-400">
          Aevia ne vend jamais vos données personnelles à des tiers. Nous faisons appel aux
          prestataires suivants, chacun lié par des garanties contractuelles conformes au RGPD :
        </p>
        <div className="space-y-4 text-sm">

          <div className="border border-zinc-800 rounded-xl p-5 bg-zinc-900/30">
            <div className="flex items-start justify-between mb-2">
              <p className="font-semibold text-white">Stripe, Inc.</p>
              <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">Paiements</span>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-2">
              Traitement de l'ensemble des paiements par carte bancaire et gestion des
              abonnements récurrents. Stripe est certifié PCI DSS niveau 1.
            </p>
            <p className="text-zinc-500 text-xs">
              Transfert international : États-Unis — Stripe adhère aux Clauses Contractuelles
              Types (CCT) de la Commission européenne.
            </p>
            <a
              href="https://stripe.com/fr/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-violet-400 hover:text-violet-300 transition-colors mt-1 inline-block"
            >
              Politique de confidentialité Stripe &rarr;
            </a>
          </div>

          <div className="border border-zinc-800 rounded-xl p-5 bg-zinc-900/30">
            <div className="flex items-start justify-between mb-2">
              <p className="font-semibold text-white">Anthropic, PBC</p>
              <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">IA — AeviaLaunch</span>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-2">
              Traitement des données du formulaire de création pour la génération de contenu
              web via l'API Claude. Les données soumises à l'API Anthropic ne sont pas utilisées
              pour entraîner les modèles (conformément à notre accord API commercial).
            </p>
            <p className="text-zinc-500 text-xs">
              Transfert international : États-Unis — Anthropic est soumis aux CCT et
              garanties équivalentes.
            </p>
            <a
              href="https://www.anthropic.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-violet-400 hover:text-violet-300 transition-colors mt-1 inline-block"
            >
              Politique de confidentialité Anthropic &rarr;
            </a>
          </div>

          <div className="border border-zinc-800 rounded-xl p-5 bg-zinc-900/30">
            <div className="flex items-start justify-between mb-2">
              <p className="font-semibold text-white">Render Services, Inc.</p>
              <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">Hébergement</span>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-2">
              Hébergement de l'ensemble des serveurs back-end (API NestJS), bases de données
              PostgreSQL et services de traitement. Les données sont hébergées dans des
              datacenters situés en Oregon, USA.
            </p>
            <p className="text-zinc-500 text-xs">
              Transfert international : États-Unis — Render opère sous les CCT européennes.
            </p>
            <a
              href="https://render.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-violet-400 hover:text-violet-300 transition-colors mt-1 inline-block"
            >
              Politique de confidentialité Render &rarr;
            </a>
          </div>

          <div className="border border-zinc-800 rounded-xl p-5 bg-zinc-900/30">
            <div className="flex items-start justify-between mb-2">
              <p className="font-semibold text-white">Vercel, Inc.</p>
              <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">CDN / Front-end</span>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-2">
              Hébergement et distribution des interfaces front-end (Next.js). Vercel agit
              comme réseau de diffusion de contenu (CDN) avec des nœuds de cache à travers le monde.
            </p>
            <p className="text-zinc-500 text-xs">
              Transfert international : États-Unis — Vercel est conforme aux CCT.
            </p>
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-violet-400 hover:text-violet-300 transition-colors mt-1 inline-block"
            >
              Politique de confidentialité Vercel &rarr;
            </a>
          </div>

          <div className="border border-zinc-800 rounded-xl p-5 bg-zinc-900/30">
            <div className="flex items-start justify-between mb-2">
              <p className="font-semibold text-white">Meta Platforms, Inc.</p>
              <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">API — Aevia Inbox</span>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-2">
              Accès aux API WhatsApp Business, Instagram Messaging et Facebook Messenger pour
              la réception et l'envoi de messages dans Aevia Inbox. Les messages transitent par
              l'infrastructure Meta avant d'être reçus par nos serveurs.
            </p>
            <p className="text-zinc-500 text-xs">
              Transfert international : États-Unis — Meta opère sous les CCT européennes.
            </p>
            <a
              href="https://www.facebook.com/privacy/policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-violet-400 hover:text-violet-300 transition-colors mt-1 inline-block"
            >
              Politique de confidentialité Meta &rarr;
            </a>
          </div>

          <div className="border border-zinc-800 rounded-xl p-5 bg-zinc-900/30">
            <div className="flex items-start justify-between mb-2">
              <p className="font-semibold text-white">Plausible Analytics</p>
              <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">Statistiques</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Mesure d'audience respectueuse de la vie privée. Plausible ne dépose pas de
              cookies, ne collecte pas d'adresses IP complètes et ne suit pas les utilisateurs
              d'un site à l'autre. Les données sont hébergées en Europe (UE).
            </p>
            <a
              href="https://plausible.io/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-violet-400 hover:text-violet-300 transition-colors mt-1 inline-block"
            >
              Politique de confidentialité Plausible &rarr;
            </a>
          </div>

        </div>
      </section>

      {/* ── 7. Transferts internationaux ────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          7. Transferts de données hors Union européenne
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Certains de nos sous-traitants (Stripe, Anthropic, Render, Vercel, Meta) sont
          établis aux États-Unis. Ces transferts sont encadrés par des{" "}
          <strong className="text-zinc-300">Clauses Contractuelles Types (CCT)</strong> adoptées
          par la Commission européenne conformément à l'article 46 du RGPD, garantissant un
          niveau de protection équivalent à celui offert au sein de l'Espace économique européen.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          Pour obtenir une copie des garanties mises en place ou plus d'informations sur ces
          transferts, vous pouvez nous contacter à{" "}
          <a href="mailto:privacy@aevia.io" className="text-violet-400 hover:text-violet-300 transition-colors">
            privacy@aevia.io
          </a>.
        </p>
      </section>

      {/* ── 8. Droits des personnes ─────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          8. Vos droits sur vos données personnelles
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-5">
          Conformément au RGPD (articles 15 à 22), vous disposez des droits suivants concernant
          vos données personnelles :
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-5">
          {[
            {
              title: "Droit d'accès (Art. 15)",
              desc: "Obtenir une copie de toutes les données personnelles que nous détenons sur vous.",
            },
            {
              title: "Droit de rectification (Art. 16)",
              desc: "Faire corriger des données inexactes ou compléter des données incomplètes.",
            },
            {
              title: "Droit à l'effacement (Art. 17)",
              desc: "Demander la suppression de vos données, sous réserve de nos obligations légales de conservation.",
            },
            {
              title: "Droit à la portabilité (Art. 20)",
              desc: "Recevoir vos données dans un format structuré et lisible par machine pour les transférer.",
            },
            {
              title: "Droit d'opposition (Art. 21)",
              desc: "Vous opposer au traitement fondé sur l'intérêt légitime ou à des fins de prospection.",
            },
            {
              title: "Droit à la limitation (Art. 18)",
              desc: "Demander la suspension temporaire du traitement de vos données dans certains cas.",
            },
          ].map((right) => (
            <div key={right.title} className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
              <p className="font-semibold text-white mb-1 text-xs">{right.title}</p>
              <p className="text-zinc-400 text-xs leading-relaxed">{right.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm">
          <p className="text-zinc-300 font-semibold mb-2">Comment exercer vos droits</p>
          <p className="text-zinc-400 leading-relaxed mb-3">
            Envoyez votre demande par email à{" "}
            <a href="mailto:privacy@aevia.io" className="text-violet-400 hover:text-violet-300 transition-colors">
              privacy@aevia.io
            </a>{" "}
            en précisant votre nom, l'adresse email associée à votre compte et la nature de
            votre demande. Nous répondrons dans un délai d'<strong className="text-white">un mois</strong> à
            compter de la réception (délai extensible à 3 mois pour les demandes complexes, avec
            notification).
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Si vous estimez que vos droits ne sont pas respectés, vous avez le droit
            d'introduire une réclamation auprès de la{" "}
            <strong className="text-white">
              Commission Nationale de l'Informatique et des Libertés (CNIL)
            </strong>{" "}
            — 3 Place de Fontenoy, 75007 Paris —{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 transition-colors"
            >
              www.cnil.fr
            </a>.
          </p>
        </div>
      </section>

      {/* ── 9. Accord de traitement des données (DPA) ───────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          9. Accord de traitement des données (DPA)
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Si vous utilisez Aevia Inbox dans le cadre professionnel et que vous transmettez des
          données de vos propres clients, vous pouvez nous demander la signature d'un{" "}
          <strong className="text-zinc-300">
            Accord de Traitement des Données (Data Processing Agreement — DPA)
          </strong>{" "}
          conforme à l'article 28 du RGPD, formalisant nos obligations réciproques en tant que
          responsable du traitement (vous) et sous-traitant (Aevia).
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          Pour obtenir un DPA, contactez-nous à{" "}
          <a href="mailto:privacy@aevia.io" className="text-violet-400 hover:text-violet-300 transition-colors">
            privacy@aevia.io
          </a>{" "}
          avec l'objet &laquo; Demande DPA &raquo;.
        </p>
      </section>

      {/* ── 10. Cookies ─────────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          10. Cookies et traceurs
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Nos sites utilisent un nombre limité de cookies. Les cookies strictement nécessaires
          au fonctionnement du service (authentification, session) ne nécessitent pas votre
          consentement. Pour les cookies analytiques, nous utilisons Plausible Analytics qui
          fonctionne sans cookies et sans collecte de données personnelles identifiables.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          Pour en savoir plus, consultez notre{" "}
          <a href="/fr/legal/cookies" className="text-violet-400 hover:text-violet-300 transition-colors">
            Politique de Cookies
          </a>.
        </p>
      </section>

      {/* ── 11. Sécurité ─────────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          11. Sécurité des données
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Aevia met en œuvre des mesures techniques et organisationnelles appropriées pour
          protéger vos données contre tout accès non autorisé, perte, destruction ou divulgation,
          notamment :
        </p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 ml-2">
          <li>Chiffrement des communications par TLS 1.2+ (HTTPS)</li>
          <li>Hachage des mots de passe (bcrypt)</li>
          <li>Authentification par JWT avec expiration de session</li>
          <li>Isolation des données par compte (multi-tenant strict)</li>
          <li>Sauvegardes chiffrées de la base de données</li>
          <li>Accès aux données de production restreint aux administrateurs</li>
          <li>Journalisation des accès aux données sensibles</li>
        </ul>
      </section>

      {/* ── 12. Modifications ────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          12. Modifications de la présente politique
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Nous pouvons mettre à jour cette Politique de Confidentialité à tout moment pour
          refléter des changements dans nos pratiques ou dans la réglementation applicable.
          En cas de modification substantielle, nous vous notifierons par email à l'adresse
          associée à votre compte au moins 30 jours avant l'entrée en vigueur des changements.
          La date de dernière mise à jour est indiquée en tête de ce document. La poursuite
          de l'utilisation de nos services après notification vaut acceptation des modifications.
        </p>
      </section>

      {/* ── 13. Contact ──────────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          13. Contact
        </h2>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm space-y-2">
          <p className="text-zinc-300 font-semibold mb-2">Pour toute question relative à cette politique :</p>
          <p className="text-zinc-400">
            <span className="text-zinc-300">Email :</span>{" "}
            <a href="mailto:privacy@aevia.io" className="text-violet-400 hover:text-violet-300 transition-colors">
              privacy@aevia.io
            </a>
          </p>
          <p className="text-zinc-400">
            <span className="text-zinc-300">Email général :</span>{" "}
            <a href="mailto:hello@aevia.io" className="text-violet-400 hover:text-violet-300 transition-colors">
              hello@aevia.io
            </a>
          </p>
          <p className="text-zinc-400">
            <span className="text-zinc-300">Responsable du traitement :</span> Valentin Milliand — Aevia, France
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="mt-12 pt-6 border-t border-zinc-800/60">
        <p className="text-xs text-zinc-600 leading-relaxed italic">
          Ce document est publié à titre informatif et constitue la politique de confidentialité
          effective d'Aevia. Pour toute question spécifique à votre situation, consultez un
          avocat ou expert juridique qualifié en droit des données personnelles.
        </p>
      </div>
    </main>
  )
}

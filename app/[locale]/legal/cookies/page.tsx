export default function CookiesPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-zinc-300">
      <p className="text-xs text-zinc-500 mb-2">Dernière mise à jour : 19 avril 2026</p>
      <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
        Politique de Cookies
      </h1>
      <p className="text-zinc-400 text-sm mb-10 leading-relaxed">
        La présente Politique de Cookies explique comment Aevia utilise les cookies et traceurs
        sur l'ensemble de ses services numériques, conformément à la directive ePrivacy
        (2002/58/CE révisée), au Règlement Général sur la Protection des Données (RGPD) et
        aux recommandations de la Commission Nationale de l'Informatique et des Libertés
        (CNIL).
      </p>

      {/* ── 1. Qu'est-ce qu'un cookie ? ──────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          1. Qu'est-ce qu'un cookie ?
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone,
          tablette) lors de la visite d'un site web. Il permet au site de mémoriser des
          informations sur votre visite et de personnaliser votre expérience.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Les cookies peuvent être de session (supprimés à la fermeture du navigateur) ou
          persistants (conservés sur votre terminal pour une durée déterminée). Ils peuvent
          être déposés directement par le site visité (cookies propriétaires) ou par des
          services tiers intégrés (cookies tiers).
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          Au sens large, le terme &laquo; cookie &raquo; dans la présente politique désigne
          également les autres technologies de traçage similaires : balises web (web beacons),
          pixels de suivi, stockage local (localStorage) et empreinte navigateur (fingerprinting).
        </p>
      </section>

      {/* ── 2. Produits concernés ────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          2. Services concernés
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-4">
          La présente politique s'applique à tous les services en ligne édités par Aevia :
        </p>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3 bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
            <span className="text-violet-400 font-bold shrink-0 text-xs">INBOX</span>
            <span className="text-zinc-400">
              <strong className="text-zinc-300">app.aevia.io</strong> — Plateforme CRM multi-canal
            </span>
          </div>
          <div className="flex items-center gap-3 bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
            <span className="text-fuchsia-400 font-bold shrink-0 text-xs">LAUNCH</span>
            <span className="text-zinc-400">
              <strong className="text-zinc-300">launch.aevia.io</strong> — Générateur de sites web IA
            </span>
          </div>
          <div className="flex items-center gap-3 bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
            <span className="text-emerald-400 font-bold shrink-0 text-xs">SECURITY</span>
            <span className="text-zinc-400">
              <strong className="text-zinc-300">security.aevia.io</strong> — Plateforme d'audit de sécurité
            </span>
          </div>
          <div className="flex items-center gap-3 bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
            <span className="text-cyan-400 font-bold shrink-0 text-xs">SITE</span>
            <span className="text-zinc-400">
              <strong className="text-zinc-300">aevia.io</strong> — Site institutionnel Aevia
            </span>
          </div>
        </div>
      </section>

      {/* ── 3. Catégories de cookies ─────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          3. Catégories de cookies utilisés
        </h2>

        {/* 3.1 Cookies strictement nécessaires */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-base font-semibold text-white">
              3.1 Cookies strictement nécessaires
            </h3>
            <span className="text-xs text-emerald-400 bg-emerald-500/10 ring-1 ring-emerald-500/20 px-2 py-0.5 rounded-full shrink-0">
              Aucun consentement requis
            </span>
          </div>
          <p className="text-sm leading-relaxed text-zinc-400 mb-4">
            Ces cookies sont indispensables au fonctionnement de nos services. Ils ne
            peuvent pas être désactivés sans compromettre l'accès aux fonctionnalités
            essentielles. Conformément à la réglementation CNIL et ePrivacy, leur dépôt
            ne nécessite pas votre consentement.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left py-2.5 pr-4 text-zinc-300 font-semibold">Nom du cookie</th>
                  <th className="text-left py-2.5 pr-4 text-zinc-300 font-semibold">Service</th>
                  <th className="text-left py-2.5 pr-4 text-zinc-300 font-semibold">Finalité</th>
                  <th className="text-left py-2.5 text-zinc-300 font-semibold">Durée</th>
                </tr>
              </thead>
              <tbody className="text-zinc-400">
                <tr className="border-b border-zinc-800/60">
                  <td className="py-2.5 pr-4 font-mono">accessToken</td>
                  <td className="py-2.5 pr-4">Tous</td>
                  <td className="py-2.5 pr-4">
                    Authentification — stocke le jeton JWT de session de l'utilisateur connecté
                  </td>
                  <td className="py-2.5">Session (fermeture navigateur)</td>
                </tr>
                <tr className="border-b border-zinc-800/60">
                  <td className="py-2.5 pr-4 font-mono">__Secure-session</td>
                  <td className="py-2.5 pr-4">Tous</td>
                  <td className="py-2.5 pr-4">
                    Maintien de la session serveur (HttpOnly, Secure, SameSite=Strict)
                  </td>
                  <td className="py-2.5">Session</td>
                </tr>
                <tr className="border-b border-zinc-800/60">
                  <td className="py-2.5 pr-4 font-mono">csrf-token</td>
                  <td className="py-2.5 pr-4">Tous</td>
                  <td className="py-2.5 pr-4">
                    Protection contre les attaques CSRF (Cross-Site Request Forgery)
                  </td>
                  <td className="py-2.5">Session</td>
                </tr>
                <tr className="border-b border-zinc-800/60">
                  <td className="py-2.5 pr-4 font-mono">locale</td>
                  <td className="py-2.5 pr-4">Tous</td>
                  <td className="py-2.5 pr-4">
                    Mémorisation de la langue sélectionnée par l'utilisateur
                  </td>
                  <td className="py-2.5">1 an</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-mono">cookie-consent</td>
                  <td className="py-2.5 pr-4">Tous</td>
                  <td className="py-2.5 pr-4">
                    Mémorisation des préférences de consentement aux cookies
                  </td>
                  <td className="py-2.5">13 mois</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3.2 Cookies analytiques */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-base font-semibold text-white">
              3.2 Cookies analytiques et de mesure d'audience
            </h3>
            <span className="text-xs text-sky-400 bg-sky-500/10 ring-1 ring-sky-500/20 px-2 py-0.5 rounded-full shrink-0">
              Sans consentement (Plausible)
            </span>
          </div>
          <p className="text-sm leading-relaxed text-zinc-400 mb-4">
            Aevia utilise <strong className="text-zinc-300">Plausible Analytics</strong> pour
            mesurer l'audience de ses services. Plausible est un outil d'analyse
            respectueux de la vie privée qui :
          </p>
          <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1.5 ml-2 mb-4">
            <li>Ne dépose <strong className="text-zinc-300">aucun cookie</strong> sur votre terminal</li>
            <li>Ne collecte pas d'adresse IP complète (troncature avant stockage)</li>
            <li>Ne suit pas les utilisateurs d'un site à l'autre</li>
            <li>Ne crée pas de profil individuel ni de compte utilisateur</li>
            <li>Fonctionne avec des données <strong className="text-zinc-300">100% anonymisées et agrégées</strong></li>
            <li>Héberge les données au sein de l'<strong className="text-zinc-300">Union européenne</strong> (Allemagne)</li>
            <li>Est conforme au RGPD sans nécessiter de bandeau de consentement selon la CNIL</li>
          </ul>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 text-sm mb-3">
            <p className="text-zinc-300 font-semibold mb-2">Données collectées par Plausible :</p>
            <ul className="list-disc list-inside text-zinc-400 space-y-1 ml-2 text-xs">
              <li>URL de la page visitée</li>
              <li>Page de provenance (referrer — domaine uniquement)</li>
              <li>Type de navigateur et système d'exploitation (agrégé)</li>
              <li>Pays de provenance (à partir de l'IP, non stockée)</li>
              <li>Type d'appareil (desktop, mobile, tablette)</li>
            </ul>
            <p className="text-zinc-500 text-xs mt-3">
              Aucune donnée permettant d'identifier personnellement un visiteur n'est collectée ni stockée.
            </p>
          </div>
          <a
            href="https://plausible.io/data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-violet-400 hover:text-violet-300 transition-colors inline-block"
          >
            Politique de données Plausible Analytics &rarr;
          </a>
        </div>

        {/* 3.3 Cookies de paiement */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-base font-semibold text-white">
              3.3 Cookies tiers — Stripe (Paiements)
            </h3>
            <span className="text-xs text-amber-400 bg-amber-500/10 ring-1 ring-amber-500/20 px-2 py-0.5 rounded-full shrink-0">
              Consentement requis
            </span>
          </div>
          <p className="text-sm leading-relaxed text-zinc-400 mb-4">
            Lors du processus de paiement, Stripe dépose des cookies nécessaires au
            traitement sécurisé des transactions et à la prévention de la fraude.
            Ces cookies sont uniquement actifs lors de l'utilisation des fonctionnalités
            de paiement.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left py-2.5 pr-4 text-zinc-300 font-semibold">Nom</th>
                  <th className="text-left py-2.5 pr-4 text-zinc-300 font-semibold">Éditeur</th>
                  <th className="text-left py-2.5 pr-4 text-zinc-300 font-semibold">Finalité</th>
                  <th className="text-left py-2.5 text-zinc-300 font-semibold">Durée</th>
                </tr>
              </thead>
              <tbody className="text-zinc-400">
                <tr className="border-b border-zinc-800/60">
                  <td className="py-2.5 pr-4 font-mono">__stripe_mid</td>
                  <td className="py-2.5 pr-4">Stripe, Inc.</td>
                  <td className="py-2.5 pr-4">Identifiant de navigateur pour la détection de fraude</td>
                  <td className="py-2.5">1 an</td>
                </tr>
                <tr className="border-b border-zinc-800/60">
                  <td className="py-2.5 pr-4 font-mono">__stripe_sid</td>
                  <td className="py-2.5 pr-4">Stripe, Inc.</td>
                  <td className="py-2.5 pr-4">Identifiant de session pour la sécurité des transactions</td>
                  <td className="py-2.5">30 minutes</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-mono">m</td>
                  <td className="py-2.5 pr-4">Stripe, Inc.</td>
                  <td className="py-2.5 pr-4">Prévention de la fraude (empreinte navigateur)</td>
                  <td className="py-2.5">2 ans</td>
                </tr>
              </tbody>
            </table>
          </div>
          <a
            href="https://stripe.com/fr/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-violet-400 hover:text-violet-300 transition-colors mt-3 inline-block"
          >
            Politique de confidentialité Stripe &rarr;
          </a>
        </div>

        {/* 3.4 Cookies Meta */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-base font-semibold text-white">
              3.4 Cookies tiers — Meta / APIs de messagerie (Aevia Inbox uniquement)
            </h3>
            <span className="text-xs text-amber-400 bg-amber-500/10 ring-1 ring-amber-500/20 px-2 py-0.5 rounded-full shrink-0">
              Consentement requis
            </span>
          </div>
          <p className="text-sm leading-relaxed text-zinc-400 mb-3">
            Dans le cadre d'Aevia Inbox, l'intégration des canaux WhatsApp, Instagram et
            Facebook Messenger nécessite une connexion aux APIs Meta. Cette connexion peut
            impliquer le dépôt de cookies Meta lors de l'authentification OAuth ou de
            l'utilisation des interfaces Meta Business.
          </p>
          <p className="text-sm leading-relaxed text-zinc-400 mb-3">
            Aevia n'utilise pas le Pixel Meta pour des fins de remarketing ou de publicité
            ciblée. Les interactions avec les APIs Meta sont limitées à la transmission des
            messages dans le cadre de l'utilisation opérationnelle d'Aevia Inbox.
          </p>
          <a
            href="https://www.facebook.com/policy/cookies/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-violet-400 hover:text-violet-300 transition-colors inline-block"
          >
            Politique de cookies Meta &rarr;
          </a>
        </div>

        {/* 3.5 LocalStorage */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-base font-semibold text-white">
              3.5 Stockage local (localStorage / sessionStorage)
            </h3>
            <span className="text-xs text-emerald-400 bg-emerald-500/10 ring-1 ring-emerald-500/20 px-2 py-0.5 rounded-full shrink-0">
              Fonctionnel — nécessaire
            </span>
          </div>
          <p className="text-sm leading-relaxed text-zinc-400 mb-4">
            Nos applications utilisent le stockage local du navigateur (distinct des cookies)
            pour améliorer les performances et l'expérience utilisateur :
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left py-2.5 pr-4 text-zinc-300 font-semibold">Clé</th>
                  <th className="text-left py-2.5 pr-4 text-zinc-300 font-semibold">Service</th>
                  <th className="text-left py-2.5 pr-4 text-zinc-300 font-semibold">Finalité</th>
                  <th className="text-left py-2.5 text-zinc-300 font-semibold">Durée</th>
                </tr>
              </thead>
              <tbody className="text-zinc-400">
                <tr className="border-b border-zinc-800/60">
                  <td className="py-2.5 pr-4 font-mono">aevia-theme</td>
                  <td className="py-2.5 pr-4">Tous</td>
                  <td className="py-2.5 pr-4">Préférence de thème (clair/sombre)</td>
                  <td className="py-2.5">Persistant</td>
                </tr>
                <tr className="border-b border-zinc-800/60">
                  <td className="py-2.5 pr-4 font-mono">aevia-inbox-draft</td>
                  <td className="py-2.5 pr-4">Inbox</td>
                  <td className="py-2.5 pr-4">Sauvegarde automatique des brouillons de messages</td>
                  <td className="py-2.5">Session</td>
                </tr>
                <tr className="border-b border-zinc-800/60">
                  <td className="py-2.5 pr-4 font-mono">aevia-sidebar-state</td>
                  <td className="py-2.5 pr-4">Inbox</td>
                  <td className="py-2.5 pr-4">État du panneau latéral (ouvert/fermé)</td>
                  <td className="py-2.5">Persistant</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-mono">aevia-audit-history</td>
                  <td className="py-2.5 pr-4">Security</td>
                  <td className="py-2.5 pr-4">Historique local des URLs auditées récemment</td>
                  <td className="py-2.5">30 jours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 4. Base légale ───────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          4. Base légale et consentement
        </h2>
        <div className="space-y-4 text-sm">
          <div className="bg-zinc-900/40 border border-emerald-800/40 rounded-xl p-5">
            <p className="font-semibold text-emerald-400 mb-2">
              Cookies exemptés de consentement (Article 82 de la loi Informatique et Libertés)
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Conformément aux lignes directrices de la CNIL du 17 septembre 2020, les cookies
              strictement nécessaires au fonctionnement du service et les outils de mesure
              d'audience utilisant des données anonymisées (comme Plausible Analytics dans notre
              configuration) sont exemptés de consentement préalable.
            </p>
          </div>
          <div className="bg-zinc-900/40 border border-amber-800/40 rounded-xl p-5">
            <p className="font-semibold text-amber-400 mb-2">
              Cookies soumis à consentement (RGPD Art. 6.1.a)
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Les cookies tiers (Stripe hors transaction, Meta) nécessitent votre consentement
              préalable, libre, éclairé et spécifique. Ce consentement est recueilli via notre
              bandeau d'information cookies lors de votre première visite. Vous pouvez
              retirer votre consentement à tout moment.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Durée de conservation ─────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          5. Durée de conservation des cookies
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Conformément à la recommandation de la CNIL, aucun cookie déposé par Aevia n'a
          une durée de vie supérieure à <strong className="text-zinc-300">13 mois</strong>.
          Passé ce délai, votre consentement est à nouveau sollicité.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          Les cookies de session (sans durée explicite) sont automatiquement supprimés
          à la fermeture de votre navigateur. Les durées de conservation spécifiques à
          chaque cookie sont détaillées dans les tableaux de la section 3.
        </p>
      </section>

      {/* ── 6. Gestion des cookies ───────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          6. Comment gérer vos préférences de cookies
        </h2>

        <h3 className="text-base font-semibold text-white mb-2 mt-4">6.1 Via notre gestionnaire de consentement</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-4">
          Vous pouvez à tout moment modifier vos préférences en matière de cookies en
          cliquant sur le lien &laquo; Gérer mes cookies &raquo; disponible dans le pied de
          page de chacun de nos services. Vos préférences sont mémorisées pendant 13 mois.
        </p>

        <h3 className="text-base font-semibold text-white mb-2 mt-5">6.2 Via les paramètres de votre navigateur</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Vous pouvez configurer votre navigateur pour accepter, refuser ou supprimer les
          cookies à tout moment. Notez que la désactivation des cookies nécessaires au
          fonctionnement peut altérer votre accès aux services Aevia (notamment
          l'authentification).
        </p>
        <div className="space-y-2 text-sm">
          {[
            { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
            { name: "Mozilla Firefox", url: "https://support.mozilla.org/fr/kb/activer-desactiver-cookies" },
            { name: "Safari (Apple)", url: "https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" },
            { name: "Microsoft Edge", url: "https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
            { name: "Opera", url: "https://help.opera.com/en/latest/web-preferences/#cookies" },
          ].map((browser) => (
            <div key={browser.name} className="flex items-center gap-3 py-2 border-b border-zinc-800/60 last:border-0">
              <span className="text-zinc-300 text-sm w-40 shrink-0">{browser.name}</span>
              <a
                href={browser.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 transition-colors text-xs"
              >
                Guide officiel &rarr;
              </a>
            </div>
          ))}
        </div>

        <h3 className="text-base font-semibold text-white mb-2 mt-6">6.3 Opposition au suivi publicitaire</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Aevia n'utilise pas de cookies publicitaires ou de remarketing à ce jour.
          Si vous souhaitez vous opposer au suivi comportemental par des tiers en général,
          vous pouvez utiliser les outils suivants :
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-3">
            <span className="text-zinc-400 w-56 shrink-0">Your Online Choices (UE)</span>
            <a
              href="https://www.youronlinechoices.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 transition-colors text-xs"
            >
              youronlinechoices.eu &rarr;
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-400 w-56 shrink-0">NAI Opt-Out (USA)</span>
            <a
              href="https://optout.networkadvertising.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 transition-colors text-xs"
            >
              networkadvertising.org &rarr;
            </a>
          </div>
        </div>

        <h3 className="text-base font-semibold text-white mb-2 mt-6">6.4 Opt-out Plausible Analytics</h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          Plausible Analytics n'utilisant pas de cookies et travaillant uniquement avec
          des données anonymisées, il n'existe pas de mécanisme d'opt-out individuel au
          sens traditionnel. Cependant, si votre navigateur envoie le signal{" "}
          <strong className="text-zinc-300">Do Not Track (DNT)</strong>, Plausible le
          respecte automatiquement en excluant votre visite des statistiques. Les utilisateurs
          munis d'un bloqueur de publicité (uBlock Origin, AdGuard, etc.) ne sont généralement
          pas comptabilisés.
        </p>
      </section>

      {/* ── 7. Conformité CNIL ───────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          7. Conformité CNIL et ePrivacy
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-4">
          La présente politique de cookies a été rédigée en conformité avec :
        </p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1.5 ml-2 mb-4">
          <li>
            Les <strong className="text-zinc-300">Lignes directrices de la CNIL</strong> du
            17 septembre 2020 sur les cookies et autres traceurs
          </li>
          <li>
            La <strong className="text-zinc-300">Recommandation CNIL</strong> du 17 septembre 2020
            relative aux modalités de recueil du consentement
          </li>
          <li>
            L&apos;article <strong className="text-zinc-300">82 de la loi Informatique et Libertés</strong>{" "}
            (modifiée par l'ordonnance 2018-1125 transposant le RGPD)
          </li>
          <li>
            La <strong className="text-zinc-300">Directive ePrivacy 2002/58/CE</strong> (révisée
            par la Directive 2009/136/CE)
          </li>
          <li>
            Le <strong className="text-zinc-300">RGPD — Règlement (UE) 2016/679</strong>
          </li>
        </ul>
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 text-sm">
          <p className="text-zinc-300 font-semibold mb-2">Audit de conformité cookies</p>
          <p className="text-zinc-400 leading-relaxed">
            Aevia s'engage à auditer régulièrement les cookies déposés sur ses services
            (au minimum annuellement) et à mettre à jour la présente politique en conséquence.
            En cas de détection d'un cookie non référencé, vous pouvez nous le signaler à{" "}
            <a href="mailto:privacy@aevia.io" className="text-violet-400 hover:text-violet-300 transition-colors">
              privacy@aevia.io
            </a>.
          </p>
        </div>
      </section>

      {/* ── 8. Droits et réclamations ────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          8. Vos droits et voies de recours
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Vous disposez d'un droit d'accès, de rectification et de suppression concernant
          les données collectées via les cookies. Pour exercer ces droits :
        </p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1.5 ml-2 mb-4">
          <li>
            Contactez-nous à{" "}
            <a href="mailto:privacy@aevia.io" className="text-violet-400 hover:text-violet-300 transition-colors">
              privacy@aevia.io
            </a>
          </li>
          <li>Consultez notre Politique de Confidentialité pour vos droits RGPD complets</li>
          <li>
            En cas de désaccord, saisissez la{" "}
            <strong className="text-zinc-300">CNIL</strong> :{" "}
            <a
              href="https://www.cnil.fr/fr/vous-souhaitez-contacter-la-cnil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 transition-colors"
            >
              cnil.fr &rarr;
            </a>
          </li>
        </ul>
      </section>

      {/* ── 9. Modifications ─────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          9. Modifications de la politique de cookies
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          La présente politique peut être modifiée à tout moment pour refléter l'ajout de
          nouveaux cookies, des changements réglementaires ou des mises à jour de nos
          pratiques. En cas de modification substantielle affectant les cookies soumis à
          consentement, votre accord sera à nouveau sollicité. La date de dernière mise à
          jour est indiquée en tête de ce document.
        </p>
      </section>

      {/* ── 10. Contact ──────────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          10. Contact
        </h2>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm space-y-2">
          <p className="text-zinc-300 font-semibold mb-2">
            Pour toute question concernant les cookies Aevia :
          </p>
          <p className="text-zinc-400">
            <span className="text-zinc-300">Email :</span>{" "}
            <a href="mailto:privacy@aevia.io" className="text-violet-400 hover:text-violet-300 transition-colors">
              privacy@aevia.io
            </a>
          </p>
          <p className="text-zinc-400">
            <span className="text-zinc-300">Responsable :</span> Valentin Milliand — Aevia, France
          </p>
          <div className="pt-2 border-t border-zinc-800 mt-2 space-y-1">
            <p className="text-zinc-500 text-xs">Documents liés :</p>
            <a href="/fr/legal/privacy" className="text-violet-400 hover:text-violet-300 transition-colors text-xs block">
              Politique de Confidentialité &rarr;
            </a>
            <a href="/fr/legal/terms" className="text-violet-400 hover:text-violet-300 transition-colors text-xs block">
              Conditions Générales d'Utilisation et de Vente &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="mt-12 pt-6 border-t border-zinc-800/60">
        <p className="text-xs text-zinc-600 leading-relaxed italic">
          Ce document est publié à titre informatif et constitue la politique de cookies
          effective d'Aevia. Cette politique a été rédigée en conformité avec les exigences
          de la CNIL et du RGPD à la date indiquée en en-tête. Pour tout conseil juridique
          spécifique à votre situation, consultez un avocat qualifié en droit du numérique.
        </p>
      </div>
    </main>
  )
}

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-zinc-300">
      <p className="text-xs text-zinc-500 mb-2">Dernière mise à jour : 19 avril 2026</p>
      <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
        Conditions Générales d'Utilisation et de Vente
      </h1>
      <p className="text-zinc-400 text-sm mb-10 leading-relaxed">
        Les présentes Conditions Générales d'Utilisation et de Vente (CGU/CGV) régissent
        l'accès et l'utilisation des services proposés par Aevia ainsi que les relations
        commerciales entre Aevia et ses clients. En accédant à nos services, vous acceptez
        sans réserve les présentes conditions.
      </p>

      {/* ── 1. Éditeur ───────────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          1. Éditeur des services
        </h2>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm space-y-1.5">
          <p>
            <span className="text-white font-semibold">Aevia</span> — entreprise individuelle
            (auto-entrepreneur)
          </p>
          <p><span className="text-zinc-400">Représentant légal :</span> Valentin Milliand</p>
          <p><span className="text-zinc-400">Pays d'établissement :</span> France</p>
          <p><span className="text-zinc-400">Statut :</span> Auto-entrepreneur, soumis au régime micro-entreprise</p>
          <p>
            <span className="text-zinc-400">Contact commercial :</span>{" "}
            <a href="mailto:hello@aevia.io" className="text-violet-400 hover:text-violet-300 transition-colors">
              hello@aevia.io
            </a>
          </p>
          <p>
            <span className="text-zinc-400">Site principal :</span>{" "}
            <a href="https://aevia.io" className="text-violet-400 hover:text-violet-300 transition-colors">
              aevia.io
            </a>
          </p>
        </div>
        <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
          Aevia édite des services numériques exclusivement à destination d'une clientèle
          professionnelle (B2B). Les présentes CGU/CGV sont conclues entre Aevia et toute personne
          physique ou morale agissant dans le cadre de son activité professionnelle (ci-après
          le &laquo; Client &raquo;). La réglementation applicable aux consommateurs (notamment
          certaines dispositions du Code de la consommation) peut néanmoins s'appliquer si le
          Client est une personne physique utilisant les services à des fins non strictement
          professionnelles.
        </p>
      </section>

      {/* ── 2. Description des services ──────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          2. Description des services
        </h2>

        <h3 className="text-base font-semibold text-white mb-3 mt-4">2.1 Aevia Inbox — CRM multi-canal</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Aevia Inbox (app.aevia.io) est une plateforme SaaS de gestion de la relation client
          permettant aux entreprises de centraliser et gérer leurs conversations provenant de
          WhatsApp, Instagram Messaging, Facebook Messenger et email dans une interface unique.
          Le service inclut :
        </p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-4 ml-2">
          <li>Boîte de réception unifiée multi-canal</li>
          <li>Gestion des contacts et historique des conversations</li>
          <li>Réponses automatisées assistées par IA</li>
          <li>Tableau de bord analytique (volumes, performances, temps de réponse)</li>
          <li>Gestion multi-utilisateurs selon le plan souscrit</li>
        </ul>
        <p className="text-sm text-zinc-400 leading-relaxed mb-2">
          L'accès à WhatsApp Business API requiert une approbation préalable de Meta. Aevia
          accompagne le Client dans cette démarche mais ne peut garantir l'obtention de
          l'approbation, qui relève de la décision exclusive de Meta.
        </p>

        <h3 className="text-base font-semibold text-white mb-3 mt-6">2.2 AeviaLaunch — Création de site web assistée par IA</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          AeviaLaunch (launch.aevia.io) est un service de création de sites web professionnel
          alliant génération de contenu par intelligence artificielle (Claude AI) et
          développement artisanal. Le service comprend :
        </p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-3 ml-2">
          <li>Génération automatique du contenu (textes, structure) à partir du formulaire renseigné par le Client</li>
          <li>Développement et personnalisation du site sur la base d'un template au choix</li>
          <li>Déploiement et mise en ligne du site livrable</li>
          <li>Maintenance mensuelle optionnelle (mises à jour techniques, support)</li>
        </ul>
        <p className="text-sm text-zinc-400 leading-relaxed bg-zinc-900/40 border border-zinc-800 rounded-lg p-4">
          <strong className="text-zinc-300">Nature de la prestation :</strong> AeviaLaunch constitue
          une prestation de service en deux temps — une composante de création automatisée (IA)
          et une composante de prestation artisanale (développement, intégration, déploiement).
          Le délai de livraison indicatif est de 7 jours ouvrés à compter de la réception du
          formulaire complet et du paiement.
        </p>

        <h3 className="text-base font-semibold text-white mb-3 mt-6">2.3 AeviaSecurity — Audit de sécurité automatisé</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          AeviaSecurity (security.aevia.io) est une plateforme d'analyse automatisée de la
          sécurité des sites web. Le service effectue des audits portant sur :
        </p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-3 ml-2">
          <li>Validité et configuration des certificats SSL/TLS</li>
          <li>Enregistrements DNS et configuration de sécurité email (SPF, DKIM, DMARC)</li>
          <li>En-têtes de sécurité HTTP (CSP, HSTS, X-Frame-Options, etc.)</li>
          <li>Performances de chargement (Core Web Vitals)</li>
          <li>Score de sécurité global sur 100 avec recommandations</li>
        </ul>
        <p className="text-sm text-zinc-400 leading-relaxed bg-zinc-900/40 border border-zinc-800 rounded-lg p-4">
          <strong className="text-zinc-300">Limitation importante :</strong> AeviaSecurity réalise
          des analyses non-intrusives de données publiques. Le service ne constitue pas un test
          d'intrusion (pentest) et ne garantit pas l'absence de vulnérabilité. Les résultats
          sont fournis à titre informatif et ne sauraient engager la responsabilité d'Aevia
          en cas de faille non détectée.
        </p>
      </section>

      {/* ── 3. Inscription et compte ──────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          3. Création de compte et conditions d'accès
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          L'accès aux services d'Aevia nécessite la création d'un compte. En créant un compte,
          le Client s'engage à :
        </p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-4 ml-2">
          <li>Fournir des informations exactes, complètes et à jour</li>
          <li>Maintenir la confidentialité de ses identifiants de connexion</li>
          <li>Notifier immédiatement Aevia de tout accès non autorisé à son compte</li>
          <li>Ne pas créer plus d'un compte par entité juridique sans accord préalable</li>
          <li>Être âgé d'au moins 18 ans ou représenter légalement une personne morale</li>
        </ul>
        <p className="text-sm leading-relaxed text-zinc-400">
          Le Client est seul responsable des activités réalisées depuis son compte. Aevia ne
          saurait être tenu responsable des dommages résultant d'une utilisation non autorisée
          du compte du Client.
        </p>
      </section>

      {/* ── 4. Tarifs et paiement ────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          4. Tarifs et conditions de paiement
        </h2>

        <h3 className="text-base font-semibold text-white mb-3 mt-4">4.1 Grilles tarifaires</h3>

        <div className="space-y-4 text-sm mb-6">
          <div>
            <p className="text-white font-semibold mb-2">Aevia Inbox — Abonnement mensuel</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-2 pr-4 text-zinc-300 font-medium">Plan</th>
                    <th className="text-left py-2 pr-4 text-zinc-300 font-medium">Tarif mensuel HT</th>
                    <th className="text-left py-2 text-zinc-300 font-medium">Caractéristiques principales</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-zinc-800/60">
                    <td className="py-2 pr-4">Starter</td>
                    <td className="py-2 pr-4">59 €/mois</td>
                    <td className="py-2">1 canal, 1 utilisateur</td>
                  </tr>
                  <tr className="border-b border-zinc-800/60">
                    <td className="py-2 pr-4">Pro</td>
                    <td className="py-2 pr-4">159 €/mois</td>
                    <td className="py-2">3 canaux, 5 utilisateurs, IA activée</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Business</td>
                    <td className="py-2 pr-4">499 €/mois</td>
                    <td className="py-2">Canaux illimités, utilisateurs illimités, SLA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">AeviaLaunch — Paiement unique</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-2 pr-4 text-zinc-300 font-medium">Formule</th>
                    <th className="text-left py-2 pr-4 text-zinc-300 font-medium">Tarif HT</th>
                    <th className="text-left py-2 text-zinc-300 font-medium">Inclus</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-zinc-800/60">
                    <td className="py-2 pr-4">Essentiel</td>
                    <td className="py-2 pr-4">599 €</td>
                    <td className="py-2">Site vitrine, 5 pages, déploiement</td>
                  </tr>
                  <tr className="border-b border-zinc-800/60">
                    <td className="py-2 pr-4">Pro</td>
                    <td className="py-2 pr-4">899 €</td>
                    <td className="py-2">Site complet, blog, formulaires, SEO de base</td>
                  </tr>
                  <tr className="border-b border-zinc-800/60">
                    <td className="py-2 pr-4">Business</td>
                    <td className="py-2 pr-4">1 499 €</td>
                    <td className="py-2">E-commerce, intégrations, SEO avancé</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Maintenance</td>
                    <td className="py-2 pr-4">59 €/mois</td>
                    <td className="py-2">Mises à jour, sauvegardes, support prioritaire</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">AeviaSecurity — Abonnement mensuel</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-2 pr-4 text-zinc-300 font-medium">Plan</th>
                    <th className="text-left py-2 pr-4 text-zinc-300 font-medium">Tarif mensuel HT</th>
                    <th className="text-left py-2 text-zinc-300 font-medium">Audits inclus</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-zinc-800/60">
                    <td className="py-2 pr-4">Gratuit</td>
                    <td className="py-2 pr-4">0 €</td>
                    <td className="py-2">3 audits/mois, rapport basique</td>
                  </tr>
                  <tr className="border-b border-zinc-800/60">
                    <td className="py-2 pr-4">Starter</td>
                    <td className="py-2 pr-4">29 €/mois</td>
                    <td className="py-2">20 audits/mois, rapport PDF, monitoring</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Pro</td>
                    <td className="py-2 pr-4">89 €/mois</td>
                    <td className="py-2">Audits illimités, alertes, API, multi-domaines</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <h3 className="text-base font-semibold text-white mb-2 mt-6">4.2 Modalités de paiement</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          L'ensemble des paiements est traité par <strong className="text-zinc-300">Stripe</strong>,
          plateforme de paiement en ligne certifiée PCI DSS niveau 1. Les modes de paiement
          acceptés sont les cartes bancaires (Visa, Mastercard, American Express) et les
          prélèvements SEPA pour les abonnements récurrents.
        </p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-4 ml-2">
          <li>
            <strong className="text-zinc-300">Abonnements (Inbox, Security, maintenance Launch) :</strong>{" "}
            facturation mensuelle automatique à la date anniversaire de souscription
          </li>
          <li>
            <strong className="text-zinc-300">Paiements uniques (AeviaLaunch) :</strong>{" "}
            paiement intégral requis avant le démarrage de la prestation
          </li>
          <li>
            Tous les tarifs sont indiqués hors taxes (HT). La TVA applicable est celle en
            vigueur au moment de la facturation selon la réglementation française
          </li>
          <li>
            En cas d'échec de prélèvement, Aevia se réserve le droit de suspendre l'accès
            au service après 7 jours sans régularisation
          </li>
        </ul>

        <h3 className="text-base font-semibold text-white mb-2 mt-6">4.3 Modification des tarifs</h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          Aevia se réserve le droit de modifier ses tarifs. Toute modification tarifaire sera
          notifiée aux clients actifs par email au moins <strong className="text-zinc-300">30 jours</strong>{" "}
          avant son entrée en vigueur. Le Client dispose de ce délai pour résilier son abonnement
          sans frais s'il refuse les nouveaux tarifs.
        </p>
      </section>

      {/* ── 5. Droit de rétractation et remboursement ────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          5. Droit de rétractation et politique de remboursement
        </h2>

        <h3 className="text-base font-semibold text-white mb-2 mt-4">5.1 Droit de rétractation légal</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Conformément aux articles L.221-18 et suivants du Code de la consommation (applicable
          aux personnes physiques n'agissant pas à titre strictement professionnel), vous
          disposez d'un <strong className="text-zinc-300">délai de 14 jours</strong> à compter
          de la souscription pour exercer votre droit de rétractation, sans avoir à justifier
          de motifs.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Pour exercer ce droit, contactez-nous à{" "}
          <a href="mailto:hello@aevia.io" className="text-violet-400 hover:text-violet-300 transition-colors">
            hello@aevia.io
          </a>{" "}
          avec l'objet &laquo; Exercice du droit de rétractation &raquo; en précisant votre
          nom et la date de souscription.
        </p>
        <p className="text-sm text-zinc-400 bg-amber-900/20 border border-amber-800/40 rounded-lg p-4">
          <strong className="text-amber-300">Renonciation au droit de rétractation :</strong>{" "}
          Conformément à l'article L.221-28 du Code de la consommation, en accédant au service
          avant l'expiration du délai de 14 jours, vous reconnaissez avoir expressément demandé
          l'exécution immédiate du contrat et renoncez à votre droit de rétractation pour la
          partie du service déjà fournie.
        </p>

        <h3 className="text-base font-semibold text-white mb-2 mt-6">5.2 Politique de remboursement pour les abonnements</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Pour les abonnements Aevia Inbox et AeviaSecurity :
        </p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1.5 ml-2 mb-3">
          <li>
            <strong className="text-zinc-300">Dans les 14 premiers jours</strong> suivant la
            première souscription : remboursement intégral accordé sur demande, sans justification
          </li>
          <li>
            <strong className="text-zinc-300">Après 14 jours :</strong> aucun remboursement
            partiel pour la période en cours. La résiliation prend effet à la fin de la période
            de facturation mensuelle en cours
          </li>
          <li>
            Les périodes partielles ne donnent lieu à aucun remboursement au prorata
          </li>
        </ul>

        <h3 className="text-base font-semibold text-white mb-2 mt-6">5.3 Politique de remboursement pour AeviaLaunch</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-2">
          La prestation AeviaLaunch étant une prestation de services à la demande :
        </p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1.5 ml-2">
          <li>
            <strong className="text-zinc-300">Avant le démarrage de la prestation :</strong>{" "}
            remboursement intégral possible dans les 14 jours suivant le paiement, si aucun
            travail n'a été entamé
          </li>
          <li>
            <strong className="text-zinc-300">Après démarrage :</strong> aucun remboursement
            n'est possible une fois la phase de génération IA et/ou de développement commencée,
            la prestation étant personnalisée et non réutilisable
          </li>
          <li>
            <strong className="text-zinc-300">Après livraison :</strong> aucun remboursement
            sur les prestations réalisées et livrées, sauf défaut de conformité majeur
            (non-respect des spécifications validées par les deux parties)
          </li>
          <li>
            Le forfait de maintenance mensuel (59 €/mois) peut être résilié à tout moment
            avec effet à la fin du mois en cours
          </li>
        </ul>
      </section>

      {/* ── 6. Obligations du client ──────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          6. Obligations et responsabilités du Client
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Le Client s'engage à utiliser les services d'Aevia dans le respect des lois et
          réglementations applicables, notamment :
        </p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1.5 ml-2 mb-4">
          <li>Ne pas utiliser les services à des fins illicites, frauduleuses ou contraires à l'ordre public</li>
          <li>
            Respecter les conditions d'utilisation des plateformes tierces (Meta WhatsApp Business,
            Instagram, Facebook Messenger) et ne transmettre des messages qu'à des contacts
            ayant donné leur consentement
          </li>
          <li>
            Respecter la législation applicable en matière de protection des données (RGPD)
            vis-à-vis de ses propres clients finaux dans le cadre d'Aevia Inbox
          </li>
          <li>
            Ne pas soumettre à AeviaSecurity des URLs ou domaines dont il n'est pas
            propriétaire ou qu'il n'est pas autorisé à auditer
          </li>
          <li>
            Fournir des informations exactes et complètes pour la prestation AeviaLaunch et
            garantir disposer des droits sur les contenus transmis (textes, images, logos)
          </li>
          <li>Ne pas tenter de contourner les limitations techniques ou de sécurité des services</li>
          <li>Ne pas revendre, louer ou sous-licencier l'accès aux services sans accord écrit préalable</li>
        </ul>
      </section>

      {/* ── 7. Utilisations interdites ────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          7. Utilisations interdites
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Il est formellement interdit d'utiliser les services d'Aevia pour :
        </p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1.5 ml-2">
          <li>Envoyer des messages non sollicités (spam) ou du contenu à caractère publicitaire sans consentement</li>
          <li>Diffuser des contenus illicites, haineux, discriminatoires, violents ou pornographiques</li>
          <li>Harceler, menacer ou porter atteinte à la dignité de toute personne</li>
          <li>Collecter des données personnelles sans base légale valide</li>
          <li>
            Effectuer des tests d'intrusion, du scraping ou des attaques de type DoS/DDoS
            (y compris via AeviaSecurity sur des cibles non autorisées)
          </li>
          <li>Contourner les mesures de sécurité, décompiler ou faire de l'ingénierie inverse des services</li>
          <li>
            Utiliser les services dans des secteurs réglementés (médical, juridique, financier)
            sans se conformer aux réglementations sectorielles applicables
          </li>
          <li>Usurper l'identité d'Aevia ou de tiers</li>
        </ul>
        <p className="text-sm text-zinc-400 mt-4 bg-zinc-900/40 border border-zinc-800 rounded-lg p-4">
          Aevia se réserve le droit de suspendre immédiatement et sans préavis tout compte en
          violation de ces interdictions, et de signaler les comportements illicites aux autorités
          compétentes.
        </p>
      </section>

      {/* ── 8. Propriété intellectuelle ──────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          8. Propriété intellectuelle
        </h2>

        <h3 className="text-base font-semibold text-white mb-2 mt-4">8.1 Droits d'Aevia</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-4">
          L'ensemble des éléments constitutifs des services Aevia (code source, interfaces,
          algorithmes, marques, logos, noms de domaine, bases de données) est la propriété
          exclusive d'Aevia ou de ses concédants de licence et est protégé par les lois
          relatives à la propriété intellectuelle. Toute reproduction, représentation,
          modification ou exploitation non autorisée est formellement interdite.
        </p>

        <h3 className="text-base font-semibold text-white mb-2 mt-4">8.2 Contenus du Client</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-4">
          Le Client conserve l'intégralité de ses droits de propriété intellectuelle sur
          les contenus qu'il soumet à nos services (textes, images, données clients, noms
          de domaine). En soumettant ces contenus, le Client accorde à Aevia une licence
          non exclusive, limitée à la durée du contrat, aux seules fins d'exécution des
          services souscrits.
        </p>

        <h3 className="text-base font-semibold text-white mb-2 mt-4">8.3 Propriété du site livré (AeviaLaunch)</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-2">
          À l'issue du paiement intégral de la prestation AeviaLaunch :
        </p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1.5 ml-2">
          <li>
            Le <strong className="text-zinc-300">contenu généré</strong> (textes, structure,
            visuels créés pour le projet) est transféré au Client, qui en devient l'unique
            propriétaire
          </li>
          <li>
            Le <strong className="text-zinc-300">code source</strong> du site livré est
            transféré au Client avec une licence d'utilisation permanente et exclusive pour
            son usage
          </li>
          <li>
            Les <strong className="text-zinc-300">bibliothèques open-source</strong> utilisées
            restent soumises à leurs licences respectives (MIT, Apache 2.0, etc.)
          </li>
          <li>
            Les <strong className="text-zinc-300">templates Aevia</strong> sous-jacents sont
            licenciés au Client pour son usage propre mais ne peuvent être revendus ni
            redistribués
          </li>
        </ul>
      </section>

      {/* ── 9. Disponibilité et SLA ───────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          9. Disponibilité des services
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Aevia s'engage à maintenir une disponibilité maximale de ses services, sans garantir
          toutefois une disponibilité de 100%. Les services peuvent être temporairement
          interrompus pour :
        </p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 ml-2 mb-4">
          <li>Maintenance planifiée (notifiée 48h à l'avance dans la mesure du possible)</li>
          <li>Incidents techniques ou de sécurité nécessitant une intervention urgente</li>
          <li>Événements de force majeure</li>
          <li>Défaillances de prestataires tiers (hébergeurs, APIs Meta, Stripe)</li>
        </ul>
        <p className="text-sm leading-relaxed text-zinc-400">
          Pour le plan Business d'Aevia Inbox, un accord de niveau de service (SLA) spécifique
          avec engagement de disponibilité est disponible sur demande.
        </p>
      </section>

      {/* ── 10. Limitation de responsabilité ─────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          10. Limitation de responsabilité
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-4">
          Dans les limites autorisées par la loi française, la responsabilité d'Aevia est
          expressément limitée comme suit :
        </p>
        <div className="space-y-3 text-sm">
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
            <p className="font-semibold text-white mb-1">Plafond d'indemnisation</p>
            <p className="text-zinc-400 leading-relaxed">
              La responsabilité totale d'Aevia au titre d'un contrat ne peut excéder le montant
              des sommes effectivement versées par le Client au cours des 12 derniers mois
              précédant l'événement dommageable.
            </p>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
            <p className="font-semibold text-white mb-1">Exclusions</p>
            <p className="text-zinc-400 leading-relaxed">
              Aevia ne saurait être tenu responsable des dommages indirects, pertes de chiffre
              d'affaires, pertes de données, atteinte à l'image, perte de clientèle ou tout
              autre préjudice indirect, même si Aevia avait été averti de la possibilité d'un
              tel dommage.
            </p>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
            <p className="font-semibold text-white mb-1">Tiers</p>
            <p className="text-zinc-400 leading-relaxed">
              Aevia n'est pas responsable des dysfonctionnements, interruptions ou modifications
              des APIs tierces (Meta WhatsApp, Instagram, Stripe, Anthropic) qui pourraient
              affecter la disponibilité ou les fonctionnalités des services.
            </p>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
            <p className="font-semibold text-white mb-1">Contenu généré par IA (AeviaLaunch)</p>
            <p className="text-zinc-400 leading-relaxed">
              Le contenu généré automatiquement par l'IA est fourni à titre de base de travail.
              Le Client est seul responsable de vérifier l'exactitude, la légalité et la
              pertinence du contenu avant publication. Aevia n'assume aucune responsabilité
              pour les inexactitudes factuelles dans le contenu généré.
            </p>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
            <p className="font-semibold text-white mb-1">AeviaSecurity — Résultats d'audit</p>
            <p className="text-zinc-400 leading-relaxed">
              Les rapports d'audit sont fournis à titre informatif. Aevia ne garantit pas
              l'exhaustivité des vulnérabilités détectées et ne saurait être tenu responsable
              d'une faille non identifiée par l'audit automatisé.
            </p>
          </div>
        </div>
      </section>

      {/* ── 11. Résiliation ───────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          11. Résiliation et clôture de compte
        </h2>

        <h3 className="text-base font-semibold text-white mb-2 mt-4">11.1 Résiliation à l'initiative du Client</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Le Client peut résilier son abonnement à tout moment depuis son espace de gestion
          ou en contactant{" "}
          <a href="mailto:hello@aevia.io" className="text-violet-400 hover:text-violet-300 transition-colors">
            hello@aevia.io
          </a>.
          La résiliation prend effet à la fin de la période de facturation mensuelle en cours.
          Aucun remboursement au prorata n'est appliqué.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400 mb-4">
          Après résiliation, les données du compte sont conservées pendant 6 mois pour
          permettre une éventuelle réactivation, puis définitivement supprimées. Le Client peut
          demander la suppression immédiate en contactant{" "}
          <a href="mailto:privacy@aevia.io" className="text-violet-400 hover:text-violet-300 transition-colors">
            privacy@aevia.io
          </a>.
        </p>

        <h3 className="text-base font-semibold text-white mb-2 mt-4">11.2 Résiliation à l'initiative d'Aevia</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-2">
          Aevia peut suspendre ou résilier l'accès d'un Client dans les cas suivants :
        </p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 ml-2 mb-3">
          <li>Violation des présentes CGU/CGV ou des politiques d'utilisation acceptable</li>
          <li>Non-paiement persistant après mise en demeure</li>
          <li>Comportement abusif, frauduleux ou illicite</li>
          <li>
            Violation des conditions d'utilisation des plateformes tierces (Meta, Stripe)
            entraînant une sanction à l'encontre du compte Aevia
          </li>
          <li>Décision judiciaire ou administrative l'imposant</li>
        </ul>
        <p className="text-sm leading-relaxed text-zinc-400">
          En cas de résiliation pour violation grave, Aevia peut procéder sans préavis. Dans
          les autres cas, un préavis de 15 jours est accordé au Client pour régulariser sa
          situation. En cas de résiliation de la part d'Aevia pour un motif autre qu'une
          violation du Client, les sommes versées pour la période non consommée sont remboursées.
        </p>
      </section>

      {/* ── 12. Modifications des CGU ─────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          12. Modifications des présentes conditions
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Aevia se réserve le droit de modifier les présentes CGU/CGV à tout moment. Toute
          modification substantielle sera notifiée par email aux Clients actifs au moins
          30 jours avant son entrée en vigueur. La poursuite de l'utilisation des services
          après ce délai vaut acceptation des nouvelles conditions. En cas de refus, le Client
          peut résilier son abonnement sans frais dans le délai imparti.
        </p>
      </section>

      {/* ── 13. Force majeure ─────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          13. Force majeure
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Aucune partie ne pourra être tenue responsable d'un manquement à ses obligations
          contractuelles résultant d'un événement de force majeure au sens de l'article 1218
          du Code civil français, notamment : catastrophes naturelles, grèves générales,
          pannes majeures d'infrastructure internet, décisions gouvernementales, pandémies,
          ou actes de cyberguerre à grande échelle. La partie affectée devra notifier l'autre
          partie dans les meilleurs délais.
        </p>
      </section>

      {/* ── 14. Droit applicable et juridiction ──────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          14. Droit applicable et juridiction compétente
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          Les présentes CGU/CGV sont régies exclusivement par le{" "}
          <strong className="text-zinc-300">droit français</strong>.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          En cas de litige relatif à la formation, l'interprétation, l'exécution ou la
          résiliation des présentes conditions, les parties s'engagent à tenter une résolution
          amiable dans un délai de 30 jours à compter de la notification du différend.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          À défaut de résolution amiable, tout litige sera soumis à la compétence exclusive
          des <strong className="text-zinc-300">tribunaux français compétents</strong> selon
          les règles de compétence de droit commun.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          Pour les litiges avec des consommateurs (personnes physiques non professionnelles),
          et conformément à l'article L.612-1 du Code de la consommation, vous pouvez
          recourir gratuitement à un médiateur de la consommation. Nous contacter à{" "}
          <a href="mailto:hello@aevia.io" className="text-violet-400 hover:text-violet-300 transition-colors">
            hello@aevia.io
          </a>{" "}
          pour toute demande de médiation.
        </p>
      </section>

      {/* ── 15. Contact ──────────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          15. Contact
        </h2>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm space-y-2">
          <p className="text-zinc-300 font-semibold mb-2">Pour toute question relative aux présentes conditions :</p>
          <p className="text-zinc-400">
            <span className="text-zinc-300">Email :</span>{" "}
            <a href="mailto:hello@aevia.io" className="text-violet-400 hover:text-violet-300 transition-colors">
              hello@aevia.io
            </a>
          </p>
          <p className="text-zinc-400">
            <span className="text-zinc-300">Éditeur :</span> Valentin Milliand — Aevia, France
          </p>
          <p className="text-zinc-400">
            <span className="text-zinc-300">Politique de confidentialité :</span>{" "}
            <a href="/fr/legal/privacy" className="text-violet-400 hover:text-violet-300 transition-colors">
              aevia.io/legal/privacy
            </a>
          </p>
          <p className="text-zinc-400">
            <span className="text-zinc-300">Politique de cookies :</span>{" "}
            <a href="/fr/legal/cookies" className="text-violet-400 hover:text-violet-300 transition-colors">
              aevia.io/legal/cookies
            </a>
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="mt-12 pt-6 border-t border-zinc-800/60">
        <p className="text-xs text-zinc-600 leading-relaxed italic">
          Ce document constitue les conditions générales d'utilisation et de vente applicables
          aux services Aevia. Ces conditions ont été rédigées à titre informatif et de bonne foi.
          Pour tout conseil juridique spécifique à votre situation, consultez un avocat qualifié
          en droit du numérique ou du commerce.
        </p>
      </div>
    </main>
  )
}

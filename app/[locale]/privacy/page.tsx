import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Aevia',
  description:
    "Politique de confidentialité d'Aevia : données collectées, finalités, durée de conservation, droits RGPD.",
};

const UPDATED = '22 mai 2026';

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-zinc-300">
      <p className="text-xs text-zinc-500 mb-2">Dernière mise à jour : {UPDATED}</p>
      <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
        Politique de confidentialité
      </h1>
      <p className="text-zinc-400 text-sm mb-10 leading-relaxed">
        La présente politique décrit la manière dont Aevia (Valentin Milliand) collecte, utilise et
        protège vos données personnelles, conformément au Règlement Général sur la Protection des
        Données (RGPD — Règlement UE 2016/679) et à la loi française Informatique et Libertés.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          1. Responsable du traitement
        </h2>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm space-y-1">
          <p>
            <span className="text-white font-semibold">Aevia</span> — entreprise individuelle
            (auto-entrepreneur)
          </p>
          <p><span className="text-zinc-400">Représentant légal :</span> Valentin Milliand</p>
          <p>
            <span className="text-zinc-400">DPO / Contact :</span>{' '}
            <a
              href="mailto:v.milliand@gmail.com"
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              v.milliand@gmail.com
            </a>
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          2. Données collectées
        </h2>
        <ul className="list-disc list-inside text-sm space-y-2 leading-relaxed">
          <li>
            <strong className="text-white">Formulaire de contact :</strong> nom, adresse email,
            objet, contenu du message.
          </li>
          <li>
            <strong className="text-white">Cookies analytiques :</strong> données techniques
            anonymisées (pages visitées, durée de visite) uniquement après consentement explicite.
          </li>
          <li>
            <strong className="text-white">Logs serveur :</strong> adresse IP et user-agent,
            conservés à des fins de sécurité (anti-spam, rate-limiting).
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          3. Finalités &amp; base légale
        </h2>
        <p className="text-sm leading-relaxed mb-3">
          Les données sont traitées pour :
        </p>
        <ul className="list-disc list-inside text-sm space-y-2 leading-relaxed">
          <li>Répondre à vos demandes de contact — base légale : <em>consentement</em>.</li>
          <li>Améliorer le site via mesure d'audience — base légale : <em>consentement</em>.</li>
          <li>
            Assurer la sécurité du service (anti-abus) — base légale :{' '}
            <em>intérêt légitime</em>.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          4. Durée de conservation
        </h2>
        <ul className="list-disc list-inside text-sm space-y-2 leading-relaxed">
          <li>Messages de contact : <strong>3 ans</strong> à compter du dernier échange.</li>
          <li>Cookies analytiques : <strong>13 mois maximum</strong>.</li>
          <li>Logs techniques : <strong>12 mois</strong> à des fins de sécurité.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          5. Vos droits
        </h2>
        <p className="text-sm leading-relaxed mb-3">
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification,
          d'effacement, de limitation, d'opposition et de portabilité de vos données.
        </p>
        <p className="text-sm leading-relaxed">
          Pour exercer ces droits, contactez :{' '}
          <a
            href="mailto:v.milliand@gmail.com"
            className="text-red-400 hover:text-red-300 transition-colors"
          >
            v.milliand@gmail.com
          </a>
          . Vous pouvez également introduire une réclamation auprès de la{' '}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300 transition-colors"
          >
            CNIL
          </a>
          .
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          6. Sous-traitants
        </h2>
        <ul className="list-disc list-inside text-sm space-y-2 leading-relaxed">
          <li><strong className="text-white">Vercel Inc.</strong> — hébergement du site.</li>
          <li><strong className="text-white">Resend</strong> — envoi des emails du formulaire de contact.</li>
        </ul>
      </section>

      <div className="mt-12 flex gap-4 text-sm">
        <Link
          href="/legal"
          className="text-red-400 hover:text-red-300 transition-colors"
        >
          Mentions légales
        </Link>
        <Link
          href="/terms"
          className="text-red-400 hover:text-red-300 transition-colors"
        >
          CGV / CGU
        </Link>
      </div>
    </main>
  );
}

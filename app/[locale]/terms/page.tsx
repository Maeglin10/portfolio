import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CGV / CGU — Aevia',
  description:
    "Conditions Générales d'Utilisation et de Vente d'Aevia : objet, propriété intellectuelle, responsabilité, droit applicable.",
};

const UPDATED = '22 mai 2026';

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-zinc-300">
      <p className="text-xs text-zinc-500 mb-2">Dernière mise à jour : {UPDATED}</p>
      <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
        Conditions Générales d'Utilisation et de Vente
      </h1>
      <p className="text-zinc-400 text-sm mb-10 leading-relaxed">
        Les présentes CGU/CGV régissent l'accès et l'utilisation du site et des services Aevia,
        ainsi que la relation contractuelle entre Aevia et ses clients. L'utilisation du site
        vaut acceptation pleine et entière des présentes conditions.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          1. Objet
        </h2>
        <p className="text-sm leading-relaxed">
          Aevia présente et commercialise une suite de produits logiciels destinés aux
          professionnels : <strong className="text-white">Skylaunch</strong> (lancement produit),{' '}
          <strong className="text-white">Skysecurity</strong> (sécurité applicative) et{' '}
          <strong className="text-white">Skybot Inbox</strong> (messagerie unifiée IA).
          Les présentes conditions s'appliquent à toute personne accédant au site ou souscrivant à
          l'un de ces services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          2. Éditeur
        </h2>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm space-y-1">
          <p>
            <span className="text-white font-semibold">Aevia</span> — entreprise individuelle
            (auto-entrepreneur)
          </p>
          <p><span className="text-zinc-400">Représentant légal :</span> Valentin Milliand</p>
          <p>
            <span className="text-zinc-400">Contact :</span>{' '}
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
          3. Propriété intellectuelle
        </h2>
        <p className="text-sm leading-relaxed">
          L'ensemble des éléments composant le site (textes, graphismes, logos, code, marques,
          designs) sont la propriété exclusive d'Aevia ou de ses partenaires et sont protégés par
          le Code de la propriété intellectuelle. Toute reproduction, représentation,
          modification, publication ou exploitation, totale ou partielle, sans autorisation
          écrite préalable est strictement interdite et constitue un acte de contrefaçon.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          4. Limitation de responsabilité
        </h2>
        <p className="text-sm leading-relaxed mb-3">
          Aevia met en œuvre tous les moyens raisonnables pour assurer un accès continu et de
          qualité à ses services. Toutefois, Aevia ne peut être tenue responsable :
        </p>
        <ul className="list-disc list-inside text-sm space-y-2 leading-relaxed">
          <li>D'une indisponibilité technique ponctuelle du site ou des services tiers.</li>
          <li>De dommages indirects (perte de chiffre d'affaires, de données, d'opportunité).</li>
          <li>D'un usage non conforme par l'utilisateur des services proposés.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          5. Protection des données
        </h2>
        <p className="text-sm leading-relaxed">
          Les traitements de données à caractère personnel sont détaillés dans notre{' '}
          <Link
            href="/privacy"
            className="text-red-400 hover:text-red-300 transition-colors"
          >
            politique de confidentialité
          </Link>
          .
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          6. Droit applicable et juridiction
        </h2>
        <p className="text-sm leading-relaxed">
          Les présentes conditions sont régies par le droit français. En cas de litige, et après
          tentative de résolution amiable, les tribunaux français seront seuls compétents.
        </p>
      </section>

      <div className="mt-12 flex gap-4 text-sm">
        <Link
          href="/legal"
          className="text-red-400 hover:text-red-300 transition-colors"
        >
          Mentions légales
        </Link>
        <Link
          href="/privacy"
          className="text-red-400 hover:text-red-300 transition-colors"
        >
          Politique de confidentialité
        </Link>
      </div>
    </main>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';

type Locale = 'fr' | 'en' | 'es' | 'de' | 'pt';

const T: Record<Locale, {
  title: string;
  updated: string;
  nav_mentions: string;
  nav_privacy: string;
  nav_cgu: string;
  // Mentions légales
  mentions_title: string;
  mentions_intro: string;
  mentions_editor_title: string;
  mentions_editor_name: string;
  mentions_editor_status: string;
  mentions_editor_rep: string;
  mentions_editor_email: string;
  mentions_editor_site: string;
  mentions_host_title: string;
  mentions_host_name: string;
  mentions_host_address: string;
  mentions_host_site: string;
  mentions_dir_title: string;
  mentions_dir_name: string;
  mentions_contact_title: string;
  // Privacy
  privacy_title: string;
  privacy_intro: string;
  privacy_data_title: string;
  privacy_data_contact: string;
  privacy_data_contact_desc: string;
  privacy_purpose_title: string;
  privacy_purpose_desc: string;
  privacy_retention_title: string;
  privacy_retention_desc: string;
  privacy_rights_title: string;
  privacy_rights_desc: string;
  privacy_third_title: string;
  privacy_third_desc: string;
  privacy_contact_label: string;
  // CGU
  cgu_title: string;
  cgu_intro: string;
  cgu_use_title: string;
  cgu_use_desc: string;
  cgu_ip_title: string;
  cgu_ip_desc: string;
  cgu_liability_title: string;
  cgu_liability_desc: string;
  cgu_law_title: string;
  cgu_law_desc: string;
  // shared
  more_detail: string;
  more_cookies: string;
  more_privacy: string;
  more_terms: string;
}> = {
  fr: {
    title: 'Mentions légales & Politique de confidentialité',
    updated: 'Dernière mise à jour : 23 avril 2026',
    nav_mentions: 'Mentions légales',
    nav_privacy: 'Confidentialité',
    nav_cgu: 'CGU',
    // Mentions légales
    mentions_title: 'Mentions légales',
    mentions_intro: "Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la Confiance en l'Économie Numérique (LCEN), les informations suivantes sont portées à la connaissance des utilisateurs et visiteurs du site aevia.io.",
    mentions_editor_title: 'Éditeur du site',
    mentions_editor_name: 'Aevia',
    mentions_editor_status: "Entreprise individuelle (auto-entrepreneur), soumise au régime micro-entreprise français",
    mentions_editor_rep: 'Responsable de la publication : Valentin Milliand',
    mentions_editor_email: 'Contact : v.milliand@gmail.com',
    mentions_editor_site: 'Site web : https://aevia.vercel.app',
    mentions_host_title: 'Hébergement',
    mentions_host_name: 'Vercel Inc.',
    mentions_host_address: '340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis',
    mentions_host_site: 'https://vercel.com',
    mentions_dir_title: 'Directeur de la publication',
    mentions_dir_name: 'Valentin Milliand',
    mentions_contact_title: 'Contact',
    // Privacy
    privacy_title: 'Politique de confidentialité',
    privacy_intro: "La présente politique décrit la manière dont Aevia collecte, utilise et protège vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la loi française Informatique et Libertés.",
    privacy_data_title: 'Données collectées',
    privacy_data_contact: 'Formulaire de contact',
    privacy_data_contact_desc: "Lors de l'utilisation du formulaire de contact, nous collectons : votre nom, votre adresse email et votre message. Ces données sont strictement nécessaires au traitement de votre demande.",
    privacy_purpose_title: 'Finalité du traitement',
    privacy_purpose_desc: "Les données collectées via le formulaire de contact sont utilisées exclusivement pour répondre à votre demande et ne font l'objet d'aucune prospection commerciale sans consentement préalable.",
    privacy_retention_title: 'Durée de conservation',
    privacy_retention_desc: "Les données personnelles collectées via le formulaire de contact sont conservées pendant une durée maximale de 3 ans à compter du dernier contact, conformément à la prescription commerciale française.",
    privacy_rights_title: 'Vos droits (RGPD)',
    privacy_rights_desc: "Conformément au RGPD (articles 15 à 22), vous disposez des droits d'accès, de rectification, d'effacement, de portabilité et d'opposition concernant vos données. Pour exercer ces droits, contactez-nous à v.milliand@gmail.com. En cas de désaccord, vous pouvez saisir la CNIL (cnil.fr).",
    privacy_third_title: 'Cookies et tiers',
    privacy_third_desc: "Ce site n'utilise pas de cookies tiers à des fins publicitaires ou de traçage comportemental. Un cookie fonctionnel est utilisé pour mémoriser votre consentement. L'hébergement est assuré par Vercel Inc. (San Francisco, USA), dans le cadre des clauses contractuelles types de la Commission européenne.",
    privacy_contact_label: 'Contact Données personnelles :',
    // CGU
    cgu_title: "Conditions Générales d'Utilisation",
    cgu_intro: "En accédant et en utilisant le site aevia.vercel.app, vous acceptez sans réserve les présentes Conditions Générales d'Utilisation. Ces conditions peuvent être modifiées à tout moment ; la poursuite de l'utilisation du site vaut acceptation des modifications.",
    cgu_use_title: 'Utilisation du site',
    cgu_use_desc: "Le site est accessible gratuitement. Son utilisation est réservée à un usage personnel et non commercial. Il est interdit de tenter de porter atteinte au fonctionnement du site, d'en extraire les contenus de manière automatisée (scraping), ou de l'utiliser à des fins illicites.",
    cgu_ip_title: 'Propriété intellectuelle',
    cgu_ip_desc: "L'ensemble des éléments constitutifs du site (textes, visuels, code source, logos, architecture) est la propriété exclusive d'Aevia ou de ses concédants de licence. Toute reproduction, représentation ou utilisation non autorisée est interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.",
    cgu_liability_title: 'Limitation de responsabilité',
    cgu_liability_desc: "Aevia s'efforce d'assurer l'exactitude et la mise à jour des informations publiées sur ce site, mais ne peut garantir leur exhaustivité. Aevia ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder. Les liens hypertextes vers des sites tiers sont fournis à titre informatif uniquement ; Aevia n'assume aucune responsabilité quant à leur contenu.",
    cgu_law_title: 'Droit applicable',
    cgu_law_desc: "Les présentes CGU sont régies par le droit français. Tout litige relatif à leur interprétation ou exécution sera soumis aux tribunaux français compétents.",
    // shared
    more_detail: 'Documentation complète',
    more_cookies: 'Politique de cookies détaillée',
    more_privacy: 'Politique de confidentialité complète',
    more_terms: 'CGU/CGV complètes',
  },
  en: {
    title: 'Legal Notice & Privacy Policy',
    updated: 'Last updated: April 23, 2026',
    nav_mentions: 'Legal Notice',
    nav_privacy: 'Privacy',
    nav_cgu: 'Terms',
    mentions_title: 'Legal Notice',
    mentions_intro: 'The following information is provided to users and visitors of the aevia.io website in accordance with applicable laws and regulations.',
    mentions_editor_title: 'Publisher',
    mentions_editor_name: 'Aevia',
    mentions_editor_status: 'Sole trader (auto-entrepreneur), subject to the French micro-enterprise regime',
    mentions_editor_rep: 'Publication manager: Valentin Milliand',
    mentions_editor_email: 'Contact: v.milliand@gmail.com',
    mentions_editor_site: 'Website: https://aevia.vercel.app',
    mentions_host_title: 'Hosting',
    mentions_host_name: 'Vercel Inc.',
    mentions_host_address: '340 Pine Street, Suite 701, San Francisco, CA 94104, United States',
    mentions_host_site: 'https://vercel.com',
    mentions_dir_title: 'Publication Director',
    mentions_dir_name: 'Valentin Milliand',
    mentions_contact_title: 'Contact',
    privacy_title: 'Privacy Policy',
    privacy_intro: 'This policy describes how Aevia collects, uses and protects your personal data in accordance with the General Data Protection Regulation (GDPR — EU Regulation 2016/679).',
    privacy_data_title: 'Data Collected',
    privacy_data_contact: 'Contact form',
    privacy_data_contact_desc: 'When using the contact form, we collect: your name, email address and message. This data is strictly necessary to process your request.',
    privacy_purpose_title: 'Purpose of Processing',
    privacy_purpose_desc: 'Data collected via the contact form is used exclusively to respond to your inquiry and is not used for commercial prospecting without prior consent.',
    privacy_retention_title: 'Retention Period',
    privacy_retention_desc: 'Personal data collected via the contact form is retained for a maximum of 3 years from the last contact.',
    privacy_rights_title: 'Your Rights (GDPR)',
    privacy_rights_desc: 'Under the GDPR (Articles 15–22), you have the rights of access, rectification, erasure, portability and objection regarding your data. To exercise these rights, contact us at v.milliand@gmail.com.',
    privacy_third_title: 'Cookies & Third Parties',
    privacy_third_desc: 'This site does not use third-party cookies for advertising or behavioral tracking. A functional cookie is used to remember your consent. Hosting is provided by Vercel Inc. (San Francisco, USA) under the European Commission standard contractual clauses.',
    privacy_contact_label: 'Privacy contact:',
    cgu_title: 'Terms of Use',
    cgu_intro: 'By accessing and using the site aevia.vercel.app, you unreservedly accept these Terms of Use. These terms may be modified at any time; continued use of the site constitutes acceptance of modifications.',
    cgu_use_title: 'Use of the Site',
    cgu_use_desc: 'The site is freely accessible. Its use is reserved for personal, non-commercial purposes. It is forbidden to attempt to disrupt the functioning of the site, to extract its content in an automated manner (scraping), or to use it for illegal purposes.',
    cgu_ip_title: 'Intellectual Property',
    cgu_ip_desc: "All elements of the site (texts, visuals, source code, logos, architecture) are the exclusive property of Aevia or its licensors. Any unauthorized reproduction, representation or use is prohibited.",
    cgu_liability_title: 'Limitation of Liability',
    cgu_liability_desc: 'Aevia strives to ensure the accuracy and currency of information published on this site but cannot guarantee its completeness. Aevia shall not be liable for direct or indirect damages resulting from use of the site or inability to access it.',
    cgu_law_title: 'Applicable Law',
    cgu_law_desc: 'These Terms are governed by French law. Any dispute relating to their interpretation or execution will be submitted to the competent French courts.',
    more_detail: 'Full documentation',
    more_cookies: 'Detailed cookie policy',
    more_privacy: 'Full privacy policy',
    more_terms: 'Full Terms & Conditions',
  },
  es: {
    title: 'Aviso Legal & Política de Privacidad',
    updated: 'Última actualización: 23 de abril de 2026',
    nav_mentions: 'Aviso legal',
    nav_privacy: 'Privacidad',
    nav_cgu: 'Términos',
    mentions_title: 'Aviso Legal',
    mentions_intro: 'La siguiente información se proporciona a los usuarios y visitantes del sitio aevia.io de conformidad con las leyes y reglamentos aplicables.',
    mentions_editor_title: 'Editor del sitio',
    mentions_editor_name: 'Aevia',
    mentions_editor_status: 'Trabajador autónomo (auto-entrepreneur), sujeto al régimen de microempresa francés',
    mentions_editor_rep: 'Responsable de publicación: Valentin Milliand',
    mentions_editor_email: 'Contacto: v.milliand@gmail.com',
    mentions_editor_site: 'Sitio web: https://aevia.vercel.app',
    mentions_host_title: 'Alojamiento',
    mentions_host_name: 'Vercel Inc.',
    mentions_host_address: '340 Pine Street, Suite 701, San Francisco, CA 94104, Estados Unidos',
    mentions_host_site: 'https://vercel.com',
    mentions_dir_title: 'Director de publicación',
    mentions_dir_name: 'Valentin Milliand',
    mentions_contact_title: 'Contacto',
    privacy_title: 'Política de Privacidad',
    privacy_intro: 'Esta política describe cómo Aevia recopila, utiliza y protege sus datos personales de conformidad con el Reglamento General de Protección de Datos (RGPD — Reglamento UE 2016/679).',
    privacy_data_title: 'Datos recopilados',
    privacy_data_contact: 'Formulario de contacto',
    privacy_data_contact_desc: 'Al utilizar el formulario de contacto, recopilamos: su nombre, dirección de correo electrónico y mensaje.',
    privacy_purpose_title: 'Finalidad del tratamiento',
    privacy_purpose_desc: 'Los datos recopilados a través del formulario de contacto se utilizan exclusivamente para responder a su consulta.',
    privacy_retention_title: 'Período de conservación',
    privacy_retention_desc: 'Los datos personales recopilados se conservan durante un máximo de 3 años desde el último contacto.',
    privacy_rights_title: 'Sus derechos (RGPD)',
    privacy_rights_desc: 'Conforme al RGPD, tiene derechos de acceso, rectificación, supresión, portabilidad y oposición. Contáctenos en v.milliand@gmail.com.',
    privacy_third_title: 'Cookies y terceros',
    privacy_third_desc: 'Este sitio no utiliza cookies de terceros con fines publicitarios. Una cookie funcional se usa para recordar su consentimiento. El alojamiento es proporcionado por Vercel Inc.',
    privacy_contact_label: 'Contacto privacidad:',
    cgu_title: 'Términos de Uso',
    cgu_intro: 'Al acceder y utilizar el sitio aevia.vercel.app, acepta sin reservas estos Términos de Uso.',
    cgu_use_title: 'Uso del sitio',
    cgu_use_desc: 'El sitio es de acceso gratuito. Su uso está reservado a fines personales y no comerciales.',
    cgu_ip_title: 'Propiedad intelectual',
    cgu_ip_desc: 'Todos los elementos del sitio son propiedad exclusiva de Aevia o sus licenciantes. Cualquier reproducción o uso no autorizado está prohibido.',
    cgu_liability_title: 'Limitación de responsabilidad',
    cgu_liability_desc: 'Aevia no será responsable de daños directos o indirectos resultantes del uso del sitio.',
    cgu_law_title: 'Ley aplicable',
    cgu_law_desc: 'Estos términos se rigen por el derecho francés.',
    more_detail: 'Documentación completa',
    more_cookies: 'Política de cookies detallada',
    more_privacy: 'Política de privacidad completa',
    more_terms: 'Términos y condiciones completos',
  },
  de: {
    title: 'Impressum & Datenschutzerklärung',
    updated: 'Letzte Aktualisierung: 23. April 2026',
    nav_mentions: 'Impressum',
    nav_privacy: 'Datenschutz',
    nav_cgu: 'AGB',
    mentions_title: 'Impressum',
    mentions_intro: 'Die folgenden Informationen werden den Nutzern und Besuchern der Website aevia.io gemäß den geltenden Gesetzen und Vorschriften bereitgestellt.',
    mentions_editor_title: 'Herausgeber',
    mentions_editor_name: 'Aevia',
    mentions_editor_status: 'Einzelunternehmer (Auto-Entrepreneur), dem französischen Kleinstunternehmerregime unterworfen',
    mentions_editor_rep: 'Verantwortlich für Veröffentlichungen: Valentin Milliand',
    mentions_editor_email: 'Kontakt: v.milliand@gmail.com',
    mentions_editor_site: 'Website: https://aevia.vercel.app',
    mentions_host_title: 'Hosting',
    mentions_host_name: 'Vercel Inc.',
    mentions_host_address: '340 Pine Street, Suite 701, San Francisco, CA 94104, USA',
    mentions_host_site: 'https://vercel.com',
    mentions_dir_title: 'Verantwortliche Person',
    mentions_dir_name: 'Valentin Milliand',
    mentions_contact_title: 'Kontakt',
    privacy_title: 'Datenschutzerklärung',
    privacy_intro: 'Diese Richtlinie beschreibt, wie Aevia Ihre personenbezogenen Daten gemäß der Datenschutz-Grundverordnung (DSGVO — EU-Verordnung 2016/679) erhebt, verwendet und schützt.',
    privacy_data_title: 'Erhobene Daten',
    privacy_data_contact: 'Kontaktformular',
    privacy_data_contact_desc: 'Bei der Nutzung des Kontaktformulars erheben wir: Ihren Namen, Ihre E-Mail-Adresse und Ihre Nachricht.',
    privacy_purpose_title: 'Zweck der Verarbeitung',
    privacy_purpose_desc: 'Die über das Kontaktformular erhobenen Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet.',
    privacy_retention_title: 'Aufbewahrungsdauer',
    privacy_retention_desc: 'Personenbezogene Daten werden maximal 3 Jahre ab dem letzten Kontakt aufbewahrt.',
    privacy_rights_title: 'Ihre Rechte (DSGVO)',
    privacy_rights_desc: 'Gemäß DSGVO haben Sie Rechte auf Auskunft, Berichtigung, Löschung, Datenübertragbarkeit und Widerspruch. Kontaktieren Sie uns unter v.milliand@gmail.com.',
    privacy_third_title: 'Cookies & Dritte',
    privacy_third_desc: 'Diese Website verwendet keine Drittanbieter-Cookies für Werbezwecke. Ein funktionales Cookie wird verwendet, um Ihre Einwilligung zu speichern. Das Hosting wird von Vercel Inc. bereitgestellt.',
    privacy_contact_label: 'Datenschutzkontakt:',
    cgu_title: 'Nutzungsbedingungen',
    cgu_intro: 'Durch den Zugriff auf und die Nutzung der Website aevia.vercel.app akzeptieren Sie vorbehaltlos diese Nutzungsbedingungen.',
    cgu_use_title: 'Nutzung der Website',
    cgu_use_desc: 'Die Website ist kostenlos zugänglich. Die Nutzung ist auf persönliche, nicht-kommerzielle Zwecke beschränkt.',
    cgu_ip_title: 'Geistiges Eigentum',
    cgu_ip_desc: 'Alle Elemente der Website sind Eigentum von Aevia oder seinen Lizenzgebern. Jede unbefugte Reproduktion oder Nutzung ist verboten.',
    cgu_liability_title: 'Haftungsbeschränkung',
    cgu_liability_desc: 'Aevia haftet nicht für direkte oder indirekte Schäden, die aus der Nutzung der Website entstehen.',
    cgu_law_title: 'Anwendbares Recht',
    cgu_law_desc: 'Diese Bedingungen unterliegen französischem Recht.',
    more_detail: 'Vollständige Dokumentation',
    more_cookies: 'Detaillierte Cookie-Richtlinie',
    more_privacy: 'Vollständige Datenschutzerklärung',
    more_terms: 'Vollständige AGB',
  },
  pt: {
    title: 'Aviso Legal & Política de Privacidade',
    updated: 'Última atualização: 23 de abril de 2026',
    nav_mentions: 'Aviso legal',
    nav_privacy: 'Privacidade',
    nav_cgu: 'Termos',
    mentions_title: 'Aviso Legal',
    mentions_intro: 'As seguintes informações são fornecidas aos utilizadores e visitantes do site aevia.io em conformidade com as leis e regulamentos aplicáveis.',
    mentions_editor_title: 'Editor do site',
    mentions_editor_name: 'Aevia',
    mentions_editor_status: 'Empresário individual (auto-entrepreneur), sujeito ao regime de microempresa francês',
    mentions_editor_rep: 'Responsável pela publicação: Valentin Milliand',
    mentions_editor_email: 'Contacto: v.milliand@gmail.com',
    mentions_editor_site: 'Site: https://aevia.vercel.app',
    mentions_host_title: 'Alojamento',
    mentions_host_name: 'Vercel Inc.',
    mentions_host_address: '340 Pine Street, Suite 701, San Francisco, CA 94104, Estados Unidos',
    mentions_host_site: 'https://vercel.com',
    mentions_dir_title: 'Diretor de publicação',
    mentions_dir_name: 'Valentin Milliand',
    mentions_contact_title: 'Contacto',
    privacy_title: 'Política de Privacidade',
    privacy_intro: 'Esta política descreve como a Aevia recolhe, utiliza e protege os seus dados pessoais em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD — Regulamento UE 2016/679).',
    privacy_data_title: 'Dados recolhidos',
    privacy_data_contact: 'Formulário de contacto',
    privacy_data_contact_desc: 'Ao utilizar o formulário de contacto, recolhemos: o seu nome, endereço de email e mensagem.',
    privacy_purpose_title: 'Finalidade do tratamento',
    privacy_purpose_desc: 'Os dados recolhidos através do formulário de contacto são utilizados exclusivamente para responder à sua solicitação.',
    privacy_retention_title: 'Período de conservação',
    privacy_retention_desc: 'Os dados pessoais recolhidos são conservados por um máximo de 3 anos a partir do último contacto.',
    privacy_rights_title: 'Os seus direitos (RGPD)',
    privacy_rights_desc: 'Nos termos do RGPD, tem direitos de acesso, retificação, apagamento, portabilidade e oposição. Contacte-nos em v.milliand@gmail.com.',
    privacy_third_title: 'Cookies e terceiros',
    privacy_third_desc: 'Este site não utiliza cookies de terceiros para fins publicitários. Um cookie funcional é utilizado para memorizar o seu consentimento. O alojamento é fornecido pela Vercel Inc.',
    privacy_contact_label: 'Contacto privacidade:',
    cgu_title: 'Termos de Utilização',
    cgu_intro: 'Ao aceder e utilizar o site aevia.vercel.app, aceita sem reservas estes Termos de Utilização.',
    cgu_use_title: 'Utilização do site',
    cgu_use_desc: 'O site é de acesso gratuito. A sua utilização é reservada a fins pessoais e não comerciais.',
    cgu_ip_title: 'Propriedade intelectual',
    cgu_ip_desc: 'Todos os elementos do site são propriedade exclusiva da Aevia ou dos seus licenciantes. Qualquer reprodução ou utilização não autorizada é proibida.',
    cgu_liability_title: 'Limitação de responsabilidade',
    cgu_liability_desc: 'A Aevia não será responsável por danos diretos ou indiretos resultantes da utilização do site.',
    cgu_law_title: 'Lei aplicável',
    cgu_law_desc: 'Estes termos são regidos pela lei francesa.',
    more_detail: 'Documentação completa',
    more_cookies: 'Política de cookies detalhada',
    more_privacy: 'Política de privacidade completa',
    more_terms: 'Termos e condições completos',
  },
};

const LOCALES = ['fr', 'en', 'es', 'de', 'pt'] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = T[(locale as Locale) in T ? (locale as Locale) : 'fr'];
  return {
    title: t.title,
    robots: { index: true, follow: true },
  };
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = T[(locale as Locale) in T ? (locale as Locale) : 'fr'];

  return (
    <main className="max-w-3xl mx-auto px-6 py-24 text-zinc-300">
      {/* Header */}
      <p className="text-xs text-zinc-500 mb-2">{t.updated}</p>
      <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
        {t.title}
      </h1>

      {/* In-page navigation */}
      <nav
        aria-label="Sections"
        className="flex flex-wrap gap-2 mb-12 mt-6"
      >
        {[
          { anchor: 'mentions-legales', label: t.nav_mentions },
          { anchor: 'confidentialite', label: t.nav_privacy },
          { anchor: 'cgu', label: t.nav_cgu },
        ].map(({ anchor, label }) => (
          <a
            key={anchor}
            href={`#${anchor}`}
            className="px-3 py-1.5 rounded-lg text-sm border border-zinc-700 text-zinc-400 hover:border-violet-500 hover:text-violet-300 transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* ── Mentions légales ───────────────────────────────────────── */}
      <section id="mentions-legales" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-zinc-800">
          {t.mentions_title}
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-8">
          {t.mentions_intro}
        </p>

        <div className="space-y-6">
          {/* Éditeur */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm space-y-1.5">
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium mb-3">
              {t.mentions_editor_title}
            </p>
            <p>
              <span className="text-white font-semibold">{t.mentions_editor_name}</span>
            </p>
            <p className="text-zinc-400">{t.mentions_editor_status}</p>
            <p className="text-zinc-400">{t.mentions_editor_rep}</p>
            <p className="text-zinc-400">
              {t.mentions_editor_email.split(':')[0]} :{' '}
              <a
                href="mailto:v.milliand@gmail.com"
                className="text-violet-400 hover:text-violet-300 transition-colors"
              >
                v.milliand@gmail.com
              </a>
            </p>
            <p className="text-zinc-400">
              {t.mentions_editor_site.split(':')[0]} :{' '}
              <a
                href="https://aevia.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 transition-colors"
              >
                aevia.vercel.app
              </a>
            </p>
          </div>

          {/* Directeur de publication */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm space-y-1.5">
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium mb-3">
              {t.mentions_dir_title}
            </p>
            <p className="text-zinc-300 font-medium">{t.mentions_dir_name}</p>
          </div>

          {/* Hébergement */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm space-y-1.5">
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium mb-3">
              {t.mentions_host_title}
            </p>
            <p className="text-white font-semibold">{t.mentions_host_name}</p>
            <p className="text-zinc-400">{t.mentions_host_address}</p>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 transition-colors text-xs inline-block mt-1"
            >
              {t.mentions_host_site} &rarr;
            </a>
          </div>

          {/* Contact */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm space-y-1.5">
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium mb-3">
              {t.mentions_contact_title}
            </p>
            <p className="text-zinc-400">
              Email :{' '}
              <a
                href="mailto:v.milliand@gmail.com"
                className="text-violet-400 hover:text-violet-300 transition-colors"
              >
                v.milliand@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Politique de confidentialité ──────────────────────────── */}
      <section id="confidentialite" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-zinc-800">
          {t.privacy_title}
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-8">
          {t.privacy_intro}
        </p>

        <div className="space-y-8">
          {/* Données collectées */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3">
              {t.privacy_data_title}
            </h3>
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 text-sm">
              <p className="font-semibold text-zinc-300 mb-2">{t.privacy_data_contact}</p>
              <p className="text-zinc-400 leading-relaxed">{t.privacy_data_contact_desc}</p>
            </div>
          </div>

          {/* Finalité */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3">
              {t.privacy_purpose_title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {t.privacy_purpose_desc}
            </p>
          </div>

          {/* Durée de conservation */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3">
              {t.privacy_retention_title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {t.privacy_retention_desc}
            </p>
          </div>

          {/* Droits RGPD */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3">
              {t.privacy_rights_title}
            </h3>
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 text-sm">
              <p className="text-zinc-400 leading-relaxed mb-3">
                {t.privacy_rights_desc}
              </p>
              <p className="text-zinc-400">
                {t.privacy_contact_label}{' '}
                <a
                  href="mailto:v.milliand@gmail.com"
                  className="text-violet-400 hover:text-violet-300 transition-colors"
                >
                  v.milliand@gmail.com
                </a>
              </p>
              {locale === 'fr' && (
                <p className="text-zinc-500 text-xs mt-2">
                  En cas de réclamation non résolue, vous pouvez saisir la CNIL :{' '}
                  <a
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    cnil.fr &rarr;
                  </a>
                </p>
              )}
            </div>
          </div>

          {/* Cookies et tiers */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3">
              {t.privacy_third_title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {t.privacy_third_desc}
            </p>
          </div>
        </div>

        {/* Links to full pages */}
        <div className="mt-8 pt-6 border-t border-zinc-800/60">
          <p className="text-xs text-zinc-500 mb-3">{t.more_detail}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}/legal/privacy`}
              className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
            >
              {t.more_privacy} &rarr;
            </Link>
            <Link
              href={`/${locale}/legal/cookies`}
              className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
            >
              {t.more_cookies} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── CGU ───────────────────────────────────────────────────── */}
      <section id="cgu" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-zinc-800">
          {t.cgu_title}
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-8">
          {t.cgu_intro}
        </p>

        <div className="space-y-8">
          {/* Utilisation */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3">
              {t.cgu_use_title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {t.cgu_use_desc}
            </p>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3">
              {t.cgu_ip_title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {t.cgu_ip_desc}
            </p>
          </div>

          {/* Limitation de responsabilité */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3">
              {t.cgu_liability_title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {t.cgu_liability_desc}
            </p>
          </div>

          {/* Droit applicable */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3">
              {t.cgu_law_title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {t.cgu_law_desc}
            </p>
          </div>
        </div>

        {/* Link to full terms */}
        <div className="mt-8 pt-6 border-t border-zinc-800/60">
          <p className="text-xs text-zinc-500 mb-3">{t.more_detail}</p>
          <Link
            href={`/${locale}/legal/terms`}
            className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
          >
            {t.more_terms} &rarr;
          </Link>
        </div>
      </section>

      {/* Footer disclaimer */}
      <div className="pt-6 border-t border-zinc-800/60">
        <p className="text-xs text-zinc-600 leading-relaxed italic">
          {locale === 'fr'
            ? "Ce document a été rédigé de bonne foi et est publié à titre informatif. Pour tout conseil juridique spécifique, consultez un avocat qualifié en droit du numérique."
            : locale === 'de'
            ? "Dieses Dokument wurde in gutem Glauben verfasst und dient nur zur Information. Für spezifische rechtliche Beratung wenden Sie sich bitte an einen qualifizierten Rechtsanwalt."
            : locale === 'es'
            ? "Este documento ha sido redactado de buena fe y se publica a título informativo. Para asesoramiento jurídico específico, consulte a un abogado cualificado."
            : locale === 'pt'
            ? "Este documento foi redigido de boa fé e é publicado a título informativo. Para aconselhamento jurídico específico, consulte um advogado qualificado."
            : "This document has been drafted in good faith and is published for informational purposes. For specific legal advice, consult a qualified lawyer."}
        </p>
      </div>
    </main>
  );
}

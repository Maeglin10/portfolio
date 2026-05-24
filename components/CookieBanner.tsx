'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CONSENT_KEY = 'aevia-consent';

type Locale = 'fr' | 'en' | 'es' | 'de' | 'pt';

const SUPPORTED_LOCALES: Locale[] = ['fr', 'en', 'es', 'de', 'pt'];

const T: Record<Locale, {
  text: string;
  learn_more: string;
  accept: string;
  reject: string;
  aria_label: string;
}> = {
  fr: {
    aria_label: 'Bandeau de consentement aux cookies',
    text: "Nous utilisons des cookies pour améliorer votre expérience et mesurer l'audience. Vous pouvez accepter ou refuser les cookies non essentiels.",
    learn_more: 'En savoir plus',
    accept: 'Tout accepter',
    reject: 'Refuser',
  },
  en: {
    aria_label: 'Cookie consent banner',
    text: 'We use cookies to improve your experience and measure audience. You can accept or decline non-essential cookies.',
    learn_more: 'Learn more',
    accept: 'Accept all',
    reject: 'Decline',
  },
  es: {
    aria_label: 'Banner de consentimiento de cookies',
    text: 'Usamos cookies para mejorar tu experiencia y medir la audiencia. Puedes aceptar o rechazar las cookies no esenciales.',
    learn_more: 'Más información',
    accept: 'Aceptar todo',
    reject: 'Rechazar',
  },
  de: {
    aria_label: 'Cookie-Einwilligungsbanner',
    text: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und die Reichweite zu messen. Sie können nicht wesentliche Cookies akzeptieren oder ablehnen.',
    learn_more: 'Mehr erfahren',
    accept: 'Alle akzeptieren',
    reject: 'Ablehnen',
  },
  pt: {
    aria_label: 'Banner de consentimento de cookies',
    text: 'Usamos cookies para melhorar sua experiência e medir a audiência. Você pode aceitar ou recusar cookies não essenciais.',
    learn_more: 'Saber mais',
    accept: 'Aceitar tudo',
    reject: 'Recusar',
  },
};

export function CookieBanner() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  // Detect locale from the URL pathname (e.g. /fr/..., /en/..., etc.)
  const segments = pathname.split('/');
  const detectedLocale = SUPPORTED_LOCALES.find((l) => l === segments[1]) ?? 'fr';
  const t = T[detectedLocale];

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      setVisible(true);
    }
  }, []);

  const dismiss = (accepted: boolean) => {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ analytics: accepted, marketing: accepted, ts: Date.now() })
    );
    setLeaving(true);
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  // Build the "learn more" link — use locale prefix if available
  const legalHref = SUPPORTED_LOCALES.includes(detectedLocale)
    ? `/${detectedLocale}/legal/cookies`
    : '/fr/legal/cookies';

  return (
    <div
      role="dialog"
      aria-label={t.aria_label}
      aria-live="polite"
      className={`fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6 transition-opacity duration-300 ${
        leaving ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-zinc-300 leading-relaxed">
            {t.text}{' '}
            <Link
              href={legalHref}
              className="text-red-400 hover:text-red-300 underline underline-offset-2 transition-colors"
            >
              {t.learn_more}
            </Link>
          </p>
        </div>
        <div className="flex flex-row gap-3 shrink-0">
          <button
            onClick={() => dismiss(false)}
            className="px-4 py-2 rounded-xl text-sm font-medium border border-zinc-600 text-zinc-300 hover:border-zinc-400 hover:text-white transition-colors"
          >
            {t.reject}
          </button>
          <button
            onClick={() => dismiss(true)}
            className="px-5 py-2 rounded-xl text-sm font-semibold bg-red-600 hover:bg-red-500 text-white transition-colors"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

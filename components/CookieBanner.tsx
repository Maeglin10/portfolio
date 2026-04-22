'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const CONSENT_KEY = 'aevia-consent';

export function CookieBanner() {
  const t = useTranslations('cookie_banner');
  const locale = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ analytics: true, marketing: true, ts: Date.now() }));
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ analytics: false, marketing: false, ts: Date.now() }));
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label={t('aria_label')}
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
    >
      <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-zinc-300 leading-relaxed">
            {t('text')}{' '}
            <Link
              href={`/${locale}/legal/cookies`}
              className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
            >
              {t('learn_more')}
            </Link>
          </p>
        </div>
        <div className="flex flex-row gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 rounded-xl text-sm font-medium border border-zinc-600 text-zinc-300 hover:border-zinc-400 hover:text-white transition-colors"
          >
            {t('reject')}
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-colors"
          >
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  );
}

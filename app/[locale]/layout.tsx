import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';

const LOCALES = routing.locales as readonly string[];

const LOCALE_OG: Record<string, string> = {
  fr: 'fr_FR',
  en: 'en_US',
  es: 'es_ES',
  de: 'de_DE',
  pt: 'pt_PT',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const languages = Object.fromEntries(LOCALES.map((l) => [l, `/${l}`]));
  const ogLocale = LOCALE_OG[locale] ?? 'fr_FR';
  const altLocales = Object.values(LOCALE_OG).filter((l) => l !== ogLocale);
  return {
    alternates: {
      canonical: `/${locale}`,
      languages: { ...languages, 'x-default': '/fr' },
    },
    openGraph: {
      locale: ogLocale,
      alternateLocale: altLocales,
      // Explicit images so Next.js metadata merging keeps OG image
      // (per-locale override would otherwise strip the parent layout's images)
      images: [
        {
          url: '/api/og',
          width: 1200,
          height: 630,
          alt: 'Aevia — SaaS pour entrepreneurs',
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!LOCALES.includes(locale)) notFound();
  const messages = (await import(`../../messages/${locale}.json`)).default;
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

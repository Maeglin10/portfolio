import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

// Pages that exist outside [locale] routing — don't redirect them
const NON_LOCALE_PATHS = ['/about', '/contact', '/projects'];

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // On aevia-portfolio, skip locale routing and serve pages directly
  const host = request.headers.get('host') ?? '';
  if (host.includes('aevia-portfolio') || process.env.NEXT_PUBLIC_SITE_MODE === 'portfolio') {
    return NextResponse.next();
  }

  // Skip locale redirect for pages that live at root (not under [locale])
  if (NON_LOCALE_PATHS.some(p => pathname === p || pathname.startsWith(p + '/'))) {
    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)']
};

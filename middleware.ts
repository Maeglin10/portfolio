import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // On aevia-portfolio, skip locale routing and serve pages directly
  const host = request.headers.get('host') ?? '';
  if (host.includes('aevia-portfolio') || process.env.NEXT_PUBLIC_SITE_MODE === 'portfolio') {
    return NextResponse.next();
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)']
};

import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['en', 'id'],
  defaultLocale: 'id',
});

export default function middleware(request) {
  const response = intlMiddleware(request);

  const locale = request.cookies.get('NEXT_LOCALE')?.value || 'id';

  // Set cookie with Secure and HttpOnly attributes
  response.cookies.set('NEXT_LOCALE', locale, {
    secure: true,
    httpOnly: true,
    path: '/',
    maxAge: 30 * 24 * 60 * 60,
  });

  return response;
}

export const config = {
  // Matcher entries are linked with a logical "or", therefore
  // if one of them matches, the middleware will be invoked.
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}

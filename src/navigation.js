import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'

export const defaultLocale = 'en'

export const locales = ['en', 'id']

export const localePrefix = 'as-needed'

export const pathnames = {
  '/': '/',
}

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    localePrefix,
    pathnames,
  })
// Server-side check: redirect if path is missing
export const secureRedirect = (path) => {
  if (!pathnames[path]) {
    return redirect('/'); // Redirect to a safe default
  }
  return pathnames[path];
};
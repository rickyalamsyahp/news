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

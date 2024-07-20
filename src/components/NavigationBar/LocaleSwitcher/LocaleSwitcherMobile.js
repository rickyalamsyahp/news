'use client'

import { useRouter, usePathname } from '../../../navigation'
import { useTranslations } from 'next-intl'

export default function LocaleSwitcherMobile({ children, defaultValue }) {
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('navigation-bar')
  const onSelectChange = value => {
    const nextLocale = value
    router.replace(pathname, { locale: nextLocale })
  }
  return (
    <div className='d-block d-lg-none'>
      <h6 className='select-language mt-3'>{t('language')}</h6>
      <div className='d-flex align-items-center gap-4 bg-transparent py-2 fw-bold nunito-sans select-language mobile'>
        {children.map((cur, index) => (
          <div
            key={`language-${index}-${cur.value}`}
            onClick={() => onSelectChange(cur.value)}
            className={`${cur.value === defaultValue ? 'selected' : ''} select-language-mobile`}
          >
            {cur.logo()}
            {cur.label.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  )
}

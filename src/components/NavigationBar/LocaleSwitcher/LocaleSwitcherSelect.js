'use client'

import { useRouter, usePathname } from '../../../navigation'

export default function LocaleSwitcherSelect({ children, defaultValue }) {
  const router = useRouter()
  const pathname = usePathname()

  const onSelectChange = event => {
    const nextLocale = event.target.value
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <select
      className='d-flex bg-transparent py-2 px-2 border-0 fw-bold nunito-sans select-language'
      defaultValue={defaultValue}
      onChange={onSelectChange}
    >
      {children.map((cur, index) => (
        <option key={`language-${index}-${cur.value}`} value={cur.value}>
          {cur.label.toUpperCase()}
        </option>
      ))}
    </select>
  )
}

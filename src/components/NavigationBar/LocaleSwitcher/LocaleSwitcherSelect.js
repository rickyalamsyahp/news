'use client'

import { useRouter, usePathname } from '../../../navigation'
import ENGLAND from '../../../assets/images/eng.png'
import INDONESIA from '../../../assets/images/id.png'
import Image from 'next/image'

export default function LocaleSwitcherSelect({ children, defaultValue }) {
  const router = useRouter()
  const pathname = usePathname()

  const onSelectChange = event => {
    const nextLocale = event.target.value
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <div className='d-none d-lg-flex align-items-center '>
      <Image
        src={defaultValue === 'en' ? ENGLAND : INDONESIA}
        alt='eng'
        width={16}
        height={16}
      />
      <select
        className='bg-transparent py-2 px-2 border-0 fw-bold nunito-sans select-language'
        defaultValue={defaultValue}
        onChange={onSelectChange}
      >
        {children.map((cur, index) => (
          <option key={`language-${index}-${cur.value}`} value={cur.value}>
            {cur.label.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  )
}

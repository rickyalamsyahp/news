'use client'

import { useRouter, usePathname } from '../../../navigation'
// import LanguageIcon from '../../../assets/images/language-icon.svg'
// import Image from 'next/image'
// import { NavDropdown, NavItem } from 'react-bootstrap'

export default function LocaleSwitcherSelect({ children, defaultValue }) {
  const router = useRouter()
  const pathname = usePathname()

  const onSelectChange = event => {
    const nextLocale = event.target.value
    router.replace(pathname, { locale: nextLocale })
  }

  //   const onSelectChangeMobile = locale => {
  //     startTransition(() => {
  //       router.replace(pathname, { locale })
  //     })
  //   }

  return (
    <>
      {/* <Image
          priority
          src={LanguageIcon}
          alt='language'
          width={20}
          height={20}
          className={`${longText ? 'mt-0 mt-md-2' : 'mt-2'} ms-2`}
        /> */}
      {/* <NavDropdown
        className='d-md-none d-block fw-medium'
        title={defaultValue.toUpperCase()}
      >
        {children.map(cur => {
          return (
            <NavItem
              onClick={() => {
                onSelectChangeMobile(cur)
              }}
              className='fw-normal nav-link nav-item hover:cursor'
              key={`${cur}`}
            >
              {cur === 'en' ? 'English' : 'Bahasa Indonesia'}
            </NavItem>
          )
        })}
      </NavDropdown> */}

      <select
        className='d-flex bg-transparent py-2 px-2 border-0 fw-bold text-white nunito-sans select-language'
        defaultValue={defaultValue}
        onChange={onSelectChange}
      >
        {children.map((cur, index) => (
          <option key={`language-${index}-${cur.value}`} value={cur.value}>
            {cur.label.toUpperCase()}
          </option>
        ))}
      </select>
    </>
  )
}

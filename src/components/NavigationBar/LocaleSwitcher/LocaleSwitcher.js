import { useLocale } from 'next-intl'
import LocaleSwitcherSelect from './LocaleSwitcherSelect'
import LocaleSwitcherMobile from './LocaleSwitcherMobile'
import ENGLAND from '../../../assets/images/eng.png'
import INDONESIA from '../../../assets/images/id.png'

const locales = [
  { value: 'en', label: 'ENG', logo: ENGLAND },
  { value: 'id', label: 'IDN', logo: INDONESIA },
]

export default function LocaleSwitcher() {
  const locale = useLocale()
  return (
    <>
      <LocaleSwitcherSelect defaultValue={locale}>
        {locales}
      </LocaleSwitcherSelect>
      <LocaleSwitcherMobile defaultValue={locale}>
        {locales}
      </LocaleSwitcherMobile>
    </>
  )
}

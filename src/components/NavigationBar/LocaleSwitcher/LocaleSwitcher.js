import { useLocale } from 'next-intl'
import LocaleSwitcherSelect from './LocaleSwitcherSelect'
import LocaleSwitcherMobile from './LocaleSwitcherMobile'
import ENG from '../../../assets/svg/eng.svg'
import IDN from '../../../assets/svg/idn.svg'

const locales = [
  { value: 'en', label: 'ENG', logo: ENG },
  { value: 'id', label: 'IDN', logo: IDN },
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

import { useLocale } from 'next-intl'
import LocaleSwitcherSelect from './LocaleSwitcherSelect'

const locales = [
  { value: 'en', label: 'ENG' },
  { value: 'id', label: 'IDN' },
]

export default function LocaleSwitcher() {
  const locale = useLocale()

  return (
    <LocaleSwitcherSelect defaultValue={locale}>{locales}</LocaleSwitcherSelect>
  )
}

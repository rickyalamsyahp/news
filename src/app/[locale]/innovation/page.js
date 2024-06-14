import { getTranslations } from 'next-intl/server'
import { metadata } from '../../shared-metadata'
import JARS from '../../../components/Innovation/JARS/JARS'
import ATD from '../../../components/Innovation/ATD/ATD'
import ARC from '../../../components/Innovation/ARC/ARC'
import Hero from '../../../components/Innovation/Hero/Hero'
import JoinUs from '../../../components/Innovation/JoinUs/JoinUs'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('innovation.title'), t('innovation.description')),
  }
}

export default function Page() {
  return (
    <>
      <Hero />
      <JARS />
      <ATD />
      <ARC />
      <JoinUs />
    </>
  )
}

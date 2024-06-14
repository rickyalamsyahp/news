import { getTranslations } from 'next-intl/server'
import { metadata } from '../shared-metadata'
import Hero from '../../components/Homepage/Hero/Hero'
import TotalSolutions from '../../components/Homepage/TotalSolutions/TotalSolution'
import Commitments from '../../components/Homepage/Commitments/Commitment'
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('home.title'), t('home.description')),
  }
}

export default function Page() {
  return (
    <>
      <Hero />
      <TotalSolutions />
      <Commitments />
    </>
  )
}

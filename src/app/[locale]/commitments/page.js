import { getTranslations } from 'next-intl/server'
import { metadata } from '../../shared-metadata'
import Emphasizing from '../../../components/Commitments/Emphasizing/Emphasizing'
import Hero from '../../../components/Commitments/Hero/Hero'
import Empowering from '../../../components/Commitments/Empowering/Empowering'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('commitments.title'), t('commitments.description')),
  }
}

export default function Page() {
  return (
    <>
      <Hero />
      <Emphasizing />
      <Empowering />
    </>
  )
}

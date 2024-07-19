import { getTranslations } from 'next-intl/server'
import { metadata } from '../../shared-metadata'
import Hero from '../../../components/Products/TechnicalTeam/Hero/Hero'
import TechnicalTeam from '../../../components/Products/TechnicalTeam/TechnicalTeam'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('technical-team.title'), t('technical-team.description')),
  }
}

export default function Page() {
  return (
    <section className='bg-secondary-subtle'>
      <Hero />
      <TechnicalTeam />
    </section>
  )
}

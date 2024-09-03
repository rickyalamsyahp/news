import { getTranslations } from 'next-intl/server'
import { metadata } from '../../shared-metadata'
import Hero from '../../../components/Products/TechnicalTeam/Hero/Hero'
import TechnicalTeam from '../../../components/Products/TechnicalTeam/TechnicalTeam'
import { getSolutions } from '../../../api/responseApi'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('technical-team.title'), t('technical-team.description')),
  }
}

export default async function Page({ params: { locale } }) {
  const solutions = await getSolutions({ locale })
  const dataSolutionsCard = solutions?.data?.data
  const dataAnimalHealth = dataSolutionsCard?.filter(
    item => item?.attributes?.title === 'ANIMAL HEALTH & MOBILE LAB',
  )
  const dataTechnicalTeam = dataSolutionsCard?.filter(
    item => item?.attributes?.title === 'SHRIMP & FISH TECHNICAL TEAM',
  )
  const dataHero = dataAnimalHealth[0]?.attributes?.content.filter(
    item => item?.title === 'Hero Banner',
  )

  return (
    <section className='bg-secondary-subtle'>
      <Hero dataHero={dataHero} />
      <TechnicalTeam
        dataTechnicalTeam={dataTechnicalTeam}
        dataAnimalHealth={dataAnimalHealth}
      />
    </section>
  )
}

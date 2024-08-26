import { getTranslations } from 'next-intl/server'
import { metadata } from '../../shared-metadata'
import Hero from '../../../components/Products/FarmHatchery/Hero/Hero'
import Hatchery from '../../../components/Products/FarmHatchery/Hatchery/Hatchery'
import Farm from '../../../components/Products/FarmHatchery/Farm/Farm'
import Commitment from '../../../components/Products/FarmHatchery/Commitment/Commitment'
import JoinUs from '../../../components/Products/FarmHatchery/JoinUs/JoinUs'
import { getSolutions } from '../../../api/responseApi'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('hatchery-farm.title'), t('hatchery-farm.description')),
  }
}

export default async function Page({ params: { locale } }) {
  const solutions = await getSolutions({ locale })
  const dataSolutionsCard = solutions?.data?.data

  return (
    <>
      <Hero />
      <Hatchery />
      <Farm />
      <Commitment />
      <JoinUs />
    </>
  )
}

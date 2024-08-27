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
  const dataHatchery = dataSolutionsCard?.filter(
    item => item?.attributes?.title === 'SHRIMP & FISH HATCHERY',
  )
  const dataFarm = dataSolutionsCard?.filter(
    item => item?.attributes?.title === 'SHRIMP & FISH FARM',
  )
  const dataContentHatchery = dataHatchery[0]?.attributes
  const dataContentFarm = dataFarm[0]?.attributes

  // Extract data for each section in homepage
  const dataHero = dataContentHatchery?.content.filter(
    item => item?.title === 'Hero Banner',
  )
  const dataShrimpHatchery = dataContentHatchery?.content.filter(
    item => item?.headline === 'Shrimp Hatchery',
  )
  const dataFishHatchery = dataContentHatchery?.content.filter(
    item => item?.headline === 'Fish Hatchery',
  )

  const dataFishFarming = dataContentFarm?.content.filter(
    item => item?.headline === 'Fish Farming',
  )
  const dataShrimpFarming = dataContentFarm?.content.filter(
    item => item?.headline === 'Shrimp Farming',
  )
  const dataCommitment = dataContentFarm?.content.filter(
    item => item?.title === 'Our Commitment to Quality and Safety',
  )

  return (
    <>
      <Hero dataHero={dataHero} />
      <Hatchery
        dataShrimpHatchery={dataShrimpHatchery}
        dataFishHatchery={dataFishHatchery}
      />
      <Farm
        dataFishFarming={dataFishFarming}
        dataShrimpFarming={dataShrimpFarming}
      />
      <Commitment dataCommitment={dataCommitment} />
      <JoinUs />
    </>
  )
}

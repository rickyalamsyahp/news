import { getTranslations } from 'next-intl/server'
import { metadata } from '../../shared-metadata'

import Introduction from '../../../components/Products/Aquafeed/Introduction/Introduction'
import Species from '../../../components/Products/Aquafeed/Species/Species'
import Reasons from '../../../components/Products/Aquafeed/Reasons/Reasons'
import TotalSolutions from '../../../components/Products/Aquafeed/TotalSolutions/TotalSolutions'
import { getSolutions, getSpecies } from '../../../api/responseApi'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })
  return {
    ...metadata(t('aquafeed.title'), t('aquafeed.description')),
  }
}

export default async function Page({ params: { locale } }) {
  const species = await getSpecies({ locale })
  const {
    data: { data },
  } = species

  const solutions = await getSolutions({ locale })

  const dataSolutionsCard = solutions?.data?.data
  const dataAquafeed = dataSolutionsCard?.filter(
    item => item?.attributes?.title === 'AQUAFEED',
  )
  const dataContent = dataAquafeed[0]?.attributes

  // Extract data for each section in homepage
  const dataHero = dataContent?.content.filter(item => item?.title === 'Hero')
  const dataSpeciesDescription = dataContent?.content.filter(
    item => item?.title === 'Species',
  )
  const dataReasons = dataContent?.content.filter(
    item => item?.title === 'why choose aquafeed',
  )

  return (
    <>
      <Introduction dataHero={dataHero} />
      <Species
        dataSpecies={data}
        dataSpeciesDescription={dataSpeciesDescription}
      />
      <Reasons dataReasons={dataReasons} />
      <TotalSolutions dataSolutionsCard={dataSolutionsCard} />
    </>
  )
}

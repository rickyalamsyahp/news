import { getTranslations } from 'next-intl/server'
import { metadata } from '../../shared-metadata'

import Introduction from '../../../components/Products/Aquafeed/Introduction/Introduction'
import Species from '../../../components/Products/Aquafeed/Species/Species'
import Reasons from '../../../components/Products/Aquafeed/Reasons/Reasons'
import TotalSolutions from '../../../components/Products/Aquafeed/TotalSolutions/TotalSolutions'
import { getSpecies } from '../../../api/responseApi'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })
  const species = await getSpecies({ locale })
    // const {
    //   data: { data },
    // } = species
    console.log(species,"sinii bro")
  return {
    ...metadata(t('aquafeed.title'), t('aquafeed.description')),
  }
}

export default async function Page({ params: { locale } }) {
  const species = await getSpecies({ locale })
  const {
    data: { data },
  } = species
  console.log(data)

  return (
    <>
      <Introduction />
      <Species />
      <Reasons />
      <TotalSolutions />
    </>
  )
}

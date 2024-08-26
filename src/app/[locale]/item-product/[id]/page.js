import { getTranslations } from 'next-intl/server'
import { metadata } from '../../../shared-metadata'
import ItemProduct from '../../../../components/ItemProduct/ItemProduct'
import {
  getFeedShapes,
  getPhases,
  getProducts,
  getSpeciesById,
} from '../../../../api/responseApi'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('news-article.title'), t('news-article.description')),
  }
}

export default async function Page({ params: { locale, id } }) {
  const getSpecies = await getSpeciesById({ locale, id })
  const populates = {
    'populate[0]': 'species',
    'populate[1]': 'image',
  }
  const species = getSpecies.data.data
  const paramsSpecies = species.attributes.name
  const phases = (await getPhases({ locale })).data.data
  const shapes = (await getFeedShapes({ locale })).data.data
  const products = await (
    await getProducts({ locale, species: paramsSpecies, populates })
  ).data.data

  return (
    <>
      <ItemProduct
        species={species}
        phases={phases}
        shapes={shapes}
        dataProduct={products}
        locale={locale}
        id={id}
      />
    </>
  )
}

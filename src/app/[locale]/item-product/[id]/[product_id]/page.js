import { getTranslations } from 'next-intl/server'
import { metadata } from '../../../../shared-metadata'
import ItemProductDetail from '../../../../../components/ItemProductDetail/ItemProductDetail'
import RelatedProduct from '../../../../../components/ItemProductDetail/RelatedProduct/RelatedProduct'
import {
  getProductById,
  getRelatedById,
  getSpeciesById,
} from '../../../../../api/responseApi'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('news-article.title'), t('news-article.description')),
  }
}

export default async function Page({ params: { locale, product_id, id } }) {
  const getSpecies = await getSpeciesById({ locale, id })
  const getProduct = await getProductById({ locale, id_product: product_id })
  const populates = {
    'populate[0]': 'relateds.image',
  }
  const getProductRelated = await getRelatedById({
    locale,
    id_product: product_id,
  })

  const species = getSpecies.data.data
  const product = getProduct.data.data.attributes
  const relateds = getProductRelated.data.data.attributes.relateds

  return (
    <section>
      <ItemProductDetail paramsSpecies={species} product={product} />
      <RelatedProduct relateds={relateds} id={id} />
    </section>
  )
}

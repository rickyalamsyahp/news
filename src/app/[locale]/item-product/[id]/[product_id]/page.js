import { getTranslations } from 'next-intl/server'
import { metadata } from '../../../../shared-metadata'
import ItemProductDetail from '../../../../../components/ItemProductDetail/ItemProductDetail'
import RelatedProduct from '../../../../../components/ItemProductDetail/RelatedProduct/RelatedProduct'
import {
  getProductById,
  getRelatedById,
  getSpeciesById,
  getSpeciesBySlug,
  getProductBySlug,
} from '../../../../../api/responseApi'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('news-article.title'), t('news-article.description')),
  }
}

export default async function Page({ params: { locale, product_id, id } }) {
  const getSpecies = await getSpeciesBySlug({ locale, id })
  const getProduct = await getProductBySlug({ locale, id_product: product_id })

  const species = getSpecies.data.data[0]
  const productid = getProduct.data.data[0]?.id
  const product = getProduct.data.data[0]?.attributes

  const getProductRelated = await getRelatedById({
    locale,
    id_product: productid,
  })
  const relateds = getProductRelated?.data?.data?.attributes?.relateds

  return (
    <section>
      <ItemProductDetail paramsSpecies={species} product={product} />
      <RelatedProduct relateds={relateds} id={id} />
    </section>
  )
}

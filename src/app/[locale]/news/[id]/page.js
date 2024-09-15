import { getTranslations } from 'next-intl/server'
import { metadata } from '../../../shared-metadata'
import NewsArticle from '../../../../components/NewsArticle/NewsArticle'
import {
  getArticleBySlug,
  getArticlesByCategory,
} from '../../../../api/responseApi'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('news-article.title'), t('news-article.description')),
  }
}

export default async function Page({ params: { locale, id } }) {
  const getArticlesCat = await getArticlesByCategory({ locale })
  const getArticleSlug = await getArticleBySlug({ locale, id })
  const articlesCat = getArticlesCat.data.data
  const articleSlug = getArticleSlug.data.data[0]

  return (
    <>
      <NewsArticle articleSlug={articleSlug} articlesCat={articlesCat} />
    </>
  )
}

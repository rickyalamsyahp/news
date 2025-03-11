import { getTranslations } from 'next-intl/server'
import { metadata } from '../../../shared-metadata'
import NewsDetail from '../../../../components/NewsArticle/NewsDetail'
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('news-article.title'), t('news-article.description')),
  }
}

export default async function Page({ params: { locale, id } }) {

  return (
    <>
      <NewsDetail />
    </>
  )
}

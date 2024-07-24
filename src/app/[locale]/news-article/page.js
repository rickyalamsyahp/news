import { getTranslations } from 'next-intl/server'
import { metadata } from '../../shared-metadata'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('news-article.title'), t('news-article.description')),
  }
}

export default function Page() {
  return <></>
}

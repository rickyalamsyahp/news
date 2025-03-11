import NewsArticle from '@/components/NewsArticle/NewsArticle'
import { getTranslations } from 'next-intl/server'
import { metadata } from '../shared-metadata'
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('home.title'), t('home.description')),
  }
}

export default async function Page({ params: { locale } }) { 
  return (
    <>
      {/* <Hero dataHero={dataHero} /> */}
      {/* <TotalSolutions
        dataSolutions={dataSolutions}
        dataSolutionsCard={dataSolutionsCard}
      /> */}
      <NewsArticle/>
      {/* <Commitments
        dataVideo={dataVideo}
        dataCommitments={dataCommitments}
        dataPortofolio={dataPortofolio}
        pagesArticle={pagesArticle}
      /> */}
    </>
  )
}

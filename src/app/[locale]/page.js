import { getTranslations } from 'next-intl/server'
import { metadata } from '../shared-metadata'
import Hero from '../../components/Homepage/Hero/Hero'
import TotalSolutions from '../../components/Homepage/TotalSolutions/TotalSolution'
import Commitments from '../../components/Homepage/Commitments/Commitment'
import { getArticles, getPages, getSolutions } from '../../api/responseApi'
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('home.title'), t('home.description')),
  }
}

export default async function Page({ params: { locale } }) {
  const pages = await getPages({ locale })
  const pagesArticle = await getArticles({ locale })
  const solutions = await getSolutions({ locale })

  const {
    data: { data },
  } = pages

  const dataSolutionsCard = solutions?.data?.data

  const dataHomepage = data?.filter(item => item?.attributes?.title === 'Home')

  const dataContent = dataHomepage[0]?.attributes

  // Extract data for each section in homepage
  const dataHero = dataContent?.content.filter(item => item?.title === 'Hero')
  
  const dataSolutions = dataContent?.content.filter(
    item => item?.title === 'Solutions',
  )
  const dataCommitments = dataContent?.content.filter(
    item => item?.title === 'Commitments',
  )
  const dataPortofolio = dataContent?.content.filter(
    item => item?.title === 'Portfolio',
  )
  const dataVideo = dataContent?.content.filter(
    item => item?.title === 'Video',
  )
  
  return (
    <>
      <Hero dataHero={dataHero} />
      <TotalSolutions
        dataSolutions={dataSolutions}
        dataSolutionsCard={dataSolutionsCard}
      />
      <Commitments
      dataVideo={dataVideo}
        dataCommitments={dataCommitments}
        dataPortofolio={dataPortofolio}
        pagesArticle={pagesArticle}
      />
    </>
  )
}

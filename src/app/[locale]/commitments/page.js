import { getTranslations } from 'next-intl/server'
import { metadata } from '../../shared-metadata'
import Emphasizing from '../../../components/Commitments/Emphasizing/Emphasizing'
import Hero from '../../../components/Commitments/Hero/Hero'
import Empowering from '../../../components/Commitments/Empowering/Empowering'
import { getArticles, getPages } from '../../../api/responseApi'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('commitments.title'), t('commitments.description')),
  }
}

export default async function Page({ params: { locale } }) {
  const pages = await getPages({ locale, filter: '/commitments' })
  const pagesArticle = await getArticles({ locale })

  const {
    data: { data },
  } = pages
  const dataContent = data[0]?.attributes?.content
  const dataHero = dataContent?.filter(item => item?.title === 'Hero')
  const dataEmphasizing = dataContent?.filter(
    item => item?.title === 'Emphasizing',
  )
  const dataEmpowering = dataContent?.filter(
    item => item?.title === 'Empowering',
  )
  return (
    <>
      <Hero dataHero={dataHero} />
      <Emphasizing dataEmphasizing={dataEmphasizing} />
      <Empowering dataEmpowering={dataEmpowering} pagesArticle={pagesArticle} />
    </>
  )
}

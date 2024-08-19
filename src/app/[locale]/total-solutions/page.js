import { getTranslations } from 'next-intl/server'
import { metadata } from '../../shared-metadata'
import Hero from '../../../components/TotalSolutions/Hero/Hero'
import OurProducts from '../../../components/TotalSolutions/OurProducts/OurProducts'
import OurServices from '../../../components/TotalSolutions/OurServices/OurServices'
import { getPages } from '../../../api/responseApi'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('total-solutions.title'), t('total-solutions.description')),
  }
}

export default async function Page({ locale }) {
  const pages = await getPages({ locale })
  const {
    data: { data },
  } = pages
  const dataTotalSolutions = data?.filter(
    item => item?.attributes?.title === 'Total Solutions',
  )
  const dataContent = dataTotalSolutions[0]?.attributes?.content
  const dataHero = dataContent?.filter(item => item?.title === 'Hero')
  const dataProduct = dataContent?.filter(
    item => item?.title === 'Our Products',
  )
  const dataService = dataContent?.filter(
    item => item?.title === 'Our Services',
  )

  return (
    <>
      <Hero dataHero={dataHero} />
      <OurProducts dataProduct={dataProduct} />
      <OurServices dataService={dataService} />
    </>
  )
}

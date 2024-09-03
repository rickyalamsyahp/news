import { getTranslations } from 'next-intl/server'
import { metadata } from '../../shared-metadata'
import Hero from '../../../components/Products/SeafoodProcessing/Hero/Hero'
import Introduction from '../../../components/Products/SeafoodProcessing/Introduction/Introduction'
import Products from '../../../components/Products/SeafoodProcessing/Products/Products'
import { getSolutions } from '../../../api/responseApi'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('total-solutions.title'), t('total-solutions.description')),
  }
}

export default async function Page({ params: { locale } }) {
  const solutions = await getSolutions({ locale })
  const dataSolutionsCard = solutions?.data?.data
  const dataSeafoodProcessing = dataSolutionsCard?.filter(
    item => item?.attributes?.title === 'SEAFOOD PROCESSING',
  )
  const dataContent = dataSeafoodProcessing[0]?.attributes
  console.log(dataContent);
  
  const dataHero = dataContent?.content.filter(
    item => item?.title === 'Hero Banner',
  )
  const dataTobaTolapia = dataContent?.content.filter(
    item => item?.title === 'Toba Tilapia',
  )
  const dataSeafoodLovers = dataContent?.content.filter(
    item => item?.title === 'Seafood Lovers',
  )
  const dataPrimeSeafood = dataContent?.content.filter(
    item => item?.title === 'JAPFA Prime Seafood',
  )
  return (
    <>
      <Hero dataHero={dataHero} />
      <Introduction dataHero={dataHero} />
      <Products
        dataTobaTolapia={dataTobaTolapia}
        dataSeafoodLovers={dataSeafoodLovers}
        dataPrimeSeafood={dataPrimeSeafood}
      />
    </>
  )
}

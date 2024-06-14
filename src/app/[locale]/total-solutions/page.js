import { getTranslations } from 'next-intl/server'
import { metadata } from '../../shared-metadata'
import Hero from '../../../components/TotalSolutions/Hero/Hero'
import OurProducts from '../../../components/TotalSolutions/OurProducts/OurProducts'
import OurServices from '../../../components/TotalSolutions/OurServices/OurServices'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('total-solutions.title'), t('total-solutions.description')),
  }
}

export default function Page() {
  return (
    <>
      <Hero />
      <OurProducts />
      <OurServices />
    </>
  )
}

import { getTranslations } from 'next-intl/server'
import { metadata } from '../../shared-metadata'
import Hero from '../../../components/Products/SeafoodProcessing/Hero/Hero'
import Introduction from '../../../components/Products/SeafoodProcessing/Introduction/Introduction'
import Products from '../../../components/Products/SeafoodProcessing/Products/Products'

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
      <Introduction />
      <Products />
    </>
  )
}

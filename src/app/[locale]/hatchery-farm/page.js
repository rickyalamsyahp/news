import { getTranslations } from 'next-intl/server'
import { metadata } from '../../shared-metadata'
import Hero from '../../../components/Products/FarmHatchery/Hero/Hero'
import Hatchery from '../../../components/Products/FarmHatchery/Hatchery/Hatchery'
import Farm from '../../../components/Products/FarmHatchery/Farm/Farm'
import Commitment from '../../../components/Products/FarmHatchery/Commitment/Commitment'
import JoinUs from '../../../components/Products/FarmHatchery/JoinUs/JoinUs'

// export async function generateMetadata({ params: { locale } }) {
//   const t = await getTranslations({ locale, namespace: 'seo' })

//   return {
//     ...metadata(t('total-solutions.title'), t('total-solutions.description')),
//   }
// }

export default function Page() {
  return (
    <>
      <Hero />
      <Hatchery />
      <Farm />
      <Commitment />
      <JoinUs />
    </>
  )
}

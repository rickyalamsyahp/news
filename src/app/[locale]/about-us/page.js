import { getTranslations } from 'next-intl/server'
import { metadata } from '../../shared-metadata'
import Hero from '../../../components/AboutUs/Hero/Hero'
import Journey from '../../../components/AboutUs/Journey/Journey'
import VisionMission from '../../../components/AboutUs/VisionMission/VisionMission'
import CoreValue from '../../../components/AboutUs/CoreValue/CoreValue'
import Operations from '../../../components/AboutUs/Operations/Operation'
import Certification from '../../../components/AboutUs/Certification/Certification'
import Introduction from '../../../components/AboutUs/Introduction/Introduction'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('about-us.title'), t('about-us.description')),
  }
}

export default function Page() {
  return (
    <section className='bg-secondary-subtle'>
      <Hero />
      <Introduction />
      <Journey />
      <VisionMission />
      <CoreValue />
      <Operations />
      <Certification />
    </section>
  )
}

import { getTranslations } from 'next-intl/server'
import { metadata } from '../../shared-metadata'
import Hero from '../../../components/AboutUs/Hero/Hero'
import Journey from '../../../components/AboutUs/Journey/Journey'
import VisionMission from '../../../components/AboutUs/VisionMission/VisionMission'
import CoreValue from '../../../components/AboutUs/CoreValue/CoreValue'
import Operations from '../../../components/AboutUs/Operations/Operation'
import Certification from '../../../components/AboutUs/Certification/Certification'
import Introduction from '../../../components/AboutUs/Introduction/Introduction'
import { getJourneys, getPages, getValues } from '../../../api/responseApi'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('about-us.title'), t('about-us.description')),
  }
}

export default async function Page({ params: { locale } }) {
  const pages = await getPages({ locale })
  const values = await getValues({ locale })

  const journeys = await getJourneys({ locale })
  const {
    data: { data },
  } = pages
  const {
    data: { data: journey },
  } = journeys

  const {
    data: { data: value },
  } = values


  const dataHomepage = data?.filter(
    item => item?.attributes?.title === 'About Us',
  )
  const dataContent = dataHomepage[0]?.attributes

  // Extract data for each section in homepage
  const dataHero = dataContent?.content.filter(item => item?.title === 'Hero')
  const dataIntro = dataContent?.content.filter(item => item?.title === 'Intro')
  const dataOurVision = dataContent?.content.filter(
    item => item?.title === 'Our Vision',
  )
  const dataOurMission = dataContent?.content.filter(
    item => item?.title === 'Our Mission',
  )
  const dataOurValues = dataContent?.content.filter(
    item => item?.title === 'Our Values',
  )
  const dataOurOperations = dataContent?.content.filter(
    item => item?.title === 'Our Operations',
  )
  const dataOurCertification = dataContent?.content.filter(
    item => item?.title === 'Our Certification',
  )
  return (
    <>
      <Hero dataHero={dataHero} />
      <section className='bg-border'>
        <Introduction dataIntro={dataIntro} />
        <Journey journey={journey} />
        <VisionMission
          dataOurVision={dataOurVision}
          dataOurMission={dataOurMission}
        />
        <CoreValue dataOurValues={dataOurValues} value={value}/>
      </section>
      <section className='bg-secondary-subtle'>
        <Operations dataOurOperations={dataOurOperations} />
        <Certification dataOurCertification={dataOurCertification} />
      </section>
    </>
  )
}

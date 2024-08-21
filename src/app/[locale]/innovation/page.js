import { getTranslations } from 'next-intl/server'
import { metadata } from '../../shared-metadata'
import JARS from '../../../components/Innovation/JARS/JARS'
import ATD from '../../../components/Innovation/ATD/ATD'
import ARC from '../../../components/Innovation/ARC/ARC'
import Hero from '../../../components/Innovation/Hero/Hero'
import JoinUs from '../../../components/Innovation/JoinUs/JoinUs'
import { getPages } from '../../../api/responseApi'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('innovation.title'), t('innovation.description')),
  }
}

export default async function Page({ params: { locale } }) {
  const pages = await getPages({ locale, filter: '/innovation' })
  const {
    data: { data },
  } = pages
  const dataContent = data[0]?.attributes?.content
  const dataHero = dataContent?.filter(item => item?.title === 'Hero')
  const dataJARS = dataContent?.filter(item => item?.title === 'JARS')
  const dataATD = dataContent?.filter(item => item?.title === 'ATD')
  const dataARC = dataContent?.filter(item => item?.title === 'ARC')
  const dataContact = dataContent?.filter(item => item?.title === 'Contact')
  return (
    <>
      <Hero dataHero={dataHero} />
      <JARS dataJARS={dataJARS} />
      <ATD dataATD={dataATD} />
      <ARC dataARC={dataARC} />
      <JoinUs dataContact={dataContact} />
    </>
  )
}

import { useTranslations } from 'next-intl'
import { Container } from 'react-bootstrap'
import Breadcrumbs from '../../../GeneralComponent/Breadcrumbs/Breadcrumbs'
import Image from 'next/image'
import BGAquafeed1 from '../../../../assets/images/bg-aquafeed-1.png'
import Reveal from '../../../Animation/Reveal/Reveal'

function Introduction({ dataHero }) {
  const t = useTranslations('aquafeed.introduction')
  const dataBreadCrumb = [
    {
      text: 'Home',
      href: '/',
      active: false,
    },
    {
      text: 'Total Solution',
      href: '/total-solutions',
      active: false,
    },
    {
      text: 'Aquafeed',
      href: '/aquafeed',
      active: true,
    },
  ]

  return (
    <section className='position-relative'>
      <Container className='pt-2 pt-md-5'>
        <Breadcrumbs data={dataBreadCrumb} />
        <div className='w-75 mb-5'>
          <Reveal direction='top' overflow={true}>
            <h2 className='fw-bold my-5'>
              {dataHero.length > 0 ? dataHero[0].headline : t('title')}
            </h2>
          </Reveal>
          <Reveal direction='top' overflow={true}>
            <h3 className='pb-5'>
              {dataHero.length > 0 ? dataHero[0].highlight : t('description')}
            </h3>
          </Reveal>
        </div>
        <Image
          alt='bg-aquafeed1'
          src={BGAquafeed1}
          className='w-25 h-auto position-absolute end-0 top-50 img-aquafeed'
        />
      </Container>
    </section>
  )
}

export default Introduction

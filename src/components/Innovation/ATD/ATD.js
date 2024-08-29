import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import ATDImage from '../../../assets/images/ATD.jpg'
import Reveal from '../../Animation/Reveal/Reveal'
import CardEffectCarousel from '../../GeneralComponent/CardEffectCarousel/CardEffectCarousel'

export default function ATD({ dataATD }) {
  const t = useTranslations('innovation.atd')
  const dataATDCarouselApi = dataATD
    ? dataATD[0].image.data.map((data, index) => ({
        src: `${process.env.NEXT_PUBLIC_HOST_IMAGE}${data.attributes.url}`,
      }))
    : []
  const dataATDCarousel = [{ src: ATDImage }, { src: ATDImage }]
  return (
    <section className='py-3 py-md-5 unique-bg' id='atd'>
      <Container>
        <Row className='h-100 gap-3 gap-md-5 justify-content-between'>
          <Col md={5}>
            <Reveal overflow={true} direction={'top'}>
              <CardEffectCarousel dataCarousel={dataATDCarouselApi} />
            </Reveal>
          </Col>
          <Col md={5}>
            <Reveal direction={'right'} overflow={true}>
              <div className='d-flex gap-3 gap-md-5 flex-column'>
                <Title
                  description={
                    dataATD ? dataATD[0]?.highlight : t('description')
                  }
                  title={
                    dataATD
                      ? dataATD[0]?.headline
                      : 'Aquaculture Technology Development (ATD)'
                  }
                  download={t('download')}
                />
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

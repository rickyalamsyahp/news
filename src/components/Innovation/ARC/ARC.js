import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import ARCImage from '../../../assets/images/ARC.jpg'
import ARCImage2 from '../../../assets/images/ARC-2.jpg'
import ARCImage3 from '../../../assets/images/ARC-3.jpg'
import Reveal from '../../Animation/Reveal/Reveal'
import CardEffectCarousel from '../../GeneralComponent/CardEffectCarousel/CardEffectCarousel'

export default function ARC({ dataARC }) {
  const t = useTranslations('innovation.arc')
  const dataARCCarousel = [
    { src: ARCImage },
    { src: ARCImage2 },
    { src: ARCImage3 },
  ]
  return (
    <section className='py-3 py-md-5 bg-light' id='arc'>
      <Container className='mb-5'>
        <Row className='justify-content-between align-items-center h-100'>
          <Col md={{ span: 5, order: '2' }} className='mt-3 mt-md-0'>
            <Reveal direction={'top'} overflow={true}>
              <CardEffectCarousel
                dataCarousel={dataARCCarousel}
                cardWidth={350}
              />
            </Reveal>
          </Col>
          <Col md={{ span: 4, order: '1' }}>
            <Reveal direction={'left'} overflow={true}>
              <div className='d-flex gap-3 gap-md-5 flex-column mt-3 mt-md-5'>
                <Title
                  description={
                    dataARC ? dataARC[0]?.highlight : t('description')
                  }
                  title={
                    dataARC
                      ? dataARC[0]?.headline
                      : 'Aquaculture Research Center (ARC)'
                  }
                />
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

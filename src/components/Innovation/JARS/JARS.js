import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import JARSImage from '../../../assets/images/JARS.jpg'
import Reveal from '../../Animation/Reveal/Reveal'
import CardEffectCarousel from '../../GeneralComponent/CardEffectCarousel/CardEffectCarousel'

export default function JARS() {
  const t = useTranslations('innovation.jars')
  const dataJARS = [{ src: JARSImage }, { src: JARSImage }]
  return (
    <section className='pb-3 pb-md-5' id='jars'>
      <Container>
        <Row className='justify-content-between align-items-start h-100'>
          <Col md={{ span: 8, order: '2' }} className='mt-3 mt-md-0'>
            <Reveal overflow={true} direction={'top'}>
              <CardEffectCarousel dataCarousel={dataJARS} cardWidth={350} />
            </Reveal>
          </Col>
          <Col md={{ span: 4, order: '1' }}>
            <Reveal overflow={true} direction={'left'}>
              <div className='d-flex gap-3 gap-md-5 flex-column mt-3 mt-md-5'>
                <Title
                  description={t('description')}
                  title={'Japfa Aquaculture Research Station (JARS)'}
                />
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

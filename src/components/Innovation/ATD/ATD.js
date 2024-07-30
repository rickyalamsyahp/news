import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import ATDImage from '../../../assets/images/ATD.jpg'
import Reveal from '../../Animation/Reveal/Reveal'
import CardEffectCarousel from '../../GeneralComponent/CardEffectCarousel/CardEffectCarousel'

export default function ATD() {
  const t = useTranslations('innovation.atd')
  const dataATD = [{ src: ATDImage }, { src: ATDImage }]
  return (
    <section className='py-3 py-md-5 unique-bg' id='atd'>
      <Container>
        <Row className='align-items-center h-100 gap-3 gap-md-5'>
          <Col md={5}>
            <Reveal overflow={true} direction={'top'}>
              <CardEffectCarousel dataCarousel={dataATD} cardWidth={350} />
            </Reveal>
          </Col>
          <Col md={4}>
            <Reveal direction={'right'} overflow={true}>
              <div className='d-flex gap-3 gap-md-5 flex-column mt-3 mt-md-5'>
                <Title
                  description={t('description')}
                  title={'Aquaculture Technology Development (ATD)'}
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

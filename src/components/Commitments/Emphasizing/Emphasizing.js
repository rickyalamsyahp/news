import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import Reveal from '../../Animation/Reveal/Reveal'
import CardEffectCarousel from '../../GeneralComponent/CardEffectCarousel/CardEffectCarousel'

export default function Emphasizing({ dataEmphasizing }) {
  const t = useTranslations('commitments.emphasizing')
  const dataEmphasizingCarouselApi = dataEmphasizing
    ? dataEmphasizing[0].image.data.map((data, index) => ({
        src: `${process.env.NEXT_PUBLIC_HOST_IMAGE}${data.attributes.url}`,
      }))
    : []
  var paragraphs = dataEmphasizing[0]?.highlight.split(/(?:\r?\n)+/)
  return (
    <section className='pb-3 pb-md-5 unique-bg-2'>
      <Container className='mb-0 mb-md-5'>
        <Row className='justify-content-between align-items-start h-100'>
          <Col md={{ span: 7, order: '2' }} className='mt-3 mt-md-0'>
            <Reveal direction={'top'} overflow={true}>
              <CardEffectCarousel dataCarousel={dataEmphasizingCarouselApi} />
            </Reveal>
          </Col>
          <Col md={{ span: 5, order: '1' }}>
            <Reveal direction={'left'} overflow={true}>
              <div className='d-flex gap-3 gap-md-5 flex-column mt-3 mt-md-5'>
                <Title
                  description={
                    dataEmphasizing ? paragraphs[0] : t('description1')
                  }
                  title={
                    dataEmphasizing ? dataEmphasizing[0]?.headline : t('title')
                  }
                />
                <Title
                  description={
                    dataEmphasizing ? paragraphs[1] : t('description2')
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

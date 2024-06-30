import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import EmphasizingImage from '../../../assets/images/emphasizing-image.png'
import Reveal from '../../Animation/Reveal/Reveal'

export default function Emphasizing() {
  const t = useTranslations('commitments.emphasizing')
  return (
    <section className='pb-3 pb-md-5 unique-bg-2'>
      <Container className='mb-0 mb-md-5'>
        <Row className='justify-content-between align-items-start h-100'>
          <Col md={{ span: 5, order: '2' }} className='mt-3 mt-md-0'>
            <Reveal direction={'top'} overflow={true}>
              <Image
                src={EmphasizingImage}
                alt='emphasizing-image'
                className='img-innovation'
              />
            </Reveal>
          </Col>
          <Col md={{ span: 4, order: '1' }}>
            <Reveal direction={'left'} overflow={true}>
              <div className='d-flex gap-3 gap-md-5 flex-column mt-3 mt-md-5'>
                <Title description={t('description1')} title={t('title')} />
                <Title description={t('description2')} />
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

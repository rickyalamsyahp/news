import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ARCImage from '../../../assets/images/arc-image.png'
import Reveal from '../../Animation/Reveal/Reveal'

export default function ARC() {
  const t = useTranslations('innovation.arc')
  return (
    <section className='py-3 py-md-5 bg-light'>
      <Container className='mb-5'>
        <Row className='justify-content-between align-items-center h-100'>
          <Col md={{ span: 5, order: '2' }} className='mt-3 mt-md-0'>
            <Reveal direction={'top'} overflow={true}>
              <Image
                src={ARCImage}
                alt='arc-image'
                className='img-innovation'
              />
            </Reveal>
          </Col>
          <Col md={{ span: 4, order: '1' }}>
            <Reveal direction={'left'} overflow={true}>
              <div className='d-flex gap-3 gap-md-5 flex-column mt-3 mt-md-5'>
                <Title
                  description={t('description')}
                  title={'Aquaculture Research Center (ARC)'}
                />
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

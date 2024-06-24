'use client'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ARCImage from '../../../assets/images/arc-image.png'
import ScrollAnimation from 'react-animate-on-scroll'

export default function ARC() {
  const t = useTranslations('innovation.arc')
  return (
    <section className='py-5 bg-light'>
      <Container className='mb-5'>
        <Row className='justify-content-between align-items-center h-100'>
          <Col md={4} className='d-flex gap-5 flex-column'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
              <Title
                description={t('description')}
                title={'Aquaculture Research Center (ARC)'}
              />
            </ScrollAnimation>
          </Col>
          <Col md={5}>
            <ScrollAnimation animateIn='fadeInDown' animateOnce={true}>
              <Image src={ARCImage} alt='arc-image' className='w-100 h-auto' />
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

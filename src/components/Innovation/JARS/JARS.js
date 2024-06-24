'use client'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import JARSImage from '../../../assets/images/jars-image.png'
import ScrollAnimation from 'react-animate-on-scroll'

export default function JARS() {
  const t = useTranslations('innovation.jars')
  return (
    <section className='pb-5'>
      <Container>
        <Row className='justify-content-between align-items-center h-100'>
          <Col md={4} className='d-flex gap-5 flex-column'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
              <Title
                description={t('description')}
                title={'Japfa Aquaculture Research Station (JARS)'}
              />
            </ScrollAnimation>
          </Col>
          <Col md={5}>
            <ScrollAnimation animateIn='fadeInDown' animateOnce={true}>
              <Image
                src={JARSImage}
                alt='jars-image'
                className='w-100 h-auto'
              />
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

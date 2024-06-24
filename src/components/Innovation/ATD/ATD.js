'use client'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ATDImage from '../../../assets/images/atd-image.png'
import ScrollAnimation from 'react-animate-on-scroll'

export default function ATD() {
  const t = useTranslations('innovation.atd')
  return (
    <section className='py-5 unique-bg'>
      <Container>
        <Row className='align-items-center h-100 gap-5'>
          <Col md={5}>
            <ScrollAnimation animateIn='fadeInDown' animateOnce={true}>
              <Image src={ATDImage} alt='atd-image' className='w-100 h-auto' />
            </ScrollAnimation>
          </Col>
          <Col md={4} className='d-flex gap-5 flex-column'>
            <ScrollAnimation animateIn='fadeInRight' animateOnce={true}>
              <Title
                description={t('description')}
                title={'Aquaculture Technology Development (ATD)'}
                readMore={t('download')}
              />
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

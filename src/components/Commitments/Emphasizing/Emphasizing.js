'use client'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import EmphasizingImage from '../../../assets/images/emphasizing-image.png'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Emphasizing() {
  const t = useTranslations('commitments.emphasizing')
  return (
    <section className='pb-5 unique-bg-2'>
      <Container className='mb-5'>
        <Row className='justify-content-between align-items-center h-100'>
          <Col md={4} className='d-flex gap-5 flex-column'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
              <Title description={t('description1')} title={t('title')} />
              <Title description={t('description2')} />
            </ScrollAnimation>
          </Col>
          <Col md={5}>
            <ScrollAnimation animateIn='fadeInDown' animateOnce={true}>
              <Image
                src={EmphasizingImage}
                alt='emphasizing-image'
                className='w-100 h-auto'
              />
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

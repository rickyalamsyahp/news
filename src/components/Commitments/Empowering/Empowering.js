'use client'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import EmpoweringImage from '../../../assets/images/arc-image.png'
import Carousel from '../../GeneralComponent/Carousel/Carousel'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Empowering() {
  const t = useTranslations('commitments.empowering')
  return (
    <section className='py-5 bg-light overflow-hidden'>
      <Container className='py-5'>
        <Row className='align-items-center h-100 gap-5 mb-5'>
          <Col md={5}>
            <ScrollAnimation animateIn='fadeInDown' animateOnce={true}>
              <Image
                src={EmpoweringImage}
                alt='empowering-image'
                className='w-100 h-auto'
              />
            </ScrollAnimation>
          </Col>
          <Col md={6} className='d-flex gap-5 flex-column'>
            <ScrollAnimation animateIn='fedeInRight' animateOnce={true}>
              <Title description={t('description1')} title={t('title')} />
              <Title description={t('description2')} />
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
      <Carousel />
    </section>
  )
}

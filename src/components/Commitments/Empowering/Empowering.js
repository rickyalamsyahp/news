'use client'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import EmpoweringImage from '../../../assets/images/ARC.jpg'
import Carousel from '../../GeneralComponent/Carousel/Carousel'
import Reveal from '../../Animation/Reveal/Reveal'

export default function Empowering() {
  const t = useTranslations('commitments.empowering')
  return (
    <section className='py-3 py-md-5 bg-light overflow-hidden'>
      <Container className='pb-3 pb-md-5'>
        <Row className='align-items-center h-100 gap-3 gap-md-5'>
          <Col md={5}>
            <Reveal overflow={true} direction={'top'}>
              <Image
                src={EmpoweringImage}
                alt='empowering-image'
                className='img-innovation'
              />
            </Reveal>
          </Col>
          <Col md={4}>
            <Reveal direction={'right'} overflow={true}>
              <div className='d-flex gap-3 gap-md-5 flex-column mt-3 mt-md-5'>
                <Title description={t('description1')} title={t('title')} />
                <Title description={t('description2')} />
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
      <Carousel />
    </section>
  )
}

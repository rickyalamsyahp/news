import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import EmpoweringImage from '../../../assets/images/arc-image.png'
import Carousel from '../../GeneralComponent/Carousel/Carousel'

export default function Empowering() {
  const t = useTranslations('commitments.empowering')
  return (
    <section className='py-5 bg-light overflow-hidden'>
      <Container className='py-5'>
        <Row className='align-items-center h-100 gap-5 mb-5'>
          <Col md={5}>
            <Image
              src={EmpoweringImage}
              alt='empowering-image'
              className='w-100 h-auto'
            />
          </Col>
          <Col md={6} className='d-flex gap-5 flex-column'>
            <Title description={t('description1')} title={t('title')} />
            <Title description={t('description2')} />
          </Col>
        </Row>
      </Container>
      <Carousel />
    </section>
  )
}

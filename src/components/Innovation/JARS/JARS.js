import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import JARSImage from '../../../assets/images/jars-image.png'

export default function JARS() {
  const t = useTranslations('innovation.jars')
  return (
    <section className='py-5'>
      <Container>
        <Row className='justify-content-between align-items-center h-100'>
          <Col md={4} className='d-flex gap-5 flex-column'>
            <Title
              description={t('description')}
              title={'Japfa Aquaculture Research Station (JARS)'}
            />
          </Col>
          <Col md={5}>
            <Image src={JARSImage} alt='jars-image' className='w-100 h-auto' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ATDImage from '../../../assets/images/atd-image.png'

export default function ATD() {
  const t = useTranslations('innovation.atd')
  return (
    <section className='py-5 unique-bg'>
      <Container>
        <Row className='align-items-center h-100 gap-5'>
          <Col md={5}>
            <Image src={ATDImage} alt='atd-image' className='w-100 h-auto' />
          </Col>
          <Col md={4} className='d-flex gap-5 flex-column'>
            <Title
              description={t('description')}
              title={'Aquaculture Technology Development (ATD)'}
              readMore={t('download')}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

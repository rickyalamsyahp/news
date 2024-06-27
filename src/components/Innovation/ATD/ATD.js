import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ATDImage from '../../../assets/images/atd-image.png'
import Reveal from '../../Animation/Reveal/Reveal'

export default function ATD() {
  const t = useTranslations('innovation.atd')
  return (
    <section className='py-3 py-md-5 unique-bg'>
      <Container>
        <Row className='align-items-center h-100 gap-3 gap-md-5'>
          <Col md={5}>
            <Reveal overflow={true} direction={'top'}>
              <Image
                src={ATDImage}
                alt='atd-image'
                className='img-innovation'
              />
            </Reveal>
          </Col>
          <Col md={4}>
            <Reveal direction={'right'} overflow={true}>
              <div className='d-flex gap-3 gap-md-5 flex-column mt-3 mt-md-5'>
                <Title
                  description={t('description')}
                  title={'Aquaculture Technology Development (ATD)'}
                  readMore={t('download')}
                />
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

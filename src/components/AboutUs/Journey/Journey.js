import { useTranslations } from 'next-intl'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TabsJourney from './TabsJourney/TabsJourney'

function OurStory() {
  const t = useTranslations('about-us.journey')
  return (
    <section>
      <Container className='pb-0 pb-lg-5'>
        <Row>
          <Col>
            <h3 className='fw-bold text-center'>{t('title')}</h3>
          </Col>
        </Row>
      </Container>
      <TabsJourney />
    </section>
  )
}

export default OurStory

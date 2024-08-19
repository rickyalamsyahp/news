import { useTranslations } from 'next-intl'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TabsJourney from './TabsJourney/TabsJourney'

function OurStory({ journey }) {
  const t = useTranslations('about-us.journey')
  return (
    <section className='pb-5'>
      <Container className='pb-0 pb-lg-5'>
        <Row>
          <Col>
            <h3 className='fw-bold text-center py-5 py-md-0'>{t('title')}</h3>
          </Col>
        </Row>
      </Container>
      <TabsJourney journey={journey} />
    </section>
  )
}

export default OurStory

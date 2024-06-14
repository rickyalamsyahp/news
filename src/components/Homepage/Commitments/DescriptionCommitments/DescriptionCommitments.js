import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Title } from '../../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'

export default function DescriptionCommitments() {
  const t = useTranslations('homepage.commitments')
  return (
    <React.Fragment>
      <Row className='pb-2'>
        <Col sm={12}>
          <Title subtitle={t('subtitle')} />
        </Col>
      </Row>
      <Row className='pb-5'>
        <Col sm={12} md={6}>
          <Title title={t('title')} />
        </Col>
        <Col
          sm={12}
          md={6}
          className='d-flex justify-content-between flex-column'
        >
          <Title description={t('description')} readMore={t('see-all')} />
        </Col>
      </Row>
    </React.Fragment>
  )
}

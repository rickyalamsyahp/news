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
      <Row className='pb-2 pb-lg-5'>
        <Col sm={12} md={6} className='d-flex align-items-end mb-3 mb-lg-0'>
          <Title title={t('title')} />
        </Col>
        <Col
          sm={12}
          md={6}
          className='d-flex justify-content-between flex-column gap-2 gap-lg-5'
        >
          <Title description={t('description')} readMore={t('see-all')} />
        </Col>
      </Row>
    </React.Fragment>
  )
}

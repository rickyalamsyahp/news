import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Title } from '../../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import Reveal from '../../../Animation/Reveal/Reveal'

export default function DescriptionCommitments() {
  const t = useTranslations('homepage.commitments')
  return (
    <Fragment>
      <Row className='pb-2 pt-4'>
        <Col sm={12}>
          <Reveal overflow={true}>
            <Title subtitle={t('subtitle')} />
          </Reveal>
        </Col>
      </Row>
      <Row className='pb-2 pb-lg-5'>
        <Col sm={12} md={6} className='d-flex align-items-end mb-3 mb-lg-0'>
          <Reveal overflow={true}>
            <Title title={t('title')} />
          </Reveal>
        </Col>
        <Col sm={12} md={6}>
          <Reveal overflow={true}>
            <div className='d-flex justify-content-between flex-column gap-2 gap-md-5'>
              <Title description={t('description')} readMore={t('see-all')} />
            </div>
          </Reveal>
        </Col>
      </Row>
    </Fragment>
  )
}

import React from 'react'
import { Col } from 'react-bootstrap'
import Reveal from '../../../Animation/Reveal/Reveal'
import { useTranslations } from 'next-intl'

export default function Description() {
  const t = useTranslations('total-solutions.services')
  return (
    <Col>
      <Reveal overflow={true}>
        <h4 className='mb-4 text-primary'>{t('title')}</h4>
        <h2 className='mb-4 fw-bold'>{t('sub-title')}</h2>
        <h3 className='mb-5'>{t('description')}</h3>
      </Reveal>
    </Col>
  )
}

import React from 'react'
import { Col } from 'react-bootstrap'
import Reveal from '../../../Animation/Reveal/Reveal'
import { useTranslations } from 'next-intl'

export default function Description() {
  const t = useTranslations('total-solutions.products')
  return (
    <Col>
      <Reveal overflow={true}>
        <h4 className='mb-5 text-primary'>{t('title')}</h4>
        <h3 className='mb-5'>{t('description')}</h3>
      </Reveal>
    </Col>
  )
}
